import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StudentCard from "../components/StudentCard";

function Home() {
  const [students] = useState([
    {
      id: 1,
      name: "John Doe",
      department: "CSE",
    },
    {
      id: 2,
      name: "Abebe Kebede",
      department: "Software Engineering",
    },
    {
      id: 3,
      name: "Sara Ali",
      department: "IT",
    },
    {
      id: 4,
      name: "Megersa Tekalign",
      department: "CSE",
    },
  ]);

  return (
    <div className="app">
      <Navbar />

      <section className="hero">
        <h1>ASTU Student Management System</h1>
        <p>Manage students easily.</p>
        <button>Get Start</button>
      </section>

      <div className="students-container">
        <h2>Students</h2>
        <p> Total Students : {students.length}</p>
        <div className="student-list">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
