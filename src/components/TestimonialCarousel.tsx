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

const TestimonialCarousel = () => {
    const responsive = {
        0: { items: 1 },
        600: { items: 1 },
        1024: { items: 1 },
    };

    const items = testimonials.map((testimonial) => (
        <div key={testimonial.id} className="carousel-item card card-compact rounded-sm m-2">
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
            <AliceCarousel
                items={items}
                responsive={responsive}
                autoPlayInterval={1500} // Autoplay interval in milliseconds
                autoPlay={true}
                infinite={true}
                disableButtonsControls={true} // Disable navigation buttons
                disableDotsControls={false} // Disable pagination dots
            />
        </>
    )
}

export default TestimonialCarousel