import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      Page Not Found!!! <br />
      <br />
      <Link to={"/"}>
        {" "}
        <button> Go Back to Home</button>{" "}
      </Link>
    </div>
  );
};

export default Error;
