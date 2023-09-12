import '../cssFiles/content.css'

const mainContent = ()=>{
    return(
        <div className='homeDiv'>
          <div className='mainText'>
            <h1>LISTEN TO PODCASTS ANYTIME AND ANYWHERE</h1>
            <p>Award-Winning podcasts that hook you in,</p>
            <p>make you think,</p>
            <p>make you laugh and PRAISE JESUS!</p>
            <button className='listenNowbutton rounded-full bg-black text-white w-60'>LISTEN NOW</button>
          </div>
          <div className='hugeDisc'>
            {/* <div className='image1'>
            <img src="src\assets\soundwave2.png" alt="soundwave"/>
            </div> */}
            <div className='image2'>
            <img src="src\assets\vintageDisc.png" alt="disc"/>
            </div>
          </div>
        </div>
    )
}
export default mainContent