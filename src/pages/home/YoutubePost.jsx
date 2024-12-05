import React from "react";
import YoutubeFrame from "../../components/YoutubeFrame";

function YoutubePost() {
  return (
    <div
      className="div-background"
    >
      <div className="container pb-5 pt-5">
        <div className="row">
        <h2 className="pt-4" style={{ letterSpacing: "20px", textAlign: "right"}}>YOUTUBE POST</h2>
          <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
            <YoutubeFrame image={"/images/tremollo-eyes.jpg"} maxWidth="300px" link="https://www.youtube.com/watch?v=ExAT0IJ-PsU"/>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
            <YoutubeFrame image={"/images/pulse-of-the-meteor.png"} maxWidth="300px" link="https://www.youtube.com/watch?v=4WLDlpQ_BFY"/>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
            <YoutubeFrame image={"/images/blow-out.png"} maxWidth="300px" link="https://www.youtube.com/watch?v=9jN2k-jIhCY"/>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center">
            <YoutubeFrame image={"/images/ano-bando.png"} maxWidth="300px" link="https://www.youtube.com/watch?v=cQkpnxR47jc"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoutubePost;
