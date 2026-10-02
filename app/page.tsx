"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Language = "en" | "zh";

type Project = {
  title: string;
  year: string;
  kicker: string;
  status: string;
  statusTone: "green" | "red";
  summary: string;
  highlights: string[];
  tags: string[];
  image: { src: string; alt: string; width: number; height: number; position?: string };
  websiteUrl: string;
  websiteLabel: string;
  sourceUrl: string;
};

type ResearchItem = {
  title: string;
  year: string;
  kicker: string;
  body: string;
  award?: string;
  paperUrl?: string;
  tags?: string[];
};

type Content = {
  homepage: string;
  skipToContent: string;
  navigationLabel: string;
  languageLabel: string;
  identityLabel: string;
  nav: { projects: string; research: string; about: string; awards: string; writing: string };
  resume: string;
  greeting: string;
  name: { primary: string; alt: string };
  status: string;
  intro: { before: string; strong: string; after: string };
  viewResume: string;
  seeProjects: string;
  writingLabel: string;
  photoAlt: string;
  photoRole: string;
  facts: [string, string][];
  projectsTitle: string;
  projectsIntro: string;
  projects: Project[];
  researchTitle: string;
  researchIntro: string;
  research: ResearchItem[];
  readPaper: string;
  source: string;
  aboutTitle: string;
  about: string[];
  education: { date: string; school: string; degree: string; detail: string; logo: { src: string; alt: string } }[];
  awardsTitle: string;
  awards: [string, string, string][];
  skillsTitle: string;
  skills: { title: string; items: string[] }[];
  contactTitle: string;
  contactBody: string;
  copy: string;
  copied: string;
  resumePdf: string;
  backToTop: string;
};

const EMAIL = "liyanbao06@outlook.com";
const RESUME_URL = "/Yanbao-Li-Resume.pdf";
const GITHUB_URL = "https://github.com/Owl-Lee";
const LINKEDIN_URL = "https://www.linkedin.com/in/yanbao-li-772a45377/";
const WRITING_URL = "https://writing.yanbaoli.me/";
const SECTION_IDS = ["projects", "research", "about", "awards"] as const;

const projectMeta = {
  videoHarvester: {
    title: "VideoHarvester",
    year: "2026",
    statusTone: "green",
    tags: ["C#", "Windows Forms", "yt-dlp", "FFmpeg"],
    image: { src: "/projects/vh.jpg", width: 1100, height: 733, position: "0% 50%" },
    websiteUrl: "https://videoharvester.app/",
    sourceUrl: "https://github.com/Owl-Lee/VideoHarvester",
  },
  adMind: {
    title: "AdMind",
    year: "2026",
    statusTone: "red",
    tags: ["TypeScript", "Fastify", "Zod", "TwelveLabs", "MediaPipe"],
    image: { src: "/projects/admind.jpg", width: 1100, height: 733, position: "0% 50%" },
    websiteUrl: "https://admind.yanbaoli.me/",
    sourceUrl: "https://github.com/Owl-Lee/AdMind",
  },
  sona: {
    title: "Sona",
    year: "2026",
    statusTone: "green",
    tags: ["Flutter", "Dart", "Riverpod", "SQLite", "Supabase"],
    image: { src: "/projects/sona-player.jpg", width: 1346, height: 813 },
    websiteUrl: "https://sona.yanbaoli.me/",
    sourceUrl: "https://github.com/Owl-Lee/Sona",
  },
} as const;

const technicalSkills = {
  languages: ["Python", "TypeScript", "C#", "Dart", "Java", "SQL"],
  frameworks: ["Fastify", "Flutter", "PyTorch", "Spring Boot"],
  tools: ["SQLite", "MySQL", "Supabase", "Git", "FFmpeg", "yt-dlp", "MATLAB"],
};

