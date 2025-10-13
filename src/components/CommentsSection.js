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

    const fetchComments = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/comments/approved");
            setComments(res.data);
        } catch (err) {
            console.error("Yorumlar alınamadı:", err);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/comments/add", newComment);
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
        <section id="comments" className="comments-section" data-aos="fade-up">
            <Container>
                <h2 className="section-title">💬 Müşteri Yorumları</h2>

                {/* Yorum Ekleme Formu */}
                <Card className="comment-form-card p-4 mb-5 shadow-sm">
                    <h5 className="mb-3 fw-semibold text-primary">
                        📝 Yorum Bırak
                    </h5>

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
                                <Button variant="primary" type="submit" className="px-4">
                                    Gönder
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>

                {/* Yorum Listesi */}
                <h4 className="fw-semibold mb-4 text-secondary">📋 Yapılan Yorumlar</h4>
                <Row className="g-4">
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <Col key={comment.id} xs={12} md={6} lg={4}>
                                <Card className="comment-display-card h-100">
                                    <Card.Body>
                                        <div className="d-flex align-items-center mb-3">
                                            <FaUserCircle size={40} className="text-primary me-2" />
                                            <div>
                                                <h6 className="mb-0 fw-semibold text-dark">
                                                    {comment.fullName}
                                                </h6>
                                                <small className="text-muted">{comment.serviceTitle}</small>
                                            </div>
                                        </div>
                                        <Card.Text className="text-secondary fst-italic">
                                            “{comment.message}”
                                        </Card.Text>
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
