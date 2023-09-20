import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreditsPage from "../components/CreditsPage";
import AboutPage from "../components/AboutPage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/credits", element: <CreditsPage /> },
]);

export default router;
