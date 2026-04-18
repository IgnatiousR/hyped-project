import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
import "./Expertises.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ────────────────────────────────────────────────────────────── */
const EXPERTISES = [
  {
    number: "01",
    title: "Social strategy",
    headline: "Smart strategy. Strong start.",
    description:
      "We dive deep into your brand, target audience and objectives. We translate data into a clear plan with formats that truly make an impact. So you know exactly why it works.",
    cta: "More about social strategy",
    href: "#",
    bg: "#ffffff",
    btnBg: "#ff3b30",
    btnText: "#ffffff",
    btnIconBg: "#fff",
    Icon: "#000",
    imageBorderColor: "#ff3b30",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    number: "02",
    title: "Content creation",
    headline: "Content that stands out and resonates.",
    description:
      "We create content that stands out. Sticks. And connects with your audience. Creative, fast and energetic. Always with the goal in mind.",
    cta: "More about content creation",
    href: "#",
    bg: "#fcb8fa",
    btnBg: "#ffffff",
    btnText: "#1a1a1a",
    btnIconBg: "#1a1a1a",
    imageBorderColor: "#ffffff",
    Icon: "#fff",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    number: "03",
    title: "Activation",
    headline: "Visible where and when it matters.",
    description:
      "Great content deserves to be seen. We distribute content where your audience is. So your brand reaches the right people, exactly where and when it matters most.",
    cta: "More about activation",
    href: "#",
    bg: "#3ecf8e",
    btnBg: "#ffffff",
    btnText: "#1a1a1a",
    btnIconBg: "#1a1a1a",
    imageBorderColor: "#ffffff",
    Icon: "#fff",
    video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  },
  {
    number: "04",
    title: "Data",
    headline: "Insights that drive impact.",
    description:
      "We dive into the numbers to understand what really works. And refine your content strategy accordingly.",
    cta: "More about data",
    href: "#",
    bg: "#3b82f6",
    btnBg: "#ffffff",
    btnText: "#1a1a1a",
    btnIconBg: "#1a1a1a",
    imageBorderColor: "#ffffff",
    Icon: "#fff",
    video: "https://media.w3.org/2010/05/bunny/trailer.mp4",
  },
];

/* ─── Arrow icon for Button ───────────────────────────────────────────── */
function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ─── Component ───────────────────────────────────────────────────────── */
export default function Expertises() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".expertise-card", section);
      const total = cards.length;

      /* ── Initial state: card 0 visible, rest stacked below ── */
      cards.forEach((card, i) => {
        gsap.set(card, {
          zIndex: i + 1, // higher index = renders on top when sliding up
          yPercent: i === 0 ? 0 : 125,
          scale: 1,
          rotateX: 0,
          transformOrigin: "50% 8%", // scale from near top edge
          force3D: true,
        });
      });

      /* ── Timeline scrubbed to section scroll ── */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      /*
       * Each transition at position `i` in the timeline:
       *   - slides the NEXT card up   (yPercent 100 → 0)
       *   - pushes the CURRENT card back (scale + rotateX)
       * Timeline position `i` means transition i starts at time=i
       * and takes 1 unit of duration. Total = (total - 1) units.
       * The scrollTrigger scrubs 0→1 across the full section scroll
       * (400 vh – 100 vh viewport = 300 vh = 3 transitions × 100 vh each).
       */
      cards.forEach((card, i) => {
        if (i < total - 1) {
          tl.to(
            cards[i + 1],
            { yPercent: 0, ease: "none", duration: 1 },
            i, // start at timeline position i
          ).to(
            card,
            { scale: 0.875, rotateX: -4, ease: "none", duration: 1 },
            i,
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    /*
     * The section height = numCards × 100vh gives the scroll distance.
     * The sticky inner view is always 100 vh, so the next section only
     * appears once the full 400 vh has been scrolled past.
     */
    <section
      ref={sectionRef}
      className="expertises-section"
      style={
        {
          height: `${EXPERTISES.length * 100}vh`,
        } as React.CSSProperties
      }
    >
      <div className="expertises-sticky">
        <div className="cards-wrapper">
          {EXPERTISES.map((exp) => (
            <div
              key={exp.number}
              className="expertise-card"
              style={
                {
                  backgroundColor: exp.bg,
                  "--img-border-color": exp.imageBorderColor,
                } as React.CSSProperties & { "--img-border-color": string }
              }
            >
              {/* ── Header: badge (left) + large number (right) ── */}
              <div className="card-header">
                <span className="card-badge">Expertise</span>
                <span className="card-number">{exp.number}</span>
              </div>

              {/* ── Title ── */}
              <h2 className="card-title">{exp.title}</h2>

              {/* ── Video (right column, desktop) ── */}
              <div className="card-image-wrap">
                {exp.video ? (
                  <video
                    src={exp.video}
                    className="card-img"
                    autoPlay
                    muted
                    loop
                    playsInline
                    disablePictureInPicture
                    controls={false}
                  />
                ) : (
                  <div className="card-img-placeholder" aria-hidden="true" />
                )}
              </div>

              {/* ── Footer: headline + description + CTA ── */}
              <div className="card-footer">
                <h3 className="card-headline">{exp.headline}</h3>
                <p className="card-description">{exp.description}</p>
                <Button
                  href={exp.href}
                  bgColor={exp.btnBg}
                  textColor={exp.btnText}
                  iconBgColor={exp.btnIconBg}
                  iconColor={exp.Icon}
                  icon={<ArrowIcon />}
                >
                  {exp.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
