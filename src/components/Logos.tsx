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

const Logos = () => {
    return (
        <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-28 place-items-center my-5">
            {
                logos.map(logo => (
                    <div key={logo.id} className="w-32 rounded-full overflow-hidden">
                        <img src={logo.image} alt="logos" />
                    </div>
                ))
            }
        </div>
    )
}

export default Logos