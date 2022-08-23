import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <p>
        Yikes. There's nothing here. 
      </p>
      <Link to={"/"} className="btn btn-warning">
        Return Home
      </Link>
    </>
  );
}

export default NotFound;
