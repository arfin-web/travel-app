import Banner from "../components/Banner"
import FeaturedTours from "../components/FeaturedTours"
import Gallary from "../components/Gallary"
import Hero from "../components/Hero"
import LatestGuides from "../components/LatestGuides"
import Partners from "../components/Partner"
import Testimonials from "../components/Testimonials"
import TopDestinations from "../components/TopDestinations"
import TourTypes from "../components/TourTypes"
import WhyBest from "../components/WhyBest"
import WhyChooseUs from "../components/WhyChooseUs"

const LandingPage = () => {
    return (
        <>
            <Hero />
            <TourTypes />
            <WhyChooseUs />
            <TopDestinations />
            <FeaturedTours />
            <WhyBest />
            <Testimonials />
            <Banner />
            <Partners />
            <LatestGuides />
            <Gallary />
        </>
    )
}

export default LandingPage