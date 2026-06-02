function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
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

      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "55px",
            marginBottom: "20px",
          }}
        >
          Find Your Perfect Mentor
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "gray",
          }}
        >
          Connect with Industry Experts and Book
          One-on-One Mentorship Sessions
        </p>

        <div style={{ marginTop: "30px" }}>
          <button
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              padding: "15px 30px",
              borderRadius: "10px",
              marginRight: "15px",
              cursor: "pointer",
            }}
          >
            Find Mentors
          </button>

          <button
            style={{
              backgroundColor: "#22c55e",
              color: "white",
              border: "none",
              padding: "15px 30px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Become a Mentor
          </button>
        </div>
      </div>

      {/* Mentor Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            width: "250px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>John Doe</h3>
          <p>Python Expert</p>
          <p>5 Years Experience</p>
          <p>₹500/hr</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            width: "250px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Sarah Johnson</h3>
          <p>AWS Architect</p>
          <p>8 Years Experience</p>
          <p>₹1000/hr</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            width: "250px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>David Smith</h3>
          <p>DevOps Engineer</p>
          <p>6 Years Experience</p>
          <p>₹800/hr</p>
        </div>
      </div>
    </div>
  );
}

export default App;