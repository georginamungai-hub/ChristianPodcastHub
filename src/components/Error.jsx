import React from "react"
import { Link } from "react-router-dom"

const Error = ()=>{
    return(
        <>
            <div>
            <nav>
            <div className="main">
            <div className="begin">
            <img src="src\assets\soundwave2.png" alt="soundwave" className="w-2/3" />
            <p>PODCAST</p>
            </div>
            <div className="options">
                <Link to='/'>Home</Link>
                <Link to='/categories'>Categories</Link>
                <Link to='/favourites'>Favourites</Link>
            </div>
            <div className="searchButton">
                <input type="text" placeholder="Search" className="bg-white rounded-full" />
            </div>
            </div>
        </nav>
            </div>
            <h1 className="text-center decoration-solid"><b>There are no Favourites</b></h1>
        </>
    )
}

export default Error