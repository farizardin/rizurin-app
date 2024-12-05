import React, { useEffect, useRef, useState } from "react";
import ImageCard from "../../components/Card";

function Artworks() {
  return (
    <div
      className="div-background"
    >
      <div className="container">
        <h2 className="pt-4" style={{paddingLeft: "10px", letterSpacing: "20px"}}>ART WORKS</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
              <ImageCard image={"/images/art1.png"} title="Togawa Sakiko"/>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
              <ImageCard image={"/images/art2.png"} title="Hanazono Tae"/>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
              <ImageCard image={"/images/art3.png"} title="Nakano Yotsuba"/>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
              <ImageCard image={"/images/art4.png"} title="Vestia Zeta"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artworks;
