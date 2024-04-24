import { createBrowserRouter } from "react-router-dom";
import { Home } from "./page/home";
import { Thanks } from "./page/thanks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/thanks",
    element: <Thanks />
  }
])