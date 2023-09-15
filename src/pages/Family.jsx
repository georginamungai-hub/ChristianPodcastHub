import '../cssFiles/family.css'
import '../cssFiles/navBar.css'
import { Link } from 'react-router-dom'
const FamilyPod =()=>{
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
        <div className='topImage'>
            <img src="src\assets\podcastmic.jpg" alt="podcastmic" />
        </div>
        <div className='text'>
            <h1>Friday Goss with Gideon</h1>
            <p>A podcast about skills, job search and the technicalities of enterprenurship</p>
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
            <div className='preview1 bg-black h-28 w-100 rounded-md'>Hello</div>
            <div className='preview2 bg-black h-28 w-100 rounded-md'>Hello</div>
            <div className='preview3 bg-black h-28 w-100 rounded-md'>Hello</div>
        </div>
        </div>
        </div>
        </>
    )
}
export default FamilyPod
