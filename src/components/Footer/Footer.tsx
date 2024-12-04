import React from 'react';
import "./Footer.css"

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {

  return (
    <footer>
      <p>Last Updated: <time dateTime='2024-12-04'>Dec 4th, 2024</time></p>
    </footer>
  );
};

export default Footer;
