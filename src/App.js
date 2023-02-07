import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './onboarding/LandingPage';


const Sacha = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='' exact element = {<LandingPage/>}/>
          <Route path='/LandingPage' exact element = {<LandingPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default Sacha