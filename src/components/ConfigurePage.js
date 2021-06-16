import React from "react";

const ConfigurePage = () => {
  return (
    <div className="configure__section">
      <div className="configure__section--box">
        <div className="configure__section--box-upper">
          <h2>Configure 😊</h2>
          <p>
            <svg
              fill="#eeeeff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="40px"
              height="40px"
            >
              <path d="M 14.40625 13 L 13 14.40625 L 23.625 25 L 13 35.59375 L 14.40625 37 L 25.0625 26.40625 L 35.6875 37 L 37.09375 35.59375 L 26.46875 25 L 37.09375 14.40625 L 35.6875 13 L 25.0625 23.59375 Z" />
            </svg>
          </p>
        </div>
        <div className="filler-line"></div>
        <form className="configure__section--form">
          <div>
            <label>Focus Time</label>
            <input type="text" placeholder="25" />
          </div>
          <div>
            <label>Break Time</label>
            <input type="text" placeholder="05" />
          </div>
          <div className="configure__section--form-btn">
            <button className="submit-btn">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfigurePage;
