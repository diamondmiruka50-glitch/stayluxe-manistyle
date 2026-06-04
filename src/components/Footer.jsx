function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>StayLuxe ManiStyle</h3>
        <p>Luxury Nail Care & Beauty in Nairobi</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} StayLuxe ManiStyle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;