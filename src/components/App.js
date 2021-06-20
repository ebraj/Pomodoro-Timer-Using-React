import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import MainPage from "./MainPage";
import ConfigurePage from "./ConfigurePage";
// import CountDownSvg from "./CountDownSvg";

const App = () => {
  const [isConfigure, setIsConfigure] = useState(false);
  const [pomodoro, setPomodoro] = useState(0);
  const [pomoBreak, setPomoBreak] = useState(0);
  const updateConfigure = (bool) => {
    setIsConfigure(bool);
  };
  const updatePomodoro = (_pomodoro, _pomoBreak) => {
    setPomodoro(_pomodoro);
    setPomoBreak(_pomoBreak);
  };
  //UseEffect to take eye on bool change
  useEffect(() => {
    setIsConfigure(isConfigure);
  }, [isConfigure]);
  return (
    <div className="app__section">
      <MainPage
        updateConfigure={updateConfigure}
        pomodoro={pomodoro}
        pomoBreak={pomoBreak}
      />
      {isConfigure && (
        <ConfigurePage
          updateConfigure={updateConfigure}
          updatePomodoro={updatePomodoro}
        />
      )}
    </div>
  );
};

export default App;
