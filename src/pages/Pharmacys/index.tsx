import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import PharmacysServices from "../../services/PharmacysServices";
import dateFormatAdapter from "../../adapters/dateFormat";

function Pharmacys() {

    const [show, setShow] = useState(false);
    const { dateFormat } = dateFormatAdapter();
    const [pharmacySlected, setPharmacySlected] = useState<any>(null);
    const [pharmacys, setPharmacys] = useState<Pharmacy[]>([]);

    const handleClose = () => {
        setShow(false);
        setPharmacySlected(null);
    };
    const handleShow = (pharmacy: any) => {
        setShow(true);
        setPharmacySlected(pharmacy);
    };

    useEffect(() => {
        const fetchPharmacys = async () => {
            const resp: any = await PharmacysServices().getPharmacys();
            setPharmacys(resp);
        };
        fetchPharmacys();

    }, [pharmacySlected])


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
                        <h2>{dateFormat(new Date(), "eeee, d MMMM yyyy")}</h2>
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