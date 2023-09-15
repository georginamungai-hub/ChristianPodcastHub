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
                            <p>Categories</p>
                            <p>Featured</p>
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
                    <img src="src\assets\family.jpg" alt="familly"className='familyimg' />
                    <h2>Family</h2>
                    <button className='play1 w-20 h-10 rounded-full '><img src="src\assets\play.png" alt="play" className='bg-white'/></button>
                </div>
                <div className="friendships rounded-lg">
                <   img src="src\assets\friendships.jpg" alt="friendships" className='friendshipsimg'/>
                    <h2>Friendships</h2>
                    <button className='play1 w-20 h-10 rounded-full '><img src="src\assets\play.png" alt="play" className='bg-white'/></button>
                </div>
                <div className="marriage rounded-lg">
                    <img src="src\assets\marriage.jpg" alt="marriage" className='marriageimg' />
                    <h2>Marriage</h2>
                    <button className='play1 w-20 h-10 rounded-full '><img src="src\assets\play.png" alt="play" className='bg-white'/></button>
                </div>
                <div className="spiritualGifts rounded-lg">
                    <img src="src\assets\spiritualGifts.jpg" alt="spiritualGifts" className='spiritualGiftsimg'/>
                    <h2>Spiritual Gifts</h2>
                    <button className='play1 w-20 h-10 rounded-full '><img src="src\assets\play.png" alt="play" className='bg-white'/></button>
                </div>
                <div className="service rounded-lg">
                    <img src="src\assets\service.jpg" alt="service" className='serviceimg' />
                    <h2>Service</h2>
                    <button className='play1 w-20 h-10 rounded-full '><img src="src\assets\play.png" alt="play" className='bg-white'/></button>
                </div>
            </div>
        </div>
    )
}
export default Categories