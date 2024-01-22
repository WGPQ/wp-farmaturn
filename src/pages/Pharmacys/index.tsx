import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Pharmacys() {

    const [show, setShow] = useState(false);
    const [pharmacySlected, setPharmacySlected] = useState<any>(null);

    const handleClose = () => {
        setShow(false);
        setPharmacySlected(null);
    };
    const handleShow = (pharmacy: any) => {
        setShow(true);
        setPharmacySlected(pharmacy);
    };

    const pharmacys = [
        {
            id: 1,
            image: 'https://img.offers-cdn.net/assets/uploads/stores/ec/logos/200x72_webp/farmacias-medicity-1595250805.jpg',
            name: 'Farmacias Medicity', address: 'Av. 1', phone: '0999999999'
        },
        {
            id: 2,
            image: "https://img.offers-cdn.net/assets/uploads/stores/ec/logos/200x72_webp/farmacias-cruz-azul.jpg",
            name: 'Farmacias Cruz Azul', address: 'Av. 2', phone: '0999999999'
        },
        {
            id: 3,
            image: "https://img.offers-cdn.net/assets/uploads/stores/ec/logos/200x72_webp/farmacias-sanasana-1592564189.jpg",
            name: 'Farmacias SanaSana', address: 'Av. 3', phone: '0999999999'
        },
        {
            id: 4,
            image: 'https://img.offers-cdn.net/assets/uploads/stores/ec/logos/200x72_webp/farmacias-economicas-1592564131.jpg',
            name: 'Farmacias Economicas', address: 'Av. 4', phone: '0999999999'
        },
        { id: 5, name: 'Farmacias Santa Martha', address: 'Av. 5', phone: '0999999999' },
        {
            id: 6,
            image: "https://imgs.search.brave.com/vBGHcqzo2ZQ8SUuamuirLcIuQ7YCzcAIopw561dP2dc/rs:fit:860:0:0/g:ce/aHR0cDovL3d3dy5j/b3Jwb3JhY2lvbmdw/Zi5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDYvbG9n/by0zLWZ5YmVjYS1j/b3Jwb3JhY2lvbmdw/Zi5wbmc",
            name: 'Farmacias Fybeca', address: 'Av. 6', phone: '0999999999'
        },
        {
            id: 7,
            image: 'https://img.offers-cdn.net/assets/uploads/stores/ec/logos/200x72_webp/pharmacy-s-612b4a29c8516.webp',
            name: 'Pharmacys', address: 'Av. 7', phone: '0999999999'
        },
    ];



    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pharmacySlected?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <section id="farmacias" className="features">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Viernes 12 de enero 2024</h2>
                        <p>Farmacias Cayambe</p>
                    </div>

                    <div className="row" data-aos="fade-left">
                        {pharmacys.map((pharmacy, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mt-4">
                                <div className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                                    <div className="phar-logo">

                                        {pharmacy?.image?.length ?? 0 > 0 ?
                                            <img src={pharmacy.image} alt=""
                                                style={{ width: '90px', height: '45px' }}
                                            /> :
                                            <i className="bi bi-hospital"
                                                style={{ fontSize: '3rem', margin: '0 1rem', color: '#777777' }}
                                            ></i>
                                        }
                                    </div>
                                    <div className="phar-info">
                                        <h3><a >{pharmacy.name}</a></h3>
                                        <p>{pharmacy.address}</p>
                                        <p className="icon-down">Ver más
                                            <i className="bx bx-chevron-down icon-show"
                                                onClick={() => handleShow(pharmacy)}
                                            ></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>

    )
}

export default Pharmacys