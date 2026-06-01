import jwt
import datetime

SECRET_KEY = "mentorsphere_secret"


def generate_token(user_id):

    payload = {
        "user_id": str(user_id),
        "exp": datetime.datetime.utcnow()
        + datetime.timedelta(days=1)
    }

    return jwt.encode(
        payload,
        SECRET_KEY,
        algorithm="HS256"
    )