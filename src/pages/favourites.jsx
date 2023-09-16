import { useState,useEffect } from "react"
import podcasts from '../jsonFiles/withThePerrys.json'
import React from "react"
const Favourites =()=>{
    const[podcasts,setPodcast]= useState([])
    const truncateText = (text, maxLength = 50) =>{
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "..."
        }
        return text
    }
    const fetchFavs =()=>{
        const allFavs = localStorage.getItem('favPodcasts');
        const data = JSON.parse(allFavs);
        setPodcast(data);
    }
    useEffect(()=>{
        fetchFavs()
    },[])
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
        <div className='mainContent'>
            {
                podcasts.map((podcast,index)=>{
                    return(
                        <div key={index} className='podcast rounded-md'>
                <div className='begin'>
                    <img src="src\assets\podcast1.jpg" alt="" />
                    <h3>{podcast.title}</h3>
                    <button onClick={()=>addTofav(podcast)} className='w-10 h-10'><img src="src\assets\like.png" alt="Like" /></button>
                </div>
                <div className='playerSection'>
                    <p>{truncateText(podcast.description)}</p>
                    <a href={podcast.audio}><img src="src\assets\player3.png" alt="" /></a>
                </div>
            </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default Favourites