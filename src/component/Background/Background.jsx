import "./Background.css";
import React from "react";
import video from "../../images/video.mp4";
import image1 from "../../images/download.jpeg";
import image2 from "../../images/download1.jpeg";
import image3 from "../../images/download2.jpeg";

const Background = ({ herocount, playstatus }) => {
  if (playstatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video} />
      </video>
    );
  } else if (herocount == 0) {
    return <img src={image1} className="background" />;
  } else if (herocount == 1) {
    return <img src={image2} className="background" />;
  } else if (herocount == 2) {
    return (
      <>
        <img src={image3} className="background" />
      </>
    );
  }
};
export default Background;
