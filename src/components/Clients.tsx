import './Clients.css';

// Brand logos from gethyped.nl source — using their CDN URLs
const clients = [
  { name: 'Autospot', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684d55e1f16855e4b9f43b82_lc-autospot.svg' },
  { name: 'BAS World', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684d55e13d8e6aab0c1e0e34_lc-basworld.svg' },
  { name: 'Bulex', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684d55e2a59e6a4c5e5b84c7_lc-bulex.svg' },
  { name: 'CoolBlue', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684d55e21edbb02f6c4d2dce_lc-coolblue.svg' },
  { name: 'Europ Assistance', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684d55e1cfd891dfe0c46b35_lc-europassistance.svg' },
  { name: 'Lucas Bols', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684d55e2da7d1c9b3e48afe2_lc-lucasbols.svg' },
  { name: 'PetrolHeads', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684d55e27c7a531c0d3ae8d9_lc-petrolheads.svg' },
  { name: 'Remeha', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684d55e1e2a5c4f2ade93cc1_lc-remeha.svg' },
];

const Clients = () => {
  // Duplicate for seamless infinite scroll
  const allClients = [...clients, ...clients];

  return (
    <section className="section_clients">
      <div className="clients_label">Merken die ons vertrouwen</div>
      <div className="clients_track-wrapper">
        <div className="clients_track">
          {allClients.map((client, i) => (
            <div key={i} className="clients_logo-item">
              <img
                src={client.logo}
                alt={client.name}
                className="clients_logo"
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const span = document.createElement('span');
                  span.textContent = client.name;
                  span.className = 'clients_logo-fallback';
                  target.parentNode?.appendChild(span);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
