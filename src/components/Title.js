import React from "react";
// import "../assets/";

export default function Title({ name, title }) {
  return (
    <React.Fragment>
      {/* TITLE */}
      <div
        className=" col-10 mx-auto my-2 text-center text-title"
        style={{ background: "#e6e6e6" }}
      >
        <h1 className="text-capitalize font-weight-bold">
          {name} <strong>{title}</strong>
        </h1>
      </div>
    </React.Fragment>
  );
}
