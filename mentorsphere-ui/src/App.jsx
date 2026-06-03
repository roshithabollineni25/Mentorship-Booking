import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Mentors from "./pages/Mentors";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import BookSession from "./pages/BookSession";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mentors" element={<Mentors />} />
      <Route path="/book" element={<BookSession />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;