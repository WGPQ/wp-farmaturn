import Footer from "../../components/base/Footer"
import Header from "../../components/base/Header"
import Contact from "../Contact"
import Home from "../Home"
import Pharmacys from "../Pharmacys"
import Map from "../Map"
import useAppInit from "../../components/hooks/useAppInit"
import { useEffect } from "react"

function Main() {
    const { select } = useAppInit();
    useEffect(() => {
        let preloader: any = select('#preloader');
        if (preloader) {
            preloader.remove();
        }
    }, [])

    return (
        <>
            <Home />
            <main id="main">
                <Header />
                <Pharmacys />
                <Map />
                <Contact />
                <Footer />
            </main>
        </>

    )
}

export default Main