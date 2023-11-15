const TourTypes = () => {
    return (
        <>
            <div className="container mx-auto px-4 lg:px-10 mt-10">
                <h2 className="text-xl lg:text-2xl font-bold text-center">Browse By Category</h2>
                <h2 className="text-2xl lg:text-4xl font-bold text-center md:text-5xl">Pick A Tour Type</h2>
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-5 place-items-stretch mt-10">
                    <div className="card bg-base-100 items-center rounded-sm mb-10">
                        <div className="avatar mt-5">
                            <div className="rounded-full bg-warning p-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#000000" viewBox="0 0 256 256"><path d="M208,80a8,8,0,0,0-8,8v16H188.85L184,55.2A8,8,0,0,0,181.32,50L138.44,11.88l-.2-.17a16,16,0,0,0-20.48,0l-.2.17L74.68,50A8,8,0,0,0,72,55.2L67.15,104H56V88a8,8,0,0,0-16,0v24a8,8,0,0,0,8,8H65.54l-9.47,94.48A16,16,0,0,0,72,232H184a16,16,0,0,0,15.92-17.56L190.46,120H208a8,8,0,0,0,8-8V88A8,8,0,0,0,208,80ZM128,24l27,24H101ZM87.24,64h81.52l4,40H136V88a8,8,0,0,0-16,0v16H83.23ZM72,216l4-40H180l4,40Zm106.39-56H77.61l4-40h92.76Z"></path></svg>
                            </div>
                        </div>
                        <div className="my-2">
                            <h2 className="card-title">Shoes!</h2>
                            <p>10 tour+</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TourTypes