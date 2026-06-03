import { Link } from "react-router-dom";

function Mentors() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        paddingBottom: "50px",
      }}
    >
      <div
        style={{
          background: "#2563eb",
          color: "white",
          padding: "20px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>MentorSphere AI</h2>

        <div>
          <Link
            to="/"
            style={{
              color: "white",
              marginRight: "20px",
              textDecoration: "none",
            }}
          >
            Home
          </Link>

          <Link
            to="/mentors"
            style={{
              color: "#facc15",
              marginRight: "20px",
              textDecoration: "none",
              fontWeight: "bold",
              borderBottom: "2px solid #facc15",
              paddingBottom: "5px",
            }}
          >
            Mentors
          </Link>

          <Link
            to="/dashboard"
            style={{
              color: "white",
              marginRight: "20px",
              textDecoration: "none",
            }}
          >
            Dashboard
          </Link>

          <Link
            to="/login"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
          color: "#0f172a",
        }}
      >
        Meet Our Expert Mentors
      </h1>

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h2>Harsha Vardhan</h2>
          <p>Python Developer</p>
          <p>Experience: 5 Years</p>
          <p>Rating: ⭐ 4.9</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h2>Vennela</h2>
          <p>AWS Cloud Architect</p>
          <p>Experience: 8 Years</p>
          <p>Rating: ⭐ 4.8</p>
        </div>
      </div>
    </div>
  );
}

export default Mentors;