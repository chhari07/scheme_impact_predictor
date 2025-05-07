import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "schemes", path: "/schemes" },
  
  ];

  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      backgroundColor: "white",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      zIndex: 50,
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      background: "linear-gradient(to right, #22c55e, #15803d)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    menu: {
      display: "flex",
      gap: "24px",
      alignItems: "center",
    },
    navLink: {
      fontSize: "18px",
      fontWeight: 500,
      padding: "4px 12px",
      borderRadius: "9999px",
      transition: "background-color 0.3s, color 0.3s",
      color: "black",
      textDecoration: "none",
    },
    activeNavLink: {
      backgroundColor: "black",
      color: "white",
    },
    menuButton: {
      display: "none",
      background: "none",
      border: "none",
      cursor: "pointer",
    },
    mobileMenu: {
      display: "none",
      backgroundColor: "white",
      borderTop: "1px solid #e5e7eb",
    },
    mobileNavLink: {
      display: "block",
      padding: "8px 16px",
      fontSize: "16px",
      color: "black",
      textDecoration: "none",
      transition: "background-color 0.3s, color 0.3s",
    },
  };

  return (
    <header style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          Scheme Impact Predictor
        </Link>

        {/* Desktop Menu */}
        <nav style={styles.menu}>
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              style={({ isActive }) =>
                isActive
                  ? { ...styles.navLink, ...styles.activeNavLink }
                  : styles.navLink
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          style={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={styles.mobileMenu}>
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              style={styles.mobileNavLink}
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
