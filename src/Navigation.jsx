import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav id="navigation">
      <Link to="/">Home</Link>
      <Link to="./../store">Store</Link>
    </nav>
  );
}

export default Navigation;
