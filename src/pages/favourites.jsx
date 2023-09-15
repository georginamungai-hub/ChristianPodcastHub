import { useState,useEffect } from "react"

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
        <div className='mainContent'>
            {
                podcasts.map((podcast,index)=>{
                    return(
                        <div key={index} className='podcast rounded-md'>
                <div className='begin'>
                    <img src="src\assets\podcast1.jpg" alt="" />
                    <h3>{podcast.title}</h3>
                    <p onClick={()=>addTofav(podcast)}>Like</p>
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
    )
}
export default Favourites