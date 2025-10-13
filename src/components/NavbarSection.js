import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBarSection() {
    return (
        <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm py-3">
            <Container>
                {/* Marka (Sol kısım) */}
                <Navbar.Brand as={Link} to="/" className="fw-semibold">
                    <i className="bi bi-tools me-1"></i> {/* küçük, profesyonel ikon */}
                    Bayındır Teknik Servis
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#photos">📸 Fotoğraflar</Nav.Link>
                        <Nav.Link href="#services">🔧 Hizmetler</Nav.Link>
                        <Nav.Link href="#comments">💬 Yorumlar</Nav.Link>
                        <Nav.Link href="#contact">📞 İletişim</Nav.Link>
                        <Nav.Link as={Link} to="/admin" className="text-danger">
                            🔒 Admin Panel
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarSection;
