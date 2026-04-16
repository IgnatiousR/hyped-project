import React, { useState } from 'react';
import './SectionClients.css';

const clients = [
  { name: 'Bullit Digital', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg' },
  { name: 'Morssinkhof', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c194e6d1b186563459b107_morssinkhof.svg' },
  { name: 'Salontopper', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg' },
  { name: 'Seesing Flex', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg' },
  { name: 'Graafschap College', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg' },
  { name: 'Fides', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg' },
  { name: 'SRHK', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg' },
  { name: 'KNLTB', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d81e72e08110e3fd1a17_knltb.svg' },
  { name: 'THO', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684b062ebc242028ca4b3ea1_tho.svg' },
  { name: 'De Talententuin', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg' },
  { name: 'ZCLV', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg' },
];

const rotations = [-6, 8, -4, 6, -8, 5, -5, 7, -3, 4, -7];

const SectionClients: React.FC = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);
  
  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="section_clients">
      <div className="section-padding-128px">
        <div className="padding-global">
          <div className="w-layout-blockcontainer container-col-12 w-container">
            <div className="padding-bottom padding-72px">
              <div className="max-width-640px">
                <h2 className="heading-m">These brands got hyped.</h2>
              </div>
            </div>
            
            <div 
              className={`mwg_effect008 w-dyn-list ${isGrabbing ? 'is-grabbing' : ''}`}
              onPointerDown={() => setIsGrabbing(true)}
              onPointerUp={() => setIsGrabbing(false)}
              onPointerLeave={() => setIsGrabbing(false)}
            >
              <div className="track-rotator">
                <div role="list" className="container is-clients-marquee w-dyn-items">
                  {duplicatedClients.map((client, index) => {
                    const rot = rotations[index % rotations.length];
                    return (
                      <div 
                        key={index} 
                        role="listitem" 
                        className="card w-dyn-item"
                        style={{ '--card-rot': `${rot}deg` } as React.CSSProperties}
                      >
                      <div className="client-card">
                        <img 
                          src={client.logo} 
                          loading="lazy" 
                          alt={client.name} 
                          className="image" 
                          draggable="false" 
                        />
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="padding-global">
          <div className="section-divider"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionClients;
