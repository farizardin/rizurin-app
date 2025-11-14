import React from "react";
// import ImageCard from "../../components/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profiles() {
  return (
    <div className="div-profile-background">
      <div style={{ height: "100vh", position: "relative", zIndex: 1 }}>
        <div className="center" style={{ padding: "20px" }}>
          <p
            style={{
              background: "rgba(255, 255, 255, 0.5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              // fontSize: "1.2rem",
              // fontWeight: "400",
              paddingLeft: "25%",
              paddingRight: "25%",
              textAlign: "center",
            }}
          >
            AI Engineer and Software Engineer. Proficient in making Deep
            Learning (AI) model and designing Software Architecture. Anime
            lovers who enjoy Bang Dream! & Love Live! series. I play multiple
            music instruments like guitar, bass, and drum. Sometime I post a
            music cover in my YouTube Channel. Love to play FPS game like CS2
            and Valorant.
          </p>
        </div>

        <div style={{ padding: "20px" }}>
          {/* <Row>
            {[1, 2, 3, 4].map((i) => (
              <Col md={3} sm={12} xs={12} key={i}>
                <div className="center mb-4 gradient-border-content"></div>
              </Col>
            ))}
          </Row> */}
        </div>
      </div>
    </div>
  );
}

export default Profiles;