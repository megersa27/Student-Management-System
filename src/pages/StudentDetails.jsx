import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  return (
    
    <div className="details-page">
        <Link to="/">
  <button>
    Back Home
  </button>
</Link>
      <h1>Student Details</h1>
      <h2>Student ID: {id}</h2>
      <p>
        Later we will load full
        student information here.
      </p>
    </div>
  );
}

export default StudentDetails;