import React from "react";
import YoutubeFrame from "../molecules/YoutubeFrame";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function YoutubePost() {
  return (
    <div
      className="div-background"
    >
      <div className="container pb-5 pt-5">
        {/* <div className="row"> */}
        <Row>
          <h2 className="pt-4" style={{ letterSpacing: "20px", textAlign: "right" }}>YOUTUBE POST</h2>
          {/* <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center"> */}
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <YoutubeFrame image={"/images/tremollo-eyes.jpg"} maxWidth="300px" link="https://www.youtube.com/watch?v=ExAT0IJ-PsU" />
          </Col>
          {/* </div> */}
          {/* <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center"> */}
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <YoutubeFrame image={"/images/pulse-of-the-meteor.png"} maxWidth="300px" link="https://www.youtube.com/watch?v=4WLDlpQ_BFY" />
          </Col>
          {/* </div> */}
          {/* <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center"> */}
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <YoutubeFrame image={"/images/blow-out.png"} maxWidth="300px" link="https://www.youtube.com/watch?v=9jN2k-jIhCY" />
          </Col>
          {/* </div> */}
          {/* <div className="col-md-3 col-sm-6 col-xs-12 mt-4 center"> */}
          <Col md={3} sm={6} xs={6} className="center mt-4">
            <YoutubeFrame image={"/images/ano-bando.png"} maxWidth="300px" link="https://www.youtube.com/watch?v=cQkpnxR47jc" />
          </Col>
          {/* </div> */}
        </Row>
        {/* </div> */}
      </div>
    </div>
  );
}

export default YoutubePost;
