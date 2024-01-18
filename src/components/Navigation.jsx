import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav id="navigation" className="">
      <ul className="ml-auto mr-auto flex h-20 max-w-screen-2xl items-center justify-end gap-4 p-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Collections</Link>
        </li>
        <li>
          <Link to="/store">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
