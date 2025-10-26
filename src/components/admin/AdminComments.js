import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {Table, Button, Badge} from "react-bootstrap";

function AdminComments() {
    const [comments, setComments] = useState([]);
    const host = process.env.REACT_APP_BACKEND_CONNECTION || "http://localhost:8080";

    const fetchComments = useCallback(async () => {
        try {
            const res = await axios.get(`${host}/api/comments/all`);
            setComments(res.data);
        } catch (err) {
            console.error("Yorumlar alınamadı:", err);
        }
    }, [host]);


    const handleApprove = async (id) => {
        try {
            await axios.patch(`${host}/api/comments/${id}/approve`);
            await fetchComments();
        } catch (err) {
            console.error("Yorum onaylanamadı:", err);
        }
    };

    useEffect(() => {
        (async () => {
            await fetchComments();
        })();
    }, [fetchComments]);


    const handleDelete = async (id) => {
        try {
            await axios.delete(`${host}/api/comments/${id}`);
            fetchComments();
        } catch (err) {
            console.error("Yorum silinemedi:", err);
        }
    };

    return (
        <div>
            <h5 className="mb-3">💬 Yorum Yönetimi</h5>
            {comments.length === 0 ? (
                <p>Henüz yorum yok.</p>
            ) : (
                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ad Soyad</th>
                        <th>Hizmet</th>
                        <th>Yorum</th>
                        <th>Durum</th>
                        <th>İşlem</th>
                    </tr>
                    </thead>
                    <tbody>
                    {comments.map((c) => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.fullName}</td>
                            <td>{c.serviceTitle}</td>
                            <td>{c.message}</td>
                            <td>
                                {c.approved ? (
                                    <Badge bg="success">Onaylı</Badge>
                                ) : (
                                    <Badge bg="secondary">Bekliyor</Badge>
                                )}
                            </td>
                            <td>
                                {!c.approved && (
                                    <Button
                                        variant="success"
                                        size="sm"
                                        className="me-2"
                                        onClick={() => handleApprove(c.id)}
                                    >
                                        Onayla
                                    </Button>
                                )}
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(c.id)}
                                >
                                    Sil
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
}

export default AdminComments;
