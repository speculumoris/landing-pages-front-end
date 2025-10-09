import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";

function PhotosSection() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/photos")
            .then(res => {
                console.log(res.data);
                setPhotos(res.data)
            })
            .catch(err => console.error(err));
    }, []);


    return (
        <section id="photos" className="container my-5" data-aos="fade-up">
            <h2 className="mb-4 fw-bold">📸 Yapılan İşlerden Fotoğraflar</h2>

            {photos.length > 0 ? (
                <Carousel variant="dark" interval={3000}>
                    {photos.map((photo) => (
                        <Carousel.Item key={photo.id}>
                            <img
                                className="d-block w-100 rounded shadow"
                                src={`http://localhost:8080/${photo.url}`}
                                alt={photo.description || "Fotoğraf"}
                                style={{ height: "450px", objectFit: "cover" }}
                            />
                            {photo.description && (
                                <Carousel.Caption>
                                    <p className="bg-dark bg-opacity-50 rounded p-2">
                                        {photo.description}
                                    </p>
                                </Carousel.Caption>
                            )}
                        </Carousel.Item>
                    ))}
                </Carousel>
            ) : (
                <p>Henüz fotoğraf yüklenmedi.</p>
            )}
        </section>
    );
}

export default PhotosSection;
