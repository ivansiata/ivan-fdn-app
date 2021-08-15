import React from "react";

const Footer = () => {
  return (
    <footer className="row">
      <div className="body-container">
        <div>
          <hr />
        </div>
        <div className="container">
          <div className="flex-item grid left">
            <div>
              <strong className="clickable">About Us </strong>
            </div>
            <div>
              <strong className="clickable">Terms & Conditions </strong>
            </div>
            <div>
              <strong className="clickable">Awards </strong>
            </div>
            <div>
              <strong className="clickable">Feedback </strong>
            </div>
            <div>
              <strong className="clickable">Privacy Policy </strong>
            </div>
            <div>
              <strong className="clickable">Newsletter </strong>
            </div>
            <div>
              <strong className="clickable">Contact </strong>
            </div>
            <div>
              <strong className="clickable">Help </strong>
            </div>
          </div>
          <div className="flex flex-column right">
            <div>Download Our Mobile App</div>
            <div className="flex">
              <img
                className="clickable"
                src="assets/images/FDNWebImage_156.png"
              />
              <img
                className="clickable"
                src="assets/images/FDNWebImage_158.png"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex-item flex flex-column">
            <div>
              <img src="assets/images/FDNWebImage_05.png" />
            </div>
            <div>
              Copyright &copy; 2015-2017 Female Daily Network &#183; All rights
              reserved
            </div>
          </div>
          <div className="flex-item social-media">
            <img src="assets/images/FDNWebImage_162.png" />
            <img src="assets/images/FDNWebImage_164.png" />
            <img src="assets/images/FDNWebImage_166.png" />
            <img src="assets/images/FDNWebImage_168.png" />
          </div>
        </div>
        <div className="bottom-frame">
          <div>
            <h3>Bottom Frame 970x50, 486x60, 320x50</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
