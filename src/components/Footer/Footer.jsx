import "./Footer.scss";
import Facebook from "../../assets/images/Facebook.svg?react";
import X from "../../assets/images/X_twitter.svg?react";
import Instagram from "../../assets/images/Instagram.svg?react";
import Pinterest from "../../assets/images/Pinterest.svg?react";
import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { text: "For photographers", link: "/" },
    { text: "Hire talent", link: "/" },
    { text: "Inspiration", link: "/" },
  ],
  company: [
    { text: "About", link: "/" },
    { text: "Careers", link: "/" },
    { text: "Support", link: "/" },
  ],
};

const copyrightLinks = [
  { text: "Terms", link: "/" },
  { text: "Privacy", link: "/" },
  { text: "Cookies", link: "/" },
];

const Footer = () => {
  return (
    <footer>
      <div className="header_services-wrapper">
        <h1 className="footer__header">Snaps</h1>

        <div className="services-wrapper">
          <div className="services-links">
            {footerLinks.services?.map((link) => (
              <p className="links" key={link.text}>
                {link.text}
              </p>
            ))}
          </div>
          <div className="company-links">
            {footerLinks.company?.map((link) => (
              <p className="links" key={link.text}>
                {link.text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="footer__icons">
          <Facebook />
          <X />
          <Instagram />
          <Pinterest />
        </div>

        <div className="footer__copyright">
          <p>&copy; {new Date().getFullYear()} Snaps</p>
          <div className="footer__privacy">
            {copyrightLinks.map((link) => (
              <Link key={link.text} to={link.link} className="links">
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
