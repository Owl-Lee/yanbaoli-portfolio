"use client";

import { useEffect, useState } from "react";

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
      "I’m Yanbao Li, and I also go by Yan. I study Information Systems at Stony Brook University after transferring from Anhui University, where I studied Digital Media Technology.",
      "I build practical software across desktop, cross-platform, and AI-assisted systems. My recent work includes C# media workflows, Flutter / Dart local-first applications, TypeScript / Fastify services, and multimodal model experimentation involving data preparation, parameter tuning, and evaluation. I care about clear system design and building features that remain useful beyond a demo.",
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
    projectsIntro: "Software systems, research, and modeling work.",
    projectGroups: {
      software: "Software Projects",
      research: "Research & Modeling",
    },
    projects: [
      {
        category: "software",
        date: "2026",
        order: 20260816,
        title: "VideoHarvester",
        subtitle: "C# desktop media-processing workflow",
        body: "Engineered a C# / Windows Forms workflow around yt-dlp and FFmpeg for authorized video-page links, playlist jobs, progress tracking, duplicate protection, and recoverable task state.",
        tags: "C# · Windows Forms · yt-dlp · FFmpeg",
        url: "https://github.com/Owl-Lee/VideoHarvester",
      },
      {
        category: "research",
        date: "2025",
        order: 20250201,
        title: "MCM/ICM · Problem F",
        subtitle: "Primary programmer and modeling contributor",
        body: "Owned the Python implementation and modeling workflow for a cybercrime-policy study: selected, implemented, and tuned hierarchical clustering, game-theoretic analysis, and random forest regression for data fitting and comparative analysis.",
        tags: "Python · Random Forest · Hierarchical Clustering · Data Visualization",
        url: "/mcm-icm-2025-problem-f-public.pdf",
        linkLabel: "Read paper ↗",
      },
      {
        category: "research",
        date: "2025",
        order: 20250907,
        title: "CUMCM · Drone Optimization",
        subtitle: "Primary programmer and optimization modeler",
        body: "Owned the programming and optimization-modeling work for coordinated drone deployment: formulated the geometric model, proposed fitting and search approaches, and tuned simulated annealing, Bayesian optimization, genetic algorithms, island models, and NSGA-II for multi-objective strategies.",
        tags: "Python · Bayesian Optimization · Genetic Algorithms · NSGA-II",
        url: "/cumcm-2025-drone-optimization-paper.pdf",
        linkLabel: "Read paper ↗",
      },
      {
        category: "software",
        date: "2026",
        order: 20260815,
        title: "AdMind",
        subtitle: "Explainable video-ad decision service",
        body: "Built a TypeScript / Fastify decision service that fuses TwelveLabs time-coded video evidence, player-state signals, MediaPipe paused-frame vision, and deterministic ethical-policy rules.",
        tags: "TypeScript · TwelveLabs · MediaPipe · Fastify",
        url: "https://github.com/Owl-Lee/AdMind",
      },
      {
        category: "software",
        date: "2026",
        order: 20260814,
        title: "Sona",
        subtitle: "Cross-platform local-first media system",
        body: "Developed a Flutter / Dart music and MV player for Windows and Android with SHA-256 content deduplication, SQLite-backed library management, offline-first playback, playlists, and Supabase sync foundations.",
        tags: "Flutter · Dart · SQLite · Supabase",
        url: "https://github.com/Owl-Lee/Sona-Player",
      },
      {
        category: "research",
        date: "2024—25",
        order: 20250831,
        title: "Multimodal Medical Image Fusion",
        subtitle: "PyTorch multimodal-fusion research",
        body: "Implemented and tuned components of a PyTorch-based multimodal image-fusion model, contributing model experiments, parameter adjustment, data integration, and evaluation support within a four-person research team.",
        tags: "Python · PyTorch · Deep Learning",
        status: "Research project",
      },
    ],
    awardsTitle: "Awards & Leadership",
    awards: [
      ["2026—27", "Stony Brook University Tuition Scholarship", "2026–2027 Academic Year"],
      ["2025", "CUMCM Mathematical Modeling Competition", "Third Prize"],
      ["2025", "ICM Mathematical Contest in Modeling", "Successful Participant"],
      ["2025", "Innovation & Entrepreneurship Competition", "Excellence Award"],
      ["2024—26", "Mathematical Modeling Club, Anhui University", "Co-Lead"],
    ],
    sidebar: {
      profile: "Profile",
      school: "Stony Brook University",
      major: "Information Systems",
      interests: "Interests",
      interestsList: ["Backend Systems", "Applied AI", "Machine Learning", "Data & Optimization"],
      tools: "Technical Skills",
      toolsList: [
        "Python · TypeScript · C# · Dart · Java · SQL",
        "Fastify · Flutter · PyTorch · Spring Boot",
        "SQLite · MySQL · Supabase",
        "Git · FFmpeg · yt-dlp · MATLAB",
      ],
      contact: "Contact",
    },
    footer: "Designed and built by Yanbao Li.",
    navigationLabel: "Primary navigation",
    languageLabel: "Language selection",
    profileLabels: ["University", "Major", "Location"],
    backToTop: "Back to top ↑",
    download: "CV / Résumé",
    mobileNav: ["Projects", "CV"],
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
      "我专注于构建实用的桌面端、跨平台和 AI 辅助系统。近期项目涵盖 C# 媒体工作流、Flutter / Dart 本地优先应用、TypeScript / Fastify 服务，以及涉及数据整理、参数调优和实验评估的多模态模型研究。我重视清晰的系统设计，也希望做出不止停留在演示阶段的功能。",
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
    projectsIntro: "软件系统、科研与建模项目。",
    projectGroups: {
      software: "软件项目",
      research: "科研与建模",
    },
    projects: [
      {
        category: "software",
        date: "2026",
        order: 20260816,
        title: "VideoHarvester",
        subtitle: "C# 桌面媒体处理工作流",
        body: "围绕 yt-dlp 与 FFmpeg 构建 C# / Windows Forms 工作流，支持已获授权的视频链接、合集任务、进度追踪、重复保护与可恢复任务状态。",
        tags: "C# · Windows Forms · yt-dlp · FFmpeg",
        url: "https://github.com/Owl-Lee/VideoHarvester",
      },
      {
        category: "research",
        date: "2025",
        order: 20250201,
        title: "MCM/ICM · Problem F",
        subtitle: "主要编程与建模参与者",
        body: "负责网络犯罪政策研究的 Python 实现与建模流程：完成层次聚类、博弈论分析和随机森林回归的模型选择、实现与参数调优，用于数据拟合和对比分析。",
        tags: "Python · Random Forest · Hierarchical Clustering · Data Visualization",
        url: "/mcm-icm-2025-problem-f-public.pdf",
        linkLabel: "阅读论文 ↗",
      },
      {
        category: "research",
        date: "2025",
        order: 20250907,
        title: "国赛 · 无人机协同优化",
        subtitle: "主要编程与优化建模负责人",
        body: "负责无人机协同投放的编程与优化建模：建立统一几何模型，提出拟合与搜索思路，并对模拟退火、贝叶斯优化、遗传算法、多岛模型和 NSGA-II 进行实现与参数调优。",
        tags: "Python · 贝叶斯优化 · 遗传算法 · NSGA-II",
        url: "/cumcm-2025-drone-optimization-paper.pdf",
        linkLabel: "阅读论文 ↗",
      },
      {
        category: "software",
        date: "2026",
        order: 20260815,
        title: "AdMind",
        subtitle: "可解释的视频广告决策服务",
        body: "构建 TypeScript / Fastify 决策服务，融合 TwelveLabs 带时间戳的视频证据、播放器状态、MediaPipe 暂停帧视觉分析与确定性伦理策略规则。",
        tags: "TypeScript · TwelveLabs · MediaPipe · Fastify",
        url: "https://github.com/Owl-Lee/AdMind",
      },
      {
        category: "software",
        date: "2026",
        order: 20260814,
        title: "Sona",
        subtitle: "跨平台本地优先媒体系统",
        body: "开发面向 Windows 与 Android 的 Flutter / Dart 音乐和 MV 播放器，包含 SHA-256 内容去重、SQLite 曲库管理、离线优先播放、歌单与 Supabase 云同步基础设施。",
        tags: "Flutter · Dart · SQLite · Supabase",
        url: "https://github.com/Owl-Lee/Sona-Player",
      },
      {
        category: "research",
        date: "2024—25",
        order: 20250831,
        title: "多模态医学图像融合",
        subtitle: "PyTorch 多模态融合研究",
        body: "参与基于 PyTorch 的多模态图像融合模型实现与调参，负责部分模型实验、参数调整、数据整合与评估支持，并与四人团队协作完成研究工作。",
        tags: "Python · PyTorch · 深度学习",
        status: "科研项目",
      },
    ],
    awardsTitle: "奖项与经历",
    awards: [
      ["2026—27", "石溪大学学费奖学金", "2026—2027 学年"],
      ["2025", "全国大学生数学建模竞赛", "三等奖"],
      ["2025", "美国大学生数学建模竞赛（ICM）", "Successful Participant"],
      ["2025", "创新创业竞赛", "优秀奖"],
      ["2024—26", "安徽大学数学建模社团", "联合负责人"],
    ],
    sidebar: {
      profile: "基本信息",
      school: "石溪大学",
      major: "Information Systems",
      interests: "兴趣方向",
      interestsList: ["后端系统", "AI 应用开发", "机器学习", "数据分析与优化"],
      tools: "技术栈",
      toolsList: [
        "Python · TypeScript · C# · Dart · Java · SQL",
        "Fastify · Flutter · PyTorch · Spring Boot",
        "SQLite · MySQL · Supabase",
        "Git · FFmpeg · yt-dlp · MATLAB",
      ],
      contact: "联系方式",
    },
    footer: "由 Yanbao Li 设计与开发。",
    navigationLabel: "主导航",
    languageLabel: "语言选择",
    profileLabels: ["学校", "专业", "所在地"],
    backToTop: "回到顶部 ↑",
    download: "下载简历",
    mobileNav: ["项目", "简历"],
    repoSoon: "代码即将公开",
    repoSource: "查看源码 ↗",
    photoRole: "软件工程与 AI",
    photoNote: "之后可添加个人照片",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = language === "zh"
      ? "李彦宝（Yan）— 个人主页"
      : "Yanbao Li (Yan) — Personal Homepage";
  }, [language]);

  return (
    <main>
      <header className="siteHeader" id="top">
        <div className="shell headerInner">
          <a
            className="identity"
            href="#top"
            aria-label={language === "zh" ? "李彦宝个人主页" : "Yanbao Li homepage"}
          >
            <strong>Yanbao Li</strong>
            <span>{t.homepage}</span>
          </a>
          <nav className="navLinks" aria-label={t.navigationLabel}>
            <a href="#about">{t.nav[0]}</a>
            <a href="#education">{t.nav[1]}</a>
            <a href="#projects">{t.nav[2]}</a>
            <a href="#awards">{t.nav[3]}</a>
            <a href="/Yanbao-Li-Resume.pdf" download>{t.download}</a>
          </nav>
          <nav className="mobileNav" aria-label={t.navigationLabel}>
            <a href="#projects">{t.mobileNav[0]}</a>
            <a href="/Yanbao-Li-Resume.pdf" download>{t.mobileNav[1]}</a>
          </nav>
          <div className="languageSwitch" aria-label={t.languageLabel}>
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
            {(["software", "research"] as const).map((group) => (
              <section className="projectGroup" key={group} aria-labelledby={`project-group-${group}`}>
                <h3 id={`project-group-${group}`}>{t.projectGroups[group]}</h3>
                <div className="projectRows">
                  {[...t.projects]
                    .filter((project) => project.category === group)
                    .sort((a, b) => b.order - a.order)
                    .map((project) => (
                      <article key={project.title}>
                        <div className="projectDate">{project.date}</div>
                        <div className="projectInfo">
                          <p className="projectSubtitle">{project.subtitle}</p>
                          <h4>{project.title}</h4>
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
            ))}
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
              <dt>{t.profileLabels[0]}</dt><dd>{t.sidebar.school}</dd>
              <dt>{t.profileLabels[1]}</dt><dd>{t.sidebar.major}</dd>
              <dt>{t.profileLabels[2]}</dt><dd>{t.location}</dd>
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
            <a className="email" href="mailto:liyanbao06@outlook.com">liyanbao06@outlook.com</a>
          </section>
        </aside>
      </div>

      <footer className="footer">
        <div className="shell">
          <p>© 2026 Yanbao Li. {t.footer}</p>
          <a href="#top">{t.backToTop}</a>
        </div>
      </footer>
    </main>
  );
}
