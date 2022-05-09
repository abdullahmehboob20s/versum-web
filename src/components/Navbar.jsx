import { useState, useEffect } from "react";
import "../assets/styles/Navbar.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  });

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav_left">
        <img src="/logo-green.svg" alt="" className="nav_logo" />
      </div>
      {menu ? (
        <i className="bi bi-x" onClick={() => setMenu(false)}></i>
      ) : (
        <i className="bi bi-list" onClick={() => setMenu(true)}></i>
      )}
      <ul className={`nav_right ${menu && "menu_open"}`}>
        <Link
          to="Home"
          onClick={() => setMenu(false)}
          style={{ cursor: "pointer" }}
          activeClass="scrollLinkActive"
          spy={true}
          offset={-100}
        >
          Home
        </Link>
        <Link
          to="About"
          onClick={() => setMenu(false)}
          style={{ cursor: "pointer" }}
          activeClass="scrollLinkActive"
          spy={true}
          offset={-100}
        >
          About
        </Link>
        <Link
          to="Services"
          onClick={() => setMenu(false)}
          style={{ cursor: "pointer" }}
          activeClass="scrollLinkActive"
          spy={true}
          offset={-100}
        >
          Services
        </Link>
        <Link
          to="Roadmap"
          onClick={() => setMenu(false)}
          style={{ cursor: "pointer" }}
          activeClass="scrollLinkActive"
          spy={true}
          offset={-100}
        >
          Roadmap
        </Link>
        <Link
          to="Statistics"
          onClick={() => setMenu(false)}
          style={{ cursor: "pointer" }}
          activeClass="scrollLinkActive"
          spy={true}
          offset={-100}
        >
          Statistics
        </Link>
        <Link
          to="Token"
          onClick={() => setMenu(false)}
          style={{ cursor: "pointer" }}
          activeClass="scrollLinkActive"
          spy={true}
          offset={-100}
        >
          Token
        </Link>
        <Link
          to="Whitepaper"
          onClick={() => setMenu(false)}
          style={{ cursor: "pointer" }}
          activeClass="scrollLinkActive"
          spy={true}
          offset={-100}
        >
          Whitepaper
        </Link>
        <Link
          to="Team"
          onClick={() => setMenu(false)}
          style={{ cursor: "pointer" }}
          activeClass="scrollLinkActive"
          spy={true}
          offset={-100}
        >
          Team
        </Link>
        <Link
          to="FAQ"
          onClick={() => setMenu(false)}
          style={{ cursor: "pointer" }}
          activeClass="scrollLinkActive"
          spy={true}
          offset={-100}
        >
          FAQ
        </Link>
        <li className="nav_button">SIGN UP</li>
      </ul>
    </nav>
  );
};

export default Navbar;
