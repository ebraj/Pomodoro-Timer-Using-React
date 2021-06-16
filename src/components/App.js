import React from "react";
import "./App.scss";
import MainPage from "./MainPage";
import ConfigurePage from "./ConfigurePage";

const App = () => {
  return (
    <div className="app__section">
      {/* <MainPage /> */}
      <ConfigurePage />
    </div>
  );
};

export default App;
