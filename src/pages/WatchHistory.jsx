import { useState } from 'react'
import '../cssFiles/watchHistory.css'
import '../cssFiles/navBar.css'
import { Link } from 'react-router-dom'
import podcasts from '../jsonFiles/withThePerrys.json'
// import podcasts from '../jsonFiles/johnMacarthur.json'
// import podcasts from '../jsonFiles/paulWasher.json'
// import podcasts from '../jsonFiles/rcSproul.json'
// import podcasts from '../jsonFiles/timothyKeller.json'

const WatchHistoryPod =()=>{
    const[fav,setFav] = useState([]);
    const truncateText = (text, maxLength = 50) =>{
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "..."
        }
        return text
    }
    const addTofav = (liked)=>{
        const newFavs = [...fav,liked]
        localStorage.setItem('favPodcasts',JSON.stringify(newFavs))
        setFav(newFavs)
    }
    // const delFav =(index)=>{
    //     const newFavs = fav.filter((fav,i)=>{
    //         if(i !== index){
    //             return fav
    //         }
    //     })
    // }
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
export default WatchHistoryPod
