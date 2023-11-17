import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                console.log('Login successful. Token:', token);
                localStorage.setItem('token', token);
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Login Successful",
                });
                navigate('/');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className="container mx-auto px-2 lg:px-16 my-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://img.freepik.com/free-photo/sign-up-form-button-graphic-concept_53876-123684.jpg?w=740&t=st=1700230001~exp=1700230601~hmac=348bc4fc213b59eeeccd1c970e1f8f079e0d3868ba7cf19ff95a03817e3f7b5e"
                        alt="Album"
                        className="w-80 lg:w-96"
                    />
                </figure>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;