const about = `
The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain,[k][14] is an island country in Northwestern Europe, off the north-western coast of the continental mainland.[15] It comprises four countries – England, Scotland, Wales, and Northern Ireland.[l][16] It includes the island of Great Britain, the north-eastern part of the island of Ireland, and most of the smaller islands within the British Isles.[17] Northern Ireland shares a land border with the Republic of Ireland; otherwise, the United Kingdom is surrounded by the Atlantic Ocean, the North Sea, the English Channel, the Celtic Sea and the Irish Sea. The total area of the United Kingdom is 93,628 square miles (242,495 km2), with an estimated 2022 population of nearly 67 million people.
`

const basicInfo = [
    {
        id: 1,
        title: 'Country',
        value: 'Turkey'
    },
    {
        id: 2,
        title: 'Language',
        value: 'turkish, kurdish'
    },
    {
        id: 3,
        title: 'Currency',
        value: 'Turkish Lira'
    },
    {
        id: 4,
        title: 'Area',
        value: '2,036 Square Miles'
    },
    {
        id: 5,
        title: 'Population',
        value: '15M'
    },
    {
        id: 6,
        title: 'Time Zone',
        value: 'UTC+2'
    },
    {
        id: 7,
        title: 'Time To Travel',
        value: 'May, June, July August'
    },
]

const DestinationInfo = () => {
    return (
        <>
            <div>
                <h1 className="text-2xl font-bold my-5">About UK</h1>
                <p>{about}</p>
            </div>
            <div>
                <h1 className="text-2xl font-bold my-5">Basic Info</h1>
                <div className="card w-80 lg:w-full bg-base-200 rounded-sm mt-5">
                    <div className="card-body">
                        <div className="overflow-x-auto">
                            <table className="table">
                                <tbody>
                                    {
                                        basicInfo.map(info => (
                                            <tr key={info.id}>
                                                <td>{info.title}</td>
                                                <td className="font-bold">{info.value}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DestinationInfo