import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ErrorPage from "./views/Error";
import Account from "./views/Account.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Homepage from "./views/Homepage.tsx";
import Root from "./components/Root.tsx";
import GoalTracker from "./views/GoalTracker.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/goal-tracker",
        element: <GoalTracker />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);