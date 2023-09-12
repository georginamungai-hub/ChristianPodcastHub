import '../cssFiles/player.css'
const player = ()=>{
    return(
        <>
        <div className='header'>
            <h1>Top <b>Podcasts</b> of The Week</h1>
        </div><div className="mainDiv flex rounded-lg">
                <div className='mainDivdisc'>
                    <img src="src\assets\vintageDisc.png" alt="vintageDisc" />
                </div>
                <div className="player flex">
                    <img src="src\assets\track7.png" alt="trackimg" />
                </div>
            </div>
            </>
    )
}

export default player