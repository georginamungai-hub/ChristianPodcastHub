import { Link } from "react-router-dom"
import '../cssFiles/navBar.css'
const navigation = ()=>{
    // let subMenu = document.getElementById("subMenu");

    // function toggleMenu(){
    //     subMenu.classList.toggle("open-menu");
    // }
    return(
        <nav>
            <div className="main">
            <div className="begin">
            <img src="src\assets\soundwave2.png" alt="soundwave" className="w-2/3" />
            <p>PODCAST</p>
            </div>
            <div className="options">
                <Link to='/'>Home</Link>
                <Link to='/categories'>Categories</Link>
                {/* <p onClick={toggleMenu()}>Categories</p> */}
                <Link to='/favourites'>Favourites</Link>
                {/* <Link to=''>Watch History</Link> */}
            </div>
            {/* <div className="sub-menu-wrap" id="subMenu">
                <div className="sub-menu">
                    <Link className="sub-menu-link">Paul Washer</Link>
                    <Link className="sub-menu-link">Rc Sproul</Link>
                    <Link className="sub-menu-link">John Macarthur</Link>
                    <Link className="sub-menu-link">Timothy Keller</Link>
                    <Link className="sub-menu-link">With The Perrys</Link>
                </div>
            </div> */}
            <div className="searchButton">
                <input type="text" placeholder="Search" className="bg-white rounded-full" />
            </div>
            </div>
        </nav>
    )
}

export default navigation