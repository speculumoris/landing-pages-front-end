import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PhotosSection from "./components/PhotosSection";
import ServicesSection from "./components/ServicesSection";
import CommentsSection from "./components/CommentsSection";
import AdminPanel from "./components/AdminPanel";

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
                <Link className="navbar-brand fw-bold" to="/">LandingPage</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin Panel</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={
                    <>
                        <PhotosSection />
                        <ServicesSection />
                        <CommentsSection />
                    </>
                } />
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </Router>
    );
}

export default App;
