import React from "react";

function Card(props) {
  return (
    <span>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <h3>{props.job}</h3>
      <p>
        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
        pellentesque elementum.
      </p>

      <button>Contact</button>
    </span>
  );
}

export default Card;
