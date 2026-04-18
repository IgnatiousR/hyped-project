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
    headline: "Slimme strategie. Sterke start.",
    description:
      "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    cta: "Meer over social strategie",
    href: "/expertises/social-strategie",
    bg: "#ffffff",
    btnBg: "#ff3b30",
    btnText: "#ffffff",
    btnIconBg: "#1a1a1a",
    imageBorderColor: "#ff3b30",
    // Replace `null` with your image path, e.g. "/images/social-strategy.jpg"
    image: null,
  },
  {
    number: "02",
    title: "Content creation",
    headline: "Content die opvalt en raakt.",
    description:
      "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    cta: "Meer over content creatie",
    href: "/expertises/content-creatie",
    bg: "#fcb8fa",
    btnBg: "#ffffff",
    btnText: "#1a1a1a",
    btnIconBg: "#1a1a1a",
    imageBorderColor: "#ffffff",
    image: null,
  },
  {
    number: "03",
    title: "Activation",
    headline: "Zichtbaar waar en wanneer het telt.",
    description:
      "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    cta: "Meer over activatie",
    href: "/expertises/activatie",
    bg: "#3ecf8e",
    btnBg: "#ffffff",
    btnText: "#1a1a1a",
    btnIconBg: "#1a1a1a",
    imageBorderColor: "#ffffff",
    image: null,
  },
  {
    number: "04",
    title: "Data",
    headline: "Inzichten die impact maken.",
    description:
      "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    cta: "Meer over data",
    href: "/expertises/data",
    bg: "#3b82f6",
    btnBg: "#ffffff",
    btnText: "#1a1a1a",
    btnIconBg: "#1a1a1a",
    imageBorderColor: "#ffffff",
    image: null,
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

              {/* ── Image (right column, desktop) ── */}
              <div className="card-image-wrap">
                {exp.image ? (
                  <img src={exp.image} alt={exp.title} className="card-img" />
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
                  iconColor="#ffffff"
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
