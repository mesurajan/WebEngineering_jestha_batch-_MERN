import { useContext } from "react";
import { CartContext } from "../context/CartContexts";

function Header() {
  const { cartItems } = useContext(CartContext);

  const navbar = [
    { a: "/", label: "Home" },
    { a: "/about", label: "About" },
    { a: "/contact", label: "Contact" },
    { a: "/collection", label: "Collection" },
  ];
  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>Jewlens</h1>
        </div>
        <nav className="navbar">
          {navbar.map((item, index) => (
            <a href={item.a} key={index}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="primary-btn">🛒 {cartItems.length}</button>
      </header>
    </>
  );
}

export default Header;
