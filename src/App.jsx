import { Route, Routes, Link } from "react-router-dom";

import "./index.css";

import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";

function App() {
  return (
    <div className="App">
      <>
        {/* Homepage Navigation Bar */}

        <nav className="homepage__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
          </ul>
        </nav>

        {/* Our Routes */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/books/new" element={<NewBook />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
