import React from 'react';
import SvgComponent from '../SvgComponent';
// import './HomePage.css';
import SvgHomePageOne from '../HomePageSvg/SvgHomePageOne';
import SvgHomePageTwo from '../HomePageSvg/SvgHomePageTwo';
import SvgHomePageThree from '../HomePageSvg/SvgHomePageThree';
import SvgHomePageArrow from '../HomePageSvg/SvgHomePageArrow';
import SvgJoinCompanies from '../HomePageSvg/SvgJoinCompanies';
import SvgAutomateOrder from '../HomePageSvg/SvgAutomateOrder';
import SvgManageInventory from '../HomePageSvg/SvgManageInventory';
import SvgScanDocument from '../HomePageSvg/SvgScanDocument';
// import SvgFooterTwo from '../HomePageSvg/SvgFooterTwo';
import SvgFooterLinkedIn from '../HomePageSvg/SvgFooterLinkedIn';
import SvgFooterInsta from '../HomePageSvg/SvgFooterInsta';
import FooterPrestoLogo from '../HomePageSvg/FooterPrestoLogo';
import EasyProcessOne from '../HomePageSvg/EasyProcessOne';
import EasyProcessTwo from '../HomePageSvg/EasyProcessTwo';
import EasyProcessThree from '../HomePageSvg/EasyProcessThree';
import PrestoBlankSpace from '../HomePageSvg/ClientListCol1';
import ClientListCol1 from '../HomePageSvg/ClientListCol1';
import ClientListCol2 from '../HomePageSvg/ClientListCol2';
import ClientListCol3 from '../HomePageSvg/ClientListCol3';
import ClientListCol4 from '../HomePageSvg/ClientListCol4';
import ClientListCol5 from '../HomePageSvg/ClientListCol5';
import IndustryContainer from '../HomePageSvg/IndustryContainer';

