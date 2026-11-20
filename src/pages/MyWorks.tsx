import { useEffect } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import "./MyWorks.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyWorks = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".myworks-header h1, .myworks-header p, .back-button",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      const cards = gsap.utils.toArray<HTMLElement>(".myworks-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my projects and creations</p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => {
          const targetUrl = project.link || project.githubUrl;
          const isInternalLink = Boolean(targetUrl?.startsWith("/"));
          const cardContent = (
            <>
              <div className="myworks-card-number">0{index + 1}</div>
              <div className="myworks-card-image">
                <img src={project.image} alt={project.title} width="400" height="240" loading="lazy" decoding="async" />
              </div>
              <div className="myworks-card-info">
                <h3>{project.title}</h3>
                <p className="myworks-card-category">{project.category}</p>
                <p className="myworks-card-description">{project.description}</p>
                <p className="myworks-card-tech">{project.technologies}</p>
                {project.downloadUrl && (
                  <div style={{ marginTop: "12px" }}>
                    <span className="work-download-apk-btn">
                      📥 {project.downloadLabel || "Download APK"}
                    </span>
                  </div>
                )}
              </div>
            </>
          );

          if (isInternalLink && targetUrl) {
            return (
              <Link
                className="myworks-card"
                key={project.id}
                data-cursor="disable"
                to={targetUrl}
              >
                {cardContent}
              </Link>
            );
          }

          if (targetUrl) {
            return (
              <a
                className="myworks-card"
                key={project.id}
                data-cursor="disable"
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cardContent}
              </a>
            );
          }

          return (
            <div
              className="myworks-card"
              key={project.id}
              data-cursor="disable"
            >
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorks;
