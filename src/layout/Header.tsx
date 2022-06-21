import React from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import defaultLogo from '../assets/images/neco-logo.png';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="container">
        <a href="./" className="default-logo-anchor">
          <img src={defaultLogo} alt="NECO Logo" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="./" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="./" rel="">
                About NECO
              </a>
            </li>
            <li>
              <a href="./" rel="">
                Our Exams
              </a>
            </li>
            <li>
              <a href="./" rel="">
                NECO Results
              </a>
            </li>
            <li>
              <a href="./" rel="">
                Payments
              </a>
            </li>
            <li>
              <a href="./" rel="">
                Centres
              </a>
            </li>
            <li>
              <a href="./" rel="">
                Operators
              </a>
            </li>
            <li>
              <a href="./" rel="">
                FAQ
              </a>
            </li>
            <li>
              <a href="./" rel="">
                Contact Us
              </a>
            </li>
            <li>
              <a href="./" rel="">
                Support
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <a href="./" className="nav-login-button">
            Login <HiOutlineChevronDown />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
