import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Spinner } from "react-bootstrap";

function PhotosSection() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    const host = process.env.REACT_APP_BACKEND_CONNECTION || "http://localhost:8080";

    useEffect(() => {
        axios.get(`${host}/api/photos`)
            .then(res => {
                setPhotos(res.data || []);
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [host]);

    return (
        <section id="photos" className="photos-section container text-center" data-aos="fade-up">
            <h2 className="section-title">
                📸 Yapılan İşlerden Fotoğraflar
            </h2>

            {loading ? (
                <div className="py-5">
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : photos.length > 0 ? (
                <div className="photo-carousel-wrapper">
                    <Carousel
                        variant="dark"
                        interval={4000}
                        fade
                        indicators={photos.length > 1}
                    >
                        {photos.map((photo) => (
                            <Carousel.Item key={photo.id}>
                                <div className="carousel-image-wrapper">
                                    <img
                                        className="d-block w-100 photo-image"
                                        src={`${host}/${photo.url}`}
                                        alt={photo.description || "Fotoğraf"}
                                    />
                                </div>
                                {photo.description && (
                                    <Carousel.Caption className="photo-caption">
                                        <p>{photo.description}</p>
                                    </Carousel.Caption>
                                )}
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            ) : (
                <div className="no-photos-box">
                    <p>Henüz fotoğraf yüklenmedi 📷</p>
                </div>
            )}
        </section>
    );
}

export default PhotosSection;
