import { Link } from "react-router-dom"
import '../cssFiles/navBar.css'
const navigation = ()=>{
    return(
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
    )
}

export default navigation