import { useEffect, useRef, useCallback } from "react";
import NavItem from "./NavItem";
import Button from "./Button";
import {
  FooterBackground,
  FooterBackgroundMobile,
  FooterLogo,
  FooterSticker,
} from "./FooterAssets";
import "./Footer.css";
import gsap from "gsap";

// ─── Object-pooled logo spawner ──────────────────────────────────────────────
const POOL_SIZE = 12;
const OUTLINE_COLORS: string[] = [
  "#FF5A36", // orange
  "#00E5A0", // green
  "#3B9EFF", // blue
  "#FC5AFA", // pink
  "#FFD43B", // yellow
  "#A855F7", // purple
];

// ─── SVG intrinsic dimensions (viewBox="0 0 374 142") ────────
const SVG_ASPECT = 374 / 142; // ≈ 2.634 — used to center on cursor

// ─── Spawn timing ────────────────────────────────────────────
const SPAWN_DELAY_SEC = 0.25; // delay between spawns (seconds)

// ─── Velocity tracking constants ────────────────────────────────────────────
// Speed is measured in px/ms. A "quick drag" is roughly 0.5+ px/ms (500 px/s).
const SPEED_THRESHOLD = 0.45; // px/ms — below this, nothing spawns
// const THROTTLE_MS = 90; // minimum gap between spawns (ms)
const EMA_ALPHA = 0.25; // smoothing factor for velocity EMA (lower = smoother)
// Travel distance = speed × TRAVEL_FACTOR, capped at MAX_TRAVEL px
const TRAVEL_FACTOR = 90;
const MAX_TRAVEL = 220;

// Tilt tuning constants
const TILT_FACTOR = 0.25; // how much direction affects tilt (was 0.35)
const WOBBLE_RANGE = 8;

