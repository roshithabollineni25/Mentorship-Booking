from flask_restx import Namespace
from flask_restx import Resource
from flask_restx import fields

from models.review import Review

review_ns = Namespace(
    "Reviews",
    description="Review APIs"
)

review_model = review_ns.model(
    "Review",
    {
        "mentor_name": fields.String(required=True),
        "user_name": fields.String(required=True),
        "rating": fields.Integer(required=True),
        "comment": fields.String(required=True)
    }
)


@review_ns.route("")
class ReviewList(Resource):

    @review_ns.expect(review_model)
    def post(self):

        Review.create_review(
            review_ns.payload
        )

        return {
            "message": "Review Added"
        }, 201
    

    def get(self):

        reviews = Review.get_reviews()

        result = []

        for review in reviews:

            result.append(
                {
                    "mentor_name": review["mentor_name"],
                    "user_name": review["user_name"],
                    "rating": review["rating"],
                    "comment": review["comment"]
                }
            )

        return result