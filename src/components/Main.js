import React, { useState, useEffect } from "react";

const Main = (props) => {
  const { updateConfigure, pomodoro, pomoBreak } = props;
  const [isPlay, setIsPlay] = useState(false);
  /**
   * Minute and Seconds
   */
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  let endTime = 0;
  let countDownInterval = 0;
  let secondsLeftms = 0;

  /**
   * All about the Countdown Timer
   */
  /**
   * Change Play Pause Btn
   */

  const changePlayBtn = () => {
    setIsPlay(!isPlay);
  };
  const playFunction = () => {
    console.log("Play");
    endTime = parseInt(pomodoro) * 60000 + Date.now();
    setCountDown(endTime);
    countDownInterval = setInterval(() => {
      setCountDown(endTime);
    }, 500);
  };
  const pauseFunction = () => {
    // console.log("Pause");
  };
  const setCountDown = (_temp) => {
    secondsLeftms = _temp - Date.now();
    const secondsLeft = Math.round(secondsLeftms / 1000);
    let _tempMinute = parseInt(secondsLeft / 60);
    if (_tempMinute < 10) {
      setMinutes(`0${_tempMinute}`);
    } else {
      setMinutes(_tempMinute);
    }
    let _tempSecond = secondsLeft % 60;
    if (_tempSecond < 10) {
      setSeconds(`0${_tempSecond}`);
    } else {
      setSeconds(_tempSecond);
    }
  };
  const changeConfigure = () => {
    updateConfigure(true);
  };

  //UseEffect
  useEffect(() => {
    pomodoro < 10 ? setMinutes(`0${pomodoro}`) : setMinutes(pomodoro);
  }, [pomodoro, pomoBreak]);
  return (
    <div className="main__section">
      <div>
        <div className="main__section--title">
          <h1>
            {minutes} : {seconds}
          </h1>
        </div>
        <div className="main__section--icons">
          <div className="btn-play-pause" onClick={changePlayBtn}>
            {isPlay ? (
              <div>
                <svg
                  onClick={pauseFunction}
                  fill="#eeeeff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="20px"
                  height="20px"
                >
                  <path d="M 5 2 L 5 14 L 6 14 L 6 2 Z M 10 2 L 10 14 L 11 14 L 11 2 Z" />
                </svg>
              </div>
            ) : (
              <div onClick={playFunction}>
                <svg
                  fill="#eeeeff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20px"
                  height="20px"
                >
                  <path d="M 4 2 L 4 22 L 21.3125 12 Z" />
                </svg>
              </div>
            )}
          </div>
          <div className="btn-restart">
            <svg
              fill="#eeeeff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
              width="20px"
              height="20px"
            >
              <path d="M 10 0 L 0 2 L 3.03125 5.03125 C 1.273438 7.222656 0.1875 9.972656 0.1875 13 C 0.1875 20.074219 5.921875 25.8125 13 25.8125 C 20.078125 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 7.695313 22.59375 3.132813 18 1.1875 L 18 4.28125 C 21.027344 6.019531 23.0625 9.261719 23.0625 13 C 23.0625 18.5625 18.5625 23.0625 13 23.0625 C 7.4375 23.0625 2.9375 18.5625 2.9375 13 C 2.9375 10.726563 3.695313 8.652344 4.96875 6.96875 L 8 10 Z" />
            </svg>
          </div>
        </div>
        <div className="main__section--info" onClick={changeConfigure}>
          <p className="btn btn-configure">Configure</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
