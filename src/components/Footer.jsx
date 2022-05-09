import "../assets/styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer_container">
        <div className="footer_left">
          <div className="footer_logo">
            <img src="/favicon.svg" alt="" />
          </div>
          <ul className="footer_address">
            <li>St. Gallen, Switzerland</li>
            <li>+1 (234) 56789, +1 987 654 3210</li>
            <li>info@chainversum.com</li>
            <li>support@chainversum.com</li>
          </ul>
        </div>
        <div className="footer_right">
          <ul className="footer_links">
            <li>About</li>
            <li>Roadmap</li>
            <li>Token</li>
            <li>Team</li>
          </ul>
          <ul className="footer_links">
            <li>Services</li>
            <li>Statistics</li>
            <li>Whitepaper</li>
            <li>FAQ</li>
          </ul>
          <ul className="footer_links">
            <li>Whitepaper</li>
            <li>Technical Paper</li>
            <li>Business Summary</li>
            <li>Brand Resources</li>
          </ul>
        </div>
      </div>
      <h3 className="footer_copyright">
        <span className="green">© Chainversum</span>, {new Date().getFullYear()}
      </h3>
    </footer>
  );
};

export default Footer;
