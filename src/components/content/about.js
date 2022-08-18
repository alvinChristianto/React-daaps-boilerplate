import { Link } from "react-router-dom";

function About() {
  return(
    <>
      <h2>this is About</h2>
      <nav>
        <Link to="/">back</Link>
      </nav>
    </>
  );
}

export default About;