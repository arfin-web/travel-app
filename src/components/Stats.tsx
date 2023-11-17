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

const Stats = () => {
    return (
        <>
            <div className="container bg-base-100 mx-auto px-2 lg:px-10 py-10 lg:py-16">
                <hr />
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-6 place-items-start lg:place-items-center mt-5 lg:mt-10">
                    {
                        includes.map(item => (
                            <div key={item.id} className="flex justify-start items-center gap-3">
                                <h1 className="text-2xl lg:text-4xl">{item.value}</h1>
                                <h4 className="text-sm lg:text-base">{item.title}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Stats