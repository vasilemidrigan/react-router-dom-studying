import { Link, Outlet } from "react-router-dom";

export function BookLayout() {
  return (
    <div className="BookLayout">
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/rus">Russian Book </Link>
      <br />
      <Link to="/books/new">New Book </Link>
      <Outlet
        context={{
          name: "Crime and Punishment",
          author: "Fyodor Dostoevsky",
        }}
      />
    </div>
  );
}
