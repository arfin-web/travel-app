import { useState } from "react";
import Swal from 'sweetalert2'

const BookingForm = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: '',
        date: '',
    });

    // Function to handle form input changes
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Save form data to localStorage
        localStorage.setItem('bookingData', JSON.stringify(formData));
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Booking Done",
        });

        // Clear form fields after submission
        setFormData({
            userName: '',
            email: '',
            phone: '',
            date: '',
        });

    };
    return (
        <>
            <div>
                <h2 className="text-center text-2xl font-bold my-5">Book Now</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input
                            type="text"
                            name="userName"
                            placeholder="User Name"
                            className="input input-bordered"
                            value={formData.userName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Your Email"
                            className="input input-bordered"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input
                            type="number"
                            name="phone"
                            placeholder="Your Phone Number"
                            className="input input-bordered"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input
                            type="date"
                            name="date"
                            placeholder="Your Preferable Date"
                            className="input input-bordered"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BookingForm