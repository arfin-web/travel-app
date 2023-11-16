const images = [
    {
        id: 1,
        image: "https://img.freepik.com/free-photo/group-happy-friends-beach-man-tossing-happy-woman_146671-18983.jpg?w=996&t=st=1700151061~exp=1700151661~hmac=e5fd559ff274697565e4e8042d6f052c836dc3349181592540184105595d33b9"
    },
    {
        id: 2,
        image: "https://img.freepik.com/free-photo/group-happy-friends-beach-man-tossing-happy-woman_146671-18983.jpg?w=996&t=st=1700151061~exp=1700151661~hmac=e5fd559ff274697565e4e8042d6f052c836dc3349181592540184105595d33b9"
    },
    {
        id: 3,
        image: "https://img.freepik.com/free-photo/group-happy-friends-beach-man-tossing-happy-woman_146671-18983.jpg?w=996&t=st=1700151061~exp=1700151661~hmac=e5fd559ff274697565e4e8042d6f052c836dc3349181592540184105595d33b9"
    },
    {
        id: 4,
        image: "https://img.freepik.com/free-photo/group-happy-friends-beach-man-tossing-happy-woman_146671-18983.jpg?w=996&t=st=1700151061~exp=1700151661~hmac=e5fd559ff274697565e4e8042d6f052c836dc3349181592540184105595d33b9"
    },
    {
        id: 5,
        image: "https://img.freepik.com/free-photo/group-happy-friends-beach-man-tossing-happy-woman_146671-18983.jpg?w=996&t=st=1700151061~exp=1700151661~hmac=e5fd559ff274697565e4e8042d6f052c836dc3349181592540184105595d33b9"
    },
]

const Gallary = () => {
    return (
        <>
            <div className="container bg-base-100 mx-auto px-2 lg:px-16 py-10">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 place-items-stretch">
                    {
                        images.map(image => (
                            <img
                                key={image.id}
                                src={image.image}
                                alt="gallary"
                                className="w-80 lg:w-full rounded-sm"
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Gallary