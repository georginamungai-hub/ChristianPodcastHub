import { useState } from 'react'
import '../cssFiles/friendships.css'
import '../cssFiles/navBar.css'
import { Link } from 'react-router-dom'
import podcasts from '../jsonFiles/withThePerrys.json'
const friendshipsPod =()=>{
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
                        <p>Categories</p>
                        <p>Featured</p>
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
        </>
    )
}
export default friendshipsPod
