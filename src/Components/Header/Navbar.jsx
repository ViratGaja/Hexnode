import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleNavLinkClick = () => {
    setIsOpen(false);
    
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg fixed-top transition ${isSticky ? 'bg-white shadow py-2' : 'bg-transparent py-2'
          }`}
      >
        <div className="container-fluid px-4 px-lg-5 mx-lg-5">
          {/* Logo */}
          <a
            className={`navbar-brand ${isSticky ? 'text-black' : 'text-white'
              }`}
            href="#"
          >
            <span className="hexnode-logo">hexnode</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsOpen(true)}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke={isSticky ? "#000" : "#FFF"}
                strokeWidth="3"
                strokeLinecap="round"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </button>



          {/* Navigation Links (Desktop View) */}
          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link px-3 ${isSticky ? 'text-black' : 'text-white'
                    }`}
                  href="#hexnode"
                >
                  Why Hexnode
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link px-3 ${isSticky ? 'text-black' : 'text-white'
                    }`}
                  href="#features"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link px-3 ${isSticky ? 'text-black' : 'text-white'
                    }`}
                  href="#platform"
                >
                  Platforms
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link px-3 ${isSticky ? 'text-black' : 'text-white'
                    }`}
                  href="#customers"
                >
                  Customers
                </a>
              </li>
            </ul>

            {/* CTA Buttons (Desktop) */}
            <button onClick={() => navigate("/trail")}
              className={`btn btn-danger rounded-0 text-uppercase px-4 me-2 ${isSticky ? 'text-white' : 'text-white'
                }`}
            >
              14 DAY FREE TRIAL
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar (Mobile View) */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ×
        </button>
        <ul className="nav flex-column mt-5">
          <li className="nav-item">
            <a className="nav-link" href="#hexnode">
              Why Hexnode
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#features">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#platform">
              Platforms
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#customers">
              Customers
            </a>
          </li>
          <li className="nav-item">
            <button onClick={handleNavLinkClick} className="btn btn-danger rounded-0 w-100 mt-4 text-uppercase ">
              14 DAY FREE TRIAL
            </button>
          </li>
          <li className="nav-item mt-3">
            <button onClick={handleNavLinkClick} className="btn bg-transparent w-100 text-uppercase">
              Login
            </button>
          </li>
        </ul>
      </div>

      <style jsx>{`
            .transition {
              transition: all 0.3s ease;
            }
            .shadow {
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
           
            .nav-link {
              font-size: 15px;
              color: #020a19;
              letter-spacing: 0.5px;
            }
              .nav-link:hover {
              color: #020a19;
              }
            .hexnode-logo {
              font-size: 30px;
              font-weight: 700;
              text-decoration: none;
              letter-spacing: -0.5px;
            }
            .custom_input{
                font-size: 12px;
                letter-spacing: 0.43px;
            }

                          
            .btn-danger {
              background-color: #dc3545;
              border: none;
              padding: 0.5rem 1.5rem;
            }
            /* Sidebar for Mobile View Only */
            @media (max-width: 991px) {
              .sidebar {
                position: fixed;
                top: 0;
                right: -100%;
                width: 100%;
                height: 100%;
                background: white;
                box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
                padding: 1.5rem;
                transition: right 0.3s ease;
                z-index: 1050;
              }
              .sidebar.open {
                right: 0;
              }
              .nav-link {
                font-size: 15px;
                line-height: 24px;
                padding: 20px 0;
                border-bottom: 1px solid #ebeaea;
              }
              .close-btn {
                position: absolute;
                top: 10px;
                right: 15px;
                background: none;
                border: none;
                font-weight: bold;
                font-size: 2.5rem;
                cursor: pointer;
              }
            }
              @media (max-width: 578px) {
               .nav-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              cursor: pointer;
              border-bottom: 1px solid #ebeaea;
              opacity: 0.7;
              transition: opacity 0.2s;
            }
              }
            /* Sidebar Hidden in Desktop View */
            @media (min-width: 992px) {
              .sidebar {
                display: none;
              }
            }
          `}</style>
    </>
  );
};

export default Navbar;
