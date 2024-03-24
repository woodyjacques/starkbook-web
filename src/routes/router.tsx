import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Sesion from "../views/sesion";
import Register from "../views/register";
import EmailPassword from "../views/emailPassword";
import Emailverifi from "../views/emailVerifi";
import Error404 from "../views/Error404";
import PasswordUpEmail from "../views/PasswordUpEmail";

const router = createBrowserRouter([
  { path:"/", element: <Home /> },
  { path:"/starkbook-sesion", element: <Sesion /> },
  { path:"/starkbook-register", element: <Register /> },
  { path:"/starkbook-password", element: <EmailPassword /> },
  { path:"/starkbook-emailverifi", element: <Emailverifi /> },
  { path: "/starkbook-passwordupemail", element: <PasswordUpEmail /> },
  { path: "*", element: <Error404 /> },
]);

export default router;



