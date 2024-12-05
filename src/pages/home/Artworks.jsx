import React, { useEffect, useRef, useState } from "react";
import ImageCard from "../../components/Card";

function Artworks() {
  return (
    <div
      style={{height: "50vh"}}
      className="div-background"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
              <ImageCard image={"/images/art1.png"}/>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
              <ImageCard image={"/images/art2.png"}/>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
              <ImageCard image={"/images/art3.png"}/>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
              <ImageCard image={"/images/art4.png"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artworks;
