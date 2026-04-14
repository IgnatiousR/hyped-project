import './Hero.css';

const Hero = () => {
  return (
    <section className="section_hero">

      {/* Heading Block */}
      <div className="hero_heading-block">
        <h1 className="hero_title">
          Get Hyped. Get<br />
          Noticed. Get Results.
        </h1>
        <p className="hero_description">
          Klaar met gokken op content<br />
          die niets oplevert?
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
        </div>

        {/* Card 2: Video */}
        <div className="hero_card is-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero_card-video"
            src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684d1685aed7d678d8a7c64d_gh-hero-01-transcode.mp4"
          />
        </div>

        {/* Card 3: Green Stats */}
        <div className="hero_card is-green">
          <div className="hero_card-top">
            <div className="hero_card-number">30+</div>
          </div>
          <div className="hero_card-bottom">
            <div className="hero_card-divider"></div>
            <div className="hero_card-label">Merken geholpen</div>
            <div className="hero_card-subtext">Van start-up tot multinational</div>
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
            src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684d168e6b1d428e2cd4d64d_gh-hero-02-transcode.mp4"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
