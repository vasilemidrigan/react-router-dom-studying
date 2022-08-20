import { Route, Routes, Link } from "react-router-dom";

import "./index.css";

import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
import { BookLayout } from "./pages/BookLayout";
import { Book } from "./pages/Book";
import { RussianBook } from "./pages/RussianBook";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <>
        {/* Extra Content */}

        {/* 
           We can use the same path for different 
           Routes in order to render them together,
           for ex for a sidebar, where we need a
           sidebar design on some of the pages, 
           and another design for some other pages.
        
        */}

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
          {/* 
              We can delete the path of the parent 
              Route if the child Routes are not  
              related to each other.
          */}
          <Route path="/books" element={<BookLayout />}>
            <Route index element={<BookList />} />
            <Route path=":id" element={<Book />} />
            <Route path="rus" element={<RussianBook />} />
            <Route path="new" element={<NewBook />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
