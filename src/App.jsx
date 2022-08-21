import { Route, Routes, NavLink } from "react-router-dom";

import "./index.css";

import { Home } from "./pages/Home";
import { BookRoutes } from "./pages/BookRoutes";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <>
        {/* Extra Content */}
        <Routes>
          <Route
            path="/books"
            element={
              <h3 className="extra-content">
                Booklist page under construction!
              </h3>
            }
          />
        </Routes>

        {/* Homepage Navigation Bar */}

        <nav className="homepage__nav">
          <ul>
            <li>
              <NavLink to="/" replace reloadDocument>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                end 
                style={({ isActive }) => {
                  return isActive ? { border: "1px dashed" } : {};
                }}
              >
                Books
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Our Routes */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/*" element={<BookRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
