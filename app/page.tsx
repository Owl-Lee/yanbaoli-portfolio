"use client";

import { useState } from "react";

type Language = "en" | "zh";

const schoolLogos = [
  { src: "/brands/sbu-logo.jpg", alt: "Stony Brook University logo", className: "sbuLogo" },
  { src: "/brands/ahu-logo.png", alt: "Anhui University logo", className: "ahuLogo" },
];

const content = {
  en: {
    homepage: "Personal Homepage",
    nav: ["About", "Education", "Projects", "Awards"],
    greeting: "Hi, I’m Yan.",
    role: "Information Systems student · Software & Applied AI",
    intro:
      "Information Systems student at Stony Brook University. I enjoy building reliable software systems and turning machine learning ideas into practical applications.",
    location: "Stony Brook, New York",
    statusTitle: "Currently",
    status:
      "I’m looking for software engineering and applied AI opportunities where I can contribute, learn quickly, and build useful systems with a strong team.",
    aboutTitle: "Biography",
    about: [
      "My name is Yanbao Li, and I also go by Yan. I am currently studying Information Systems at Stony Brook University after transferring from Anhui University, where I studied Digital Media Technology.",
      "My interests sit at the intersection of backend engineering, applied machine learning, and data-driven problem solving. I have built Java services, designed deep learning models, and worked on mathematical optimization problems in team competitions.",
      "I care about understanding how a system works—not only getting a model or feature to run. I am especially interested in roles where thoughtful engineering can make AI systems more reliable and useful.",
    ],
    educationTitle: "Education",
    education: [
      {
        date: "Jul 2026 — Present",
        school: "Stony Brook University",
        degree: "Bachelor’s studies in Information Systems",
        place: "Stony Brook, New York",
      },
      {
        date: "Aug 2024 — Jun 2026",
        school: "Anhui University",
        degree: "Bachelor’s studies in Digital Media Technology",
        place: "Hefei, China",
        detail: "Co-Lead, Mathematical Modeling Club · Teaching Assistant, Probability Theory",
      },
    ],
    projectsTitle: "Selected Projects",
    projectsIntro: "Selected work and source repositories.",
    projects: [
      {
        date: "2026",
        order: 20260816,
        title: "VideoHarvester",
        subtitle: "Local-first Windows video workflow",
        body: "Built a Windows desktop app that turns authorized video-page links into a clear download workflow with playlist handling, progress tracking, duplicate protection, and task recovery.",
        tags: "C# · Windows Forms · yt-dlp · FFmpeg",
        url: "https://github.com/Owl-Lee/VideoHarvester",
      },
      {
        date: "2025",
        order: 20250201,
        title: "MCM/ICM · Problem F",
        subtitle: "Cybercrime policy modeling paper",
        body: "Co-authored a 23-page mathematical modeling paper that combines hierarchical clustering, game-theoretic analysis, and random forest regression to study cybercrime patterns, policy effectiveness, and cybersecurity determinants.",
        tags: "Python · Random Forest · Hierarchical Clustering · Data Visualization",
        url: "/mcm-icm-2025-problem-f-public.pdf",
        linkLabel: "Read paper ↗",
      },
      {
        date: "2025",
        order: 20250907,
        title: "CUMCM · Drone Optimization",
        subtitle: "Multi-agent optimization modeling paper",
        body: "Co-authored a 25-page mathematical modeling paper on coordinated drone deployment. Built a unified geometric model and used simulated annealing, Bayesian optimization, genetic algorithms, island models, and NSGA-II to optimize multi-objective strategies.",
        tags: "Python · Bayesian Optimization · Genetic Algorithms · NSGA-II",
        url: "/cumcm-2025-drone-optimization-paper.pdf",
        linkLabel: "Read paper ↗",
      },
      {
        date: "2026",
        order: 20260815,
        title: "AdMind",
        subtitle: "Explainable video-ad decision prototype",
        body: "Built a policy-first decision layer for long-form video advertising, combining time-coded video evidence, player-state signals, local paused-frame vision, and deterministic ethical rules.",
        tags: "TypeScript · TwelveLabs · MediaPipe · Fastify",
        status: "Private GitHub repository",
      },
      {
        date: "2026",
        order: 20260814,
        title: "Sona",
        subtitle: "Local-first private music player",
        body: "Built a cross-platform music and MV player for Windows and Android, with local import, SHA-256 duplicate detection, SQLite library management, playlists, offline-first playback, and cloud-sync foundations.",
        tags: "Flutter · Dart · SQLite · Supabase",
        status: "Private GitHub repository",
      },
      {
        date: "2024—25",
        order: 20250831,
        title: "Multimodal Medical Image Fusion",
        subtitle: "Deep learning research project",
        body: "Led algorithm and model architecture design for a PyTorch-based multimodal image fusion system, while coordinating research and experiments across a four-person team.",
        tags: "Python · PyTorch · Deep Learning",
        status: "Research project",
      },
    ],
    awardsTitle: "Awards & Leadership",
    awards: [
      ["2025", "CUMCM Mathematical Modeling Competition", "Third Prize"],
      ["2025", "ICM Mathematical Contest in Modeling", "Successful Participant"],
      ["2025", "Innovation & Entrepreneurship Competition", "Excellence Award"],
      ["2024—26", "Mathematical Modeling Club, Anhui University", "Co-Lead"],
      ["2025", "Probability Theory", "Teaching Assistant"],
    ],
    sidebar: {
      profile: "Profile",
      school: "Stony Brook University",
      major: "Information Systems",
      interests: "Interests",
      interestsList: ["Backend Systems", "Applied AI", "Machine Learning", "Data & Optimization"],
      tools: "Technical Skills",
      toolsList: ["Java · Python · C · SQL", "Spring Boot · JPA · MySQL", "PyTorch · Pandas · NumPy", "Git · MATLAB"],
      contact: "Contact",
    },
    footer: "Designed and built by Yanbao Li.",
    download: "CV / Résumé",
    repoSoon: "Repository soon",
    repoSource: "View source ↗",
    photoRole: "Software & AI",
    photoNote: "Photo can be added later",
  },
  zh: {
    homepage: "个人主页",
    nav: ["关于我", "教育经历", "项目", "奖项"],
    greeting: "你好，我是 Yan。",
    role: "Information Systems 学生 · 软件与 AI 应用开发",
    intro:
      "石溪大学 Information Systems 专业学生。我喜欢构建可靠的软件系统，也希望把机器学习想法做成真正有用的应用。",
    location: "美国纽约州石溪",
    statusTitle: "近期动态",
    status:
      "我正在寻找软件工程与 AI 应用开发相关机会，希望加入优秀的团队，在快速学习的同时参与构建真正有价值的系统。",
    aboutTitle: "个人简介",
    about: [
      "我叫 Yanbao Li，也可以叫我 Yan。目前就读于石溪大学 Information Systems 专业；转学之前，我在安徽大学学习数字媒体技术。",
      "我的兴趣主要集中在后端工程、应用型机器学习和数据驱动的问题解决。我做过 Java 后端服务、深度学习模型，也在团队竞赛中解决过数学建模与优化问题。",
      "我不仅关注模型或功能能否运行，也希望真正理解整个系统如何工作。我尤其希望参与那些能通过扎实工程，让 AI 系统变得更可靠、更实用的工作。",
    ],
    educationTitle: "教育经历",
    education: [
      {
        date: "2026 年 7 月 — 至今",
        school: "石溪大学",
        degree: "Information Systems 本科学习",
        place: "美国纽约州石溪",
      },
      {
        date: "2024 年 8 月 — 2026 年 6 月",
        school: "安徽大学",
        degree: "数字媒体技术 本科学习",
        place: "中国合肥",
        detail: "数学建模社团联合负责人 · 概率论助教",
      },
    ],
    projectsTitle: "主要项目",
    projectsIntro: "精选项目与代码仓库。",
    projects: [
      {
        date: "2026",
        order: 20260816,
        title: "VideoHarvester",
        subtitle: "本地优先的 Windows 视频工作流工具",
        body: "构建 Windows 桌面应用，将已获授权的视频链接转化为清晰的下载流程，支持合集处理、进度追踪、重复保护和任务恢复。",
        tags: "C# · Windows Forms · yt-dlp · FFmpeg",
        url: "https://github.com/Owl-Lee/VideoHarvester",
      },
      {
        date: "2025",
        order: 20250201,
        title: "MCM/ICM · Problem F",
        subtitle: "网络犯罪政策建模论文",
        body: "参与完成 23 页数学建模论文，结合层次聚类、博弈论分析与随机森林回归，研究网络犯罪模式、政策有效性与网络安全影响因素。",
        tags: "Python · Random Forest · Hierarchical Clustering · Data Visualization",
        url: "/mcm-icm-2025-problem-f-public.pdf",
        linkLabel: "阅读论文 ↗",
      },
      {
        date: "2025",
        order: 20250907,
        title: "国赛 · 无人机协同优化",
        subtitle: "多主体优化建模论文",
        body: "参与完成 25 页数学建模论文，围绕无人机协同投放问题建立统一几何模型，并使用模拟退火、贝叶斯优化、遗传算法、多岛模型与 NSGA-II 求解多目标优化策略。",
        tags: "Python · 贝叶斯优化 · 遗传算法 · NSGA-II",
        url: "/cumcm-2025-drone-optimization-paper.pdf",
        linkLabel: "阅读论文 ↗",
      },
      {
        date: "2026",
        order: 20260815,
        title: "AdMind",
        subtitle: "可解释的视频广告决策原型",
        body: "构建面向长视频的策略优先决策层，融合带时间戳的视频证据、播放器状态、本地暂停帧视觉分析，以及确定性的伦理保护规则。",
        tags: "TypeScript · TwelveLabs · MediaPipe · Fastify",
        status: "私有 GitHub 仓库",
      },
      {
        date: "2026",
        order: 20260814,
        title: "Sona",
        subtitle: "本地优先的私人音乐播放器",
        body: "构建面向 Windows 与 Android 的音乐和 MV 播放器，支持本地导入、SHA-256 去重、SQLite 曲库与歌单、离线优先播放，以及云同步基础设施。",
        tags: "Flutter · Dart · SQLite · Supabase",
        status: "私有 GitHub 仓库",
      },
      {
        date: "2024—25",
        order: 20250831,
        title: "多模态医学图像融合",
        subtitle: "深度学习研究项目",
        body: "负责基于 PyTorch 的多模态图像融合算法与模型架构设计，并协调四人团队完成研究写作与实验设计。",
        tags: "Python · PyTorch · 深度学习",
        status: "科研项目",
      },
    ],
    awardsTitle: "奖项与经历",
    awards: [
      ["2025", "全国大学生数学建模竞赛", "三等奖"],
      ["2025", "美国大学生数学建模竞赛（ICM）", "Successful Participant"],
      ["2025", "创新创业竞赛", "优秀奖"],
      ["2024—26", "安徽大学数学建模社团", "联合负责人"],
      ["2025", "概率论课程", "助教"],
    ],
    sidebar: {
      profile: "基本信息",
      school: "石溪大学",
      major: "Information Systems",
      interests: "兴趣方向",
      interestsList: ["后端系统", "AI 应用开发", "机器学习", "数据分析与优化"],
      tools: "技术栈",
      toolsList: ["Java · Python · C · SQL", "Spring Boot · JPA · MySQL", "PyTorch · Pandas · NumPy", "Git · MATLAB"],
      contact: "联系方式",
    },
    footer: "由 Yanbao Li 设计与开发。",
    download: "下载简历",
    repoSoon: "代码即将公开",
    repoSource: "查看源码 ↗",
    photoRole: "软件工程与 AI",
    photoNote: "之后可添加个人照片",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];

  return (
    <main>
      <header className="siteHeader" id="top">
        <div className="shell headerInner">
          <a className="identity" href="#top" aria-label="Yanbao Li homepage">
            <strong>Yanbao Li</strong>
            <span>{t.homepage}</span>
          </a>
          <nav className="navLinks" aria-label="Primary navigation">
            <a href="#about">{t.nav[0]}</a>
            <a href="#education">{t.nav[1]}</a>
            <a href="#projects">{t.nav[2]}</a>
            <a href="#awards">{t.nav[3]}</a>
            <a href="/Yanbao-Li-Resume.docx" download>{t.download}</a>
          </nav>
          <div className="languageSwitch" aria-label="Language selection">
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <span>/</span>
            <button
              type="button"
              className={language === "zh" ? "active" : ""}
              onClick={() => setLanguage("zh")}
              aria-pressed={language === "zh"}
            >
              中
            </button>
          </div>
        </div>
      </header>

      <section className="profileHero shell">
        <div className="profileCopy">
          <p className="greeting">{t.greeting}</p>
          <h1>Yanbao Li <span>Yan</span></h1>
          <p className="role">{t.role}</p>
          <p className="intro">{t.intro}</p>
          <div className="profileMeta">
            <span className="metaSchool">
              <img src="/brands/sbu-logo.jpg" alt="Stony Brook University" />
            </span>
            <span>{t.location}</span>
          </div>
          <div className="profileLinks">
            <a href="mailto:liyanbao06@outlook.com">
              <img className="socialIcon" src="/brands/outlook.svg" alt="" aria-hidden="true" />
              <span>Outlook</span>
            </a>
            <a href="https://github.com/Owl-Lee" target="_blank" rel="noreferrer">
              <img className="socialIcon" src="/brands/github.svg" alt="" aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/yanbao-li-772a45377/" target="_blank" rel="noreferrer">
              <img className="socialIcon linkedinIcon" src="/brands/linkedin.svg" alt="" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="portrait">
          <img src="/yanbao-li-photo.png" alt="Yanbao Li" />
          <div className="portraitCaption">
            <strong>Yanbao Li</strong>
            <span>{t.photoRole}</span>
          </div>
        </div>
      </section>

      <section className="news shell" aria-labelledby="current-status">
        <h2 id="current-status">{t.statusTitle}</h2>
        <p><span className="liveDot" />{t.status}</p>
      </section>

      <div className="pageGrid shell">
        <div className="mainColumn">
          <section className="contentSection" id="about">
            <h2>{t.aboutTitle}</h2>
            {t.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <section className="contentSection" id="education">
            <h2>{t.educationTitle}</h2>
            <div className="educationList">
              {t.education.map((item, index) => (
                <article key={item.school}>
                  <div className="date">{item.date}</div>
                  <div className="educationBody">
                    <div className={`schoolLogoFrame ${schoolLogos[index].className}`}>
                      <img src={schoolLogos[index].src} alt={schoolLogos[index].alt} />
                    </div>
                    <div>
                      <h3>{item.school}</h3>
                      <p>{item.degree}</p>
                      <span>{item.place}</span>
                      {item.detail && <small>{item.detail}</small>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="contentSection" id="projects">
            <div className="sectionTitleRow">
              <h2>{t.projectsTitle}</h2>
              <span>{t.projectsIntro}</span>
            </div>
            <div className="projectRows">
              {[...t.projects].sort((a, b) => b.order - a.order).map((project) => (
                <article key={project.title}>
                  <div className="projectDate">{project.date}</div>
                  <div className="projectInfo">
                    <p className="projectSubtitle">{project.subtitle}</p>
                    <h3>{project.title}</h3>
                    <p>{project.body}</p>
                    <span>{project.tags}</span>
                  </div>
                  {project.url ? (
                    <a className="repoStatus repoLink" href={project.url} target="_blank" rel="noreferrer">
                      {project.linkLabel ?? t.repoSource}
                    </a>
                  ) : (
                    <div className="repoStatus">{"status" in project ? project.status : t.repoSoon}</div>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="contentSection" id="awards">
            <h2>{t.awardsTitle}</h2>
            <div className="awardList">
              {t.awards.map((award) => (
                <div key={award.join("-")}>
                  <span>{award[0]}</span>
                  <strong>{award[1]}</strong>
                  <em>{award[2]}</em>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="sidebar">
          <section>
            <h2>{t.sidebar.profile}</h2>
            <dl>
              <dt>University</dt><dd>{t.sidebar.school}</dd>
              <dt>Major</dt><dd>{t.sidebar.major}</dd>
              <dt>Location</dt><dd>{t.location}</dd>
            </dl>
          </section>
          <section>
            <h2>{t.sidebar.interests}</h2>
            <ul>{t.sidebar.interestsList.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section>
            <h2>{t.sidebar.tools}</h2>
            <ul>{t.sidebar.toolsList.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section>
            <h2>{t.sidebar.contact}</h2>
            <a className="email" href="mailto:liyanbao06@outlook.com">liyanbao06<br />@outlook.com</a>
          </section>
        </aside>
      </div>

      <footer className="footer">
        <div className="shell">
          <p>© 2026 Yanbao Li. {t.footer}</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
