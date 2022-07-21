import React from "react";

function Header() {
  return (
    <header>
      <div className="left">
        <p>
          {" "}
          <b>BR</b>
        </p>
      </div>
      <div className="right"></div>
      <ul>
        <li>Project</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default Header;
