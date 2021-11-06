import React from "react";
import { FacebookButton, FacebookCount } from "react-social";
import { SocialIcon } from "react-social-icons";

export default function Footer(props) {
  let url = "https://github.com";

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "black",
        textAlign: "right",
        paddingRight: "5%",
      }}
    >
      <SocialIcon
        url={"https://facebook.com/melnickpaintingforyou"}
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
}
