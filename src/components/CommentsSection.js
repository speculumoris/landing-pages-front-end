import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

function CommentsSection() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({
        fullName: "",
        serviceTitle: "",
        message: "",
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    // Yorumları getir
    const fetchComments = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/v1/comments");
            setComments(res.data);
        } catch (err) {
            console.error("Yorumlar alınamadı:", err);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);

    // Yorum gönderme
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/v1/comments", newComment);
            setSuccess(true);
            setError(false);
            setNewComment({ fullName: "", serviceTitle: "", message: "" });
            fetchComments();
        } catch (err) {
            console.error("Yorum gönderilemedi:", err);
            setError(true);
            setSuccess(false);
        }
    };

    return (
        <section id="comments" className="my-5">
            <Container>
                <h2 className="mb-4 fw-bold">💬 Müşteri Yorumları</h2>

                {/* Yorum Ekleme Formu */}
                <Card className="p-4 mb-5 shadow-sm border-0">
                    <h5 className="mb-3">📝 Yorum Bırak</h5>

                    {success && <Alert variant="success">Yorum başarıyla gönderildi!</Alert>}
                    {error && <Alert variant="danger">Bir hata oluştu. Tekrar deneyin.</Alert>}

                    <Form onSubmit={handleSubmit}>
                        <Row className="g-3">
                            <Col md={6}>
                                <Form.Group controlId="formFullName">
                                    <Form.Label>Ad Soyad</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Adınızı ve soyadınızı girin"
                                        value={newComment.fullName}
                                        onChange={(e) =>
                                            setNewComment({ ...newComment, fullName: e.target.value })
                                        }
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formServiceName">
                                    <Form.Label>Hizmet Adı</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Örn: Kombi bakımı"
                                        value={newComment.serviceTitle}
                                        onChange={(e) =>
                                            setNewComment({ ...newComment, serviceTitle: e.target.value })
                                        }
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group controlId="formComment">
                                    <Form.Label>Yorumunuz</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Deneyiminizi bizimle paylaşın..."
                                        value={newComment.message}
                                        onChange={(e) =>
                                            setNewComment({ ...newComment, message: e.target.value })
                                        }
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} className="text-end">
                                <Button variant="primary" type="submit">
                                    Gönder
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>

                {/* Yorum Listesi */}
                <h4 className="mb-3">📋 Yapılan Yorumlar</h4>
                <Row className="g-4">
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <Col key={comment.id} xs={12} md={6} lg={4}>
                                <Card className="shadow-sm border-0 h-100 comment-card">
                                    <Card.Body>
                                        <div className="d-flex align-items-center mb-3">
                                            <FaUserCircle size={36} className="text-primary me-2" />
                                            <div>
                                                <h6 className="mb-0">{comment.fullName}</h6>
                                                <small className="text-muted">{comment.serviceTitle}</small>
                                            </div>
                                        </div>
                                        <Card.Text>"{comment.message}"</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p>Henüz yorum yapılmamış.</p>
                    )}
                </Row>
            </Container>
        </section>
    );
}

export default CommentsSection;
