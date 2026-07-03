import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CRMMR from "./pages/CRMMR";
import Research2 from "./pages/Research2";
import Resume from "./pages/Resume";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      <Navbar />

      <main>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/research/crmm-r"
            element={<CRMMR />}
          />

          <Route
            path="/research/project-2"
            element={<Research2 />}
          />

          <Route
            path="/resume"
            element={<Resume />}
          />
          <Route
  path="/research2"
  element={<Research2 />}
/>

        </Routes>

      </main>

      <Footer />

    </div>
  );
}