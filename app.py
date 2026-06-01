from flask import Flask
from flask_restx import Api

from config.database import mongo

from routes.auth import auth_ns
from routes.mentor import mentor_ns

from routes.booking import booking_ns

from routes.review import review_ns
from routes.analytics import analytics_ns

from routes.availability import availability_ns


app = Flask(__name__)

# MongoDB Atlas URI
app.config["MONGO_URI"] = "mongodb+srv://roshitha25:Roshitha@cluster0.ujvcnp7.mongodb.net/mentorsphere?retryWrites=true&w=majority"

mongo.init_app(app)

api = Api(
    app,
    version="1.0",
    title="MentorSphere AI",
    description="Professional Mentorship Booking Platform",
    doc="/"
)

# Register Namespaces
api.add_namespace(auth_ns)
api.add_namespace(mentor_ns)
api.add_namespace(booking_ns)
api.add_namespace(review_ns)
api.add_namespace(analytics_ns)
api.add_namespace(availability_ns)

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )