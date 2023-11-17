import Logos from "./Logos"

const Partners = () => {
    return (
        <>
            <div className="hero h-72 lg:h-auto" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-blue-abstract-technology-background_23-2149213765.jpg?w=996&t=st=1700060845~exp=1700061445~hmac=f28b1b6f32f6a47d55f14f9388a7e0d0c54ac3076b317d90fbfc61cb03f0aa1d)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content grid grid-cols-1 place-items-center">
                    <h3 className="text-xl lg:text-2xl text-warning font-bold text-center">Our trusted Partners</h3>
                    <Logos />
                </div>
            </div>
        </>
    )
}

export default Partners