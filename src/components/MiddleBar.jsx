import '../cssFiles/middleBar.css'
import { Link } from 'react-router-dom'

const middleBar = ()=>{
    return(
        <nav>
        <div className="categories">
        <Link to='/family'>Family</Link>
        <Link to='/marriage'>Marriage</Link>
        <Link to='/friendships'>Friendships</Link>
        <Link to='/spiritualgifts'>Spiritual Gifts</Link>
        <Link to='/service'>Service</Link>
        </div>
    </nav>
    )
}
export default middleBar