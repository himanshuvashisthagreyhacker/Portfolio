import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Only imported, not merged
import Home from "./pages/Home"; // Home component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main className="px-4 sm:px-8 md:px-12 lg:px-20">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Future Routes can go here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
