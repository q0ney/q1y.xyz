import CopyEmail from './copy-email';
import ProjectDetails from './components/project-details';
import HeroLight from './components/hero-light';
import BlurText from './components/react-bits/BlurText';
import Magnet from './components/react-bits/Magnet';
import AnimatedContent from './components/react-bits/AnimatedContent';

const stages = [['01', '+', 'An idea', 'Define what you need'], ['02', '⌘', 'AI-assisted development', 'Turn intent into an application'], ['03', '▧', 'Preview & review', 'Check before publishing'], ['04', '↗', 'Deployment', 'Bring it to the team']];

export default function Home() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="wrap header"><a className="wordmark" href="#" aria-label="qoney home">qoney<span>_</span></a><nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact <span aria-hidden="true">↗</span></a></nav></header>
    <HeroLight />
    <main id="main">
      <section className="hero wrap" aria-labelledby="hero-title">

        <div className="hero-copy"><p className="eyebrow">FULLSTACK DEVELOPER</p><h1 id="hero-title"><BlurText text="qoney" className="name-reveal" animateBy="letters" direction="bottom" trigger="load" delay={75} stepDuration={0.3} blur={12} distance={16} /><span className="name-dot">.</span></h1><p className="hero-description">I build applications<br/>and the systems <em>behind them.</em></p><a className="text-link" href="#work">Explore selected work <span aria-hidden="true">↓</span></a></div>
      </section>
      <section id="work" className="work wrap section" aria-labelledby="work-title">
        <div className="section-heading"><h2 id="work-title">Built from the ground up<span>.</span></h2></div>
        <article id="featured-project" className="project"><div className="project-info"><h3>Internal App<br/>Platform</h3><p>A path from an idea to a deployed application. Built for non-technical teams working with AI.</p><div className="tags"><span>TypeScript</span><span>React</span><span>Cloudflare</span><span>Hono</span></div><div className="project-role"><span className="mono">MY ROLE</span><span>End-to-end design & development</span></div></div>
          <div className="diagram" aria-label="Conceptual workflow from idea to deployment"><ol className="flow">{stages.map(([number, icon, title, description]) => <li key={number} className="flow-step"><AnimatedContent className={`flow-node ${number === '02' ? 'active' : ''}`} distance={22} duration={0.65} delay={(Number(number) - 1) * 0.13} blur={3} threshold={0.15}><span className="node-icon" aria-hidden="true">{icon}</span><div><small>STEP {number}</small><strong>{title}</strong><p>{description}</p></div><span className="node-tick" aria-hidden="true">{number === '02' ? '◉' : '+'}</span></AnimatedContent></li>)}</ol></div>
          <ProjectDetails><div className="detail-grid"><div><h4>The problem</h4><p>Building with AI is only part of the process. Teams also need a consistent way to start, preview, publish and manage their applications.</p></div><div><h4>The system</h4><p>An application starter, AI tooling integration, a publishing panel and a deployment workflow, connected through shared access controls.</p></div><div><h4>My contribution</h4><p>I designed and implemented the complete platform, from the application interface to the services and tooling behind it.</p></div></div><p className="privacy-note mono">An anonymized overview. Source code and company details are private.</p></ProjectDetails>
        </article>
      </section>
      <section id="about" className="about wrap section" aria-labelledby="about-title"><div className="about-content"><h2 id="about-title">The whole picture.<br/><span>Down to the details.</span></h2><div className="about-columns"><p>I'm qoney, a fullstack developer. I work across interfaces, APIs and infrastructure — connecting the pieces that turn an application into a working system.</p><p>My work includes internal tools, AI-assisted workflows and deployment platforms, from the first idea through to the implementation.</p></div><div className="stack-line"><span className="mono">WORKING WITH</span><ul className="stack-list" aria-label="Technologies I work with">{['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'Hono', 'Tailwind CSS', 'AWS', 'Cloudflare Workers', 'D1', 'MCP'].map(technology => <li key={technology}>{technology}</li>)}</ul></div></div></section>
      <section id="contact" className="contact wrap section" aria-labelledby="contact-title"><h2 id="contact-title">Have something<br/>in mind<span>?</span></h2><div className="contact-bottom"><Magnet padding={35} magnetStrength={5} maxOffset={9}><a className="email" href="mailto:qoney@pm.me">qoney@pm.me <span aria-hidden="true">↗</span></a></Magnet><CopyEmail/><Magnet wrapperClassName="github-magnet" padding={35} magnetStrength={4} maxOffset={10}><a className="github" href="https://github.com/q0ney" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></Magnet></div></section>
    </main>
    <footer className="footer wrap mono"><a href="#" className="wordmark">qoney<span>_</span></a><a href="#">BACK TO TOP ↑</a></footer>
  </>;
}






