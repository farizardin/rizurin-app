import React, { useState, useEffect } from "react";
import Icon from "./Icon";
const Dock = () => {
  return (
    <div style={{scale: "50%", justifyContent: "center", width: "100%", display: "grid", zIndex: "99999" }}>
      <div style={{ borderRadius: "20px",padding: "15px", display: "flex", justifyContent: "center", alignItems: "center", width: "auto", display: "inline-flex", backgroundColor: "rgba(0,0,0,0.2)"}}>
        <a href={"https://www.instagram.com/rizunaisu"} target="_blank" rel="noopener noreferrer">
          <div style={{paddingRight: "10px", paddingLeft: "10px"}}>
            <Icon maxWidth={"70px"} image="/images/instagram_icon.png"/>
          </div>
        </a>
        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
          <a href={"https://www.youtube.com/@rizunaisu"} target="_blank" rel="noopener noreferrer">
            <Icon maxWidth={"100px"} image="/images/youtube_icon.png"/>
          </a>
        </div>
        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
          <a href={"https://www.pixiv.net/en/users/31354730"} target="_blank" rel="noopener noreferrer">
            <Icon maxWidth={"130px"} image="/images/pixiv_icon.png"/>
          </a>
        </div>
        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
          <a href={"https://soundcloud.com/rizunaisu"} target="_blank" rel="noopener noreferrer">
            <Icon maxWidth={"100px"} image="/images/soundcloud_icon.png"/>
          </a>
        </div>
        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
          <a href={"https://www.twitch.tv/rizurin_ch"} target="_blank" rel="noopener noreferrer">
            <Icon maxWidth={"80px"} image="/images/twitch_icon.png"/>
          </a>
        </div>
        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
          <a href={"https://steamcommunity.com/id/rizurin_desu"} target="_blank" rel="noopener noreferrer">
            <Icon maxWidth={"80px"} image="/images/steam_icon.png"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dock;
