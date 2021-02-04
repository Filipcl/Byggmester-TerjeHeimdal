import React from "react";
import "./footer.css";
import Typography from "@material-ui/core/Typography";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Typography variant="h6">Footer</Typography>

        <a href="https://www.instagram.com/bmh.as/">
          <InstagramIcon />
        </a>
        <Typography variant="h6">
          <a href="mailto:martin@bmh.as">Send Feedback</a>
        </Typography>

        <Typography variant="body2">
          Copyright © <a href="http://www.filiplarsen.com">Filip Larsen</a> 2021
        </Typography>
      </div>
    </>
  );
}
