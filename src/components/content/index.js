import {Link } from "react-router-dom";

function Content() {
  return(
    <>
      <h2>this is content</h2>
      <nav>
        <Link to="/About">About</Link>
        <br />
        <Link to="/Login">Login</Link>
      </nav>
    </>
  );
}

export default Content;