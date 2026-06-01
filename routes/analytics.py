from flask_restx import Namespace, Resource
from config.database import mongo

analytics_ns = Namespace(
    "Analytics",
    description="Platform Analytics"
)

@analytics_ns.route("")
class Analytics(Resource):

    def get(self):

        total_users = mongo.db.users.count_documents({})
        total_mentors = mongo.db.mentors.count_documents({})
        total_bookings = mongo.db.bookings.count_documents({})
        total_reviews = mongo.db.reviews.count_documents({})

        # Most booked mentor
        pipeline = [
            {
                "$group": {
                    "_id": "$mentor_name",
                    "bookings": {"$sum": 1}
                }
            },
            {
                "$sort": {"bookings": -1}
            },
            {
                "$limit": 1
            }
        ]

        most_booked = list(
            mongo.db.bookings.aggregate(pipeline)
        )

        most_booked_mentor = (
            most_booked[0]["_id"]
            if most_booked
            else "No Bookings Yet"
        )

        booking_count = (
            most_booked[0]["bookings"]
            if most_booked
            else 0
        )

        # Best mentor by rating
        rating_pipeline = [
            {
                "$group": {
                    "_id": "$mentor_name",
                    "avg_rating": {
                        "$avg": "$rating"
                    }
                }
            },
            {
                "$sort": {
                    "avg_rating": -1
                }
            },
            {
                "$limit": 1
            }
        ]

        best_mentor_data = list(
            mongo.db.reviews.aggregate(
                rating_pipeline
            )
        )

        best_mentor = (
            best_mentor_data[0]["_id"]
            if best_mentor_data
            else "No Reviews Yet"
        )

        best_rating = (
            round(
                best_mentor_data[0]["avg_rating"],
                2
            )
            if best_mentor_data
            else 0
        )

        return {
            "total_users": total_users,
            "total_mentors": total_mentors,
            "total_bookings": total_bookings,
            "total_reviews": total_reviews,

            "most_booked_mentor": most_booked_mentor,
            "booking_count": booking_count,

            "best_mentor": best_mentor,
            "best_rating": best_rating
        }