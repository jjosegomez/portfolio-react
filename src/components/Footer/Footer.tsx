import React from 'react';
import "./Footer.css"

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {

  const lastUpdate = "January 1st, 2024"

  return (
    <footer>
      <p>&copy; Tech by Juan 2023</p>
      <p>Last Updated: {lastUpdate}</p>
    </footer>
  );
};

export default Footer;