function useFooterLogoSpawner() {
  const footerRef = useRef<HTMLElement>(null);
  const poolRef = useRef<HTMLDivElement[]>([]);
  const poolIdx = useRef(0);
  const lastSpawn = useRef(0);

  // Velocity state — kept in refs so handler closure stays stable
  const prevPos = useRef({ x: 0, y: 0 });
  const prevTime = useRef(0);
  const velEma = useRef({ vx: 0, vy: 0 }); // exponential moving average

  // ── SVG pool builder ────────────────────────────────────────────────────
  const buildPool = useCallback((container: HTMLElement) => {
    if (poolRef.current.length === POOL_SIZE) return;

    const svgInner = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 374 142" fill="none" width="100%">
        <rect x="3" y="3" width="368" height="136" rx="10" ry="10"
  fill="none"
  stroke="var(--spawn-color, #FF5A36)"
  stroke-width="6"
/>
        <path d="M346.695 141.574H98.1443V39.7663L342.475 1.31406C358.99 -1.28201 373.926 11.5381 373.926 28.3324V114.227C373.926 129.331 361.735 141.574 346.695 141.574Z" fill="black"/>
        <path d="M126.851 41.6173V79.9895L119.894 80.6225V42.651L105.669 44.7503V135.404L119.894 135.268V97.2966L126.851 96.8319V135.204L142.026 135.06V39.3738L126.851 41.6173Z" fill="white"/>
        <path d="M170.676 35.1352L166.631 71.5282L166.44 74.6451L166.057 74.6851L165.866 71.6083L161.884 36.4332L145.473 38.861L158.039 100.646V134.908L174.658 134.755V99.6843L188.309 32.5231L170.676 35.1352Z" fill="white"/>
        <path d="M292.411 38.2441V17.123L246.695 23.8856V134.074L292.411 133.642V112.528L268.755 113.346V87.4331L291.039 85.9588V65.022L268.755 67.0572V41.1526L292.411 38.2441Z" fill="white"/>
        <path d="M219.528 82.9781L210.896 83.6352V46.2806L219.528 45.1989V82.9781ZM191.676 32.0263V134.595L210.752 134.411V101.167L219.6 100.694C231.169 100.077 240.232 90.4779 240.232 78.8436V50.1827C240.232 36.8338 228.424 26.5938 215.268 28.5408L191.676 32.0343V32.0263Z" fill="white"/>
        <path d="M334.96 112.865L323.551 113.234V32.1545L334.96 30.7202V112.865ZM298.315 16.2496V133.585L340.888 133.185C352.839 133.073 362.469 123.313 362.469 111.311V32.0984C362.469 18.7495 350.661 8.50946 337.505 10.4565L298.307 16.2576L298.315 16.2496Z" fill="white"/>
        <path d="M33.9179 141.574H58.5951V123.57L44.3616 123.987V103.643L57.7334 102.785V84.9174L44.3616 86.1674V65.8155L58.5951 63.9966V45.9924L33.9179 49.8705V141.574Z" fill="black"/>
        <path d="M62.3769 45.3915V63.5159L72.2063 62.2579V141.574H84.0782V60.7435L94.6256 59.3974V40.3195L62.3769 45.3915Z" fill="black"/>
        <path d="M20.2509 88.4189V68.7721L9.51992 70.1423V125.525L20.2509 125.213V108.971L13.6607 109.348V93.6111L30.2079 92.2009V141.566H20.2589V136.414L18.5275 138.121C16.2856 140.332 13.2698 141.566 10.1343 141.566H8.4189C3.90312 141.566 0.249023 137.888 0.249023 133.361V64.5255C0.249023 59.141 4.15842 54.5498 9.45608 53.7165L20.7774 51.9378C25.732 51.1605 30.2159 55.0066 30.2159 60.0384V87.4814L20.2668 88.4109L20.2509 88.4189Z" fill="black"/>
      </svg>`;

    for (let i = 0; i < POOL_SIZE; i++) {
      const el = document.createElement("div");
      el.className = "footer-logo-spawn";
      el.innerHTML = svgInner;
      gsap.set(el, { autoAlpha: 0 });
      container.appendChild(el);
      poolRef.current.push(el);
    }
  }, []);

  // ── Spawn one logo at (x, y) moving toward (dx, dy) at given speed ──────
  const spawnLogo = useCallback(
    (x: number, y: number, dx: number, dy: number, speed: number) => {
      const now = Date.now();

      // Delay between spawns
      if (now - lastSpawn.current < SPAWN_DELAY_SEC * 1000) return;

      lastSpawn.current = now;

      const el = poolRef.current[poolIdx.current % POOL_SIZE];
      poolIdx.current++;

      const color =
        OUTLINE_COLORS[Math.floor(Math.random() * OUTLINE_COLORS.length)];

      const w = 160 + Math.random() * 60;
      const h = w / SVG_ASPECT; // intrinsic height at this width
      const scale = 0.85 + Math.random() * 0.35;

      // Tilt calculation
      const movementAngleDeg = Math.atan2(dy, dx) * (180 / Math.PI);

      const wobble = (Math.random() - 0.5) * WOBBLE_RANGE;
      const rotation = movementAngleDeg * TILT_FACTOR + wobble;

      const travel = Math.min(speed * TRAVEL_FACTOR, MAX_TRAVEL);
      const slideDur = 0.7 + (travel / MAX_TRAVEL) * 0.6;

      gsap.killTweensOf(el);

      // Center the logo exactly on the cursor (both axes)
      gsap.set(el, {
        x: x - w / 2,
        y: y - h / 2,
        width: w,
        rotation,
        scale: scale * 0.55,
        autoAlpha: 0,
        "--spawn-color": color,
      });

      const tl = gsap.timeline({
        delay: SPAWN_DELAY_SEC, // ← this staggers the spawn
      });

      tl.to(el, {
        autoAlpha: 1,
        scale,
        duration: 0.32,
        ease: "back.out(2.2)",
      });

      tl.to(
        el,
        {
          x: `+=${dx * travel}`,
          y: `+=${dy * travel}`,
          rotation: rotation + wobble * 0.4,
          duration: slideDur,
          ease: "power4.out",
        },
        0,
      );

      const fadeDelay = Math.max(slideDur * 0.55, 1.6);

      tl.to(
        el,
        {
          autoAlpha: 0,
          x: `+=${dx * 18}`,
          y: `+=${dy * 18}`,
          scale: scale * 0.82,
          duration: 0.5,
          ease: "power2.in",
        },
        fadeDelay,
      );
    },
    [],
  );

  // ── Effect: wire up the listener ─────────────────────────────────────────
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const mq = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    if (!mq.matches) return;

    buildPool(footer);

    // Reset tracking when the mouse re-enters so stale delta isn't used
    const handleMouseEnter = (e: MouseEvent) => {
      const rect = footer.getBoundingClientRect();
      prevPos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      prevTime.current = performance.now();
      velEma.current = { vx: 0, vy: 0 };
    };

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const rect = footer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dt = now - prevTime.current;
      if (dt <= 0) return;

      // Raw instantaneous velocity (px/ms)
      const rawVx = (x - prevPos.current.x) / dt;
      const rawVy = (y - prevPos.current.y) / dt;

      // Exponential moving average — smooths out jitter between events
      const ema = velEma.current;
      ema.vx = EMA_ALPHA * rawVx + (1 - EMA_ALPHA) * ema.vx;
      ema.vy = EMA_ALPHA * rawVy + (1 - EMA_ALPHA) * ema.vy;

      prevPos.current = { x, y };
      prevTime.current = now;

      const speed = Math.sqrt(ema.vx * ema.vx + ema.vy * ema.vy);
      if (speed < SPEED_THRESHOLD) return; // slow hover → no spawn

      // Unit direction vector
      const dx = ema.vx / speed;
      const dy = ema.vy / speed;

      spawnLogo(x, y, dx, dy, speed);
    };

    footer.addEventListener("mouseenter", handleMouseEnter);
    footer.addEventListener("mousemove", handleMouseMove);
    return () => {
      footer.removeEventListener("mouseenter", handleMouseEnter);
      footer.removeEventListener("mousemove", handleMouseMove);
    };
  }, [buildPool, spawnLogo]);

  return footerRef;
}

const Footer = () => {
  const flameIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.125em"
      height="1.125em"
      viewBox="0 0 20 24"
      fill="none"
      className="icon-18px"
    >
      <path
        d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z"
        fill="currentColor"
      ></path>
    </svg>
  );

  const emailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.125em"
      height="1.125em"
      viewBox="0 0 22 17"
      fill="none"
      className="icon-12px"
    >
      <path
        d="M2.78843 16.5955C2.21806 16.5955 1.72996 16.3926 1.32413 15.9868C0.918306 15.581 0.715047 15.0925 0.714355 14.5214V2.077C0.714355 1.50663 0.917615 1.01853 1.32413 0.612707C1.73065 0.20688 2.21875 0.00362105 2.78843 0.00292969H19.381C19.9514 0.00292969 20.4398 0.206189 20.8464 0.612707C21.2529 1.01923 21.4558 1.50732 21.4551 2.077V14.5214C21.4551 15.0918 21.2522 15.5803 20.8464 15.9868C20.4405 16.3933 19.9521 16.5962 19.381 16.5955H2.78843ZM11.0847 9.15478C11.1711 9.15478 11.2621 9.14165 11.3575 9.11537C11.4529 9.0891 11.5434 9.05039 11.6292 8.99923L18.9662 4.41034C19.1045 4.32392 19.2082 4.21607 19.2773 4.08678C19.3465 3.9575 19.381 3.81473 19.381 3.65849C19.381 3.31281 19.2341 3.05355 18.9403 2.88071C18.6465 2.70787 18.344 2.71651 18.0329 2.90663L11.0847 7.26219L4.13658 2.90663C3.82547 2.71651 3.523 2.71236 3.22917 2.89419C2.93534 3.07602 2.78843 3.33078 2.78843 3.65849C2.78843 3.83132 2.823 3.98273 2.89213 4.11271C2.96127 4.24268 3.06497 4.34189 3.20324 4.41034L10.5403 8.99923C10.6267 9.05108 10.7176 9.09014 10.813 9.11641C10.9084 9.14268 10.999 9.15547 11.0847 9.15478Z"
        fill="currentColor"
      />
    </svg>
  );
  const footerRef = useFooterLogoSpawner();

  return (
    <footer className="footer-section" ref={footerRef}>
      <div className="padding-global">
        <div className="footer-container">
          <div className="footer-cta">
            <h2 className="heading-xxl">Let's Get Hyped!</h2>
            <div className="button-group is-footer">
              <Button variant="outline" icon={emailIcon}>
                Mail ons direct
              </Button>

              <Button
                variant="nav"
                icon={flameIcon}
                bgColor="#fa5424"
                textColor="#fff"
                iconBgColor="#fff"
                className="is-desktop"
              >
                <span>Get Results</span>
              </Button>
            </div>
          </div>

          <div className="footer-main">
            <div className="footer-bg-wrap">
              <FooterBackground />
              <FooterBackgroundMobile />
            </div>

            <div className="footer-sticker">
              <FooterSticker />
            </div>

            <div className="footer-info-content">
              <div className="footer-logo">
                <FooterLogo />
              </div>

              <Button
                variant="nav"
                icon={flameIcon}
                bgColor="#fa5424"
                textColor="#fff"
                iconBgColor="#fff"
                className="is-mobile"
              >
                <span>Get Hyped! Neem contact op</span>
              </Button>
              <div className="footer-grid">
                <div className="footer-col is-empty-left">
                  {/* Space for absolute logo */}
                </div>

                <div className="footer-col is-middle">
                  <div className="footer-pills">
                    <NavItem label="Expertises" href="#" className="" />
                    <NavItem
                      label="Work"
                      href="#"
                      // className="is-footer-pill"
                    />
                    <NavItem
                      label="About"
                      href="#"
                      // className="is-footer-pill"
                    />
                    <NavItem
                      label="Contact"
                      href="#"
                      // className="is-footer-pill"
                    />
                  </div>

                  <div className="footer-socials">
                    <div className="footer-label">Follow us</div>
                    <div className="social-icon-group">
                      <a
                        aria-label="LinkedIn"
                        href="https://www.linkedin.com/company/gethypednl/"
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="100%"
                          viewBox="0 0 31 30"
                          fill="none"
                        >
                          <path
                            d="M27.1421 25.8926H22.4746V18.5839C22.4746 16.8414 22.4396 14.5989 20.0446 14.5989C17.6134 14.5989 17.2421 16.4951 17.2421 18.4551V25.8926H12.5784V10.8639H17.0584V12.9126H17.1184C17.5673 12.1461 18.2157 11.5156 18.9944 11.0882C19.7731 10.6607 20.6531 10.4523 21.5409 10.4851C26.2659 10.4851 27.1396 13.5951 27.1396 17.6426V25.8926H27.1421ZM7.31211 8.80764C6.77626 8.80838 6.25224 8.65017 5.80632 8.35304C5.3604 8.0559 5.01263 7.63319 4.807 7.13837C4.60137 6.64355 4.54712 6.09885 4.65111 5.5732C4.7551 5.04754 5.01267 4.56453 5.39122 4.18528C5.76977 3.80603 6.2523 3.54758 6.77776 3.44261C7.30323 3.33765 7.84802 3.3909 8.34322 3.59561C8.83842 3.80033 9.26178 4.14732 9.55973 4.59269C9.85769 5.03805 10.0169 5.56179 10.0171 6.09764C10.0176 6.45324 9.94801 6.80545 9.81231 7.13414C9.6766 7.46282 9.47745 7.76155 9.22624 8.01323C8.97502 8.26491 8.67667 8.46461 8.34823 8.60092C8.01979 8.73723 7.66771 8.80747 7.31211 8.80764ZM9.64961 25.8926H4.97336V10.8639H9.64961V25.8926Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a
                        aria-label="TikTok"
                        href="https://www.tiktok.com/@gethyped.nl"
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="100%"
                          viewBox="0 0 31 30"
                          fill="none"
                        >
                          <path
                            d="M16.5688 2.28883C17.9338 2.26758 19.2876 2.27758 20.6413 2.26758C20.683 3.89272 21.3335 5.44296 22.4638 6.61133C23.686 7.70925 25.2409 8.36588 26.8801 8.47633V12.6738C25.3684 12.6367 23.88 12.2931 22.5051 11.6638C21.9192 11.3835 21.3551 11.0596 20.8176 10.6951C20.8076 13.7363 20.8288 16.7776 20.7976 19.8088C20.7178 21.2809 20.231 22.702 19.3913 23.9138C18.699 24.9146 17.7811 25.7386 16.7117 26.3194C15.6424 26.9003 14.4515 27.2216 13.2351 27.2576C11.7437 27.3249 10.2655 26.9514 8.98508 26.1838C7.93117 25.5579 7.03836 24.694 6.37809 23.6613C5.71781 22.6286 5.30839 21.4556 5.18258 20.2363C5.16258 19.7151 5.15133 19.1951 5.17258 18.6838C5.27891 17.6157 5.60341 16.5808 6.12599 15.6432C6.64857 14.7055 7.35809 13.8852 8.21061 13.2329C9.06312 12.5807 10.0405 12.1104 11.0821 11.8513C12.1238 11.5921 13.2076 11.5496 14.2663 11.7263C14.2863 13.2676 14.2238 14.8088 14.2238 16.3513C13.7794 16.1955 13.3085 16.129 12.8383 16.1557C12.3681 16.1823 11.9077 16.3017 11.4838 16.5068C11.0598 16.7119 10.6805 16.9988 10.3678 17.351C10.055 17.7031 9.81496 18.1136 9.66133 18.5588C9.49818 19.1021 9.44882 19.6731 9.51633 20.2363C9.65144 21.095 10.0974 21.8741 10.7695 22.4254C11.4416 22.9767 12.2928 23.2617 13.1613 23.2263C13.7441 23.2092 14.3133 23.0468 14.8173 22.7539C15.3214 22.4609 15.7443 22.0467 16.0476 21.5488C16.2796 21.2222 16.4261 20.8428 16.4738 20.4451C16.5788 18.5801 16.5363 16.7263 16.5476 14.8613C16.5588 10.6638 16.5376 6.47633 16.5688 2.28883Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a
                        aria-label="Instagram"
                        href="https://www.instagram.com/gethyped.nl/"
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="100%"
                          viewBox="0 0 31 30"
                          fill="none"
                        >
                          <path
                            d="M28.4426 9.61758C28.4183 8.58045 28.224 7.55433 27.8676 6.58008C27.553 5.74483 27.0579 4.98935 26.4176 4.36758C25.7958 3.72728 25.0403 3.23216 24.2051 2.91758C23.2308 2.56113 22.2047 2.36689 21.1676 2.34258C19.8426 2.26758 19.4176 2.26758 16.0176 2.26758C12.6176 2.26758 12.1926 2.26758 10.8676 2.34258C9.83045 2.36689 8.80433 2.56113 7.83008 2.91758C6.99483 3.23216 6.23935 3.72728 5.61758 4.36758C4.97686 4.98655 4.4853 5.74313 4.18008 6.58008C3.81278 7.55176 3.61409 8.57902 3.59258 9.61758C3.51758 10.9426 3.51758 11.3676 3.51758 14.7676C3.51758 18.1676 3.51758 18.5926 3.59258 19.9176C3.61409 20.9561 3.81278 21.9834 4.18008 22.9551C4.4853 23.792 4.97686 24.5486 5.61758 25.1676C6.23935 25.8079 6.99483 26.303 7.83008 26.6176C8.80433 26.974 9.83045 27.1683 10.8676 27.1926C12.1926 27.2676 12.6176 27.2676 16.0176 27.2676C19.4176 27.2676 19.8426 27.2676 21.1676 27.1926C22.2047 27.1683 23.2308 26.974 24.2051 26.6176C25.0344 26.2914 25.7876 25.7978 26.4177 25.1677C27.0478 24.5376 27.5414 23.7844 27.8676 22.9551C28.224 21.9808 28.4183 20.9547 28.4426 19.9176C28.4426 18.5926 28.5176 18.1676 28.5176 14.7676C28.5176 11.3676 28.5176 10.9426 28.4426 9.61758ZM26.1926 19.7676C26.1835 20.561 26.0398 21.3472 25.7676 22.0926C25.5584 22.6317 25.2392 23.1213 24.8303 23.5303C24.4213 23.9392 23.9317 24.2584 23.3926 24.4676C22.6472 24.7398 21.861 24.8835 21.0676 24.8926C19.8176 24.9551 19.3551 24.9676 16.0676 24.9676C12.7801 24.9676 12.3176 24.9676 11.0676 24.8926C10.2435 24.9111 9.42259 24.7841 8.64258 24.5176C8.10344 24.3084 7.61381 23.9892 7.20489 23.5803C6.79598 23.1713 6.47676 22.6817 6.26758 22.1426C5.98976 21.3814 5.84597 20.5779 5.84258 19.7676C5.84258 18.5176 5.76758 18.0551 5.76758 14.7676C5.76758 11.4801 5.76758 11.0176 5.84258 9.76758C5.84597 8.9573 5.98976 8.15375 6.26758 7.39258C6.47676 6.85344 6.79598 6.36381 7.20489 5.95489C7.61381 5.54598 8.10344 5.22676 8.64258 5.01758C9.40375 4.73976 10.2073 4.59597 11.0176 4.59258C12.2676 4.59258 12.7301 4.51758 16.0176 4.51758C19.3051 4.51758 19.7676 4.51758 21.0176 4.59258C21.811 4.60168 22.5972 4.74539 23.3426 5.01758C23.8817 5.22676 24.3713 5.54598 24.7803 5.95489C25.1892 6.36381 25.5084 6.85344 25.7176 7.39258C26.0125 8.1507 26.1732 8.95435 26.1926 9.76758C26.2551 11.0176 26.2676 11.4801 26.2676 14.7676C26.2676 18.0551 26.2551 18.5176 26.1926 19.7676Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a
                        aria-label="YouTube"
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="100%"
                          viewBox="0 0 31 30"
                          fill="none"
                        >
                          <path
                            d="M28.3283 8.35882C28.3283 8.35882 28.0494 6.39809 27.1856 5.52554C26.0901 4.38209 24.8624 4.37687 24.3033 4.3101C20.2662 4.01855 15.65 4.01855 15.65 4.01855H15.6322C15.6322 4.01855 11.016 4.01855 6.97884 4.3101C6.41978 4.37687 5.19207 4.38209 4.0966 5.52554C3.23277 6.39809 2.95388 8.35882 2.95388 8.35882C2.95388 8.35882 2.66316 10.6728 2.66316 12.9868V14.7471C2.66316 17.0611 2.95388 19.3751 2.95388 19.3751C2.95388 19.3751 3.23277 21.3359 4.0966 22.2084C5.19207 23.3519 6.64366 23.3153 7.27218 23.4354C9.52928 23.6521 15.6411 23.7153 15.6411 23.7153C15.6411 23.7153 20.2624 23.7027 24.2995 23.4112C24.8585 23.3444 26.0862 23.3392 27.1817 22.1957C28.0455 21.3232 28.3244 19.3624 28.3244 19.3624C28.3244 19.3624 28.6151 17.0484 28.6151 14.7344V12.974C28.6279 10.6601 28.3283 8.35882 28.3283 8.35882ZM13.0142 17.6534V9.52843L20.8143 13.6152L13.0142 17.6534Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="footer-col is-right">
                  <div className="footer-contact-item">
                    <div className="footer-label">Contact</div>
                    <a
                      href="mailto:info@gethyped.nl"
                      className="footer-link text-small"
                    >
                      info@gethyped.nl
                    </a>
                    <a
                      href="tel:+31615337496"
                      className="footer-link text-small"
                    >
                      +31 6 1533 7496
                    </a>
                  </div>

                  <div className="footer-contact-item">
                    <div className="footer-label">Adres</div>
                    <a
                      href="https://www.google.nl/maps/dir/?api=1&destination=Beltrumsestraat+6%2C+7141+AL+Groenlo"
                      target="_blank"
                      rel="noreferrer"
                      className="footer-link text-small"
                    >
                      Beltrumsestraat 6,
                      <br />
                      7141 AL Groenlo
                    </a>
                  </div>
                </div>
              </div>

              <div className="footer-bottom-bar">
                <div className="footer-credits">
                  <div className="credit-left">
                    © {new Date().getFullYear()} Get Hyped
                  </div>
                  <div className="credit-center">
                    <a
                      href="https://dylanbrouwer.design/"
                      target="_blank"
                      rel="noreferrer"
                      className="design-credit"
                    >
                      © Design by Dylan
                    </a>
                  </div>
                  <div className="credit-right">
                    <a href="/privacy" className="privacy-link">
                      Privacyvoorwaarden
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
