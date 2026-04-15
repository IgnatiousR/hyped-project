import NavItem from "./NavItem";
import Button from "./Button";
import { FlameIcon, EmailIcon, FooterBackground, FooterLogo, FooterSticker } from "./FooterAssets";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="padding-global">
        <div className="footer-container">
          
          <div className="footer-cta">
            <h2 className="heading-xxl">Let's Get Hyped!</h2>
            <div className="button-group is-footer">
              <Button variant="outline" href="mailto:info@gethyped.nl" icon={<EmailIcon />}>
                Mail ons direct
              </Button>
              <Button variant="form" href="/contact" icon={<FlameIcon />}>
                Get Results
              </Button>
            </div>
          </div>
          
          <div className="footer-main">
            <div className="footer-bg-wrap">
              <FooterBackground />
              <div className="footer-logo">
                <FooterLogo />
              </div>
            </div>
            
            <div className="footer-sticker">
               <FooterSticker />
            </div>
            
            <div className="footer-info-content">
              <div className="footer-grid">
                
                <div className="footer-col is-links">
                  <div className="footer-sitemap">
                    <NavItem label="Expertises" href="/expertises" className="is-footer" />
                    <NavItem label="Work" href="/work" className="is-footer" />
                    <NavItem label="About" href="/about" className="is-footer" />
                    <NavItem label="Contact" href="/contact" className="is-footer" />
                  </div>
                  
                  <div className="footer-socials">
                    <div className="footer-label">Follow us</div>
                    <div className="social-icon-group">
                      <a aria-label="LinkedIn" href="https://www.linkedin.com/company/gethypednl/" target="_blank" rel="noreferrer" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 31 30" fill="none">
                          <path d="M27.1421 25.8926H22.4746V18.5839C22.4746 16.8414 22.4396 14.5989 20.0446 14.5989C17.6134 14.5989 17.2421 16.4951 17.2421 18.4551V25.8926H12.5784V10.8639H17.0584V12.9126H17.1184C17.5673 12.1461 18.2157 11.5156 18.9944 11.0882C19.7731 10.6607 20.6531 10.4523 21.5409 10.4851C26.2659 10.4851 27.1396 13.5951 27.1396 17.6426V25.8926H27.1421ZM7.31211 8.80764C6.77626 8.80838 6.25224 8.65017 5.80632 8.35304C5.3604 8.0559 5.01263 7.63319 4.807 7.13837C4.60137 6.64355 4.54712 6.09885 4.65111 5.5732C4.7551 5.04754 5.01267 4.56453 5.39122 4.18528C5.76977 3.80603 6.2523 3.54758 6.77776 3.44261C7.30323 3.33765 7.84802 3.3909 8.34322 3.59561C8.83842 3.80033 9.26178 4.14732 9.55973 4.59269C9.85769 5.03805 10.0169 5.56179 10.0171 6.09764C10.0176 6.45324 9.94801 6.80545 9.81231 7.13414C9.6766 7.46282 9.47745 7.76155 9.22624 8.01323C8.97502 8.26491 8.67667 8.46461 8.34823 8.60092C8.01979 8.73723 7.66771 8.80747 7.31211 8.80764ZM9.64961 25.8926H4.97336V10.8639H9.64961V25.8926Z" fill="currentColor"/>
                        </svg>
                      </a>
                      <a aria-label="TikTok" href="https://www.tiktok.com/@gethyped.nl" target="_blank" rel="noreferrer" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 31 30" fill="none">
                          <path d="M16.5688 2.28883C17.9338 2.26758 19.2876 2.27758 20.6413 2.26758C20.683 3.89272 21.3335 5.44296 22.4638 6.61133C23.686 7.70925 25.2409 8.36588 26.8801 8.47633V12.6738C25.3684 12.6367 23.88 12.2931 22.5051 11.6638C21.9192 11.3835 21.3551 11.0596 20.8176 10.6951C20.8076 13.7363 20.8288 16.7776 20.7976 19.8088C20.7178 21.2809 20.231 22.702 19.3913 23.9138C18.699 24.9146 17.7811 25.7386 16.7117 26.3194C15.6424 26.9003 14.4515 27.2216 13.2351 27.2576C11.7437 27.3249 10.2655 26.9514 8.98508 26.1838C7.93117 25.5579 7.03836 24.694 6.37809 23.6613C5.71781 22.6286 5.30839 21.4556 5.18258 20.2363C5.16258 19.7151 5.15133 19.1951 5.17258 18.6838C5.27891 17.6157 5.60341 16.5808 6.12599 15.6432C6.64857 14.7055 7.35809 13.8852 8.21061 13.2329C9.06312 12.5807 10.0405 12.1104 11.0821 11.8513C12.1238 11.5921 13.2076 11.5496 14.2663 11.7263C14.2863 13.2676 14.2238 14.8088 14.2238 16.3513C13.7794 16.1955 13.3085 16.129 12.8383 16.1557C12.3681 16.1823 11.9077 16.3017 11.4838 16.5068C11.0598 16.7119 10.6805 16.9988 10.3678 17.351C10.055 17.7031 9.81496 18.1136 9.66133 18.5588C9.49818 19.1021 9.44882 19.6731 9.51633 20.2363C9.65144 21.095 10.0974 21.8741 10.7695 22.4254C11.4416 22.9767 12.2928 23.2617 13.1613 23.2263C13.7441 23.2092 14.3133 23.0468 14.8173 22.7539C15.3214 22.4609 15.7443 22.0467 16.0476 21.5488C16.2796 21.2222 16.4261 20.8428 16.4738 20.4451C16.5788 18.5801 16.5363 16.7263 16.5476 14.8613C16.5588 10.6638 16.5376 6.47633 16.5688 2.28883Z" fill="currentColor"/>
                        </svg>
                      </a>
                      <a aria-label="Instagram" href="https://www.instagram.com/gethyped.nl/" target="_blank" rel="noreferrer" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 31 30" fill="none">
                          <path d="M28.4426 9.61758C28.4183 8.58045 28.224 7.55433 27.8676 6.58008C27.553 5.74483 27.0579 4.98935 26.4176 4.36758C25.7958 3.72728 25.0403 3.23216 24.2051 2.91758C23.2308 2.56113 22.2047 2.36689 21.1676 2.34258C19.8426 2.26758 19.4176 2.26758 16.0176 2.26758C12.6176 2.26758 12.1926 2.26758 10.8676 2.34258C9.83045 2.36689 8.80433 2.56113 7.83008 2.91758C6.99483 3.23216 6.23935 3.72728 5.61758 4.36758C4.97686 4.98655 4.4853 5.74313 4.18008 6.58008C3.81278 7.55176 3.61409 8.57902 3.59258 9.61758C3.51758 10.9426 3.51758 11.3676 3.51758 14.7676C3.51758 18.1676 3.51758 18.5926 3.59258 19.9176C3.61409 20.9561 3.81278 21.9834 4.18008 22.9551C4.4853 23.792 4.97686 24.5486 5.61758 25.1676C6.23935 25.8079 6.99483 26.303 7.83008 26.6176C8.80433 26.974 9.83045 27.1683 10.8676 27.1926C12.1926 27.2676 12.6176 27.2676 16.0176 27.2676C19.4176 27.2676 19.8426 27.2676 21.1676 27.1926C22.2047 27.1683 23.2308 26.974 24.2051 26.6176C25.0344 26.2914 25.7876 25.7978 26.4177 25.1677C27.0478 24.5376 27.5414 23.7844 27.8676 22.9551C28.224 21.9808 28.4183 20.9547 28.4426 19.9176C28.4426 18.5926 28.5176 18.1676 28.5176 14.7676C28.5176 11.3676 28.5176 10.9426 28.4426 9.61758ZM26.1926 19.7676C26.1835 20.561 26.0398 21.3472 25.7676 22.0926C25.5584 22.6317 25.2392 23.1213 24.8303 23.5303C24.4213 23.9392 23.9317 24.2584 23.3926 24.4676C22.6472 24.7398 21.861 24.8835 21.0676 24.8926C19.8176 24.9551 19.3551 24.9676 16.0676 24.9676C12.7801 24.9676 12.3176 24.9676 11.0676 24.8926C10.2435 24.9111 9.42259 24.7841 8.64258 24.5176C8.10344 24.3084 7.61381 23.9892 7.20489 23.5803C6.79598 23.1713 6.47676 22.6817 6.26758 22.1426C5.98976 21.3814 5.84597 20.5779 5.84258 19.7676C5.84258 18.5176 5.76758 18.0551 5.76758 14.7676C5.76758 11.4801 5.76758 11.0176 5.84258 9.76758C5.84597 8.9573 5.98976 8.15375 6.26758 7.39258C6.47676 6.85344 6.79598 6.36381 7.20489 5.95489C7.61381 5.54598 8.10344 5.22676 8.64258 5.01758C9.40375 4.73976 10.2073 4.59597 11.0176 4.59258C12.2676 4.59258 12.7301 4.51758 16.0176 4.51758C19.3051 4.51758 19.7676 4.51758 21.0176 4.59258C21.811 4.60168 22.5972 4.74539 23.3426 5.01758C23.8817 5.22676 24.3713 5.54598 24.7803 5.95489C25.1892 6.36381 25.5084 6.85344 25.7176 7.39258C26.0125 8.1507 26.1732 8.95435 26.1926 9.76758C26.2551 11.0176 26.2676 11.4801 26.2676 14.7676C26.2676 18.0551 26.2551 18.5176 26.1926 19.7676Z" fill="currentColor"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="footer-col is-contact">
                  <div className="footer-label">Contact</div>
                  <a href="mailto:info@gethyped.nl" className="footer-link">info@gethyped.nl</a>
                  <a href="tel:+31615337496" className="footer-link">+31 6 1533 7496</a>
                  <a href="/privacy" className="footer-link">Privacyvoorwaarden</a>
                </div>
                
                <div className="footer-col is-address">
                  <div className="footer-label">Adres</div>
                  <a href="https://www.google.nl/maps/dir/?api=1&destination=Beltrumsestraat+6%2C+7141+AL+Groenlo" target="_blank" rel="noreferrer" className="footer-link">
                    Beltrumsestraat 6, <br/>7141 AL Groenlo
                  </a>
                </div>

              </div>
              
              <div className="footer-bottom-bar">
                <div className="footer-credits">
                  <div>© {new Date().getFullYear()} Get Hyped</div>
                  <div className="credits-divider">|</div>
                  <a href="https://dylanbrouwer.design/" target="_blank" rel="noreferrer" className="design-credit">Design by Dylan</a>
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
