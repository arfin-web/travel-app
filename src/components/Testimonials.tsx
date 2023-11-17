import TestimonialCarousel from "./TestimonialCarousel"

const Testimonials = () => {
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
                    <TestimonialCarousel />
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