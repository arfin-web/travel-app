import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const tours = [
    {
        id: 1,
        name: "Budapest, Hungary",
        title: "Wonders of the West Coast & kimberlay",
        image: "https://img.freepik.com/free-photo/wedding-couple-is-standing-separately-beautiful-light-summer-day_8353-11194.jpg?w=740&t=st=1700121152~exp=1700121752~hmac=2b766d5a873da7d1337decd407947b866fef3ce1328790b3b4a437eaa2bc91f0",
        price: '174,688',
        rating: 4.8,
        reviews: 15,
        days: 7
    },
    {
        id: 2,
        name: "Budapest, Hungary",
        title: "Wonders of the West Coast & kimberlay",
        image: "https://img.freepik.com/free-photo/wedding-couple-is-standing-separately-beautiful-light-summer-day_8353-11194.jpg?w=740&t=st=1700121152~exp=1700121752~hmac=2b766d5a873da7d1337decd407947b866fef3ce1328790b3b4a437eaa2bc91f0",
        price: '174,688',
        rating: 4.8,
        reviews: 15,
        days: 7
    },
    {
        id: 3,
        name: "Budapest, Hungary",
        title: "Wonders of the West Coast & kimberlay",
        image: "https://img.freepik.com/free-photo/wedding-couple-is-standing-separately-beautiful-light-summer-day_8353-11194.jpg?w=740&t=st=1700121152~exp=1700121752~hmac=2b766d5a873da7d1337decd407947b866fef3ce1328790b3b4a437eaa2bc91f0",
        price: '174,688',
        rating: 4.8,
        reviews: 15,
        days: 7
    },
    {
        id: 4,
        name: "Budapest, Hungary",
        title: "Wonders of the West Coast & kimberlay",
        image: "https://img.freepik.com/free-photo/wedding-couple-is-standing-separately-beautiful-light-summer-day_8353-11194.jpg?w=740&t=st=1700121152~exp=1700121752~hmac=2b766d5a873da7d1337decd407947b866fef3ce1328790b3b4a437eaa2bc91f0",
        price: '174,688',
        rating: 4.8,
        reviews: 15,
        days: 7
    },
    {
        id: 5,
        name: "Budapest, Hungary",
        title: "Wonders of the West Coast & kimberlay",
        image: "https://img.freepik.com/free-photo/wedding-couple-is-standing-separately-beautiful-light-summer-day_8353-11194.jpg?w=740&t=st=1700121152~exp=1700121752~hmac=2b766d5a873da7d1337decd407947b866fef3ce1328790b3b4a437eaa2bc91f0",
        price: '174,688',
        rating: 4.8,
        reviews: 15,
        days: 7
    },
    {
        id: 6,
        name: "Budapest, Hungary",
        title: "Wonders of the West Coast & kimberlay",
        image: "https://img.freepik.com/free-photo/wedding-couple-is-standing-separately-beautiful-light-summer-day_8353-11194.jpg?w=740&t=st=1700121152~exp=1700121752~hmac=2b766d5a873da7d1337decd407947b866fef3ce1328790b3b4a437eaa2bc91f0",
        price: '174,688',
        rating: 4.8,
        reviews: 15,
        days: 7
    },
    {
        id: 7,
        name: "Budapest, Hungary",
        title: "Wonders of the West Coast & kimberlay",
        image: "https://img.freepik.com/free-photo/wedding-couple-is-standing-separately-beautiful-light-summer-day_8353-11194.jpg?w=740&t=st=1700121152~exp=1700121752~hmac=2b766d5a873da7d1337decd407947b866fef3ce1328790b3b4a437eaa2bc91f0",
        price: '174,688',
        rating: 4.8,
        reviews: 15,
        days: 7
    },
    {
        id: 8,
        name: "Budapest, Hungary",
        title: "Wonders of the West Coast & kimberlay",
        image: "https://img.freepik.com/free-photo/wedding-couple-is-standing-separately-beautiful-light-summer-day_8353-11194.jpg?w=740&t=st=1700121152~exp=1700121752~hmac=2b766d5a873da7d1337decd407947b866fef3ce1328790b3b4a437eaa2bc91f0",
        price: '174,688',
        rating: 4.8,
        reviews: 15,
        days: 7
    },
]

const TourCard = () => {
    const responsive = {
        0: { items: 2 },
        600: { items: 3 },
        1024: { items: 4 },
    };

    const items = tours.map((tour) => (
        <div key={tour.id} className="carousel-item card card-compact bg-base-100 rounded-sm m-2">
            <figure><img src={tour.image} alt={tour.name} /></figure>
            <div className="card-body">
                <p>{tour.name} Travelers</p>
                <h2 className="card-title">{tour.title}</h2>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center gap-2'>
                        <button className="btn btn-warning btn-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M234.5,114.38,229.27,119a8,8,0,1,1-10.52-12l5.23-4.57s0,0,0-.07l-8.67-.75a8,8,0,1,1,1.37-16l8.7.75a16,16,0,0,1,9.11,28.07Zm-60.7,43,2.86,12.41a8,8,0,1,0,15.59-3.6l-2.85-12.47,7.86-6.86a8,8,0,0,0-10.52-12.06l-7.86,6.87A16,16,0,0,0,173.8,157.4ZM136,51.15V184.81l.27.15,11.88,7.22a8,8,0,0,1-8.3,13.68L128,198.64l-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.07l59.46-5.14,23.21-55.36a15.95,15.95,0,0,1,29.44,0L166,81.17l10.74.93a8,8,0,0,1-1.38,16l-10.76-.93a16,16,0,0,1-13.35-9.75ZM119.73,185l.27-.15V51.15L104.8,87.37a16,16,0,0,1-13.35,9.75L32,102.25a.58.58,0,0,0,0,.1l45.13,39.34A16,16,0,0,1,82.2,157.4L68.68,215.94v0Zm79.91,13.25a8,8,0,0,0-15.59,3.61l3.3,14.14v0l-11.19-6.8a8,8,0,1,0-8.31,13.68l11.23,6.82a16,16,0,0,0,23.84-17.34Z"></path></svg>
                            {tour.rating}
                        </button>
                        <h4 className='text-xs'>{tour.reviews} reviews</h4>
                    </div>
                    <div>
                        <button className="btn btn-ghost btn-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path></svg>
                            {tour.days} Days
                        </button>
                    </div>
                </div>
                <hr />
                <div className='flex justify-between items-center'>
                    <h4>Starting From</h4>
                    <h4>${tour.price}</h4>
                </div>
            </div>
        </div>
    ))
    return (
        <AliceCarousel
            items={items}
            responsive={responsive}
            autoPlayInterval={1500} // Autoplay interval in milliseconds
            autoPlay={true}
            infinite={true}
            disableButtonsControls={true} // Disable navigation buttons
            disableDotsControls={false} // Disable pagination dots
        />
    )
}

export default TourCard