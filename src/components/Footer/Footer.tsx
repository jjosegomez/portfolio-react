import React from 'react';
import "./Footer.css"

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <footer>
      <p>&copy; Tech by Juan 2023 | Last Updated: {formattedDate}</p>
    </footer>
  );
};

export default Footer;
