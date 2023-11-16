const logos = [
    {
        id: 1,
        image: 'https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?w=740&t=st=1700147467~exp=1700148067~hmac=d7030b0cab6c24645c3472f4fc0d9d63eb4909583d4cc425a74466018db48a93'
    },
    {
        id: 2,
        image: 'https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?w=740&t=st=1700147467~exp=1700148067~hmac=d7030b0cab6c24645c3472f4fc0d9d63eb4909583d4cc425a74466018db48a93'
    },
    {
        id: 3,
        image: 'https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?w=740&t=st=1700147467~exp=1700148067~hmac=d7030b0cab6c24645c3472f4fc0d9d63eb4909583d4cc425a74466018db48a93'
    },
    {
        id: 4,
        image: 'https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?w=740&t=st=1700147467~exp=1700148067~hmac=d7030b0cab6c24645c3472f4fc0d9d63eb4909583d4cc425a74466018db48a93'
    },
]

const Partners = () => {
    return (
        <>
            <div className="hero h-72 lg:h-auto" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-blue-abstract-technology-background_23-2149213765.jpg?w=996&t=st=1700060845~exp=1700061445~hmac=f28b1b6f32f6a47d55f14f9388a7e0d0c54ac3076b317d90fbfc61cb03f0aa1d)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content grid grid-cols-1 place-items-center">
                    <h3 className="text-xl lg:text-2xl text-warning font-bold text-center">Our trusted Partners</h3>
                    <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-28 place-items-stretch my-5">
                        {
                            logos.map(logo => (
                                <div key={logo.id} className="w-32 rounded-full overflow-hidden">
                                    <img src={logo.image} alt="logos" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners