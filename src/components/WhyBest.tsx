const includes = [
    {
        id: 1,
        title: 'Total Destinations',
        value: '120+'
    },
    {
        id: 2,
        title: 'Total Travelers',
        value: '12k+'
    },
    {
        id: 3,
        title: 'Travel Packages',
        value: '500+'
    },
    {
        id: 4,
        title: 'Positive Reviews',
        value: '7k+'
    }
]

const WhyBest = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-20 my-10 lg:my-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 place-items-center">
                    <div>
                        <h3 className="text-xl lg:text-2xl font-bold">Why We Are Best</h3>
                        <h2 className="text-2xl lg:text-4xl font-bold mt-2">Keep Things<br />Flexible</h2>
                        <button className="btn btn-outline mt-5">Contract Us</button>
                        <div className="grid grid-cols-2 gap-2 lg:gap-6 place-items-start mt-5 lg:mt-10">
                            {
                                includes.map(item => (
                                    <div key={item.id}>
                                        <h1 className="text-2xl lg:text-4xl">{item.value}</h1>
                                        <h4 className="text-sm lg:text-base font-bold">{item.title}</h4>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://img.freepik.com/free-vector/realistic-travel-agency-poster-with-plane_23-2149359933.jpg?w=740&t=st=1700132878~exp=1700133478~hmac=b395ea66722ddb0b944248fd05ac55c8159f6d68ed478c1d06e933a528b1921c"
                            alt="why We are best"
                            className="w-80 lg:w-full"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyBest