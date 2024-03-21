import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Sesion from "../views/sesion";
import Register from "../views/register";
import EmailPassword from "../views/emailPassword";
import Emailverifi from "../views/emailVerifi";

const router = createBrowserRouter([
  { path:"/", element: <Home /> },
  { path:"/starkbook-sesion", element: <Sesion /> },
  { path:"/starkbook-register", element: <Register /> },
  { path:"/starkbook-password", element: <EmailPassword /> },
  { path:"/starkbook-emailverifi", element: <Emailverifi /> }
]);

export default router;



