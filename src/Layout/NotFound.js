import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>
        Yikes. There's nothing here. 
      </p>
      <Link to={"/"} className="btn btn-warning">
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;
