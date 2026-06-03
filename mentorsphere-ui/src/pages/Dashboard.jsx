import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const response = await API.get("/Bookings");
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const approveBooking = async (id) => {
    try {
      await API.put(`/Bookings/approve/${id}`);
      loadBookings();
    } catch (error) {
      console.log(error);
    }
  };

  const rejectBooking = async (id) => {
    try {
      await API.put(`/Bookings/reject/${id}`);
      loadBookings();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center" }}>
        Booking Dashboard
      </h2>

      {bookings.map((booking) => (
        <div
          key={booking.id}
          style={{
            background: "white",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{booking.mentor_name}</h3>

          <p>
            <b>User:</b> {booking.user_name}
          </p>

          <p>
            <b>Date:</b> {booking.date}
          </p>

          <p>
            <b>Time:</b> {booking.time}
          </p>

          <p>
            <b>Status:</b> {booking.status}
          </p>

          <button
            onClick={() =>
              approveBooking(booking.id)
            }
            style={{
              background: "green",
              color: "white",
              border: "none",
              padding: "10px 15px",
              marginRight: "10px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Approve
          </button>

          <button
            onClick={() =>
              rejectBooking(booking.id)
            }
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;