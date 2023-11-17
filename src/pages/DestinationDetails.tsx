import DestinationInfo from "../components/DestinationInfo"
import ImageCarousel from "../components/ImageCarousel"
import TourCard from "../components/TourCard"
import WeatherInfo from "../components/WeatherInfo"

const DestinationDetails = () => {
    return (
        <>
            <div className="hero h-full lg:h-80" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/panoramic-view-london-sunset-uk_268835-1113.jpg?w=1060&t=st=1700209678~exp=1700210278~hmac=df08c8a6a3016b95c064626524b89958d811588f264f738d0cd82f5843e7f62f)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md flex flex-col justify-center items-center">
                        <h1 className="text-5xl font-bold">United Kingdom</h1>
                        <div className="text-sm breadcrumbs mt-4">
                            <ul>
                                <li><a>Home</a></li>
                                <li><a>Destination</a></li>
                                <li><a className="text-warning">United Kingdonm</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container bg-base-100 mx-auto px-2 lg:px-16 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 place-items-center lg:place-items-start">
                    <div>
                        <ImageCarousel />
                        <DestinationInfo />
                    </div>
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-5">City Map</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317719.5879916712!2d-0.43124401160061215!3d51.52817976061254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1700211122125!5m2!1sen!2sbd"
                            width="300"
                            height="220"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <WeatherInfo />
                    </div>
                </div>
            </div>
            <div className="navbar bg-base-100 px-2 lg:px-16">
                <div className="navbar-start">
                    <h2 className="text-xl lg:text-2xl font-bold">Popular Tours In UK</h2>
                </div>
                <div className="navbar-center">

                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost">
                        See More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                    </button>
                </div>
            </div>
            <div className='container bg-base-100 mx-auto px-2 lg:px-16 pb-10'>
                <TourCard />
            </div>
            <div className="navbar bg-base-200 px-2 lg:px-16 mt-5">
                <div className="navbar-start">
                    <h2 className="text-xl lg:text-2xl font-bold">Activities In UK</h2>
                </div>
                <div className="navbar-center">

                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost">
                        See More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                    </button>
                </div>
            </div>
            <div className='container bg-base-200 mx-auto px-2 lg:px-16 mb-10'>
                <TourCard />
            </div>
        </>
    )
}

export default DestinationDetails