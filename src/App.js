import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import MeritRating from "./pages/meritrating/MeritRating";

function App() {
  const { currentUser } = useContext(AuthContext);

  const AuthRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const UnAuthRoute = ({ children }) => {
    return currentUser ? <Navigate to="/" /> : children;
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <UnAuthRoute>
          <Login />
        </UnAuthRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <UnAuthRoute>
          <Register />
        </UnAuthRoute>
      ),
    },
    {
      path: "/",
      element: (
        <AuthRoute>
          <Home />
        </AuthRoute>
      ),
    },
    {
      path: "/meritrating",
      element: (
        <AuthRoute>
          <MeritRating />
        </AuthRoute>
      ),
    },
    {
      path: "/ecube",
      element: (
        <AuthRoute>
          <MeritRating />
        </AuthRoute>
      ),
    },
    {
      path: "/measurment",
      element: (
        <AuthRoute>
          <MeritRating />
        </AuthRoute>
      ),
    },
    {
      path: "/functionality",
      element: (
        <AuthRoute>
          <MeritRating />
        </AuthRoute>
      ),
    },
    {
      path: "/settings",
      element: (
        <AuthRoute>
          <MeritRating />
        </AuthRoute>
      ),
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
