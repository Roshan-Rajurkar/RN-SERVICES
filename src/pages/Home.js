import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import DemoProduct from './DemoProduct'
import Contact from './Contact'
import AutoCarousel from '../components/carousal/AutoCarousel';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            <Clients />
            <Cta />
            <DemoProduct/>
            <Contact/>
            <AutoCarousel/>
            <Footer />
        </>

    )
}

export default Home;

