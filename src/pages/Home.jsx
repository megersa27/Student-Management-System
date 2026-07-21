import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StudentCard from "../components/StudentCard";

function Home() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const addStudent = () => {
    if (!name || !studentId || !department || !email) {
      alert("Please fill all fields");
      return;
    }

    if (editingId) {
      const updatedStudents = students.map((student) =>
        student.id === editingId
          ? {
              ...student,
              name,
              studentId,
              department,
            }
          : student,
      );
      setStudents(updatedStudents);
      setEditingId(null);
    } else {
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
    }

    setName("");
    setEmail(" ");
    setStudentId("");
    setDepartment("");
  };

  const deleteStudent = (id) => {
    if (window.confirm("Delete this student?")) {
      const updatedStudents = students.filter((student) => student.id !== id);

      setStudents(updatedStudents);
    }
  };

  const editStudent = (student) => {
    setName(student.name);
    setStudentId(student.studentId);
    setDepartment(student.department);
    setEditingId(student.id);
  };

  const filteredStudents = students.filter((student) => {
  const matchesSearch =
    student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    student.studentId
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

  const matchesDepartment =
    selectedDepartment === "All" ||
    student.department === selectedDepartment;

  return matchesSearch && matchesDepartment;
});

  return (
    <div className="app">
      <Navbar />

      <section className="hero">
        <h1>Student Management System</h1>
        <p>Manage students easily.</p>
      </section>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search student..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
  <p>
    Searching:
    {searchTerm}
  </p>
)}
      </div>

      <div className="filter-container">
  <select
    value={selectedDepartment}
    onChange={(e) =>
      setSelectedDepartment(e.target.value)
    }
  >
    <option value="All">All Departments</option>
    <option value="Computer Science">
      Computer Science
    </option>
    <option value="Software Engineering">
      Software Engineering
    </option>
    <option value="Information Technology">
      Information Technology
    </option>
    <option value="Electrical Engineering">
      Electrical Engineering
    </option>
  </select>
  <p>
  Selected Department:
  {selectedDepartment}
</p>
<p>
  Students:
  {filteredStudents.length}
</p>
<button
  onClick={() => {
    setSelectedDepartment("All");
    setSearchTerm("");
  }}
>
  Reset Filters
</button>
</div>

      <div className="students-container">
        <h2> Total Students: {students.length} </h2>

        {filteredStudents.length === 0 && <p>No students found.</p>}
        <div className="student-list">
          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              deleteStudent={deleteStudent}
              editStudent={editStudent}
            />
          ))}
        </div>
      </div>

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
          disabled={editingId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button onClick={addStudent}>
          {editingId ? "Update Student" : "Add Student"}
        </button>{" "}
        {editingId && (
          <button
            onClick={() => {
              setEditingId(null);
              setName("");
              setStudentId("");
              setDepartment("");
              setEmail("");
            }}
          >
            Cancel
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
