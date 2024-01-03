import React from 'react';
import "./Footer.css"

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {

  const lastUpdate = "January 3rd, 2024"

  return (
    <footer>
      <p>Last Updated: {lastUpdate}</p>
      <p>&copy; Tech by Juan 2023.</p>
    </footer>
  );
};

export default Footer;
