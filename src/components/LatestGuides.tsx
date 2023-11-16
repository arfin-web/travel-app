const guides = [
    {
        id: 1,
        title: "The Impact of Covid-19 on Travel & Tourism Industry",
        date: "July 13, 2023",
        image: "https://img.freepik.com/free-photo/smiling-tourist_1098-19538.jpg?w=996&t=st=1700148334~exp=1700148934~hmac=615332d8801856b39fe3986fa2330a8b913b481bcc5ccbe2c60efcf0d72c7d20"
    },
    {
        id: 2,
        title: "The Impact of Covid-19 on Travel & Tourism Industry",
        date: "July 13, 2023",
        image: "https://img.freepik.com/free-photo/smiling-tourist_1098-19538.jpg?w=996&t=st=1700148334~exp=1700148934~hmac=615332d8801856b39fe3986fa2330a8b913b481bcc5ccbe2c60efcf0d72c7d20"
    },
    {
        id: 3,
        title: "The Impact of Covid-19 on Travel & Tourism Industry",
        date: "July 13, 2023",
        image: "https://img.freepik.com/free-photo/smiling-tourist_1098-19538.jpg?w=996&t=st=1700148334~exp=1700148934~hmac=615332d8801856b39fe3986fa2330a8b913b481bcc5ccbe2c60efcf0d72c7d20"
    },
    {
        id: 4,
        title: "The Impact of Covid-19 on Travel & Tourism Industry",
        date: "July 13, 2023",
        image: "https://img.freepik.com/free-photo/smiling-tourist_1098-19538.jpg?w=996&t=st=1700148334~exp=1700148934~hmac=615332d8801856b39fe3986fa2330a8b913b481bcc5ccbe2c60efcf0d72c7d20"
    },
]

const LatestGuides = () => {
    return (
        <>
            <div className='container bg-base-100 mx-auto mt-16 lg:mt-0 px-2 lg:px-16 py-10 lg:py-20'>
                <h3 className="text-xl lg:text-2xl text-warning font-bold text-center">Updates</h3>
                <h2 className="text-2xl lg:text-3xl font-bold text-center">Latest Travel Guide</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 place-items-stretch pt-14">
                    {
                        guides.map((guide) => (
                            <div className="card lg:card-side bg-base-100 rounded-sm" key={guide.id}>
                                <figure><img className="w-full lg:w-52 h-full" src={guide.image} alt="Album" /></figure>
                                <div className="card-body">
                                    <p>{guide.date} .Admin</p>
                                    <h2 className="card-title">{guide.title}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr />
        </>
    )
}

export default LatestGuides