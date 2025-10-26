import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

function AdminPhotos() {
    const [photos, setPhotos] = useState([]);
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState("");
    const host = process.env.BACKEND_CONNECTION || "http://localhost:8080";

    const fetchPhotos = async () => {
        const res = await axios.get(`${host}/api/photos`);
        setPhotos(res.data);
    };

    useEffect(() => {
        fetchPhotos();
    }, [fetchPhotos]);

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("description", description);
        await axios.post(`${host}/api/photos`, formData);
        setFile(null);
        setDescription("");
        fetchPhotos();
    };

    const handleDelete = async (url) => {
        await axios.delete(`${host}/api/photos`, {
            params: { url: url }
        });
        fetchPhotos();
    };
    return (
        <>
            <Form onSubmit={handleUpload} className="mb-4">
                <Row className="g-2">
                    <Col md={5}>
                        <Form.Control
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            required
                        />
                    </Col>
                    <Col md={5}>
                        <Form.Control
                            type="text"
                            placeholder="Açıklama (isteğe bağlı)"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Col>
                    <Col md={2}>
                        <Button type="submit" variant="primary" className="w-100">
                            Yükle
                        </Button>
                    </Col>
                </Row>
            </Form>

            <Row className="g-3">
                {photos.map((p) => (
                    <Col key={p.id} md={4}>
                        <Card className="shadow-sm">
                            <Card.Img
                                variant="top"
                                src={`${host}/${p.url}`}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <Card.Body>
                                <Card.Text>{p.description}</Card.Text>
                                <Button variant="danger" size="sm" onClick={() => handleDelete(p.url)}>
                                    Sil
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default AdminPhotos;
