import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBarSection() {
    return (
        <Navbar data-aos="fade-down" bg="light" expand="lg" fixed="top" className="shadow-sm py-3">
            <Container>
                {/* Sol taraf (marka) */}
                <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
                    🧰 Bayındır Teknik Servis
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto">
                        <Nav.Link href="#photos" className="fw-medium">
                            📸 Fotoğraflar
                        </Nav.Link>
                        <Nav.Link href="#services" className="fw-medium">
                            🔧 Hizmetler
                        </Nav.Link>
                        <Nav.Link href="#comments" className="fw-medium">
                            💬 Yorumlar
                        </Nav.Link>
                        <Nav.Link href="#contact" className="fw-medium">
                            📞 İletişim
                        </Nav.Link>
                        <Nav.Link as={Link} to="/admin" className="fw-medium text-danger">
                            🔒 Admin Panel
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarSection;
