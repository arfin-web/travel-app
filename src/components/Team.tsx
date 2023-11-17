import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const members = [
    {
        id: 1,
        name: "Mr. John",
        image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1700236207~exp=1700236807~hmac=f3a1d2dbbbf789ef7f5b8704554fbdbed6073411564d45d10afa2f439f8e8f4a",
        designation: 'Director',
    },
    {
        id: 2,
        name: "Mr. John",
        image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1700236207~exp=1700236807~hmac=f3a1d2dbbbf789ef7f5b8704554fbdbed6073411564d45d10afa2f439f8e8f4a",
        designation: 'Director',
    },
    {
        id: 3,
        name: "Mr. John",
        image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1700236207~exp=1700236807~hmac=f3a1d2dbbbf789ef7f5b8704554fbdbed6073411564d45d10afa2f439f8e8f4a",
        designation: 'Director',
    },
    {
        id: 4,
        name: "Mr. John",
        image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1700236207~exp=1700236807~hmac=f3a1d2dbbbf789ef7f5b8704554fbdbed6073411564d45d10afa2f439f8e8f4a",
        designation: 'Director',
    },
    {
        id: 5,
        name: "Mr. John",
        image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1700236207~exp=1700236807~hmac=f3a1d2dbbbf789ef7f5b8704554fbdbed6073411564d45d10afa2f439f8e8f4a",
        designation: 'Director',
    },
    {
        id: 6,
        name: "Mr. John",
        image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1700236207~exp=1700236807~hmac=f3a1d2dbbbf789ef7f5b8704554fbdbed6073411564d45d10afa2f439f8e8f4a",
        designation: 'Director',
    },
    {
        id: 7,
        name: "Mr. John",
        image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1700236207~exp=1700236807~hmac=f3a1d2dbbbf789ef7f5b8704554fbdbed6073411564d45d10afa2f439f8e8f4a",
        designation: 'Director',
    },
    {
        id: 8,
        name: "Mr. John",
        image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1700236207~exp=1700236807~hmac=f3a1d2dbbbf789ef7f5b8704554fbdbed6073411564d45d10afa2f439f8e8f4a",
        designation: 'Director',
    },
]

const Team = () => {
    const responsive = {
        0: { items: 2 },
        600: { items: 3 },
        1024: { items: 4 },
    };

    const items = members.map((member) => (
        <div key={member.id} className="carousel-item card card-compact bg-base-100 rounded-sm m-2">
            <figure><img src={member.image} alt={member.name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{member.name}</h2>
                <p>{member.designation} Travelers</p>
            </div>
        </div>
    ))

    return (
        <>
            <div className='container bg-base-100 mx-auto px-2 lg:px-16 py-10'>
                <h3 className="text-xl lg:text-2xl font-bold text-center text-warning">Team</h3>
                <h1 className="text-2xl lg:text-3xl font-bold text-center mb-10">Our Amazing Team</h1>
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

export default Team