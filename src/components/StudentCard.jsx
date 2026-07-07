import { Link } from "react-router-dom";

function StudentCard({ student, deleteStudent, editStudent }) {
  return (
    <div className="student-card">
      <Link to={`/student/${student.id}`}>
        <h3>{student.name}</h3>
      </Link>
      <p>
        Student ID:
        {student.studentId || student.id}
      </p>
      <p>Department: {student.department}</p>
      {student.department === "CSE" && <p>Excellent Student ⭐</p>}
      <div className="buttons">
        <button onClick={() => editStudent(student)}>Edit</button>
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
      </div>
    </div>
  );
}

export default StudentCard;
