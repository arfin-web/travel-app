const weatherInfo = [
    {
        id: 1,
        season: 'Jan - Feb',
        temparature: '12oc - 18oc'
    },
    {
        id: 2,
        season: 'Mar - Apr',
        temparature: '12oc - 18oc'
    },
    {
        id: 3,
        season: 'May - jun',
        temparature: '12oc - 18oc'
    },
    {
        id: 4,
        season: 'Jul - Aug',
        temparature: '12oc - 18oc'
    },
    {
        id: 5,
        season: 'Sep - Oct',
        temparature: '12oc - 18oc'
    },
    {
        id: 6,
        season: 'Nov - Dec',
        temparature: '12oc - 18oc'
    },
]

const WeatherInfo = () => {
    return (
        <div className="card w-80 lg:w-96 bg-base-200 rounded-sm mt-5">
            <div className="card-body">
                <h2 className="card-title font-bold mb-3">Weather</h2>
                {
                    weatherInfo.map(info => (
                        <>
                            <div className="flex justify-between items-center" key={info.id}>
                                <h5 className="font-bold">{info.season}</h5>
                                <h5>{info.temparature}</h5>
                            </div>
                            <hr className="border-2 border-base-300" />
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default WeatherInfo