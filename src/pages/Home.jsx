import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StudentCard from "../components/StudentCard";
import useStudents from "../hooks/useStudents";

function Home() {
  const {
    students,
    addStudent,
    deleteStudent,
    updateStudent,
    clearStudents,
    totalStudents,
  } = useStudents();

  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [department, setDepartment] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedDepartment, setSelectedDepartment] =
    useState("All");

  const handleSubmit = () => {
    if (!name || !studentId || !department) {
      alert("Please fill all fields");
      return;
    }

    if (editingId) {
      const updatedStudent = {
        id: editingId,
        name,
        studentId,
        department,
      };

      updateStudent(updatedStudent);

      setEditingId(null);
    } else {
      const exists = students.find(
        (student) =>
          student.studentId === studentId
      );

      if (exists) {
        alert("Student ID already exists");
        return;
      }

      const newStudent = {
        id: Date.now(),
        name,
        studentId,
        department,
      };

      addStudent(newStudent);
    }

    setName("");
    setStudentId("");
    setDepartment("");
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
      student.department ===
        selectedDepartment;

    return (
      matchesSearch &&
      matchesDepartment
    );
  });

  const sortedStudents = [...filteredStudents].sort(
    (a, b) =>
      a.name.localeCompare(b.name)
  );

  return (
    <div className="app">
      <Navbar />

      <section className="hero">
        <h1>
          Student Management System
        </h1>

        <p>
          Manage students with React CRUD
        </p>
      </section>

      <div className="form-container">
        <h2>
          {editingId
            ? "Editing Student"
            : "Add Student"}
        </h2>

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value.toUpperCase()
            )
          }
        />

        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          disabled={editingId}
          onChange={(e) =>
            setStudentId(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) =>
            setDepartment(
              e.target.value
            )
          }
        />

        <button onClick={handleSubmit}>
          {editingId
            ? "Update Student"
            : "Add Student"}
        </button>

        {editingId && (
          <button
            onClick={() => {
              setEditingId(null);
              setName("");
              setStudentId("");
              setDepartment("");
            }}
          >
            Cancel
          </button>
        )}
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search Student..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(
              e.target.value
            )
          }
        />

        {searchTerm && (
          <p>
            Searching:
            {" "}
            {searchTerm}
          </p>
        )}
      </div>

      <div className="filter-container">
        <select
          value={selectedDepartment}
          onChange={(e) =>
            setSelectedDepartment(
              e.target.value
            )
          }
        >
          <option value="All">
            All Departments
          </option>

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
          {" "}
          {selectedDepartment}
        </p>

        <button
          onClick={() => {
            setSelectedDepartment(
              "All"
            );
            setSearchTerm("");
          }}
        >
          Reset Filters
        </button>
      </div>

      <div className="students-container">
        <h2>
  Total Students: {students.length}
</h2>
        <h3>
          Results:
          {" "}
          {sortedStudents.length}
        </h3>

        {sortedStudents.length ===
          0 && (
          <p>
            No students found.
          </p>
        )}

        <div className="student-list">
          {sortedStudents.map(
            (student) => (
              <StudentCard
                key={student.id}
                student={student}
                deleteStudent={
                  deleteStudent
                }
                editStudent={
                  editStudent
                }
              />
            )
          )}
        </div>

        <button
          onClick={clearStudents}
        >
          Clear All Students
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Home;