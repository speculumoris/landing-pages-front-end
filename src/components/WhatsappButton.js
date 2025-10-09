import React from "react";

function WhatsappButton() {
    return (
        <a
            href="https://wa.me/905551112233"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: "fixed",
                bottom: "25px",
                right: "25px",
                backgroundColor: "#25D366",
                color: "white",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
                zIndex: 9999,
                textDecoration: "none",
            }}
        >
            <i className="bi bi-whatsapp"></i>
        </a>
    );
}

export default WhatsappButton;
