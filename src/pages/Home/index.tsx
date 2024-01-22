
function Home() {
  return (
  <section id="inicio">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
          <div data-aos="zoom-out">
            <h1>Descubre las farmacias de turno en tu área con nuestra aplicación <span>Farmaturn</span></h1>
            <h2>tu guía confiable para cuidar de tu salud las 24 horas.</h2>
            <div className="text-center text-lg-start">
              <a href="#farmacias" className="btn-get-started scrollto">Empezar</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 order-1 order-lg-2 inicio-img" data-aos="zoom-out" data-aos-delay="300">
          <img src="/assets/img/hero-img.png" className="img-fluid animated" alt="" />
        </div>
      </div>
    </div>

    <svg className="inicio-waves"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 24 150 28 " preserveAspectRatio="none">
      <defs>
        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g className="wave1" />
      <g className="wave2">
        <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
      </g>
      <g className="wave3">
        <use href="#wave-path" x="50" y="9" fill="#fff" />
      </g>
    </svg>
  </section>
  )
}

export default Home