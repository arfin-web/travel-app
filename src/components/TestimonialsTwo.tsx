import TestimonialCarousel from "./TestimonialCarousel"

const TestimonialTwo = () => {
    return (
        <>
            <div className="container bg-base-200 mx-auto px-2 lg:px-16 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center pt-10">
                    <div>
                        <img
                            src="https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg?w=996&t=st=1700237066~exp=1700237666~hmac=6245016d7358f6450f9f0563a9a38c92e3c238c413e6c9d99e8d4dae50f77b96"
                            alt="group"
                            className="w-80 lg:w-full"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-center">Testimonials</h3>
                        <h2 className="text-2xl lg:text-3xl font-bold text-center">What Travelers Say</h2>
                        <div className="w-80 bg-base-200">
                            <TestimonialCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialTwo