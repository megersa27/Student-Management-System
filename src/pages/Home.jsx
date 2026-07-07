import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="app">

      <Navbar />

      <section className="hero">

        <h1>
          Welcome to Student
          Management System
        </h1>

        <p>
          Manage students easily
          using React.
        </p>

        <button>
          Get Started
        </button>

      </section>

      <Footer />

    </div>
  );
}

export default Home;