const content: Record<Language, Content> = {
  en: {
    homepage: "Personal homepage",
    skipToContent: "Skip to content",
    navigationLabel: "Primary navigation",
    languageLabel: "Language selection",
    identityLabel: "Yanbao Li homepage",
    nav: { projects: "Projects", research: "Research", about: "About", awards: "Awards", writing: "Writing" },
    resume: "Résumé",
    greeting: "Hi, I’m Yan.",
    name: { primary: "Yanbao Li", alt: "Yan" },
    status: "Open to software engineering and applied AI roles",
    intro: {
      before: "Information Systems student at ",
      strong: "Stony Brook University",
      after:
        ". I build local-first desktop apps and explainable AI services, and I’ve shipped Windows and Android previews, public web demos and data-driven modeling work.",
    },
    viewResume: "View résumé",
    seeProjects: "See projects",
    writingLabel: "Writing",
    photoAlt: "Portrait of Yanbao Li",
    photoRole: "Software & AI",
    facts: [
      ["Studying at SBU", "Information Systems"],
      ["Based in", "Stony Brook, New York"],
      ["Shipped", "3 live projects"],
      ["Focus", "Backend · Applied AI"],
    ],
    projectsTitle: "Selected projects",
    projectsIntro: "Software I’ve designed, built and released.",
    projects: [
      {
        ...projectMeta.videoHarvester,
        tags: [...projectMeta.videoHarvester.tags],
        kicker: "C# desktop media workflow",
        status: "Released · Windows",
        summary: "A local-first Windows app for authorized YouTube and Bilibili downloads.",
        highlights: [
          "Orchestrates yt-dlp and FFmpeg asynchronously, with preflight checks for quality, size, disk space and destination.",
          "Playlist-aware queues, platform-ID deduplication, persisted history and recovery of unfinished tasks.",
        ],
        image: { ...projectMeta.videoHarvester.image, alt: "VideoHarvester app window" },
        websiteLabel: "Website",
      },
      {
        ...projectMeta.adMind,
        tags: [...projectMeta.adMind.tags],
        kicker: "Explainable video-ad decisions",
        status: "Public demo · Web / API",
        summary:
          "A public three-scenario demo and Fastify API that decides where long-form video ads can go, and explains why.",
        highlights: [
          "Normalizes Zod-validated TwelveLabs evidence and combines it with player and campaign constraints in a typed, deterministic policy engine.",
          "Browser-side MediaPipe scores four pause-ad positions and returns auditable reasons, including when no safe area exists.",
        ],
        image: { ...projectMeta.adMind.image, alt: "AdMind decision console" },
        websiteLabel: "Live demo",
      },
      {
        ...projectMeta.sona,
        tags: [...projectMeta.sona.tags],
        kicker: "Cross-platform local-first media",
        status: "Preview · Windows & Android",
        summary:
          "A local-first Flutter / Dart music and music-video player, released as Windows and Android previews.",
        highlights: [
          "One SQLite core for the offline library, playlists, queue and history, with SHA-256 content deduplication.",
          "Layered metadata matching with MusicBrainz and an optional Chromaprint / AcoustID fallback, plus optional Supabase sync.",
        ],
        image: { ...projectMeta.sona.image, alt: "Sona’s record player screen" },
        websiteLabel: "Website",
      },
    ],
    researchTitle: "Research & modeling",
    researchIntro: "Competition and lab work in optimization and machine learning.",
    research: [
      {
        title: "CUMCM · Drone optimization",
        year: "2025",
        kicker: "Lead programmer · Optimization",
        body: "Owned programming and optimization modeling for coordinated drone deployment: built the geometric model, then tuned simulated annealing, Bayesian optimization, genetic algorithms, island models and NSGA-II for multi-objective strategies.",
        award: "Third Prize",
        paperUrl: "/cumcm-2025-drone-optimization-paper.pdf",
      },
      {
        title: "Multimodal medical image fusion",
        year: "2024—25",
        kicker: "PyTorch research",
        body: "Implemented and tuned parts of a PyTorch multimodal image-fusion model in a four-person team, covering experiments, parameter tuning, data integration and evaluation.",
        tags: ["Python", "PyTorch"],
      },
      {
        title: "MCM/ICM · Problem F",
        year: "2025",
        kicker: "Lead programmer · Modeling",
        body: "Owned the Python implementation for a cybercrime-policy study: hierarchical clustering, game-theoretic analysis and random-forest regression for data fitting and comparison.",
        award: "Successful Participant",
        paperUrl: "/mcm-icm-2025-problem-f-public.pdf",
      },
    ],
    readPaper: "Read paper",
    source: "Source",
    aboutTitle: "About & education",
    about: [
      "I’m Yanbao Li, and I also go by Yan. I care about clear system design and features that stay useful after the demo.",
      "I study Information Systems at Stony Brook University, after transferring from Anhui University where I studied Digital Media Technology.",
      "My recent work spans C# media workflows, Flutter / Dart local-first apps, TypeScript / Fastify services, and multimodal model experiments involving data preparation, tuning and evaluation.",
    ],
    education: [
      {
        date: "Jul 2026 — Present",
        school: "Stony Brook University",
        degree: "B.S. studies, Information Systems",
        detail: "Stony Brook, New York",
        logo: { src: "/brands/sbu-logo.jpg", alt: "Stony Brook University logo" },
      },
      {
        date: "Aug 2024 — Jun 2026",
        school: "Anhui University",
        degree: "B.S. studies, Digital Media Technology",
        detail: "Hefei, China · Co-lead, Mathematical Modeling Club · TA, Probability Theory",
        logo: { src: "/brands/ahu-logo.png", alt: "Anhui University logo" },
      },
    ],
    awardsTitle: "Awards & leadership",
    awards: [
      ["2026—27", "Stony Brook University Tuition Scholarship", "2026–27 academic year"],
      ["2025", "CUMCM Mathematical Modeling Competition", "Third Prize"],
      ["2025", "ICM Mathematical Contest in Modeling", "Successful Participant"],
      ["2025", "Anhui University Student Innovation Competition", "Merit Award"],
      ["2024—26", "Mathematical Modeling Club, Anhui University", "Co-lead"],
    ],
    skillsTitle: "Skills & interests",
    skills: [
      { title: "Languages", items: technicalSkills.languages },
      { title: "Frameworks", items: technicalSkills.frameworks },
      { title: "Data & tools", items: technicalSkills.tools },
      { title: "Interests", items: ["Backend systems", "Applied AI", "Machine learning", "Data & optimization"] },
    ],
    contactTitle: "Let’s build something useful.",
    contactBody:
      "I’m looking for software engineering and applied AI opportunities where I can contribute, learn quickly and build with a strong team.",
    copy: "Copy",
    copied: "Copied",
    resumePdf: "Résumé (PDF)",
    backToTop: "Back to top ↑",
  },
  zh: {
    homepage: "个人主页",
    skipToContent: "跳到正文",
    navigationLabel: "主导航",
    languageLabel: "语言选择",
    identityLabel: "李彦宝个人主页",
    nav: { projects: "项目", research: "科研", about: "关于", awards: "奖项", writing: "随笔" },
    resume: "简历",
    greeting: "你好，我是 Yan。",
    name: { primary: "李彦宝", alt: "Yanbao Li" },
    status: "正在寻找软件工程与 AI 应用开发机会",
    intro: {
      before: "",
      strong: "石溪大学",
      after:
        " Information Systems 专业学生，专注本地优先桌面应用与可解释 AI 服务；已发布 Windows、Android 预览版、公开在线演示和数据建模成果。",
    },
    viewResume: "查看简历",
    seeProjects: "看看项目",
    writingLabel: "随笔",
    photoAlt: "李彦宝的照片",
    photoRole: "软件工程与 AI",
    facts: [
      ["石溪大学", "Information Systems"],
      ["所在地", "美国纽约州石溪"],
      ["已上线", "3 个项目"],
      ["方向", "后端系统 · AI 应用"],
    ],
    projectsTitle: "主要项目",
    projectsIntro: "我设计、开发并发布的软件。",
    projects: [
      {
        ...projectMeta.videoHarvester,
        tags: [...projectMeta.videoHarvester.tags],
        kicker: "C# 桌面媒体处理工作流",
        status: "已发布 · Windows",
        summary: "面向 Windows 的本地优先视频保存工具，支持已获授权的 YouTube 与 Bilibili 下载。",
        highlights: [
          "以异步流程编排 yt-dlp 和 FFmpeg，下载前检查画质、体积、磁盘空间与保存位置。",
          "支持播放列表队列、平台 ID 去重、持久化历史和未完成任务恢复。",
        ],
        image: { ...projectMeta.videoHarvester.image, alt: "VideoHarvester 应用窗口" },
        websiteLabel: "官网",
      },
      {
        ...projectMeta.adMind,
        tags: [...projectMeta.adMind.tags],
        kicker: "可解释的视频广告决策",
        status: "公开演示 · Web / API",
        summary: "包含三个决策场景的公开演示与 Fastify API，决定长视频广告放在哪里，并给出理由。",
        highlights: [
          "将通过 Zod 校验的 TwelveLabs 证据标准化，再与播放器状态和广告约束一起交给类型化的确定性策略引擎。",
          "浏览器端 MediaPipe 为暂停画面的四个候选位置评分，输出可审计的理由，包括没有安全位置的情况。",
        ],
        image: { ...projectMeta.adMind.image, alt: "AdMind 决策控制台" },
        websiteLabel: "在线演示",
      },
      {
        ...projectMeta.sona,
        tags: [...projectMeta.sona.tags],
        kicker: "跨平台本地优先媒体系统",
        status: "预览版 · Windows 与 Android",
        summary: "本地优先的 Flutter / Dart 音乐与 MV 播放器，已发布 Windows 与 Android 预览版。",
        highlights: [
          "以 SQLite 统一离线曲库、歌单、队列与播放记录，通过 SHA-256 内容哈希去重。",
          "MusicBrainz 加可选 Chromaprint / AcoustID 回退的分层元数据识别，并提供可选的 Supabase 同步。",
        ],
        image: { ...projectMeta.sona.image, alt: "Sona 黑胶播放页" },
        websiteLabel: "官网",
      },
    ],
    researchTitle: "科研与建模",
    researchIntro: "优化与机器学习方向的竞赛和科研。",
    research: [
      {
        title: "国赛 · 无人机协同优化",
        year: "2025",
        kicker: "主要编程 · 优化建模",
        body: "负责无人机协同投放的编程与优化建模：建立统一几何模型，并对模拟退火、贝叶斯优化、遗传算法、多岛模型和 NSGA-II 进行实现与调优。",
        award: "三等奖",
        paperUrl: "/cumcm-2025-drone-optimization-paper.pdf",
      },
      {
        title: "多模态医学图像融合",
        year: "2024—25",
        kicker: "PyTorch 科研",
        body: "在四人团队中参与基于 PyTorch 的多模态图像融合模型实现与调参，负责部分实验、参数调整、数据整合与评估。",
        tags: ["Python", "PyTorch"],
      },
      {
        title: "MCM/ICM · Problem F",
        year: "2025",
        kicker: "主要编程 · 建模",
        body: "负责网络犯罪政策研究的 Python 实现：完成层次聚类、博弈论分析和随机森林回归，用于数据拟合和对比分析。",
        award: "Successful Participant",
        paperUrl: "/mcm-icm-2025-problem-f-public.pdf",
      },
    ],
    readPaper: "阅读论文",
    source: "源码",
    aboutTitle: "关于与教育经历",
    about: [
      "我叫李彦宝，也可以叫我 Yan。我重视清晰的系统设计，也希望做出不止停留在演示阶段的功能。",
      "目前就读于石溪大学 Information Systems 专业；转学之前，我在安徽大学学习数字媒体技术。",
      "近期项目涵盖 C# 媒体工作流、Flutter / Dart 本地优先应用、TypeScript / Fastify 服务，以及涉及数据整理、参数调优和实验评估的多模态模型研究。",
    ],
    education: [
      {
        date: "2026 年 7 月 — 至今",
        school: "石溪大学",
        degree: "Information Systems 本科学习",
        detail: "美国纽约州石溪",
        logo: { src: "/brands/sbu-logo.jpg", alt: "石溪大学校徽" },
      },
      {
        date: "2024 年 8 月 — 2026 年 6 月",
        school: "安徽大学",
        degree: "数字媒体技术 本科学习",
        detail: "中国合肥 · 数学建模社团联合负责人 · 概率论助教",
        logo: { src: "/brands/ahu-logo.png", alt: "安徽大学校徽" },
      },
    ],
    awardsTitle: "奖项与经历",
    awards: [
      ["2026—27", "石溪大学学费奖学金", "2026—2027 学年"],
      ["2025", "全国大学生数学建模竞赛", "三等奖"],
      ["2025", "美国大学生数学建模竞赛（ICM）", "Successful Participant"],
      ["2025", "安徽大学大学生创新大赛", "优胜奖"],
      ["2024—26", "安徽大学数学建模社团", "联合负责人"],
    ],
    skillsTitle: "技能与方向",
    skills: [
      { title: "编程语言", items: technicalSkills.languages },
      { title: "框架", items: technicalSkills.frameworks },
      { title: "数据与工具", items: technicalSkills.tools },
      { title: "兴趣方向", items: ["后端系统", "AI 应用开发", "机器学习", "数据分析与优化"] },
    ],
    contactTitle: "一起做点有用的东西。",
    contactBody:
      "我正在寻找软件工程与 AI 应用开发相关机会，希望加入优秀的团队，在快速学习的同时参与构建真正有价值的系统。",
    copy: "复制",
    copied: "已复制",
    resumePdf: "简历（PDF）",
    backToTop: "回到顶部 ↑",
  },
};

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2zM8 19H5V9.5h3V19zM6.5 8.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5S12.7 13 12.7 14.3V19h-3V9.5h2.9v1.3a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.6 2 3.6 4.7V19z" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(-1);
  const [copied, setCopied] = useState(false);
  const emailRef = useRef<HTMLAnchorElement>(null);
  const copyTimer = useRef<number | undefined>(undefined);
  const t = content[language];

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("lang");
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem("yanbao-portfolio-language");
    } catch {
      stored = null;
    }
    const preferred = requested === "en" || requested === "zh"
      ? requested
      : stored === "en" || stored === "zh"
        ? stored
        : "en";
    const timer = window.setTimeout(() => setLanguage(preferred), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = language === "zh"
      ? "李彦宝（Yan）— 个人主页"
      : "Yanbao Li (Yan) — Software Engineering · Applied AI";
  }, [language]);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 8);
      let current = -1;
      SECTION_IDS.forEach((id, index) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top < window.innerHeight * 0.4) current = index;
      });
      setActiveSection(current);
    };
    const frame = window.requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      }),
      { rootMargin: "0px 0px -6% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const chooseLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    try {
      window.localStorage.setItem("yanbao-portfolio-language", nextLanguage);
    } catch {
      // Storage can be unavailable in private browsing; the URL still carries the choice.
    }
    const url = new URL(window.location.href);
    if (nextLanguage === "zh") url.searchParams.set("lang", "zh");
    else url.searchParams.delete("lang");
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      const link = emailRef.current;
      const selection = window.getSelection();
      if (link && selection) {
        const range = document.createRange();
        range.selectNodeContents(link);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopied(false), 1600);
  };

  const navItems = [
    { id: "projects", label: t.nav.projects },
    { id: "research", label: t.nav.research },
    { id: "about", label: t.nav.about },
    { id: "awards", label: t.nav.awards },
  ];

  return (
    <>
      <a className="skipLink" href="#main-content">{t.skipToContent}</a>
      <header className={`siteHeader${scrolled ? " scrolled" : ""}`}>
        <div className="shell headerInner">
          <a className="identity" href="#top" aria-label={t.identityLabel}>
            Yanbao Li <small>{t.homepage}</small>
          </a>
          <nav aria-label={t.navigationLabel}>
            <ul className="navLinks">
              {navItems.map((item, index) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} aria-current={activeSection === index ? "true" : "false"}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href={WRITING_URL} target="_blank" rel="noreferrer">{t.nav.writing} ↗</a>
              </li>
            </ul>
          </nav>
          <div className="headerActions">
            <div className="languageSwitch" role="group" aria-label={t.languageLabel}>
              <button
                type="button"
                onClick={() => chooseLanguage("en")}
                aria-pressed={language === "en"}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => chooseLanguage("zh")}
                aria-pressed={language === "zh"}
                aria-label="切换到中文"
              >
                中
              </button>
            </div>
            <a className="button buttonPrimary buttonSmall" href={RESUME_URL} target="_blank" rel="noreferrer">{t.resume}</a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="profileHero" id="top">
          <div className="shell">
            <div className="heroGrid">
              <div>
                <Image className="avatar" src="/yanbao-li-photo.jpg" alt="" width={76} height={76} unoptimized />
                <p className="greeting">{t.greeting}</p>
                <h1>{t.name.primary} <span className="altName">{t.name.alt}</span></h1>
                <p className="statusPill"><i aria-hidden="true" /><span>{t.status}</span></p>
                <p className="intro">{t.intro.before}<b>{t.intro.strong}</b>{t.intro.after}</p>
                <div className="heroActions">
                  <a className="button buttonPrimary" href={RESUME_URL} target="_blank" rel="noreferrer">
                    <span>{t.viewResume}</span> <span className="arrow" aria-hidden="true">↗</span>
                  </a>
                  <a className="button buttonSecondary" href="#projects">
                    <span>{t.seeProjects}</span> <span aria-hidden="true">↓</span>
                  </a>
                </div>
                <ul className="profileLinks">
                  <li><a href={GITHUB_URL} target="_blank" rel="noreferrer"><GitHubIcon />GitHub</a></li>
                  <li><a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><LinkedInIcon />LinkedIn</a></li>
                  <li><a href={WRITING_URL} target="_blank" rel="noreferrer"><PenIcon /><span>{t.writingLabel}</span></a></li>
                  <li><a href={`mailto:${EMAIL}`}><MailIcon />{EMAIL}</a></li>
                </ul>
              </div>
              <figure className="portrait">
                <Image src="/yanbao-li-photo.jpg" alt={t.photoAlt} width={512} height={768} sizes="300px" priority unoptimized />
                <figcaption><b>Yanbao Li</b><span>{t.photoRole}</span></figcaption>
              </figure>
            </div>
            <ul className="quickFacts">
              {t.facts.map(([label, value]) => (
                <li key={label}><span>{label}</span><b>{value}</b></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contentSection" id="projects" aria-labelledby="projects-heading">
          <div className="shell">
            <div className="sectionHeading">
              <h2 id="projects-heading">{t.projectsTitle}</h2>
              <p>{t.projectsIntro}</p>
            </div>
            <div className="projectList">
              {t.projects.map((project) => (
                <article className="projectCard" key={project.title} data-reveal>
                  <figure className="projectShot">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={project.image.width}
                      height={project.image.height}
                      style={project.image.position ? { objectPosition: project.image.position } : undefined}
                      sizes="(max-width: 980px) 100vw, 560px"
                      unoptimized
                    />
                    <span className="projectYear">{project.year}</span>
                  </figure>
                  <div className="projectBody">
                    <span className="kicker">{project.kicker}</span>
                    <div className="projectTitle">
                      <h3>{project.title}</h3>
                      <span className={`badge${project.statusTone === "green" ? " badgeGreen" : ""}`}>{project.status}</span>
                    </div>
                    <p className="projectSummary">{project.summary}</p>
                    <ul className="projectHighlights">
                      {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                    <ul className="chips">
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    <div className="projectActions">
                      <a
                        className="button buttonPrimary buttonSmall"
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.websiteLabel} — ${project.title}`}
                      >
                        <span>{project.websiteLabel}</span> <span className="arrow" aria-hidden="true">↗</span>
                      </a>
                      <a
                        className="button buttonSecondary buttonSmall"
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${t.source} — ${project.title}`}
                      >
                        <span>{t.source}</span> <span className="arrow" aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contentSection" id="research" aria-labelledby="research-heading">
          <div className="shell">
            <div className="sectionHeading">
              <h2 id="research-heading">{t.researchTitle}</h2>
              <p>{t.researchIntro}</p>
            </div>
            <div className="researchGrid" data-reveal>
              {t.research.map((item) => (
                <article className="researchCard" key={item.title}>
                  <div className="researchMeta">
                    <span className="kicker">{item.kicker}</span>
                    <span className="researchYear">{item.year}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <div className="researchFooter">
                    {item.award && <span className="badge">{item.award}</span>}
                    {item.paperUrl && (
                      <a
                        className="textLink"
                        href={item.paperUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${t.readPaper} — ${item.title}`}
                      >
                        {t.readPaper} ↗
                      </a>
                    )}
                    {item.tags && (
                      <ul className="chips">
                        {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contentSection" id="about" aria-labelledby="about-heading">
          <div className="shell">
            <div className="sectionHeading">
              <h2 id="about-heading">{t.aboutTitle}</h2>
            </div>
            <div className="twoColumn" data-reveal>
              <div className="bio">
                {t.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <ul className="educationList" id="education">
                {t.education.map((item) => (
                  <li key={item.logo.src}>
                    <Image src={item.logo.src} alt={item.logo.alt} width={52} height={52} unoptimized />
                    <div>
                      <span className="educationDate">{item.date}</span>
                      <h3>{item.school}</h3>
                      <p>{item.degree}</p>
                      <small>{item.detail}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="contentSection" id="awards" aria-labelledby="awards-heading">
          <div className="shell">
            <div className="twoColumn" data-reveal>
              <div>
                <div className="sectionHeading">
                  <h2 id="awards-heading">{t.awardsTitle}</h2>
                </div>
                <ul className="awardList">
                  {t.awards.map(([year, title, result]) => (
                    <li key={`${year}-${title}`}>
                      <span className="awardYear">{year}</span>
                      <b>{title}</b>
                      <span className="awardResult">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="sectionHeading">
                  <h2>{t.skillsTitle}</h2>
                </div>
                <div className="skillGroups">
                  {t.skills.map((group) => (
                    <div key={group.title}>
                      <h3>{group.title}</h3>
                      <ul className="chips">
                        {group.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="shell">
          <section className="contactPanel" aria-labelledby="contact-heading" data-reveal>
            <div>
              <h2 id="contact-heading">{t.contactTitle}</h2>
              <p>{t.contactBody}</p>
              <div className="contactEmail">
                <a href={`mailto:${EMAIL}`} ref={emailRef}>{EMAIL}</a>
                <button className="copyButton" type="button" onClick={copyEmail} aria-live="polite">
                  {copied ? t.copied : t.copy}
                </button>
              </div>
            </div>
            <ul className="contactLinks">
              <li>
                <a href={RESUME_URL} target="_blank" rel="noreferrer">
                  <span className="contactLinkLabel">{t.resumePdf}</span><span>↗</span>
                </a>
              </li>
              <li><a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub<span>Owl-Lee ↗</span></a></li>
              <li><a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn<span>↗</span></a></li>
              <li>
                <a href={WRITING_URL} target="_blank" rel="noreferrer">
                  <span className="contactLinkLabel">{t.writingLabel}</span><span>writing.yanbaoli.me ↗</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <div className="shell">
        <footer className="siteFooter">
          <span>© 2026 Yanbao Li</span>
          <a href="#top">{t.backToTop}</a>
        </footer>
      </div>
    </>
  );
}
