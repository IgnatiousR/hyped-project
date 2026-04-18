import React from "react";
import "./SelectedWork.css";
import Button from "./Button";

interface Project {
  id: string;
  title: string;
  tag: string;
  image: string;
  theme: "red" | "blue" | "green";
  videoId: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "From zero to full, within 3 weeks",
    tag: "Bullit",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    theme: "red",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "Soft in taste, strong in appearance",
    tag: "Roasta",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    theme: "blue",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Content that really tastes good (and touches)",
    tag: "Loco",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    theme: "green",
    videoId: "dQw4w9WgXcQ",
  },
];

const ArrowIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 28 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9554 26.0653L12.2003 23.337L20.4522 15.0851L0.404297 15.0851L0.404297 11.0996L20.4522 11.0996L12.2003 2.86109L14.9554 0.119385L27.9284 13.0923L14.9554 26.0653Z"
      fill="currentColor"
    />
  </svg>
);

const BannerShape = () => (
  <svg
    className="sw-card_shape-svg"
    viewBox="0 0 429 234"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="
        M428.625 35.0943
        V196.589
        C428.625 217.944 409.565 233.088 388.605 233.088
        H40
        C15 233.088 0 215 0 190
        V77.9695
        C0 60 15 50 35 47
        L388.605 1.00885
        C409.565 -2.47661 428.625 13.7568 428.625 35.0862
        Z
      "
      fill="currentColor"
    />
  </svg>
);

const arrowIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const SelectedWork: React.FC = () => {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);

  return (
    <section className="section_selected-work" id="selected-work">
      <div className="selected-work_header">
        <div className="selected-work_header-left">
          <h1 className="selected-work_title">Content that scores.</h1>
          <p className="selected-work_description">
            We tell your story. In a way that truly resonates with your target
            audience. With creative content that works and makes a difference.
          </p>
          <Button
            variant="outline"
            icon={arrowIcon}
            bgColor=""
            textColor=""
            iconBgColor="#fff"
          >
            View all our work
          </Button>
        </div>
        {/* <a href="#work" className="selected-work_cta">
          Bekijk al ons werk
          <div className="selected-work_cta-icon">
            <HeaderArrow />
          </div>
        </a> */}
      </div>

      <div className="selected-work_grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card theme-${project.theme}`}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="project-card_inner">
              <img
                src={project.image}
                alt={project.title}
                className="project-card_image"
              />

              <div className="video-container">
                {hoveredId === project.id && (
                  <iframe
                    src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${project.videoId}&rel=0&modestbranding=1&iv_load_policy=3`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              <div className="sw-card_banner-wrap">
                <div className="sw-card_content">
                  <h3 className="sw-card_title">{project.title}</h3>
                  <div className="sw-card_tag">
                    <span>{project.tag}</span>
                  </div>
                </div>
                <div className="sw-card_shape">
                  <BannerShape />
                  <div className="sw-card_icon-container">
                    <div className="sw-card_icon-wrap is-first">
                      <ArrowIcon />
                    </div>
                    <div className="sw-card_icon-wrap is-second">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
