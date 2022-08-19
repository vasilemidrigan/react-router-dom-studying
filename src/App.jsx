import { Route, Routes, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        {/* Specificity: 
               When we have a hardcoded Route and
               dynamic one, React will open the 
               hardcoded Route. We can say hardcoded 
               route is more specific.
        
        */}
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
        {/*  
            404 kind of page:
          */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
