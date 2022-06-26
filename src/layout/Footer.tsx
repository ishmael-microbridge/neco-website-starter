import React from 'react';
import necoLogo from '../assets/images/neco-logo.png';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-item logo-copyright">
            <img src={necoLogo} alt="NECO Logo" />
            <p>&copy; Copyright - National Examinations Council 2022</p>
          </div>
          <div className="footer-item">
            <h3>Use Links</h3>
            <ul>
              <li>
                <a href="./">Home</a>
              </li>
              <li>
                <a href="./">Management</a>
              </li>
              <li>
                <a href="./">Mission &amp; Vision</a>
              </li>
              <li>
                <a href="./">State Offices</a>
              </li>
              <li>
                <a href="./">Our Blog</a>
              </li>
              <li>
                <a href="./">About NECO</a>
              </li>
              <li>
                <a href="./">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h3>Our Portals</h3>
            <ul>
              <li>
                <a href="./">Our Examinations</a>
              </li>
              <li>
                <a href="./">NECO Results</a>
              </li>
              <li>
                <a href="./">Payments</a>
              </li>
              <li>
                <a href="./">Centres</a>
              </li>
              <li>
                <a href="./">Operators</a>
              </li>
              <li>
                <a href="./">Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <h4>Phone</h4>
              <p>
                08069232760, 08052218069, 08052218070, 08189342653, 08189342754
              </p>
            </div>
            <div className="contact-item">
              <h4>Email</h4>
              <a href="mailto:info@neco.gov.ng">info@neco.gov.ng</a>
            </div>
            <div className="contact-item">
              <h4>Location</h4>
              <p>
                National Examinations Council (NECO) Km 8, Bida Road, P.M.B 159,
                Minna, Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
