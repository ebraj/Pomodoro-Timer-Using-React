import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const MainPage = (props) => {
  const { updateConfigure, pomodoro, pomoBreak } = props;

  return (
    <div className="main__page">
      <Header />
      <Main
        updateConfigure={updateConfigure}
        pomodoro={pomodoro}
        pomoBreak={pomoBreak}
      />
      <Footer />
    </div>
  );
};

export default MainPage;
