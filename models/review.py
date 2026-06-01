from config.database import mongo


class Review:

    @staticmethod
    def create_review(data):
        return mongo.db.reviews.insert_one(data)

    @staticmethod
    def get_reviews():
        return list(
            mongo.db.reviews.find()
        )

    @staticmethod
    def get_reviews_by_mentor(mentor_name):
        return list(
            mongo.db.reviews.find(
                {
                    "mentor_name": mentor_name
                }
            )
        )