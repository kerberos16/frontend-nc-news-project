import { Link } from "react-router-dom";
import './navigation.css'

const Navigation = () => {
  return (
    <nav>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/topics">
        Topics
      </Link>
      <Link className="link" to="/articles">
        Articles
      </Link>
      <Link className="link" to="/sign-up">
        Sign Up
      </Link>
      <Link className="link" to="/my-profile">
        Log In
      </Link>
    </nav>
  );
};

export default Navigation;
