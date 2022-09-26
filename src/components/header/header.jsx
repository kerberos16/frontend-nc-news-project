import './header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <Link className="link-header" to="/">
        <h1>Northcoders News</h1>
      </Link>
    </div>
  )
}

export default Header
