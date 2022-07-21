import React from "react";

let images = [
  "https://www.w3schools.com/w3images/house5.jpg",
  "https://www.w3schools.com/w3images/house2.jpg",
  "https://www.w3schools.com/w3images/house3.jpg",
  "https://www.w3schools.com/w3images/house4.jpg",
  "https://www.w3schools.com/w3images/house2.jpg",
  "https://www.w3schools.com/w3images/house5.jpg",
  "https://www.w3schools.com/w3images/house4.jpg",
  "https://www.w3schools.com/w3images/house3.jpg",
];

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="images">
        {images.map((image) => (
          <img src={image} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Projects;
