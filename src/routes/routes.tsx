import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreditsPage from "../components/CreditsPage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/credits", element: <CreditsPage /> },
]);

export default router;
