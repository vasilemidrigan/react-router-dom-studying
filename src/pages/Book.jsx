import { Link, useParams } from "react-router-dom";

export function Book() {
  // one of the many custom hooks that comes with
  // React Router

  // Using useParams() is a common pattern to use
  // in the React Router

  const { id } = useParams();

  return (
    <>
      <h1>Book {id}</h1>
    </>
  );
}
