from flask_restx import Namespace
from flask_restx import Resource
from flask_restx import fields

from models.booking import Booking

booking_ns = Namespace(
    "Bookings",
    description="Booking APIs"
)

booking_model = booking_ns.model(
    "Booking",
    {
        "mentor_name": fields.String(required=True),
        "user_name": fields.String(required=True),
        "date": fields.String(required=True),
        "time": fields.String(required=True)
    }
)


@booking_ns.route("")
class BookingList(Resource):

    @booking_ns.expect(booking_model)
    def post(self):

        data = booking_ns.payload

        data["status"] = "Pending"

        Booking.create_booking(data)

        return {
            "message": "Booking Created"
        }, 201
    

    def get(self):

        bookings = Booking.get_all_bookings()

        result = []

        for booking in bookings:

            result.append(
                {
                    "id": str(booking["_id"]),
                    "mentor_name": booking["mentor_name"],
                    "user_name": booking["user_name"],
                    "date": booking["date"],
                    "time": booking["time"],
                    "status": booking["status"]
                }
            )

        return result
    

@booking_ns.route("/approve/<string:booking_id>")
class ApproveBooking(Resource):

    def put(self, booking_id):

        Booking.update_booking(
            booking_id,
            "Approved"
        )

        return {
            "message": "Booking Approved"
        }
    

@booking_ns.route("/reject/<string:booking_id>")
class RejectBooking(Resource):

    def put(self, booking_id):

        Booking.update_booking(
            booking_id,
            "Rejected"
        )

        return {
            "message": "Booking Rejected"
        }