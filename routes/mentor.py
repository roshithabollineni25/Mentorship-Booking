from flask_restx import Namespace
from flask_restx import Resource
from flask_restx import fields

from models.mentor import Mentor
from models.review import Review

mentor_ns = Namespace(
    "Mentors",
    description="Mentor Management APIs"
)

mentor_model = mentor_ns.model(
    "Mentor",
    {
        "mentor_name": fields.String(required=True),
        "mentor_email": fields.String(required=True),
        "expertise": fields.String(required=True),
        "experience": fields.Integer(required=True),
        "hourly_fee": fields.Integer(required=True),
        "bio": fields.String(required=True)
    }
)


@mentor_ns.route("")
class MentorList(Resource):

    @mentor_ns.expect(mentor_model)
    def post(self):

        data = mentor_ns.payload

        Mentor.create_mentor(data)

        return {
            "message": "Mentor created successfully"
        }, 201

    def get(self):

        mentors = Mentor.get_all_mentors()

        result = []

        for mentor in mentors:

            result.append(
                {
                    "id": str(mentor["_id"]),
                    "mentor_name": mentor["mentor_name"],
                    "mentor_email": mentor["mentor_email"],
                    "expertise": mentor["expertise"],
                    "experience": mentor["experience"],
                    "hourly_fee": mentor["hourly_fee"],
                    "bio": mentor["bio"]
                }
            )

        return result


@mentor_ns.route("/<string:mentor_id>")
class MentorById(Resource):

    def get(self, mentor_id):

        mentor = Mentor.get_mentor_by_id(
            mentor_id
        )

        if not mentor:

            return {
                "message": "Mentor not found"
            }, 404

        return {
            "id": str(mentor["_id"]),
            "mentor_name": mentor["mentor_name"],
            "mentor_email": mentor["mentor_email"],
            "expertise": mentor["expertise"],
            "experience": mentor["experience"],
            "hourly_fee": mentor["hourly_fee"],
            "bio": mentor["bio"]
        }

    @mentor_ns.expect(mentor_model)
    def put(self, mentor_id):

        data = mentor_ns.payload

        Mentor.update_mentor(
            mentor_id,
            data
        )

        return {
            "message": "Mentor updated successfully"
        }

    def delete(self, mentor_id):

        Mentor.delete_mentor(
            mentor_id
        )

        return {
            "message": "Mentor deleted successfully"
        }


@mentor_ns.route("/recommend/<string:expertise>")
class RecommendMentor(Resource):

    def get(self, expertise):

        mentors = Mentor.get_all_mentors()

        filtered_mentors = []

        for mentor in mentors:

            if expertise.lower() in mentor["expertise"].lower():

                filtered_mentors.append(
                    mentor
                )

        if not filtered_mentors:

            return {
                "message": "No mentors found for this expertise"
            }, 404

        best_mentor = None
        best_rating = 0

        for mentor in filtered_mentors:

            reviews = Review.get_reviews_by_mentor(
                mentor["mentor_name"]
            )

            if reviews:

                avg_rating = sum(
                    review["rating"]
                    for review in reviews
                ) / len(reviews)

            else:

                avg_rating = 0

            if avg_rating > best_rating:

                best_rating = avg_rating
                best_mentor = mentor

        if not best_mentor:

            best_mentor = filtered_mentors[0]

        return {
            "recommended_mentor":
                best_mentor["mentor_name"],

            "mentor_email":
                best_mentor["mentor_email"],

            "expertise":
                best_mentor["expertise"],

            "experience":
                best_mentor["experience"],

            "hourly_fee":
                best_mentor["hourly_fee"],

            "rating":
                round(best_rating, 2),

            "reason":
                "Highest rated mentor for selected expertise"
        }