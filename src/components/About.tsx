import "./About.css";
import Button from "./Button";

const About = () => {
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
  return (
    <section className="section_about">
      <div className="about_container">
        <h2 className="about_heading">
          Wij maken content die opvalt. Die
          <br />
          blijft hangen. Die jouw doelgroep
          <br />
          raakt en jouw merk in beweging
          <br />
          brengt. Snel, krachtig en energiek.
        </h2>

        <div className="about_grid">
          <div className="about_image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop"
              alt="Team member"
              className="about_image"
            />
          </div>

          <div className="about_content">
            <p className="about_text">
              We stoppen niet bij mooie plaatjes en
              <br />
              vette beelden. We maken het meetbaar.
              <br />
              Zo weet je precies wat werkt en wat niet.
              <br />
              Nooit meer content zonder strategie.
              <br />
              Nooit meer content zonder resultaat.
            </p>

            <div className="about_buttons-wrapper">
              {/* <button className="button-outline">
                <span className="button-outline__text">Leer ons kennen</span>

                <span className="button-outline__icon">
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
                </span>
              </button> */}

              <Button variant="outline" icon={ArrowIcon}>
                Leer ons kennen
              </Button>

              <button className="icon-slide-btn">
                <span className="icon-wrapper">
                  <svg
                    className="icon icon-top"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                  </svg>

                  <svg
                    className="icon icon-bottom"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
