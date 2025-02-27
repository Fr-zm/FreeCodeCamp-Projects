import { useState, useEffect } from 'react'
import './App.css'
import arrowUp from "./assets/arrowUp.png";
import arrowDown from "./assets/arrowDown.png";
import _pause from "./assets/pause.png";
import _reset from "./assets/reset.png";
import _beep from "./assets/beep.mp3";


function App() {
  const [Active, setActive] = useState(false);
  const [sessionL, setSessionL] = useState(25 * 60)
  const [breakL, setBreakL] = useState(5 * 60)
  const [session, setSession] = useState(true)
  const [timer, setTimer] = useState(25 * 60);
  const [type, setType] = useState("Session")
  const beep = document.getElementById("beep") as HTMLAudioElement;



  useEffect(() => {
    let interval: number | undefined;

    if (Active) {
      interval = window.setInterval(() => {
        setTimer((prev) => {
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval !== undefined) window.clearInterval(interval);
    };
  }, [Active]);



  useEffect(() => {
    if (timer == 0) {
      beep.currentTime = 3.3
      beep.play();
      setSession(session ? false : true)
      setTimer(session ? breakL : sessionL)
      setType(session ? "Break" : "Session")
    }
  })



  const pause = () => {
    setActive((prev) => !prev);
  };




  const reset = () => {
    setActive(false);
    setSessionL(25 * 60);
    setBreakL(5 * 60);
    setSession(true);
    setType("Session")
    setTimer(25 * 60);
    if (beep) {
      beep.pause();
      beep.currentTime = 0;
    }
  };


  const format = (second: number) => {
    const s = second % 60
    const m = Math.floor(second / 60)
    const time = `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`
    return time
  }




  const changeLength = (type: "session" | "break", amount: number) => {
    if (Active) return;

    if (type === "session") {
      if (sessionL + amount > 0 && sessionL + amount <= 3600) {
        setSessionL(sessionL + amount);
        if (session) setTimer(sessionL + amount);
      }
    } else {
      if (breakL + amount > 0 && breakL + amount <= 3600) {
        setBreakL(breakL + amount);
        if (!session) setTimer(breakL + amount);
      }
    }
  };

  const sessionIn = () => changeLength("session", 60);
  const sessionDe = () => changeLength("session", -60);
  const breakIn = () => changeLength("break", 60);
  const breakDe = () => changeLength("break", -60);

  return (
    <div id="container">
      <div className='inline'>
        <div id="break-box" className='box'>
          <div id="break-label">Break Length</div>
          <img src={arrowUp} id="break-increment" className='arrow up left' onClick={breakIn}></img>
          <div className='length'><div id="break-length" className='label'>{breakL / 60}</div></div>

          <img src={arrowDown} id="break-decrement" className='arrow down left' onClick={breakDe}></img>
        </div>


        <div id="session-box" className='box'>
          <div id="session-label">Session Length</div>
          <img src={arrowUp} id="session-increment" className='arrow up' onClick={sessionIn}></img>
          <div className='length'><div id="session-length" className='label'>{sessionL / 60}</div></div>

          <img src={arrowDown} id="session-decrement" className='arrow down' onClick={sessionDe}></img>
        </div>
      </div>

      <div id="timer-box">
        <div id="timer-label">{type}</div>
        <div id="time-left">{format(timer)}</div>
        <img src={_pause} onClick={pause} id="start_stop" className="btn"></img>
        <img src={_reset} onClick={reset} id="reset" className="btn"></img>
      </div>



      <audio id="beep" src={_beep} />
    </div>
  )
}

export default App