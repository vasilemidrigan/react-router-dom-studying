import { Link, useParams } from "react-router-dom";

import book from "../img/book.png";

export function Book() {
  const { id } = useParams();

  return (
    <div className="Book">
      <h1>Book {id} page</h1>
      <img src={book} className="book__img" alt="book" />
    </div>
  );
}
