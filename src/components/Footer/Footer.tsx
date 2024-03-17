import React from 'react';
import "./Footer.css"

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {

  return (
    <footer>
      <p>Last Updated: <time dateTime='2024-03-10'>March 17th, 2024</time></p>
      <p>&copy; Tech by Juan 2023.</p>
    </footer>
  );
};

export default Footer;
