import { useEffect, useState } from "react";
import API from "./services/api";

function App() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    loadMentors();
  }, []);

  const loadMentors = async () => {
    try {
      const response = await API.get("/Mentors");
      setMentors(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <nav
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>MentorSphere</h2>

        <div>
          <span style={{ marginRight: "20px" }}>Home</span>
          <span style={{ marginRight: "20px" }}>Mentors</span>
          <span style={{ marginRight: "20px" }}>Dashboard</span>
          <span>Login</span>
        </div>
      </nav>

      <div
        style={{
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1>Find Your Perfect Mentor</h1>

        <p
          style={{
            fontSize: "22px",
            color: "gray",
          }}
        >
          Connect with Industry Experts
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          padding: "40px",
        }}
      >
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow:
                "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{mentor.name}</h3>

            <p>
              <b>Expertise:</b>{" "}
              {mentor.expertise}
            </p>

            <p>
              <b>Experience:</b>{" "}
              {mentor.experience} years
            </p>

            <p>
              <b>Fee:</b> ₹
              {mentor.hourly_fee}/hr
            </p>

            <p>{mentor.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;