import { useState, useEffect } from "react";

function useStudents() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");

    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "John Doe",
            studentId: "ASTU001",
            department: "Computer Science",
          },
          {
            id: 2,
            name: "Sara Ali",
            studentId: "ASTU002",
            department: "Information Technology",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(
      students.filter(
        (student) => student.id !== id
      )
    );
  };

  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student
      )
    );
  };

  return {
    students,
    addStudent,
    deleteStudent,
    updateStudent,
  };
}

export default useStudents;