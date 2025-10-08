import React from "react";

function ContactSection() {
    return (
        <section className="mb-5">
            <h4>📞 İletişim</h4>
            <p>
                Bizimle hemen iletişime geçin:
                <br />
                <a
                    href="https://wa.me/905555555555?text=Merhaba%2C%20servis%20hakkında%20bilgi%20almak%20istiyorum"
                    className="btn btn-success mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    WhatsApp'tan Yaz
                </a>
            </p>
            <div className="mt-3">
                <iframe
                    title="İş Yeri Konumu"
                    src="https://www.google.com/maps/embed?pb=!1m18..."
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
}

export default ContactSection;
