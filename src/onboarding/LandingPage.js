import React from 'react'
import "./onboarding.css"
import NavBar from '../Components/NavBar'
import LottieAnimation from "../Images/record player.json"
import Lottie from 'react-lottie-player'

const LandingPage = () => {
  return (
    <div>
        <NavBar/>
        <div className='landing-page'>
            <div className='landing-page-txt'>
                <div className='txt-box'>
                    <h2>Play your favorite albums on the go.</h2>
                    <p>Get access to albums from your favorite artists. Discover the latest music from different artists around the world.</p>
                    <p>Sign up now to get a magical music listening experience!</p>
                </div>
                <div className='landing-page-btns'>
                 <input type="submit" value="Get started" className='get-started-btn'/>
                 <input type="submit" value="Download our mobile app" className='download-btn'/>
                </div>
            </div>

            <div className='landing-page-animation'>
               <Lottie loop animationData={LottieAnimation} play className='animation'/>
            </div>
        </div>
    </div>
  )
}

export default LandingPage;