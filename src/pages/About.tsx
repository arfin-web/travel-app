import Features from "../components/Features"
import Logos from "../components/Logos"
import Stats from "../components/Stats"
import Team from "../components/Team"
import TestimonialTwo from "../components/TestimonialsTwo"

const details = `
Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer homes and villas in cities such as Pompeii and Baiae.[8] While early travel tended to be slower, more dangerous, and more dominated by trade and migration, cultural and technological advances over many years have tended to mean that travel has become easier and more accessible.[9] Humankind has come a long way in transportation since Christopher Columbus sailed to the New World from Spain in 1492, an expedition which took over 10 weeks to arrive at the final destination; to the 21st century when aircraft allows travel from Spain to the United States overnight.
Travel in the Middle Ages offered hardships and challenges, though it was important to the economy and to society. The wholesale sector depended (for example) on merchants dealing with/through caravans or sea-voyagers, end-user retailing often demanded the services of many itinerant peddlers wandering from village to hamlet, gyrovagues (wandering monks) and wandering friars brought theology and pastoral support to neglected areas, traveling minstrels toured, and armies ranged far and wide in various crusades and in sundry other wars.
`

const About = () => {
    return (
        <>
            <div className="hero h-full lg:h-80" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/panorama-shot-canal-lake-pukaki-twisel-surrounded-with-mountains_181624-45343.jpg?w=1060&t=st=1700233563~exp=1700234163~hmac=b350c5b7861ae8a922184a9a5deebb0f500709e057e2a434986d059f1988d67e)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md flex flex-col justify-center items-center">
                        <h1 className="text-5xl font-bold">About</h1>
                        <div className="text-sm breadcrumbs mt-4">
                            <ul>
                                <li><a>Home</a></li>
                                <li><a className="text-warning">About</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container bg-base-100 mx-auto px-2 lg:px-10 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 place-items-center">
                    <div>
                        <img
                            src="https://img.freepik.com/free-vector/travel-background-realistic-style_23-2147763145.jpg?w=740&t=st=1700234061~exp=1700234661~hmac=a5e6f13c5c2317bf74e432009cb6da4328fda5cba7f49af215e003fa7ad6c835"
                            alt="About Us"
                            className="w-80 lg:w-full"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-bold">About Us</h3>
                        <h2 className="text-2xl lg:text-4xl font-bold mt-2 mb-4">Why Select Us For<br />Your Vacation</h2>
                        <p>{details}</p>
                    </div>
                </div>
            </div>
            <Stats />
            <Features />
            <Team />
            <TestimonialTwo />
            <div className="container bg-base-200 mx-auto px-2 lg:px-10 py-10">
                <Logos />
            </div>
        </>
    )
}

export default About