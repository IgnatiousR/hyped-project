import Button from "./Button";
import "./Hero.css";

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.2832 20.9176L9.14509 18.8002L15.5491 12.3962L-0.00939941 12.3962L-0.00939941 9.30322L15.5491 9.30322L9.14509 2.9096L11.2832 0.78186L21.3511 10.8497L11.2832 20.9176Z"
      fill="currentColor"
    />
  </svg>
);

const Hero = () => {
  return (
    <section className="section_hero">
      {/* Heading Block */}
      <div className="hero_heading-block">
        <h1 className="hero_title">Get Hyped. Get Noticed. Get Results.</h1>
        <p className="hero_description">
          Tired of gambling on content that delivers nothing?
        </p>
      </div>

      {/* Cards Row */}
      <div className="hero_cards-row">
        {/* Card 1: Blue Stats */}
        <div className="hero_card is-blue">
          <div className="hero_card-top">
            <div className="hero_card-number">10M+</div>
          </div>
          <div className="hero_card-bottom">
            <div className="hero_card-divider"></div>
            <div className="hero_card-label">Organische views</div>
            <div className="hero_card-subtext">Groei door slimme content</div>
          </div>
          <div className="hero_card-action">
            <Button
              variant="icon"
              icon={<ArrowIcon />}
              bgColor="#ffffff"
              iconColor="#3d8ef8"
            >
              {""}
            </Button>
          </div>
        </div>

        {/* Card 2: Video */}
        <div className="hero_card is-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero_card-video"
            src="https://cdn.pixabay.com/video/2017/03/08/8252-207598592_large.mp4"
          />
          <div className="hero_card-action">
            <Button
              variant="icon"
              icon={<ArrowIcon />}
              bgColor="#ffffff"
              iconColor="#000000"
            >
              {""}
            </Button>
          </div>
        </div>

        {/* Card 3: Green Stats */}
        <div className="hero_card is-green">
          <div className="hero_card-top">
            <div className="hero_card-number">30+</div>
          </div>
          <div className="hero_card-bottom">
            <div className="hero_card-divider"></div>
            <div className="hero_card-label">Merken geholpen</div>
            <div className="hero_card-subtext">
              Van start-up tot multinational
            </div>
          </div>
          <div className="hero_card-action">
            <Button
              variant="icon"
              icon={<ArrowIcon />}
              bgColor="#000000"
              iconColor="#ffffff"
            >
              {""}
            </Button>
          </div>
        </div>

        {/* Card 4: Video */}
        <div className="hero_card is-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero_card-video"
            src="https://cdn.pixabay.com/video/2020/04/08/35344-405897623_large.mp4"
          />
          <div className="hero_card-action">
            <Button
              variant="icon"
              icon={<ArrowIcon />}
              bgColor="#ffffff"
              iconColor="#000000"
            >
              {""}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
