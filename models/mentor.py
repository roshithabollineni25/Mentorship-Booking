from config.database import mongo
from bson import ObjectId


class Mentor:

    @staticmethod
    def create_mentor(data):
        return mongo.db.mentors.insert_one(data)

    @staticmethod
    def get_all_mentors():
        return list(mongo.db.mentors.find())

    @staticmethod
    def get_mentor_by_id(mentor_id):
        return mongo.db.mentors.find_one(
            {"_id": ObjectId(mentor_id)}
        )

    @staticmethod
    def update_mentor(mentor_id, data):
        return mongo.db.mentors.update_one(
            {"_id": ObjectId(mentor_id)},
            {"$set": data}
        )

    @staticmethod
    def delete_mentor(mentor_id):
        return mongo.db.mentors.delete_one(
            {"_id": ObjectId(mentor_id)}
        )
    
    