import React from "react";

export default function HeroSection() {
    return (
        <section className="hero-section" id="home">
            <div className="hero-overlay"></div>

            <div className="hero-content" data-aos="fade-up">
                <h1>Klima & Kombi Servis Hizmetlerinde Güvenceniz</h1>
                <p>Profesyonel ekip, hızlı çözüm, uygun fiyatlar.</p>
                <a href="#contact" className="btn btn-outline-light btn-lg mt-3">
                    Bizimle İletişime Geçin
                </a>
            </div>
        </section>
    );
}
