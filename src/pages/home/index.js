import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Link className="text-red-500 font-bold text-6xl cursor-pointer hover:text-gray-400" to='/login'>Login</Link>
        </>
    )
};

export default Home;