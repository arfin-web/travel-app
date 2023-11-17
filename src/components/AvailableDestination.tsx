import BookingForm from "./BookingForm"

const AvailableDestination = () => {
    return (
        <>
            <div className="card card-side shadow-md">
                <figure><img
                    src="https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg?w=996&t=st=1700220072~exp=1700220672~hmac=b06c906a45ccc7a21a485c11790ca770c2f3728e0dff43aac128c427fe445897"
                    alt="destination"
                    className="w-60 h-full"
                />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Wonders of the West Coast & kimberlay</h2>
                    <p>Budapest, Hungary</p>
                    <div className="card-actions justify-start">
                        <label htmlFor="my_modal_7" className="btn btn-primary btn-sm">Book Now</label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <BookingForm />
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </>
    )
}

export default AvailableDestination