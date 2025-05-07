import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  const styles = {
    footer: {
      width: '100%',
      backgroundColor: '#000',
      padding: '2.5rem 1rem',
      boxSizing: 'border-box',
    },
    linkContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoText: {
      color: '#fff',
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    copyright: {
      marginTop: '1.25rem',
      textAlign: 'center',
      fontSize: '0.875rem',
      lineHeight: '1.5',
      color: '#fff',
    },
    policyContainer: {
      marginTop: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      fontSize: '0.875rem',
      fontWeight: '600',
      lineHeight: '1.5',
      color: '#fff',
    },
    divider: {
      height: '1rem',
      width: '1px',
      backgroundColor: 'rgba(100, 116, 139, 0.2)',
    },
  };

  return (
    <footer style={styles.footer}>
      <div>
        <Link to="/" style={styles.linkContainer}>
          <p style={styles.logoText}>Scheme Impact Predictor</p>
        </Link>
        <p style={styles.copyright}>
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <div style={styles.policyContainer}>
          <Link to="/privacy-policy" style={{ color: '#fff', textDecoration: 'none' }}>
            Privacy Policy
          </Link>
          <div style={styles.divider}></div>
          {/* Add more links here if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
