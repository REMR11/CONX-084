import React from "react";

function Navbar() {
    return (
        <nav className="bg-gradient-to-t 
        from-slate-700 
        to-slate-600 
        border-b-4
        fixed
        top-0 right-0 w-screen">
            <div className="
            shadow-2xl 
            shadow-black
            ">
                <ul className="flex flex-grow justify-end">
                    <li className="m-2
                    px-4
                    py-1
                    rounded-md
                    hover:shadow-xl
                    hover:shadow-slate-800
                    ">Home</li>
                    <li className="m-2
                    px-4
                    py-1
                    rounded-md
                    hover:shadow-xl
                    hover:shadow-slate-800
                    ">History</li>
                    <li className="m-2
                    px-4
                    py-1
                    rounded-md
                    hover:shadow-xl
                    hover:shadow-slate-800
                    ">About</li>
                    <li className="m-2
                    px-4
                    py-1
                    rounded-md
                    hover:shadow-xl
                    hover:shadow-slate-800
                    ">Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;