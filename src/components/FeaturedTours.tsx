import TourCard from "./TourCard"

const FeaturedTours = () => {
    return (
        <>
            <div className="hero" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-blue-abstract-technology-background_23-2149213765.jpg?w=996&t=st=1700060845~exp=1700061445~hmac=f28b1b6f32f6a47d55f14f9388a7e0d0c54ac3076b317d90fbfc61cb03f0aa1d)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content w-full grid grid-cols-1 lg:px-20 my-5 lg:my-20">
                    <div className='mb-10'>
                        <h3 className="text-xl lg:text-2xl text-base-100 font-bold text-center">Tours</h3>
                        <h3 className="text-2xl lg:text-3xl text-base-100 font-bold text-center">Featured Tours</h3>
                    </div>
                    <TourCard />
                </div>
            </div>
        </>
    )
}

export default FeaturedTours