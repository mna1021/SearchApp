import React from "react";
import "./header.css";
// import IconButton from "@material-ui/core/IconButton";
// import SyncIcon from "@material-ui/icons/Sync";

export default function Header() {
  return (
    <div>
      <img
        className="header-image"
        src="https://i.imgur.com/kvT8u4n.jpg?2"
        alt="display of someone using an iphone"
      />
      <div>
        <h1 className="title">WELCOME TO USER SEARCH PORTAL</h1>
      </div>
    </div>
  );
}
