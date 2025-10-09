import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
    return (
        <footer id='contact' className="bg-dark text-light mt-5 py-4 ">
            <Container  className="text-center">
                <h6 className="fw-bold">Bayındır Teknik Servis</h6>
                <p className="mb-1">Adres: Atatürk Mah. Örnek Sk. No:12, İstanbul</p>
                <p className="mb-1">Telefon: <a href="tel:+905551112233" className="text-light">0555 111 22 33</a></p>
                <p className="mb-1">
                    WhatsApp:{" "}
                    <a
                        href="https://wa.me/905551112233"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-success fw-bold"
                    >
                        Bize Yazın
                    </a>
                </p>
                <hr className="border-light" />
                <small>© 2025 Bayındır Teknik Servis | Tüm Hakları Saklıdır</small>
            </Container>
        </footer>
    );
}

export default Footer;
