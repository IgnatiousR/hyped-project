import './About.css';

const About = () => {
  return (
    <section className="section_about">
      <div className="about_inner">
        <div className="about_label">Over ons</div>
        <h2 className="about_text">
          Wij zijn een team van{' '}
          <span className="about_highlight is-blue">strategen</span>,{' '}
          <span className="about_highlight is-green">creators</span> en{' '}
          <span className="about_highlight is-pink">data-nerds</span>{' '}
          die geloven dat goede content meer is dan mooie beelden.
          Het is een systeem dat groeit.
        </h2>
        <div className="about_stats">
          <div className="about_stat">
            <div className="about_stat-number">3+</div>
            <div className="about_stat-label">Jaar ervaring</div>
          </div>
          <div className="about_stat">
            <div className="about_stat-number">30+</div>
            <div className="about_stat-label">Tevreden klanten</div>
          </div>
          <div className="about_stat">
            <div className="about_stat-number">10M+</div>
            <div className="about_stat-label">Organische views</div>
          </div>
        </div>
        <a href="/about" className="about_link">
          Leer ons kennen
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default About;
