import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import NewExpense from "../pages/NewExpense";

import PrivateRoute from "../components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },

  {
    path: "/gasto",
    element: (
      <PrivateRoute>
        <NewExpense />
      </PrivateRoute>
    ),
  },
]);