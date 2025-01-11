import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <h1>Medium-Rare</h1>
      </Link>
    </header>
  );
};
export default Header;
