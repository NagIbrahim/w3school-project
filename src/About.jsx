import React from "react";
import Card from "./Card";

let john = "https://www.w3schools.com/w3images/team2.jpg";
let jane = "https://www.w3schools.com/w3images/team1.jpg";
let mike = "https://www.w3schools.com/w3images/team3.jpg";
let dan = "https://www.w3schools.com/w3images/team4.jpg";

function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div className="cards">
        <Card image={john} title={"John Doe"} job={"CEO & Founder"} />
        <Card image={jane} title={"Jane Doe"} job={"Architect"} />
        <Card image={mike} title={"Mike Ross"} job={"Architect"} />
        <Card image={dan} title={"Dan Star"} job={"Architect"} />
      </div>
    </div>
  );
}

export default About;
