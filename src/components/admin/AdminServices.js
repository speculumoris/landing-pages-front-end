import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Table, Row, Col } from "react-bootstrap";

function AdminServices() {
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState({ title: "", description: "" });

    const fetchServices = async () => {
        const res = await axios.get("http://localhost:8080/api/services");
        setServices(res.data);
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/services", newService);
        setNewService({ title: "", description: "" });
        fetchServices();
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/api/services/${id}`);
        fetchServices();
    };

    return (
        <>
            <Form onSubmit={handleSubmit} className="mb-4">
                <Row className="g-2">
                    <Col md={5}>
                        <Form.Control
                            type="text"
                            placeholder="Hizmet başlığı"
                            value={newService.title}
                            onChange={(e) =>
                                setNewService({ ...newService, title: e.target.value })
                            }
                            required
                        />
                    </Col>
                    <Col md={5}>
                        <Form.Control
                            type="text"
                            placeholder="Açıklama"
                            value={newService.description}
                            onChange={(e) =>
                                setNewService({ ...newService, description: e.target.value })
                            }
                            required
                        />
                    </Col>
                    <Col md={2}>
                        <Button variant="primary" type="submit" className="w-100">
                            Ekle
                        </Button>
                    </Col>
                </Row>
            </Form>

            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Başlık</th>
                    <th>Açıklama</th>
                    <th>İşlem</th>
                </tr>
                </thead>
                <tbody>
                {services.map((s) => (
                    <tr key={s.id}>
                        <td>{s.id}</td>
                        <td>{s.title}</td>
                        <td>{s.description}</td>
                        <td>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => handleDelete(s.id)}
                            >
                                Sil
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
}

export default AdminServices;
