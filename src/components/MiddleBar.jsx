import '../cssFiles/middleBar.css'
import { Link } from 'react-router-dom'

const middleBar = ()=>{
    return(
        <nav>
        <div className="categories">
        <Link to='/paulWasher'>Paul Washer</Link>
        <Link to='/timothyKeller'>Timothy Keller</Link>
        <Link to='/withThePerrys'>With The Perrys</Link>
        <Link to='/rcSproul'>Rc Sproul</Link>
        <Link to='/johnMacarthur'>John Macarthur</Link>
        </div>
    </nav>
    )
}
export default middleBar