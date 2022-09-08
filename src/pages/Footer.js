import React from "react";

function Footer() {
    const today = new Date(); 
  return (
    <footer className="footer">
      <p className="footer-info">Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
