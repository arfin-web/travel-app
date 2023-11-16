import FeaturedTours from "../components/FeaturedTours"
import Hero from "../components/Hero"
import TopDestinations from "../components/TopDestinations"
import TourTypes from "../components/TourTypes"
import WhyChooseUs from "../components/WhyChooseUs"

const LandingPage = () => {
    return (
        <>
            <Hero />
            <TourTypes />
            <WhyChooseUs />
            <TopDestinations />
            <FeaturedTours />
        </>
    )
}

export default LandingPage