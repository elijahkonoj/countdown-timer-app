import { useState, useEffect } from 'react'
import { FaFacebookSquare, FaInstagram, FaPinterestP } from "react-icons/fa";
//import ReactCardFlip from 'react-card-flip';
//import './countDownFlip.css'
import './App.css'

function App() {
  
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);


  const deadline = "December, 31 2023"

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className='container'> 
        <div className='header-container'>
          <h1 className='heading'>We're launching soon</h1>
          </div> 
           
           <div className='card-container'>
                  <div className='card-front'> 
                        <div className='card'>
                           <span>{days}</span>
                        </div>
                        <div className='card'>
                           <span>{hours}</span>
                        </div> 
                        <div className='card'>
                            <span>{minutes}</span>
                         </div>
                        <div className='card'>
                           <span>{seconds}</span>
                        </div> 
                  </div> 
                  <div className='card-back'>
                         <div className='card'>
                             <span className='message'>Countdown<br/> complete!</span>
                         </div>
                  </div>
           </div>
            
          <div className='small-container'>
                 <small className='days'>Days</small>
                 <small className='hours'>Hours</small>
                 <small className='minutes'>Minutes</small>
                 <small className='seconds'>Seconds</small>
          </div>
        <div className='icons'>
          <FaFacebookSquare className='facebook' size={32} style={{color: 'brown'}}/>
          <FaInstagram className='instagram' size={32} style={{color: 'white'}}/>
          <FaPinterestP className='pintest' size={32} style={{borderRadius: '100px', backgroundColor: 'white', padding: '5px'}}/>
        </div>
      </div>
    </>
  )
}

export default App

