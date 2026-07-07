import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StudentCard from "../components/StudentCard";

function Home() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      department: "CSE",
    },
    {
      id: 2,
      name: "Sara Ali",
      department: "IT",
    },
  ]);

  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  const addStudent = () => {
    if (!name || !studentId || !department) {
      alert("Please fill all fields");
      return;
    }
    const existingStudent = students.find(
      (student) => student.studentId === studentId,
    );

    if (existingStudent) {
      alert("Student ID already exists");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      email,
      studentId,
      department,
    };

    setStudents([...students, newStudent]);

    setName("");
    setEmail(" ");
    setStudentId("");
    setDepartment("");
  };

  const deleteStudent = (id) => {
    if (
  window.confirm(
    "Delete this student?"
  )
){
  const updatedStudents =
    students.filter(
      (student) => student.id !== id
    );

  setStudents(updatedStudents);
}
};

  return (
    <div className="app">
      <Navbar />

      <section className="hero">
        <h1>Student Management System</h1>
        <p>Manage students easily.</p>
      </section>

      <div className="form-container">
        <h2>Add Student</h2>

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <button onClick={addStudent}>Add Student</button>
      </div>

      <div className="students-container">
        <h2>
          Total Students:
          {students.length}
        </h2>

        <div className="student-list">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              deleteStudent={deleteStudent}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
