import '../cssFiles/categories.css'
import '../cssFiles/navBar.css'
import { Link } from 'react-router-dom'
const Categories = ()=>{
    return(
        <div className='wholePage'>
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
            <div className="mainText1 flex flex-col gap-2">
                <h1>Explore Podcasts By Category</h1>
                <p>Get the Most Exciting Podcasts online and unlimited from all around the world and grow your Faith</p>
            </div>
            <div className="mainGrid ">
                <div className="family rounded-lg">
                    <img src="src\assets\RcS.jpeg" alt="familly"className='familyimg' />
                    <h2>RcSproul</h2>
                    <Link to='/rcSproul'><img src="src\assets\play.png" alt="play" className='bg-white'/></Link>
                </div>
                <div className="friendships rounded-lg">
                <   img src="src\assets\paulW.png" alt="friendships" className='friendshipsimg'/>
                    <h2>Paul Washer</h2>
                    <Link to='/paulWasher'><img src="src\assets\play.png" alt="play" className='bg-white'/></Link>
                </div>
                <div className="marriage rounded-lg">
                    <img src="src\assets\johnM.jpeg" alt="marriage" className='marriageimg' />
                    <h2>John Marcarthur</h2>
                    <Link to='/johnMacarthur'><img src="src\assets\play.png" alt="play" className='bg-white'/></Link>
                </div>
                <div className="spiritualGifts rounded-lg">
                    <img src="src\assets\timothyK.jpeg" alt="spiritualGifts" className='spiritualGiftsimg'/>
                    <h2>Timothy Keller</h2>
                    <Link to='/timothyKeller'><img src="src\assets\play.png" alt="play" className='bg-white'/></Link>
                </div>
                <div className="service rounded-lg">
                    <img src="src\assets\withT.jpeg" alt="service" className='serviceimg' />
                    <h2>With The Perrys</h2>
                    <Link to='/withThePerrys'><img src="src\assets\play.png" alt="play" className='bg-white'/></Link>
                </div>
            </div>
        </div>
    )
}
export default Categories