from config.database import mongo
from bson import ObjectId


class Availability:

    @staticmethod
    def create_slot(data):
        return mongo.db.availability.insert_one(data)

    @staticmethod
    def get_slots():
        return list(
            mongo.db.availability.find()
        )

    @staticmethod
    def delete_slot(slot_id):
        return mongo.db.availability.delete_one(
            {
                "_id": ObjectId(slot_id)
            }
        )