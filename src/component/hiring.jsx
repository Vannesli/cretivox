

import React, { useRef, useEffect } from "react";
import "../component/hiring.css";
import banner from "../assets/hiring.png";
import vidhiring from "../assets/hiringvids.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Hiring() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: video,
      start: "top center",
      end: "bottom center",
      onEnter: () => video.play(),
      onLeave: () => video.pause(),
      onEnterBack: () => video.play(),
      onLeaveBack: () => video.pause(),
    });

    const updateScrollTrigger = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("scroll", updateScrollTrigger);

    return () => {
      window.removeEventListener("scroll", updateScrollTrigger);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="hiring-banner">
        <h1> Perpetual </h1>
        <video ref={videoRef} autoPlay loop muted>
          <source src={vidhiring} className="banner" />
        </video>
      </div>
    </>
  );
}

export default Hiring;
