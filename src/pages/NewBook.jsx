import book from "../img/book.png";

export function NewBook() {
  return (
    <div className="NewBook">
      <h1>NewBook page</h1>
      <img src={book} className="book__img" alt="book" />
    </div>
  );
}
