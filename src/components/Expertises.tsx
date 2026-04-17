import { useEffect, useRef } from "react";
import "./Expertises.css";
import Button from "./Button";

interface Expertise {
  id: string;
  title: string;
  subtitle: string;
  text: string;
  cta: string;
  href: string;
  image: string;
  theme: "white" | "pink" | "green" | "blue";
}

const expertises: Expertise[] = [
  {
    id: "01",
    title: "Social strategy",
    subtitle: "Smart strategy. Strong start.",
    text: "We dive deep into your brand, target audience, and goals. And we translate data into a clear plan with formats that make a real impact. That way, you know exactly why it works.",
    cta: "More about social strategy",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop",
    theme: "white",
  },
  {
    id: "02",
    title: "Content creation",
    subtitle: "Content that stands out and resonates.",
    text: "We create content that stands out. Sticks. And resonates with your target audience. Creative, fast, and energetic. Always with the goal in mind.",
    cta: "More about content creation",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    theme: "pink",
  },
  {
    id: "03",
    title: "Activation",
    subtitle: "Visible where and when it counts.",
    text: "The right content deserves to be seen. We distribute the content where your target audience is. This way, your brand reaches the right people, exactly where and when it counts.",
    cta: "More about activation",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    theme: "green",
  },
  {
    id: "04",
    title: "Data",
    subtitle: "Insights that make an impact.",
    text: "We dive into the numbers to understand what really works. And we fine-tune your content based on real results.",
    cta: "More about data",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    theme: "blue",
  },
];

const buttonThemeMap = {
  white: {
    bgColor: "#f25b29",
    textColor: "#ffffff",
    iconBgColor: "#ffffff",
    iconColor: "#f25b29",
  },

  pink: {
    bgColor: "#ffffff",
    textColor: "#000000",
    iconBgColor: "#000000",
    iconColor: "#ffffff",
  },

  green: {
    bgColor: "#ffffff",
    textColor: "#000000",
    iconBgColor: "#000000",
    iconColor: "#ffffff",
  },

  blue: {
    bgColor: "#ffffff",
    textColor: "#000000",
    iconBgColor: "#000000",
    iconColor: "#ffffff",
  },
};

const ArrowIcon = (
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

const Expertises = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: gsap.Context;

    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>(".expertise-item");
        const isMobile = window.innerWidth <= 991;

        items.forEach((item, index) => {
          const content = item.querySelector(".expertise-content");
          const isLast = index === items.length - 1;

          if (!isLast && content) {
            if (isMobile) {
              // Mobile flip animation
              gsap.to(content, {
                rotationX: -90,
                transformOrigin: "center center",
                opacity: 0,
                ease: "power3.inOut",
                scrollTrigger: {
                  trigger: items[index + 1],
                  start: "top bottom",
                  end: "top top",
                  scrub: true,
                },
              });
            } else {
              // Desktop animation (keep existing)
              gsap.to(content, {
                scale: 0.9,
                rotationX: -10,
                opacity: 0,
                filter: "blur(10px)",
                ease: "none",
                scrollTrigger: {
                  trigger: items[index + 1],
                  start: "top bottom",
                  end: "top top",
                  scrub: true,
                },
              });
            }
          }
        });
      }, sectionRef);
    };

    initGSAP();

    return () => {
      ctx?.revert();
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
  }, []);

  return (
    <section className="section_expertises" ref={sectionRef}>
      <div className="expertises-list">
        {expertises.map((item, index) => {
          const btnTheme = buttonThemeMap[item.theme];
          return (
            <div
              key={item.id}
              className="expertise-item"
              style={{ zIndex: index + 1 }}
            >
              <div className="expertise-wrap">
                <div className={`expertise-content theme-${item.theme}`}>
                  {/* Top row: badge + number */}
                  <div className="expertise-content_top">
                    <div className="expertise-badge">
                      <span>Expertise</span>
                    </div>
                    <div className="expertise-content_number">{item.id}</div>
                  </div>

                  {/* Title */}
                  <h2 className="expertise-content_heading">{item.title}</h2>

                  {/* Bottom: text left + image right */}
                  <div className="expertise-content_bottom">
                    <div className="expertise-content_left">
                      <h3 className="expertise-content_subtitle">
                        {item.subtitle}
                      </h3>
                      <p className="expertise-content_text">{item.text}</p>

                      {/* <a
                      href={item.href}
                      className={`expertise-cta-btn ${item.theme !== "white" ? "is-dark" : "is-orange"}`}
                    >
                      <span className="expertise-cta-btn__text">
                        {item.cta}
                      </span>
                      <span className="expertise-cta-btn__icon">
                        <ArrowIcon />
                      </span>
                    </a> */}

                      <Button
                        variant="default"
                        icon={ArrowIcon}
                        bgColor={btnTheme.bgColor}
                        textColor={btnTheme.textColor}
                        iconBgColor={btnTheme.iconBgColor}
                        iconColor={btnTheme.iconColor}
                      >
                        {item.cta}
                      </Button>

                      {/* <Button
                      variant="default"
                      icon={ArrowIcon1}
                      bgColor="#f25b29"
                      iconBgColor=""
                      iconColor=""
                    >
                      {item.cta}
                    </Button> */}
                    </div>

                    <div className="expertise-content_right">
                      <div
                        className={`expertise-image-wrapper ${item.theme === "white" ? "is-orange" : "is-plain"}`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="expertise-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Expertises;
