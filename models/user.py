from config.database import mongo


class User:

    @staticmethod
    def create_user(data):

        return mongo.db.users.insert_one(
            data
        )

    @staticmethod
    def find_by_email(email):

        return mongo.db.users.find_one(
            {"email": email}
        )