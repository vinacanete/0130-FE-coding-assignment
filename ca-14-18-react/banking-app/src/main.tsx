{/* Notes 
  <>
  // Wk 14  Coding Assignment
  //   - It has at least 3 React components
  //   - It’s displaying the test data
  //   - It’s using at least 1 prop on your own components
  //   - No red errors/warnings in the console in the browser
  //   - No type errors in VS Code

  // Wk 15 Coding Assignment
  //   - A user can create new items (the new items will all have the same data)
  //   - A user can delete items
  //   - A user can update at least one property on the items

  // Wk 16 Coding Assignment
  //   - It has either a create form or an update form with at least 2 inputs

  // Wk 17 Coding Assignment
  // -Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
  // -Contain at least 10 custom components
  // -Allow for all CRUD operations via one or more APIs
</> 
*/}

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