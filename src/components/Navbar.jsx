import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const {
  theme,
  toggleTheme,
} = useContext(
  ThemeContext
);
  return (
    <nav className="navbar">
      <h2>Student Management System</h2>

      <div className="nav-links">
        <a href="#">Home</a>

        <a href="#">Students</a>

        <a href="#">Dashboard</a>
      </div>
      <button
  onClick={toggleTheme}
>

{theme === "light"
? "🌙 Dark"
: "☀️ Light"}

</button>
    </nav>
  );
}

export default Navbar;
