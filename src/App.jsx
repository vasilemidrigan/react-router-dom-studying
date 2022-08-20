import { Route, Routes, Link } from "react-router-dom";

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
              {/* 
              replace - 
              will delete the last visited
              page from history, so clicking back in 
              the browser will go the last but one page 
              reload document will reload the page 
              */}
              <Link to="/" replace reloadDocument>
                Home
              </Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
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
