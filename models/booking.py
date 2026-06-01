from config.database import mongo
from bson import ObjectId


class Booking:

    @staticmethod
    def create_booking(data):
        return mongo.db.bookings.insert_one(data)

    @staticmethod
    def get_all_bookings():
        return list(mongo.db.bookings.find())

    @staticmethod
    def update_booking(booking_id, status):
        return mongo.db.bookings.update_one(
            {"_id": ObjectId(booking_id)},
            {
                "$set": {
                    "status": status
                }
            }
        )