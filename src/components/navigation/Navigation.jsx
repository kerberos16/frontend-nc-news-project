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
    </nav>
  );
};

export default Navigation;
