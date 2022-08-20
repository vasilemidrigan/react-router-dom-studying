import { useOutletContext } from "react-router-dom";

import book from "../img/book.png";

export function RussianBook() {
  const bookDetails = useOutletContext();

  return (
    <div className="RussianBook">
      <h1>Russian Book </h1>
      <h2>{bookDetails.name}</h2>
      <h4>by {bookDetails.author}</h4>
      <img src={book} className="book__img" alt="a book icon" />
    </div>
  );
}
