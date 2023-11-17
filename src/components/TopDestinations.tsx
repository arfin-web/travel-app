import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';

const destinations = [
    {
        id: 1,
        name: "United Kingdom",
        image: "https://img.freepik.com/free-photo/big-ben-with-sun-through-pedestrian-tunnel_268835-4014.jpg?w=740&t=st=1700119328~exp=1700119928~hmac=272a8bdf05d8e58bcbff436aa737a1508fcb04f0c2054af7be38723d2eaeb12d",
        value: '174,688',
        url: '/destination/destinationDetails'
    },
    {
        id: 2,
        name: "United Kingdom",
        image: "https://img.freepik.com/free-photo/big-ben-with-sun-through-pedestrian-tunnel_268835-4014.jpg?w=740&t=st=1700119328~exp=1700119928~hmac=272a8bdf05d8e58bcbff436aa737a1508fcb04f0c2054af7be38723d2eaeb12d",
        value: '174,688',
        url: '/destination/destinationDetails'
    },
    {
        id: 3,
        name: "United Kingdom",
        image: "https://img.freepik.com/free-photo/big-ben-with-sun-through-pedestrian-tunnel_268835-4014.jpg?w=740&t=st=1700119328~exp=1700119928~hmac=272a8bdf05d8e58bcbff436aa737a1508fcb04f0c2054af7be38723d2eaeb12d",
        value: '174,688',
        url: '/destination/destinationDetails'
    },
    {
        id: 4,
        name: "United Kingdom",
        image: "https://img.freepik.com/free-photo/big-ben-with-sun-through-pedestrian-tunnel_268835-4014.jpg?w=740&t=st=1700119328~exp=1700119928~hmac=272a8bdf05d8e58bcbff436aa737a1508fcb04f0c2054af7be38723d2eaeb12d",
        value: '174,688',
        url: '/destination/destinationDetails'
    },
    {
        id: 5,
        name: "United Kingdom",
        image: "https://img.freepik.com/free-photo/big-ben-with-sun-through-pedestrian-tunnel_268835-4014.jpg?w=740&t=st=1700119328~exp=1700119928~hmac=272a8bdf05d8e58bcbff436aa737a1508fcb04f0c2054af7be38723d2eaeb12d",
        value: '174,688',
        url: '/destination/destinationDetails'
    },
    {
        id: 6,
        name: "United Kingdom",
        image: "https://img.freepik.com/free-photo/big-ben-with-sun-through-pedestrian-tunnel_268835-4014.jpg?w=740&t=st=1700119328~exp=1700119928~hmac=272a8bdf05d8e58bcbff436aa737a1508fcb04f0c2054af7be38723d2eaeb12d",
        value: '174,688',
        url: '/destination/destinationDetails'
    },
    {
        id: 7,
        name: "United Kingdom",
        image: "https://img.freepik.com/free-photo/big-ben-with-sun-through-pedestrian-tunnel_268835-4014.jpg?w=740&t=st=1700119328~exp=1700119928~hmac=272a8bdf05d8e58bcbff436aa737a1508fcb04f0c2054af7be38723d2eaeb12d",
        value: '174,688',
        url: '/destination/destinationDetails'
    },
    {
        id: 8,
        name: "United Kingdom",
        image: "https://img.freepik.com/free-photo/big-ben-with-sun-through-pedestrian-tunnel_268835-4014.jpg?w=740&t=st=1700119328~exp=1700119928~hmac=272a8bdf05d8e58bcbff436aa737a1508fcb04f0c2054af7be38723d2eaeb12d",
        value: '174,688',
        url: '/destination/destinationDetails'
    },
]

const TopDestinations = () => {
    const responsive = {
        0: { items: 2 },
        600: { items: 3 },
        1024: { items: 4 },
    };

    const items = destinations.map((destination) => (
        <Link to={destination.url}>
            <div key={destination.id} className="carousel-item card card-compact bg-base-100 rounded-sm m-2">
                <figure><img src={destination.image} alt={destination.name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{destination.name}</h2>
                    <p>{destination.value} Travelers</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <>
            <div className="navbar bg-base-200 px-2 lg:px-16">
                <div className="navbar-start">
                    <div className="flex-col">
                        <h3 className="text-xl lg:text-2xl font-bold">Destinations</h3>
                        <h2 className="text-2xl lg:text-3xl font-bold">Top Destinations</h2>
                    </div>
                </div>
                <div className="navbar-center">

                </div>
                <div className="navbar-end">
                    <div className="flex-col">
                        <h3 className="text-xl lg:text-2xl text-transparent font-bold">Action</h3>
                        <button className="btn btn-ghost">
                            See More
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-2 lg:px-16'>
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    autoPlayInterval={1500} // Autoplay interval in milliseconds
                    autoPlay={true}
                    infinite={true}
                    disableButtonsControls={true} // Disable navigation buttons
                    disableDotsControls={false} // Disable pagination dots
                />
            </div>
        </>
    )
}

export default TopDestinations