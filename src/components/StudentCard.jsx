function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>ID: {student.id}</p>
      <p>Department: {student.department}</p>
      {student.department==="CSE" ? "Excellent Student" : ""}
    </div>
  );
}

export default StudentCard;
