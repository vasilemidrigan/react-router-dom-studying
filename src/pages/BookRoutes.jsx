import { Routes, Route, Outlet } from "react-router-dom";

import { Book } from "./Book";
import { BookList } from "./BookList";
import { RussianBook } from "./RussianBook";
import { NewBook } from "./NewBook";
import { BookLayout } from "./BookLayout";

export function BookRoutes() {
  return (
    <>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="rus" element={<RussianBook />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
}
