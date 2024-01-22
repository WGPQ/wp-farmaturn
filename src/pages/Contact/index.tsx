
function Contact() {
    return (
        <section id="contacto" className="contact">            <div className="container">

            <div className="section-title" data-aos="fade-up">
                <h2>Contacto</h2>
                <p>Contactate con nosotros</p>
            </div>

            <div className="row">

                <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
                    <div className="info">
                        <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <h4>Ubicación:</h4>
                            <p>Juan Montalvo entre Alianza y Calderon, Cayambe - Ecuador</p>
                        </div>

                        <div className="email">
                            <i className="bi bi-envelope"></i>
                            <h4>Correo:</h4>
                            <p>wgpumaq@gmail.com</p>
                        </div>

                        <div className="phone">
                            <i className="bi bi-phone"></i>
                            <h4>Teléfono:</h4>
                            <p>099 770 2533</p>
                        </div>

                    </div>

                </div>

                <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">

                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Su nombre" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Su correo" required />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" required />
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows={5} placeholder="Mensaje" required></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Enviar Mensage</button></div>
                    </form>

                </div>

            </div>

        </div>
        </section>);
}

export default Contact