import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="w-screen min-h-screen bg-richBlack-900 flex flex-col">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="h-screen w-screen flex flex-col">
                <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                <Home />
              </div>
            }
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route
            path="/signup"
            element={
              <div>
                <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                <Signup setLoggedIn={setLoggedIn} />
              </div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <div className="h-screen w-screen flex flex-col">
                <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                <Dashboard />
              </div>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
