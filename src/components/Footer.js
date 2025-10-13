import React from "react";
import { Container } from "react-bootstrap";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer id="contact" className="footer-section text-light pt-5 pb-3 mt-5">
            <Container className="text-center">
                {/* Logo / Başlık */}
                <h5 className="fw-bold mb-3">🧰 Bayındır Teknik Servis</h5>

                {/* İletişim Bilgileri */}
                <p className="mb-1">
                    <FaMapMarkerAlt className="me-2 text-primary" />
                    Atatürk Mah. Örnek Sk. No:12, İstanbul
                </p>
                <p className="mb-1">
                    <FaPhoneAlt className="me-2 text-primary" />
                    <a href="tel:+905551112233" className="footer-link">0555 111 22 33</a>
                </p>
                <p className="mb-2">
                    <FaWhatsapp className="me-2 text-success" />
                    <a
                        href="https://wa.me/905551112233"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link text-success fw-semibold"
                    >
                        Bize WhatsApp’tan Yazın
                    </a>
                </p>

                {/* Sosyal Medya */}
                <div className="social-icons mb-3">
                    <a href="#" className="social-link">
                        <FaFacebook />
                    </a>
                    <a href="#" className="social-link">
                        <FaInstagram />
                    </a>
                </div>

                <hr className="footer-divider" />

                {/* Telif */}
                <small className="text-secondary">
                    © 2025 <strong>Bayındır Teknik Servis</strong> | Tüm Hakları Saklıdır
                </small>
            </Container>
        </footer>
    );
}

export default Footer;
