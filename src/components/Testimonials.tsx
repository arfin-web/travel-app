import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const testimonials = [
    {
        id: 1,
        name: "Mr John Duo",
        opinion: 'The travel agent Khushboo helped and guided and provided all the updates and she followed up from the day 1 we booked till we reached home'
    },
    {
        id: 2,
        name: "Mr John Duo",
        opinion: 'The travel agent Khushboo helped and guided and provided all the updates and she followed up from the day 1 we booked till we reached home'
    },
    {
        id: 3,
        name: "Mr John Duo",
        opinion: 'The travel agent Khushboo helped and guided and provided all the updates and she followed up from the day 1 we booked till we reached home'
    },
    {
        id: 4,
        name: "Mr John Duo",
        opinion: 'The travel agent Khushboo helped and guided and provided all the updates and she followed up from the day 1 we booked till we reached home'
    },
    {
        id: 5,
        name: "Mr John Duo",
        opinion: 'The travel agent Khushboo helped and guided and provided all the updates and she followed up from the day 1 we booked till we reached home'
    },
    {
        id: 6,
        name: "Mr John Duo",
        opinion: 'The travel agent Khushboo helped and guided and provided all the updates and she followed up from the day 1 we booked till we reached home'
    },
    {
        id: 7,
        name: "Mr John Duo",
        opinion: 'The travel agent Khushboo helped and guided and provided all the updates and she followed up from the day 1 we booked till we reached home'
    },
    {
        id: 8,
        name: "Mr John Duo",
        opinion: 'The travel agent Khushboo helped and guided and provided all the updates and she followed up from the day 1 we booked till we reached home'
    },
]

const Testimonials = () => {
    const responsive = {
        0: { items: 1 },
        600: { items: 1 },
        1024: { items: 1 },
    };

    const items = testimonials.map((testimonial) => (
        <div key={testimonial.id} className="carousel-item card card-compact bg-base-100 rounded-sm m-2">
            <div className='flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="oklch(var(--wa))" viewBox="0 0 256 256"><path d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"></path></svg>
            </div>
            <div className="card-body text-center">
                <h2 className="card-title">{testimonial.opinion}</h2>
                <p>- {testimonial.name}</p>
            </div>
        </div>
    ))
    return (
        <>
            <div className="container bg-base-100 mx-auto px-2 lg:px-16 py-16">
                <h3 className="text-xl lg:text-2xl font-bold text-center">Testimonials</h3>
                <h2 className="text-2xl lg:text-3xl font-bold text-center">What Our Customers<br />Says About Us</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center pt-10">
                    <div>
                        <img
                            src="https://img.freepik.com/free-photo/group-diverse-people-is-holding-hands-each-other_53876-16082.jpg?w=740&t=st=1700133445~exp=1700134045~hmac=9b3d1e08f8ddfbb491c258f01ab20c3db4ebbc070d2e6b2a753f8e94ec37cee0"
                            alt="group"
                            className="w-80"
                        />
                    </div>
                    <div className='w-full'>
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
                    <div>
                        <img
                            src="https://img.freepik.com/free-photo/group-diverse-people-is-holding-hands-each-other_53876-16082.jpg?w=740&t=st=1700133445~exp=1700134045~hmac=9b3d1e08f8ddfbb491c258f01ab20c3db4ebbc070d2e6b2a753f8e94ec37cee0"
                            alt="group"
                            className="w-80"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials