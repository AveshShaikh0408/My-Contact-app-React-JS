import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="Avatar_IMG" />
      </div>
      <div className="bottom">
        <p className="info">{props.email}</p>
        <p className="info">{props.contact}</p>
      </div>
    </div>
  );
}
export default Card;
