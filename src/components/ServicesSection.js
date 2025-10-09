import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";


function ServicesSection() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/services")
            .then(res => setServices(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <section id="services" className="my-5" data-aos="flip-left" >
            <Container>
                <h2 className="mb-4 fw-bold">🛠️ Hizmetlerimiz</h2>

                <Row className="g-4">
                    {services.length > 0 ? (
                        services.map((service) => (
                            <Col key={service.id} xs={12} md={6} lg={4}>
                                <Card className="h-100 shadow-sm border-0 hover-zoom">
                                    <Card.Body>
                                        <Card.Title className="fw-semibold">
                                            {service.title}
                                        </Card.Title>
                                        <Card.Text style={{ color: "#555" }}>
                                            {service.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p>Henüz hizmet eklenmedi.</p>
                    )}
                </Row>
            </Container>
        </section>
    );
}

export default ServicesSection;
