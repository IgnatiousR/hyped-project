import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="section_hero">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
            <h1 className="hero_eyebrow">Social-first content agency</h1>
            <h2 className="hero_title">
              Get Hyped.<br />
              Get Noticed.<br />
              Get Results.
            </h2>
            <p className="hero_description">
              Klaar met gokken op content die niets oplevert? Wij maken content die opvalt. <br />
              Niks zonder strategie: alleen resultaatgerichte content.
            </p>
          </div>
          
          <div className="hero_cards-container">
            {/* Card 1: Stats */}
            <div className="hero_card is-blue">
              <div className="hero_card-inner">
                <div className="hero_card-number">10M+</div>
                <div className="hero_card-label">Organische views</div>
              </div>
            </div>
            
            {/* Card 2: Video */}
            <div className="hero_card is-video is-1">
              <div className="hero_card-video-wrapper">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="hero_card-video"
                  src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684d1685aed7d678d8a7c64d_gh-hero-01-transcode.mp4"
                />
              </div>
            </div>
            
            {/* Card 3: Stats */}
            <div className="hero_card is-pink">
              <div className="hero_card-inner">
                <div className="hero_card-number">30+</div>
                <div className="hero_card-label">Merken geholpen</div>
              </div>
            </div>
            
            {/* Card 4: Video */}
            <div className="hero_card is-video is-2">
              <div className="hero_card-video-wrapper">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
