import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav id="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./../store">Store</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
