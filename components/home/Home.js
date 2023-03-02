import { Fragment } from "react";
import Comments from "../comments/Comments";


import Intro from "../intro/Intro";
import Services from "../services/Services";
import Faq from "../faq/Faq";
import Portfolio from "../portfolio/Portfolio";
import Footer from "../footer/Footer";



const Home = () => {
    return (
        <Fragment>
            <Intro />
            <Services />
            <Comments />
            <Faq />
            <Portfolio />
            <Footer />
        </Fragment>
    )
}

export default Home;