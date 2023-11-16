const details = "As one of the most diverse cities in the world, London’s culinary scene offers an eclectic mixture of British classics and modern, multicultural cuisine"

const includes = [
    {
        id: 1,
        title: 'Travel Plan'
    },
    {
        id: 2,
        title: 'Cheap Rates'
    },
    {
        id: 3,
        title: 'Hand-picked Tour'
    },
    {
        id: 4,
        title: 'Private Guide'
    }
]

const WhyChooseUs = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-20 my-10 lg:my-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 place-items-center">
                    <div>
                        <img
                            src="https://img.freepik.com/free-psd/travel-tourism-instagram-post-social-media-post-template_106176-2392.jpg?t=st=1700116951~exp=1700117551~hmac=e7bbc774de2668c55be5118a47759b40c87025ca381b2e15de7762e8a1a4b6f9"
                            alt="why choose us"
                            className="w-80 lg:w-full"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-bold">Why Choose Us</h3>
                        <h2 className="text-2xl lg:text-4xl font-bold mt-2 mb-4">Plan Your Trip<br />With Trisog</h2>
                        <p>{details}</p>
                        <div className="grid grid-cols-2 gap-2 place-items-start mt-5">
                            {
                                includes.map(item => (
                                    <div className="flex justify-start items-center gap-2" key={item.id}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>
                                        <h4 className="text-base lg:text-lg font-bold">{item.title}</h4>
                                    </div>
                                ))
                            }
                        </div>
                        <button className="btn btn-outline mt-5 lg:mt-8">Contract Us</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs