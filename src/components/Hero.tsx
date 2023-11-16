import BookingBox from "./BookingBox"

const Hero = () => {
    return (
        <>
            <div className="hero" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-blue-abstract-technology-background_23-2149213765.jpg?w=996&t=st=1700060845~exp=1700061445~hmac=f28b1b6f32f6a47d55f14f9388a7e0d0c54ac3076b317d90fbfc61cb03f0aa1d)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content grid grid-cols-1 mt-14 mb-0 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 place-items-center lg:place-items-stretch">
                        <div className="mb-5 lg:mb-0">
                            <h3 className="text-warning mb-2">Explore The</h3>
                            <h1 className="text-3xl lg:text-7xl text-base-100 font-bold">Travel & Adventures</h1>
                            <p className="text-base-100 mt-3">Find awesome hotel, tour, car and activities in London</p>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://img.freepik.com/free-photo/portrait-smiling-young-woman-standing-top-mountain-holding-hiking-stick_23-2148139782.jpg?w=740&t=st=1700061645~exp=1700062245~hmac=8fc5973d108a6ad46a2658ea81ebd5c25abbf008634880b4d88cc74b9c2e40ba"
                                className="w-32 lg:w-60 h-32 lg:h-60 rounded-sm"
                                alt="heroImgOne" />
                            <img
                                src="https://img.freepik.com/free-photo/full-length-shot-positive-photographer-takes-picture-turquoise-mountain-river-poses-beautiful-place-tourist-visit_273609-27385.jpg?w=360&t=st=1700061541~exp=1700062141~hmac=c23aa86df083d9798c8033206274f0762456ac3f6b7f74b1807be630dafdc68a"
                                className="w-40 lg:w-72 rounded-sm"
                                alt="heroImgOne" />
                        </div>
                    </div>
                    <BookingBox />
                </div>
            </div>
        </>
    )
}

export default Hero