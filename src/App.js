import React, {useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PhotosSection from "./components/PhotosSection";
import ServicesSection from "./components/ServicesSection";
import CommentsSection from "./components/CommentsSection";
import Footer from "./components/Footer";
import AdminPanel from "./components/AdminPanel";
import WhatsappButton from "./components/WhatsappButton";
import NavbarSection from "./components/NavbarSection";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./components/HeroSection";
import LoginPage from "./components/LoginComponent";
import PrivateRoute from "./components/PrivateRoute";


function App() {


    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <Router>
            <NavbarSection />
            <Routes>
                {/* 🔹 Herkese açık sayfa */}
                <Route
                    path="/"
                    element={
                        <>
                            <HeroSection />
                            <PhotosSection />
                            <ServicesSection />
                            <CommentsSection />
                            <Footer />
                        </>
                    }
                />

                {/* 🔒 Login sayfası */}
                <Route path="/login" element={<LoginPage />} />

                {/* 🔐 Sadece giriş yapılmışsa görülebilen sayfa */}
                <Route
                    path="/admin"
                    element={
                        <PrivateRoute>
                            <AdminPanel />
                        </PrivateRoute>
                    }
                />
            </Routes>
            <WhatsappButton />
        </Router>
    );
}

export default App;
