function StudentCard({
  student,
  deleteStudent
}) {
  return (
    <div className="student-card">

      <h3>{student.name}</h3>

      <p>
        Student ID:
        {student.studentId || student.id}
      </p>

      <p>
        Department:
        {" "}
        {student.department}
      </p>

      {student.department ===
        "CSE" && (
        <p>
          Excellent Student ⭐
        </p>
      )}

      <button
        onClick={() =>
          deleteStudent(student.id)
        }
      >
        Delete
      </button>

    </div>
  );
}

export default StudentCard;