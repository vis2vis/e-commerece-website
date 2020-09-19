import React from "react";
import "./homepage.styles.scss";

const Homepage = () => (
  <div className="homepage">
    <div className="directory-menu">
      {/* menu starting here */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">CAP</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      {/* 1 */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      {/* 2 */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">SNEAKERS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      {/* 3 */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      {/* 4 */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">MENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      {/* 5 */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">CAP</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
