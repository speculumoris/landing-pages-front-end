import React, { useState } from "react";
import { Container, Nav, Tab } from "react-bootstrap";
import AdminPhotos from "./admin/AdminPhotos";
import AdminServices from "./admin/AdminServices";
import AdminComments from "./admin/AdminComments";

function AdminPanel() {
    const [activeTab, setActiveTab] = useState("photos");

    return (
        <Container className="my-5">
            <h2 className="fw-bold mb-4">⚙️ Admin Panel</h2>

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
