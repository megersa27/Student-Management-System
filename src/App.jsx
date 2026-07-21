import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useContext } from "react";

import { ThemeContext } from "./context/ThemeContext";
import StudentDetails from "./pages/StudentDetails";

function App() {
  const { theme } =
  useContext(
    ThemeContext
  );
  return (
    <BrowserRouter>
    <div className={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:id" element={<StudentDetails />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
