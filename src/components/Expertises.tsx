import './Expertises.css';

const Expertises = () => {
  return (
    <section className="section_expertises">
      <div className="expertises_container">
        
        <div className="expertise_card">
          
          <div className="expertise_card-top">
            <span className="expertise_badge">Expertise</span>
            <span className="expertise_number">01</span>
          </div>
          
          <h2 className="expertise_title">Social strategy</h2>
          
          <div className="expertise_content-wrapper">
            <div className="expertise_content-left">
              <h3 className="expertise_subtitle">Slimme strategie. Sterke start.</h3>
              <p className="expertise_text">
                We duiken diep in jouw merk, doelgroep en<br />
                doelen. En vertalen data naar een duidelijk<br />
                plan met formats die écht impact maken.<br />
                Zo weet je precies waarom het werkt.
              </p>
              
              <button className="button-orange">
                <span className="button-orange__text">Meer over social strategie</span>
                <span className="button-orange__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </button>
            </div>
            
            <div className="expertise_content-right">
              <div className="expertise_image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop" 
                  alt="Social Strategy Chess" 
                  className="expertise_image"
                />
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default Expertises;
