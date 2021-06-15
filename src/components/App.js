import React from "react";
import "./App.scss";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  return (
    <div className="app__section">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
