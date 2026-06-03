from flask import Flask
from flask_restx import Api
from flask_cors import CORS
import os

from config.database import mongo

from routes.auth import auth_ns
from routes.mentor import mentor_ns
from routes.booking import booking_ns
from routes.review import review_ns
from routes.analytics import analytics_ns
from routes.availability import availability_ns

app = Flask(__name__)

CORS(app)

# MongoDB URI from Render Environment Variables
app.config["MONGO_URI"] = os.getenv("MONGO_URI")

print("Mongo URI Exists:", bool(app.config["MONGO_URI"]))

mongo.init_app(app)

api = Api(
    app,
    version="1.0",
    title="MentorSphere AI",
    description="Professional Mentorship Booking Platform",
    doc="/"
)

api.add_namespace(auth_ns)
api.add_namespace(mentor_ns)
api.add_namespace(booking_ns)
api.add_namespace(review_ns)
api.add_namespace(analytics_ns)
api.add_namespace(availability_ns)

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000)),
        debug=True
    )