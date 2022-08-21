import { useState, useSearchParams } from "react-router-dom";

import { Link, Outlet } from "react-router-dom";

export function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");
  return (
    <div className="BookLayout">
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to={`/books/${number}`}> Book {number} </Link>
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
      <input
        type="number"
        onChange={(e) => setSearchParams({ n: e.target.value })}
        value={number}
      />
    </div>
  );
}
