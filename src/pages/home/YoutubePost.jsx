import React, { useEffect, useRef, useState } from "react";
import ImageCard from "../../components/Card";

function YoutubePost() {
  return (
    <div
      style={{height: "50vh"}}
      className="container"
    >
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
            <ImageCard/>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
            <ImageCard/>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
            <ImageCard/>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
            <ImageCard/>
        </div>
      </div>
    </div>
  );
}

export default YoutubePost;
