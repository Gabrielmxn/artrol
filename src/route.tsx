import { createBrowserRouter } from "react-router-dom";
import { Home } from "./page/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/thanks",
    element: <div>Thanks</div>
  }
])