import '../cssFiles/content.css'

const mainContent = ()=>{
    return(
        <div className='homeDiv bg-gradient-to-r from-orange-300 via-teal-800 to-orange-300' >
          <div className='mainChunk grid grid-cols-2 gap-0'>
            <div className='firstImg'>
              <img src="src\assets\mainpod.jpg" alt="mainpod" className='rounded-lg' />
            </div>
            <div className='scndClmn'>
              <p>For All Your Sound Doctrine Needs</p>
              <h1>ChristianPodcastHub</h1>
              <div className='playingImages'>
                <img src="src\assets\replay.png" alt="" />
                <img src="src\assets\play.png" alt="" />
                <img src="src\assets\shuffle.png" alt="" />
                <img src="src\assets\player-removebg-preview.png" alt="" />
                <img src="src\assets\Volume.png" alt="" />
                <img src="src\assets\share.png" alt="" />
              </div>
              <p>LISTEN TO PODCASTS ANYTIME AND ANYWHERE,Award-Winning podcasts that hook you in,Make you think,Make you laugh and PRAISE JESUS!</p>
            </div>
          </div>
        </div>
    )
}
export default mainContent
