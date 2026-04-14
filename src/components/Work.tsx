import './Work.css';

interface WorkItem {
  title: string;
  client: string;
  tag: string;
  tagColor: string;
  video: string;
  href: string;
}

const workItems: WorkItem[] = [
  {
    title: 'PetrolHeads — Van nul naar viraal',
    client: 'PetrolHeads',
    tag: 'Content Productie',
    tagColor: '#3d8ef8',
    video: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684d5a2e1c3b2e4f5a6d7e8f_ph-case.mp4',
    href: '/work/petrolheads',
  },
  {
    title: 'Autospot — Short-form die converteert',
    client: 'Autospot',
    tag: 'Social Advertising',
    tagColor: '#3ec97e',
    video: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684d5a2e2d4c3f5e6b7a8c9d_as-case.mp4',
    href: '/work/autospot',
  },
  {
    title: 'CoolBlue — Strategie & Activatie',
    client: 'CoolBlue',
    tag: 'Social Strategy',
    tagColor: '#fcb8fa',
    video: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684d5a2e3e5d4f6a7c8b9e0f_cb-case.mp4',
    href: '/work/coolblue',
  },
];

const Work = () => {
  return (
    <section className="section_work">
      <div className="work_header">
        <div className="work_header-left">
          <div className="work_label">Ons werk</div>
          <h2 className="work_title">Cases die<br />voor zich spreken.</h2>
        </div>
        <a href="/work" className="work_all-link">
          Bekijk al ons werk
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>

      <div className="work_grid">
        {workItems.map((item, i) => (
          <a key={i} href={item.href} className={`work_card ${i === 0 ? 'is-featured' : ''}`}>
            <div className="work_card-media">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="work_card-video"
                src={item.video}
              />
              {/* Fallback gradient if video fails */}
              <div className="work_card-media-fallback" style={{ background: `linear-gradient(135deg, ${item.tagColor}33, ${item.tagColor}99)` }}></div>
            </div>
            <div className="work_card-info">
              <span className="work_card-tag" style={{ backgroundColor: `${item.tagColor}22`, color: item.tagColor }}>
                {item.tag}
              </span>
              <h3 className="work_card-title">{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
