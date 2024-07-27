/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Info = ({ text1, text2, link }) => {
  return (
    <div className="info">
      {text1}
      <Link to={`${link}`}>{text2}</Link> instead.
    </div>
  );
};

export default Info;
