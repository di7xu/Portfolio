import { useEffect } from "react";
import "./styles/About.css";
import { config } from "../config";
import AboutMediaPreview from "./AboutMediaPreview";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-me h3, .about-me p, .about-media-card",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-section" id="about">
      <div className="about-container-wrapper">
        <div className="about-me">
          <h3 className="title">{config.about.title}</h3>
          <p className="para">
            {config.about.description}
          </p>
        </div>
        <AboutMediaPreview
          instagramReelId="Dd2zTxdTwjX"
          youtubeVideoId="xpucrdxCBIs"
        />
      </div>
    </div>
  );
};

export default About;
