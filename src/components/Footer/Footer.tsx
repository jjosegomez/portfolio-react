import React from 'react';
import "./Footer.css"

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {

  const lastUpdate = "December 31st, 2023"

  return (
    <footer>
      <p>&copy; Tech by Juan 2023 | Last Updated: {lastUpdate}</p>
    </footer>
  );
};

export default Footer;
