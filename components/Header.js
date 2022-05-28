import React from "react";
import styled from "styled-components";

const Header = ({ address }) => {
  return (
    <div className="Wrapper2">
      <div className="title">Assets</div>
      <div className="buttonContainer">
        <div
          className="Button"
          style={{ backgroundColor: "#3773f5", color: "white" }}
        >
          Buy / Sell
        </div>
        <div className="Button">Send / Receive</div>
      </div>
    </div>
  );
};

export default Header;
