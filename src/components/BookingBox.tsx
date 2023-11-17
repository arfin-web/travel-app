import { Link } from "react-router-dom"

const fields = [
    {
        id: 1,
        label: 'Destination',
        icon: "M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.31-11.31L107.1,137.58,24,98.22l.14,0L216,40Z",
        type: "text",
        placeorder: "Where to go?"
    },
    {
        id: 2,
        label: 'Type',
        icon: "M34.76,42A8,8,0,0,0,32,48V216a8,8,0,0,0,16,0V171.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V48A8,8,0,0,0,210.76,42c-28,24.23-51.72,12.49-79.21-1.12C103.07,26.76,70.78,10.79,34.76,42ZM208,164.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V51.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z",
        type: "text",
        placeorder: "Activity"
    },
    {
        id: 3,
        label: 'When',
        icon: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z",
        type: "text",
        placeorder: "Date"
    },
    {
        id: 4,
        label: 'Guests',
        icon: "M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z",
        type: "number",
        placeorder: "0"
    },
]

const BookingBox = () => {
    return (
        <>
            <div className="bg-base-100 rounded-xl px-5 lg:px-3 py-5 lg:mr-24 z-50 lg:-mt-52">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
                    {
                        fields.map((field) => (
                            <div key={field.id}>
                                <h4>{field.label}</h4>
                                <div className="join mt-2">
                                    <button className="btn btn-ghost border-2 border-base-200 join-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="oklch(var(--n))" viewBox="0 0 256 256"><path d={field.icon}></path></svg>
                                    </button>
                                    <input type={field.type} className="input w-full lg:w-36 input-bordered join-item" placeholder={field.placeorder} />
                                </div>
                            </div>
                        ))
                    }
                    <div>
                        <h4 className="text-transparent hidden lg:block">Action</h4>
                        <Link
                            to='/destination'
                            className="btn btn-warning mt-2">
                            Search
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingBox