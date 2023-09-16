import '../cssFiles/withThePerrys.css'
import '../cssFiles/navBar.css'
import { Link } from 'react-router-dom'
import podcasts from '../jsonFiles/withThePerrys.json'
import { useState } from 'react'
const PaulWasherPod =()=>{
    const[fav,setFav] = useState([]);
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
                <Link to='/categories'>Categories</Link>
                <Link to='/favourites'>Favourites</Link>
            </div>
            <div className="searchButton">
                <input type="text" placeholder="Search" className="bg-white rounded-full" />
            </div>
            </div>
        </nav>
        </div>
        <div className='allP bg-gradient-to-r from-orange-300 via-teal-800 to-orange-300'>
        <div className='topImage'>
            <img src="src\assets\podcastmic.jpg" alt="podcastmic" />
        </div>
        <div className='text'>
            <h1>With The Perrys</h1>
            <p>With The Perrys is a podcast with a whole lot of truth given in a short amount of time. Preston Perry and Jackie Hill Perry will bring their humor, honesty, and insight into conversations on everything from relationships, theology, politics, race, & parenting.</p>
        </div>
        <div className='firstSocials'>
            <h5><b>Listen on</b></h5>
            <button className='spotify1 w-8 h-8 rounded-lg'><img src="src\assets\spotify.png" alt="spotify" /></button>
            <button className='apple1 w-8 h-8 rounded-lg'><img src="src\assets\apple.png" alt="apple" /></button>
            <button className='google1 w-8 h-8 rounded-lg'><img src="src\assets\google.png" alt="google" /></button>
        </div>
        <div className='contentSec'>
        <div className='secondSocials flex flex-col gap-4 '>
            <button className='spotify2 w-40 h-10 rounded-md bg-amber-500 text-cyan-600'><b>Spotify</b></button>
            <button className='apple2 w-40 h-10 rounded-md bg-amber-500 text-cyan-600'><b>Apple</b></button>
            <button className='google2 w-40 h-10 rounded-md bg-amber-500 text-cyan-600'><b>Google Podcasts</b></button>
        </div>
        <div className='secondColumn'>
        <div className='latestEpisodes'><h1>Latest episodes</h1></div>
        <div className='flex flex-col gap-6'>
            {
                podcasts.map((podcast,index)=>{
                    return(
                        <>
                        <div key={index} className='preview1 h-30 w-100 rounded-md'>
                        <div className='firstImage'>
                    <img src="src\assets\withT.jpeg" alt="mainImg" className='rounded-md'/>
                </div>
                <div className='secondSegment'>
                    <h2>{podcast.title}</h2>
                    <div className='lastImage'>
                        <h3 className=''>Play Episode</h3>
                        <button className='w-8 h-8 rounded-lg'>
                            <a href={podcast.audio}><img src="src\assets\player2.png" alt="player2" /></a>
                        </button>
                        <button onClick={()=>addTofav(podcast)} className='w-6 h-6'><img src="src\assets\like.png" alt="Like" /></button>
                    </div>
                </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        </div>
        </div>
        <div className='topImage2'>
            <img src="src\assets\podcastmic.jpg" alt="podcastmic" />
        </div>
        </div>
        </>
    )
}
export default PaulWasherPod
