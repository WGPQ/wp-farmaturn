import { useEffect, useState } from "react"
import useAppInit from "../hooks/useAppInit";

function Header() {
  const { select, onscroll } = useAppInit();

  const [isMobil, setIsMobil] = useState(false);

  useEffect(() => {
    let selectHeader: any = select('#header');
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      headerScrolled();
      onscroll(document, headerScrolled)
    }
    let navbarlinks: any = select('#navbar .scrollto', true);
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach((navbarlink: { hash: string; classList: { add: (arg0: string) => void; remove: (arg0: string) => void; }; }) => {
        if (!navbarlink.hash) return
        let section: any = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

  }, []);

  const onSelectMenu = () => {
    if (isMobil) {
      setIsMobil(false);
      let mobileNav = select('.mobile-nav-toggle');
      mobileNav.classList.toggle("bi-list");
      mobileNav.classList.toggle("bi-x");
    }
  }
  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent ">
      <div className="container d-flex align-items-center justify-content-between">

        <div className="logo">
          <h1><a href="#inicio" ><span>Farmaturn</span></a></h1>
        </div>

        <nav id="navbar" className={isMobil ? "navbar-mobile" : "navbar"}>
          <ul>
            <li><a className="nav-link scrollto active " href="#inicio" onClick={onSelectMenu}>Inicio</a></li>
            <li><a className="nav-link scrollto" href="#farmacias" onClick={onSelectMenu}>Farmacias de turno</a></li>
            <li><a className="nav-link scrollto" href="#map" onClick={onSelectMenu}>Mapa</a></li>

            <li><a className="nav-link scrollto" href="#contacto" onClick={onSelectMenu}>Contacto</a></li>
          </ul>
          <i className={`bi bi-list mobile-nav-toggle`}
            onClick={(e: any) => {
              setIsMobil(!isMobil);
              e.target.classList.toggle("bi-list");
              e.target.classList.toggle("bi-x");
            }}
          ></i>
        </nav>


      </div>
    </header>
  )
}

export default Header