function HomePage() {
  return (
    <div>
      <div className="home-page">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">
              <SvgComponent />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    How it work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog <span className="sr-only">SOON</span>
                  </a>
                </li>
                <li className="nav-item nav-item2">
                  <a className="login" href="/login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <span className="navbar-text">
              <a className="login" href="/login">
                Login
              </a>
            </span>
          </nav>
        </div>
        <div className="main-cover">
          <div className="container">
            <div className="row">
              <div className="col mainer-text">
                <h1>The Future of Document Processing</h1>
                <p>
                  Step back and let the <span> magic </span> work for you.{' '}
                </p>
                <a href="#">GET STARTED</a>
              </div>

              <div className="col mainer-wrap">
                <SvgHomePageOne />
              </div>
            </div>
          </div>
        </div>

        <div className="clients">
          <div className="container">
            <h5>PRESTO IS USED BY</h5>
            <div className="row client-list">
              <div className="col">
                <ClientListCol1 />
              </div>
              <div className="col">
                <ClientListCol2 />
                {/* <SvgHomePageThree /> */}
              </div>
              <div className="col">
                <ClientListCol3 />
                {/* <SvgHomePageFour /> */}
              </div>
              <div className="col">
                <ClientListCol4 />
              </div>

              <div className="col">
                <ClientListCol5 />
              </div>
            </div>
          </div>
        </div>

        <div className="s1">
          <div className="container">
            <div className="row">
              <div className="col svger">
                <SvgScanDocument />
              </div>
              <div className="col caym caym2">
                <h2>
                  Scan Your
                  <br />
                  documents
                </h2>
                <p className="soma">
                  With Presto, users can easily scan physical documents such as
                  invoices, purchase orders, receipts, and other paper-based
                  materials, and convert them into digital format for easy
                  storage, retrieval, and processing.
                </p>
                <a className="soka" href="#">
                  GET STARTED
                  <SvgHomePageArrow />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="s1">
          <div className="container">
            <div className="row">
              <div className="col caym">
                <h2>
                  Automate Order
                  <br />
                  Processing
                </h2>
                <p className="soma">
                  With Presto, users can easily scan physical documents such as
                  invoices, purchase orders, receipts, and other paper-based
                  materials, and convert them into digital format for easy
                  storage, retrieval, and processing.
                </p>
                <a className="soka" href="#">
                  GET STARTED <SvgHomePageArrow />
                </a>
              </div>
              <div className="col svger">
                {' '}
                <SvgAutomateOrder />
              </div>
            </div>
          </div>
        </div>

        <div className="s1">
          <div className="container">
            <div className="row">
              <div className="col svger">
                <SvgManageInventory />
              </div>
              <div className="col caym caym2">
                <h2>
                  Manage your
                  <br />
                  inventory
                </h2>
                <p className="soma">
                  With Presto, users can easily scan physical documents such as
                  invoices, purchase orders, receipts, and other paper-based
                  materials, and convert them into digital format for easy
                  storage, retrieval, and processing.
                </p>
                <a className="soka" href="#">
                  GET STARTED <SvgHomePageArrow />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="process">
          <div className="container">
            <h5>EASY PROCESS</h5>
            <h2>How it work</h2>
            <div className="row process-cont">
              <div className="col">
                <div className="worksvg">
                  {' '}
                  <EasyProcessOne />
                </div>
                <h6>1</h6>
                <h4>Upload Document</h4>{' '}
                <p>
                  With Presto, users can easily scan physical documents such as
                  invoices, purchase orders, receipts
                </p>{' '}
              </div>
              <div className="col">
                <div className="worksvg">
                  {' '}
                  <EasyProcessTwo />
                </div>
                <h6>2</h6>
                <h4>Confirm Data</h4>{' '}
                <p>
                  With Presto, users can easily scan physical documents such as
                  invoices, purchase orders, receipts
                </p>{' '}
              </div>
              <div className="col">
                <div className="worksvg">
                  <EasyProcessThree />
                </div>
                <h6>3</h6>
                <h4>Access Data</h4>{' '}
                <p>
                  With Presto, users can easily scan physical documents such as
                  invoices, purchase orders, receipts
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="industry">
          <div className="container">
            <h2>
              For industries by
              <br />
              industrials
            </h2>
            <p>
              With Presto, users can easily scan physical documents such as
              invoices, purchase orders, receipts, and other paper-based
              materials, and convert them into digital format for easy storage,
              retrieval, and processing.
            </p>
            <IndustryContainer />
          </div>
        </div>

        <div className="pricing">
          <div className="container">
            <h2>Pricing</h2>
            <div className="row">
              <div className="col colar1">
                <div className="colaro">
                  <div className="pricingtitles">
                    <h3>Essential</h3>
                    <h4>FREE</h4>
                  </div>
                  <div className="clear"></div>
                  <div className="divider"></div>

                  <ul>
                    <li>Basic features</li>
                    <li>Limited usage</li>
                    <li>Single-user access</li>
                    <li>Limited integrations</li>
                    <li>Advanced security</li>
                  </ul>
                  <a href="#">GET STARTED</a>
                </div>
              </div>
              <div className="col colar2">
                <div className="colaro">
                  <div className="pricingtitles">
                    <h3>Corporate</h3>
                    <h4>200$/mo</h4>
                  </div>
                  <div className="clear"></div>
                  <div className="clear"></div>
                  <div className="divider"></div>
                  <ul className="ego">
                    <li>Basic features</li>
                    <li>Limited usage</li>
                    <li>Single-user access</li>
                    <li>Limited integrations</li>
                    <li>Advanced security</li>
                  </ul>
                  <a href="#">GET STARTED</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta">
          <h2>
            Join the companies that
            <br />
            use our platform
          </h2>
          <a href="#">GET STARTED</a>
          <SvgJoinCompanies />
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col">
                <FooterPrestoLogo />
              </div>
              <div className="col">
                <ul>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">How it works</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>
                    <a href="#">Terms of use</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>

              <div className="col">
                <ul>
                  <li>
                    <a href="#">Signup</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul
                  className="social"
                  style={{ display: 'flex', justifyContent: 'left' }}
                >
                  <li>
                    <a href="#">
                      <SvgFooterInsta />{' '}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <SvgFooterLinkedIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="copy">© 2023 Presto. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
