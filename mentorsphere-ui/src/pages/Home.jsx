import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Home() {
  const [mentors, setMentors] = useState([]);

  const [booking, setBooking] = useState({
    mentor_name: "",
    user_name: "",
    date: "",
    time: "",
  });

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

  const createBooking = async () => {
    try {
      await API.post("/Bookings", booking);

      alert("Booking Created Successfully");

      setBooking({
        mentor_name: "",
        user_name: "",
        date: "",
        time: "",
      });

      window.location.reload();
    } catch (error) {
      console.log(error.response);

      alert(
        JSON.stringify(
          error.response?.data || error.message
        )
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        color: "#1e293b",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "15px 20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "24px" }}>MentorSphere AI</h2>

          <div style={{ display: "flex", alignItems: "center" }}>
            {/* Active Home Link Indicator */}
            <Link
              to="/"
              style={{
                color: "#facc15",
                fontWeight: "bold",
                borderBottom: "3px solid #facc15",
                paddingBottom: "4px",
                textDecoration: "none",
                marginRight: "20px",
              }}
            >
              Home
            </Link>

            <Link
              to="/mentors"
              style={{
                marginRight: "25px",
                color: "white",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Mentors
            </Link>

            <Link
              to="/dashboard"
              style={{
                marginRight: "25px",
                color: "white",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Dashboard
            </Link>

            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "800",
              marginBottom: "24px",
              letterSpacing: "-0.5px",
            }}
          >
            MentorSphere AI
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.6",
              maxWidth: "750px",
              margin: "0 auto 40px auto",
              color: "#e2e8f0",
            }}
          >
            Connect with Industry Experts, Accelerate Your Career, and Book
            Personalized Mentorship Sessions
          </p>

          <div style={{ marginTop: "40px" }}>
            <button
              onClick={() =>
                document.getElementById("mentors")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              style={{
                background: "#22c55e",
                color: "white",
                border: "none",
                padding: "16px 36px",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "600",
                marginRight: "20px",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
              }}
            >
              Find Mentors
            </button>

            <Link to="/mentors">
              <button
                style={{
                  background: "white",
                  color: "#2563eb",
                  border: "none",
                  padding: "16px 36px",
                  borderRadius: "12px",
                  fontSize: "18px",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(255, 255, 255, 0.15)",
                }}
              >
                Become Mentor
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div
        style={{
          background: "white",
          padding: "60px 20px",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "40px",
            textAlign: "center",
          }}
        >
          <div>
            <h1 style={{ fontSize: "42px", color: "#2563eb", margin: "0 0 5px 0", fontWeight: "700" }}>500+</h1>
            <p style={{ color: "#64748b", margin: 0, fontWeight: "500", fontSize: "16px" }}>Mentors</p>
          </div>

          <div>
            <h1 style={{ fontSize: "42px", color: "#2563eb", margin: "0 0 5px 0", fontWeight: "700" }}>10,000+</h1>
            <p style={{ color: "#64748b", margin: 0, fontWeight: "500", fontSize: "16px" }}>Sessions</p>
          </div>

          <div>
            <h1 style={{ fontSize: "42px", color: "#2563eb", margin: "0 0 5px 0", fontWeight: "700" }}>98%</h1>
            <p style={{ color: "#64748b", margin: 0, fontWeight: "500", fontSize: "16px" }}>Success Rate</p>
          </div>

          <div>
            <h1 style={{ fontSize: "42px", color: "#2563eb", margin: "0 0 5px 0", fontWeight: "700" }}>50+</h1>
            <p style={{ color: "#64748b", margin: 0, fontWeight: "500", fontSize: "16px" }}>Domains</p>
          </div>
        </div>
      </div>

      {/* Main Content Area Container */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        
        {/* Mentor Cards Header */}
        <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "40px", fontWeight: "700" }}>
          Meet Our Experts
        </h2>

        {/* Custom Container Grid Wrapper for Mentor Cards */}
        <div
          id="mentors"
          style={{
            maxWidth: "1200px",
            margin: "40px auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
            gap: "25px",
          }}
        >
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "20px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                border: "1px solid #e5e7eb",
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(37,99,235,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.08)";
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "36px",
                  marginBottom: "20px",
                }}
              >
                👨‍🏫
              </div>

              <h2
                style={{
                  marginBottom: "10px",
                  color: "#0f172a",
                }}
              >
                {mentor.name}
              </h2>

              <p style={{ margin: "6px 0" }}>
                <b>Expertise:</b> {mentor.expertise}
              </p>

              <p style={{ margin: "6px 0" }}>
                <b>Experience:</b> {mentor.experience} Years
              </p>

              <p
                style={{
                  color: "#2563eb",
                  fontWeight: "bold",
                  margin: "10px 0",
                }}
              >
                ₹{mentor.hourly_fee}/hour
              </p>

              <p
                style={{
                  color: "#64748b",
                  marginTop: "10px",
                  minHeight: "60px",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                {mentor.bio}
              </p>

              <div
                style={{
                  color: "#f59e0b",
                  fontSize: "18px",
                  marginBottom: "15px",
                }}
              >
                ⭐⭐⭐⭐⭐
              </div>

              <button
                onClick={() => {
                  setBooking({
                    ...booking,
                    mentor_name: mentor.name,
                  });

                  alert(`${mentor.name} selected successfully`);
                }}
                style={{
                  width: "100%",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "14px",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Select Mentor
              </button>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div
          style={{
            maxWidth: "550px",
            margin: "80px auto",
            background: "white",
            padding: "40px",
            borderRadius: "24px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.06)",
            border: "1px solid #edf2f7",
          }}
        >
          <h2 style={{ margin: "0 0 25px 0", fontSize: "26px", textAlign: "center", fontWeight: "700" }}>
            Book Mentor Session
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", fontSize: "14px", color: "#475569" }}>Mentor Name</label>
              <input
                type="text"
                placeholder="Selected Mentor"
                value={booking.mentor_name}
                onChange={(e) =>
                  setBooking({
                    ...booking,
                    mentor_name: e.target.value,
                  })
                }
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1px solid #cbd5e1",
                  fontSize: "15px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", fontSize: "14px", color: "#475569" }}>Your Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={booking.user_name}
                onChange={(e) =>
                  setBooking({
                    ...booking,
                    user_name: e.target.value,
                  })
                }
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1px solid #cbd5e1",
                  fontSize: "15px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
              <div>
                <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", fontSize: "14px", color: "#475569" }}>Date</label>
                <input
                  type="date"
                  value={booking.date}
                  onChange={(e) =>
                    setBooking({
                      ...booking,
                      date: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "15px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", fontSize: "14px", color: "#475569" }}>Time</label>
                <input
                  type="time"
                  value={booking.time}
                  onChange={(e) =>
                    setBooking({
                      ...booking,
                      time: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "15px",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            <button
              onClick={createBooking}
              style={{
                width: "100%",
                background: "#22c55e",
                color: "white",
                border: "none",
                padding: "14px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                marginTop: "10px",
                boxShadow: "0 4px 12px rgba(34, 197, 94, 0.2)",
              }}
            >
              Book Session
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{ textAlign: "center", fontSize: "30px", marginBottom: "35px", fontWeight: "700" }}>
            Student Reviews
          </h2>

          <div
            style={{
              display: "flex",
              gap: "25px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.03)",
                border: "1px solid #edf2f7",
                flex: "1 1 45%",
                minWidth: "300px",
                boxSizing: "border-box",
              }}
            >
              <div style={{ color: "#fbbf24", fontSize: "18px", marginBottom: "10px" }}>⭐⭐⭐⭐⭐</div>
              <p style={{ color: "#475569", lineHeight: "1.6", margin: "0 0 15px 0", fontSize: "15px" }}>
                "Excellent mentorship session. Helped me understand Python and interview preparation."
              </p>
              <b style={{ color: "#0f172a", fontSize: "14px" }}>- Roshitha</b>
            </div>

            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.03)",
                border: "1px solid #edf2f7",
                flex: "1 1 45%",
                minWidth: "300px",
                boxSizing: "border-box",
              }}
            >
              <div style={{ color: "#fbbf24", fontSize: "18px", marginBottom: "10px" }}>⭐⭐⭐⭐★</div>
              <p style={{ color: "#475569", lineHeight: "1.6", margin: "0 0 15px 0", fontSize: "15px" }}>
                "Great AWS guidance and career advice. Very structural breakdown of standard systems."
              </p>
              <b style={{ color: "#0f172a", fontSize: "14px" }}>- Vijaya</b>
            </div>
          </div>
        </div>

        {/* Analytics Dashboard */}
        <div
          style={{
            padding: "40px",
            background: "white",
            borderRadius: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
            border: "1px solid #edf2f7",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "35px",
              color: "#2563eb",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            📊 Analytics Dashboard
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#dbeafe",
                padding: "25px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <h1 style={{ margin: "0 0 5px 0", color: "#1e40af", fontSize: "36px" }}>7</h1>
              <p style={{ margin: 0, color: "#1e40af", fontWeight: "500" }}>Total Bookings</p>
            </div>

            <div
              style={{
                background: "#dcfce7",
                padding: "25px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <h1 style={{ margin: "0 0 5px 0", color: "#166534", fontSize: "36px" }}>2</h1>
              <p style={{ margin: 0, color: "#166534", fontWeight: "500" }}>Approved Sessions</p>
            </div>

            <div
              style={{
                background: "#fef3c7",
                padding: "25px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <h1 style={{ margin: "0 0 5px 0", color: "#92400e", fontSize: "36px" }}>5</h1>
              <p style={{ margin: 0, color: "#92400e", fontWeight: "500" }}>Pending Requests</p>
            </div>

            <div
              style={{
                background: "#ede9fe",
                padding: "25px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <h1 style={{ margin: "0 0 5px 0", color: "#5b21b6", fontSize: "36px" }}>4.8 ⭐</h1>
              <p style={{ margin: 0, color: "#5b21b6", fontWeight: "500" }}>Average Rating</p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer
        style={{
          background: "#0f172a",
          color: "#94a3b8",
          textAlign: "center",
          padding: "40px 20px",
          marginTop: "40px",
          borderTop: "1px solid #1e293b",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ color: "white", margin: "0 0 10px 0", fontSize: "20px" }}>MentorSphere AI</h3>
          <p style={{ margin: "5px 0", fontSize: "14px" }}>Professional Mentorship Booking Platform</p>
          <p style={{ margin: "15px 0 0 0", fontSize: "13px", color: "#64748b" }}>
            © 2026 MentorSphere. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;