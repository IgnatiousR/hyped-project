import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section_footer">

      {/* CTA Block */}
      <div className="footer_cta">
        <div className="footer_cta-label">Klaar voor meer?</div>
        <h2 className="footer_cta-title">
          Let's Get<br />Hyped.
        </h2>
        <div className="footer_cta-actions">
          <a href="/contact" className="footer_cta-btn is-primary">
            <span className="footer_cta-btn-bg"></span>
            <span className="footer_cta-btn-text">Get Results</span>
            <span className="footer_cta-btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" viewBox="0 0 20 24" fill="none">
                <path d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z" fill="currentColor"/>
              </svg>
            </span>
          </a>
          <a href="mailto:info@gethyped.nl" className="footer_cta-btn is-outline">
            Mail ons direct
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer_bottom">
        <div className="footer_bottom-inner">

          <div className="footer_col">
            <div className="footer_col-label">Contact</div>
            <a href="mailto:info@gethyped.nl" className="footer_col-link">info@gethyped.nl</a>
            <a href="tel:+31615337496" className="footer_col-link">+31 6 15 33 74 96</a>
          </div>

          <div className="footer_col">
            <div className="footer_col-label">Volg ons</div>
            <a href="https://www.linkedin.com/company/gethyped-nl" target="_blank" rel="noreferrer" className="footer_col-link">LinkedIn</a>
            <a href="https://www.tiktok.com/@gethyped.nl" target="_blank" rel="noreferrer" className="footer_col-link">TikTok</a>
            <a href="https://www.instagram.com/gethyped.nl" target="_blank" rel="noreferrer" className="footer_col-link">Instagram</a>
          </div>

          <div className="footer_col">
            <div className="footer_col-label">Pagina's</div>
            <a href="/expertises" className="footer_col-link">Expertises</a>
            <a href="/work" className="footer_col-link">Work</a>
            <a href="/about" className="footer_col-link">Over ons</a>
            <a href="/contact" className="footer_col-link">Contact</a>
          </div>

          <div className="footer_col is-legal">
            <div className="footer_col-label">Juridisch</div>
            <a href="/privacy" className="footer_col-link">Privacybeleid</a>
            <a href="/cookies" className="footer_col-link">Cookiebeleid</a>
          </div>

        </div>

        <div className="footer_credits">
          <span>© {currentYear} Get Hyped B.V.</span>
          <span>KVK: 92516849</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
