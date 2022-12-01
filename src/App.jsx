import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Tickets from "./pages/Tickets";
import Camping from "./pages/Camping";
//import Sustainability from "../pages/Sustainability";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tickets">Tickets</Link>
          </li>
          <li>
            <Link to="/camping">Camping</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/tickets" element={<Tickets />}></Route>
        <Route path="/camping" element={<Camping />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
