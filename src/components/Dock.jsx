import React, { useState, useEffect } from "react";
import Icon from "./Icon";
const Dock = () => {
  return (
    <div style={{scale: "50%", justifyContent: "center", width: "100%", display: "grid"}}>
      <div style={{ borderRadius: "20px",padding: "15px", display: "flex", justifyContent: "center", alignItems: "center", width: "auto", display: "inline-flex", backgroundColor: "rgba(0,0,0,0.2)" }}>
        <div style={{paddingRight: "10px", paddingLeft: "10px"}}>
          <Icon maxWidth={"70px"} image="/images/instagram_icon.png"/>
        </div>
        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
          <Icon maxWidth={"100px"} image="/images/youtube_icon.png"/>
        </div>
        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
          <Icon maxWidth={"130px"} image="/images/pixiv_icon.png"/>
        </div>
        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
          <Icon maxWidth={"100px"} image="/images/soundcloud_icon.png"/>
        </div>
        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
          <Icon maxWidth={"80px"} image="/images/twitch_icon.png"/>
        </div>
        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
          <Icon maxWidth={"80px"} image="/images/steam_icon.png"/>
        </div>
      </div>
    </div>
  );
};

export default Dock;
