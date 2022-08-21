import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// We're using Navigate Component in case we want to
// redirect the user imediatelly after opening a certain
// url ---> return <Navigate to="/" />;
// or
// we can use useNavigate() hook
export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <>
      <h1>Not found!</h1>
      <h4>you'll be redirected in 2 sec...</h4>
    </>
  );
}
