const projects = [
  {
    number: "01",
    title: "AdMind",
    label: "Full-stack · Applied AI",
    description:
      "A full-stack ad placement system that uses the Claude API to score placements and move beyond simple matching toward intensity-based tiering.",
    contribution:
      "Built the Java backend independently, including entity models, CRUD operations, and the core scoring workflow.",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Claude API"],
  },
  {
    number: "02",
    title: "Multimodal Medical Image Fusion",
    label: "Deep learning · Research",
    description:
      "A deep learning system for combining complementary information across medical imaging modalities into a clearer fused result.",
    contribution:
      "Led core algorithm and model architecture design, implemented the PyTorch pipeline, and coordinated a four-person research team.",
    stack: ["Python", "PyTorch", "Deep Learning", "Data Integration"],
    award: "Innovation & Entrepreneurship Competition · Excellence Award",
  },
  {
    number: "03",
    title: "Wave Energy System Optimization",
    label: "Machine learning · Optimization",
    description:
      "A modeling workflow that predicts system behavior and searches for stronger damping parameters for a wave-energy system.",
    contribution:
      "Combined Random Forest fitting with genetic algorithm and Bayesian EI optimization, alongside data cleaning and preprocessing.",
    stack: ["Python", "Random Forest", "Genetic Algorithm", "Bayesian Optimization"],
    award: "CUMCM · Third Prize",
  },
];

const skills = [
  {
    title: "Languages",
    values: "Java, Python, C, SQL",
  },
  {
    title: "Backend & Data",
    values: "Spring Boot, Spring Data JPA, MySQL, Pandas, NumPy",
  },
  {
    title: "AI & Modeling",
    values: "PyTorch, Random Forest, Genetic Algorithms, Bayesian Optimization",
  },
  {
    title: "Tools",
    values: "Git, MATLAB",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Yanbao Li, home">
          YL<span>.</span>
        </a>
        <div className="navLinks">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          className="navResume"
          href="/Yanbao-Li-Resume.docx"
          download
          aria-label="Download Yanbao Li's resume"
        >
          Résumé <span aria-hidden="true">↘</span>
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span /> Hello, I&apos;m Yanbao.</p>
          <h1>
            I build software that turns
            <em> ambitious ideas</em> into useful systems.
          </h1>
          <p className="heroIntro">
            Information Systems student at Stony Brook University, focused on
            software engineering and applied AI.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#projects">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="textLink"
              href="mailto:liyanbao522@gmail.com"
            >
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="heroCard" aria-label="Current status">
          <div className="monogram" aria-hidden="true">YL</div>
          <div className="statusLine">
            <span className="statusDot" />
            <span>Open to opportunities</span>
          </div>
          <div className="heroCardRule" />
          <p>Software Engineering</p>
          <p>Applied AI / ML</p>
          <div className="heroCardFooter">
            <span>Stony Brook, NY</span>
            <span>2026</span>
          </div>
        </aside>
      </section>

      <section className="ticker" aria-label="Areas of interest">
        <div className="tickerInner shell">
          <span>Full-stack development</span><i>✦</i>
          <span>Applied artificial intelligence</span><i>✦</i>
          <span>Data-driven systems</span><i>✦</i>
          <span>Human-centered products</span>
        </div>
      </section>

      <section className="projects shell section" id="projects">
        <div className="sectionHeading">
          <div>
            <p className="sectionKicker">Selected work</p>
            <h2>Projects in progress.</h2>
          </div>
          <p>
            Three explorations across backend engineering, deep learning, and
            mathematical optimization. Demos and repositories are coming soon.
          </p>
        </div>

        <div className="projectList">
          {projects.map((project) => (
            <article className="projectCard" key={project.number}>
              <div className="projectTopline">
                <span>{project.number}</span>
                <span className="comingSoon">Case study coming soon</span>
              </div>
              <p className="projectLabel">{project.label}</p>
              <h3>{project.title}</h3>
              <p className="projectDescription">{project.description}</p>
              <p className="projectContribution">{project.contribution}</p>
              {project.award && <p className="award">✦ {project.award}</p>}
              <div className="tags" aria-label={`${project.title} technologies`}>
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="shell aboutGrid">
          <div className="aboutIntro">
            <p className="sectionKicker">A little about me</p>
            <h2>Curious by nature.<br />Practical by choice.</h2>
            <p>
              I&apos;m an Information Systems student who enjoys working where
              software engineering meets intelligent systems. I like breaking
              complex problems into parts, testing ideas quickly, and building
              solutions that are clear enough for other people to use.
            </p>
          </div>

          <div className="timeline" aria-label="Education and leadership">
            <article>
              <span className="timelineYear">2026 — Present</span>
              <div>
                <h3>Stony Brook University</h3>
                <p>Bachelor&apos;s studies in Information Systems</p>
                <span>Stony Brook, New York</span>
              </div>
            </article>
            <article>
              <span className="timelineYear">2024 — 2026</span>
              <div>
                <h3>Anhui University</h3>
                <p>Digital Media Technology</p>
                <span>Co-Lead, Mathematical Modeling Club · Teaching Assistant, Probability Theory</span>
              </div>
            </article>
            <article>
              <span className="timelineYear">Recognition</span>
              <div>
                <h3>Modeling competitions</h3>
                <p>CUMCM Third Prize · Innovation & Entrepreneurship Excellence Award</p>
                <span>Lead programmer and algorithm contributor across multidisciplinary teams</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="skills shell section" aria-labelledby="skills-title">
        <div className="sectionHeading compact">
          <div>
            <p className="sectionKicker">Toolkit</p>
            <h2 id="skills-title">What I work with.</h2>
          </div>
        </div>
        <div className="skillGrid">
          {skills.map((skill, index) => (
            <article key={skill.title}>
              <span>0{index + 1}</span>
              <h3>{skill.title}</h3>
              <p>{skill.values}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contactInner">
          <p className="sectionKicker">Let&apos;s build something useful</p>
          <h2>Have an opportunity<br />or an idea in mind?</h2>
          <a className="emailLink" href="mailto:liyanbao522@gmail.com">
            liyanbao522@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div className="contactBottom">
            <p>Currently looking for software engineering and applied AI roles.</p>
            <div>
              <a href="https://github.com/Owl-Lee" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/yanbao-li-772a45377/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="/Yanbao-Li-Resume.docx" download>Résumé ↓</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <span>© 2026 Yanbao Li</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
