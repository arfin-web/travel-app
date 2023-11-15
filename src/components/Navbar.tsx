import NavMenus from "./NavMenus"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-200 lg:px-10">
                <div className="navbar-start">
                    <div className="flex flex-col lg:flex-row">
                        <p className="text-xs">(000)999-898=999</p>
                        <div className="divider divider-horizontal"></div>
                        <p className="text-xs">info@trisog.com</p>
                    </div>
                </div>
                <div className="navbar-center">

                </div>
                <div className="navbar-end">
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex justify-center items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="oklch(var(--bc))" viewBox="0 0 256 256"><path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="oklch(var(--bc))" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="oklch(var(--bc))" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="oklch(var(--bc))" viewBox="0 0 256 256"><path d="M216,112c0,22.57-7.9,43.2-22.23,58.11C180.39,184,162.25,192,144,192c-17.88,0-29.82-5.86-37.43-12L95.79,225.83A8,8,0,0,1,88,232a8.24,8.24,0,0,1-1.84-.21,8,8,0,0,1-6-9.62l32-136a8,8,0,0,1,15.58,3.66l-16.9,71.8C114,166,123.3,176,144,176c27.53,0,56-23.94,56-64A72,72,0,1,0,65.63,148a8,8,0,0,1-13.85,8A88,88,0,1,1,216,112Z"></path></svg>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <select className="select w-20 select-ghost select-xs">
                            <option selected>EUR</option>
                            <option>English</option>
                            <option>Bangla</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="navbar bg-base-100 lg:px-10 lg:py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavMenus />
                        </ul>
                    </div>
                    <a className="text-xl font-bold">Travel</a>
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        <NavMenus />
                    </ul>
                </div>
                <div className="navbar-center">

                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="oklch(var(--bc))" viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg>
                        Login/Sign Up
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar