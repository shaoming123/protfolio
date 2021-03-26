import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header">
      <div className="main">
        <Typed
          className="typed-text"
          strings={["Web Design", "234234test1", "4566565test2", "dfdfdtest3"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        <button className="btn-main">Testing</button>
      </div>
    </div>
  );
};

export default Header;
