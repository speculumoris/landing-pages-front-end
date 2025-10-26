import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";

function ServicesSection() {
    const [services, setServices] = useState([]);
    const host = process.env.REACT_APP_BACKEND_CONNECTION || "http://localhost:8080";

    useEffect(() => {
        axios.get(`${host}/api/services`)
            .then(res => setServices(res.data))
            .catch(err => console.error(err));
    }, [host]);

    return (
        <section id="services" className="services-section" data-aos="fade-up">
            <Container>
                <h2 className="section-title">🛠️ Hizmetlerimiz</h2>

                {services.length > 0 ? (
                    <Row className="g-4">
                        {services.map((service, index) => (
                            <Col key={service.id || index} xs={12} md={6} lg={4}>
                                <Card className="service-card h-100">
                                    <div className="service-icon">
                                        <i className="bi bi-tools"></i>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{service.title}</Card.Title>
                                        <Card.Text>{service.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <div className="no-services-box">
                        <p>Henüz hizmet eklenmedi 🧰</p>
                    </div>
                )}
            </Container>
        </section>
    );
}

export default ServicesSection;
