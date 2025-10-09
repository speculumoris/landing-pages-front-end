import React, { useState } from "react";
import { Container, Nav, Tab, Button, Row, Col } from "react-bootstrap";
import AdminPhotos from "./admin/AdminPhotos";
import AdminServices from "./admin/AdminServices";
import AdminComments from "./admin/AdminComments";

function AdminPanel() {
    const [activeTab, setActiveTab] = useState("photos");

    const handleLogout = () => {
        localStorage.removeItem("token"); // JWT silinir
        window.location.href = "/"; // anasayfaya yönlendir
    };

    return (
        <Container className="my-5">
            {/* Üst kısım: Başlık + Logout butonu */}
            <Row className="align-items-center mb-4">
                <Col>
                    <h2 className="fw-bold">⚙️ Admin Panel</h2>
                </Col>
                <Col className="text-end">
                    <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={handleLogout}
                    >
                        🚪 Çıkış Yap
                    </Button>
                </Col>
            </Row>

            {/* Sekmeler */}
            <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                <Nav variant="tabs" className="mb-4">
                    <Nav.Item>
                        <Nav.Link eventKey="photos">📸 Fotoğraflar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="services">🛠️ Hizmetler</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="comments">💬 Yorumlar</Nav.Link>
                    </Nav.Item>
                </Nav>

                {/* Sekme içerikleri */}
                <Tab.Content>
                    <Tab.Pane eventKey="photos">
                        <AdminPhotos />
                    </Tab.Pane>
                    <Tab.Pane eventKey="services">
                        <AdminServices />
                    </Tab.Pane>
                    <Tab.Pane eventKey="comments">
                        <AdminComments />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Container>
    );
}

export default AdminPanel;
