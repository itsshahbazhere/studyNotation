import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="h-screen w-screen flex flex-col">
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Home />
        </div>
      ),
    },
    {
      path: "/login",
      element: (
        <div>
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Login setLoggedIn={setLoggedIn} />
        </div>
      ),
    },
    {
      path: "/signup",
      element: (
        <div>
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Signup setLoggedIn={setLoggedIn} />
        </div>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <div className="h-screen w-screen flex flex-col">
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Dashboard />
        </div>
      ),
    },
    {
      path: "*",
      element: (
        <div>
          <NotFound />
        </div>
      ),
    },
  ]);

  return (
    <div className="w-screen min-h-screen bg-richBlack-900 flex flex-col">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
