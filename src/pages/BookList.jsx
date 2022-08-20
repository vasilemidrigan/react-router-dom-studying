import { Link } from "react-router-dom";

export function BookList() {
  return (
    <div className="BookList">
      <h1>BookList page</h1>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new">New Book </Link>
    </div>
  );
}
