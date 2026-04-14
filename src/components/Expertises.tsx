import NavItem from './NavItem';
import './Expertises.css';

interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
  href: string;
  color: string;
}

const expertises: ExpertiseItem[] = [
  {
    number: '01',
    title: 'Social Strategy',
    description: 'Merkdoelen en data vertaald naar een concreet plan met formats, contentpijlers, tone-of-voice en een contentkalender.',
    href: '/expertises/social-strategy',
    color: '#3d8ef8',
  },
  {
    number: '02',
    title: 'Content Productie',
    description: 'Creatieve shorts, reels en visuals die opvallen, blijven hangen en aansluiten bij jouw doelgroep.',
    href: '/expertises/content-productie',
    color: '#3ec97e',
  },
  {
    number: '03',
    title: 'Social Advertising',
    description: 'Gerichte advertenties op de juiste kanalen voor maximaal bereik, leads en conversie.',
    href: '/expertises/social-advertising',
    color: '#fcb8fa',
  },
  {
    number: '04',
    title: 'Data & Inzichten',
    description: 'KPI-analyse en rapportage zodat we continu bijsturen op wat écht werkt voor meetbaar resultaat.',
    href: '/expertises/data-inzichten',
    color: '#f5c842',
  },
];

const Expertises = () => {
  return (
    <section className="section_expertises">
      <div className="expertises_header">
        <div className="expertises_label">Onze expertises</div>
        <h2 className="expertises_title">
          Alles wat je<br />nodig hebt.
        </h2>
      </div>

      <div className="expertises_list">
        {expertises.map((item, i) => (
          <a key={i} href={item.href} className="expertise_item">
            <div className="expertise_item-number">{item.number}</div>
            <div className="expertise_item-content">
              <div className="expertise_item-top">
                <h3 className="expertise_item-title">{item.title}</h3>
                <div
                  className="expertise_item-dot"
                  style={{ backgroundColor: item.color }}
                ></div>
              </div>
              <p className="expertise_item-description">{item.description}</p>
            </div>
            <div className="expertise_item-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Expertises;
