from flask_restx import Namespace
from flask_restx import Resource
from flask_restx import fields

from models.user import User

from utils.password_utils import (
    hash_password,
    check_password
)

from utils.jwt_helper import (
    generate_token
)

auth_ns = Namespace(
    "Authentication",
    description="Authentication APIs"
)

register_model = auth_ns.model(
    "Register",
    {
        "name": fields.String(required=True),
        "email": fields.String(required=True),
        "password": fields.String(required=True),
        "role": fields.String(required=True)
    }
)

login_model = auth_ns.model(
    "Login",
    {
        "email": fields.String(required=True),
        "password": fields.String(required=True)
    }
)


@auth_ns.route("/register")
class Register(Resource):

    @auth_ns.expect(register_model)
    def post(self):

        data = auth_ns.payload

        existing_user = User.find_by_email(
            data["email"]
        )

        if existing_user:

            return {
                "message": "Email already exists"
            }, 400

        hashed_password = hash_password(
            data["password"]
        )

        User.create_user(
            {
                "name": data["name"],
                "email": data["email"],
                "password": hashed_password,
                "role": data["role"]
            }
        )

        return {
            "message": "User registered successfully"
        }, 201


@auth_ns.route("/login")
class Login(Resource):

    @auth_ns.expect(login_model)
    def post(self):

        data = auth_ns.payload

        user = User.find_by_email(
            data["email"]
        )

        if not user:

            return {
                "message": "Invalid credentials"
            }, 401

        if not check_password(
                data["password"],
                user["password"]):

            return {
                "message": "Invalid credentials"
            }, 401

        token = generate_token(
            user["_id"]
        )

        return {
            "token": token
        }