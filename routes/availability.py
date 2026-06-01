from flask_restx import Namespace
from flask_restx import Resource
from flask_restx import fields

from models.availability import Availability

availability_ns = Namespace(
    "Availability",
    description="Mentor Availability APIs"
)

availability_model = availability_ns.model(
    "Availability",
    {
        "mentor_name": fields.String(required=True),
        "date": fields.String(required=True),
        "time": fields.String(required=True)
    }
)

@availability_ns.route("")
class AvailabilityList(Resource):

    @availability_ns.expect(
        availability_model
    )
    def post(self):

        Availability.create_slot(
            availability_ns.payload
        )

        return {
            "message":
            "Availability Added"
        }, 201
    

    def get(self):

        slots = Availability.get_slots()

        result = []

        for slot in slots:

            result.append(
                {
                    "id": str(slot["_id"]),
                    "mentor_name":
                    slot["mentor_name"],
                    "date":
                    slot["date"],
                    "time":
                    slot["time"]
                }
            )

        return result    
    
@availability_ns.route(
    "/<string:slot_id>"
)
class AvailabilityDelete(Resource):

    def delete(
        self,
        slot_id
    ):

        Availability.delete_slot(
            slot_id
        )

        return {
            "message":
            "Slot Deleted"
        }