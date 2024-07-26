/* eslint-disable react/prop-types */
import React from "react";

const Info = ({ text1, text2, link }) => {
  return (
    <div className="info">
      {text1}
      <a href={`${link}`}>{text2}</a> instead.
    </div>
  );
};

export default Info;
