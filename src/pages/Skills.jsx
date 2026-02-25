import React, { useState, useEffect } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { Link } from "react-router-dom";

const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, label, isDark, delay = 0 }) => {
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedPercent / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercent(percentage);
    }, delay);
    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={isDark ? "rgba(30, 58, 138, 0.3)" : "rgba(191, 219, 254, 0.8)"}
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1500 ease-out"
            style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            {animatedPercent}%
          </span>
        </div>
      </div>
      <span className={`text-sm font-semibold text-center leading-tight ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        {label}
      </span>
    </div>
  );
};

const coreSkills = [
  {
    name: "NLP & LLM",
    level: 95,
    description: "Hybrid NLTK + LLM architectures, intent classification, token optimization",
    projects: ["Intelligent Customer Support", "Voice Assistant"],
  },
  {
    name: "Computer Vision",
    level: 90,
    description: "Object detection (YOLO), OCR, document processing pipelines",
    projects: ["e-ID Card Processing"],
  },
  {
    name: "Anomaly Detection",
    level: 95,
    description: "Financial fraud detection, DBSCAN clustering, 98% precision models",
    projects: ["Financial Anomaly Detection", "Proactive Reminders"],
  },
  {
    name: "Backend & APIs",
    level: 93,
    description: "FastAPI, real-time WebSockets, async architecture, JWT security",
    projects: ["Intelligent Customer Support", "Voice Assistant"],
  },
  {
    name: "Data Engineering",
    level: 88,
    description: "ETL pipelines (Prefect), PySpark, PostgreSQL, large-scale processing",
    projects: ["Financial Anomaly Detection", "GovTech Innovation"],
  },
  {
    name: "Cloud & MLOps",
    level: 80,
    description: "AWS deployment, Docker containerization, CI/CD pipelines",
    projects: ["Financial Anomaly Detection"],
  },
];

const techStack = [
  { name: "Python", category: "core" },
  { name: "FastAPI", category: "core" },
  { name: "NLTK", category: "core" },
  { name: "Groq / Llama", category: "core" },
  { name: "YOLO", category: "ml" },
  { name: "Scikit-learn", category: "ml" },
  { name: "TensorFlow", category: "ml" },
  { name: "Whisper", category: "ml" },
  { name: "PySpark", category: "data" },
  { name: "Prefect", category: "data" },
  { name: "PostgreSQL", category: "data" },
  { name: "AWS", category: "infra" },
  { name: "Docker", category: "infra" },
  { name: "Git / GitHub", category: "infra" },
];

const Skills = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const cardBg = isDark
    ? "bg-blue-950/50 border-blue-900/40"
    : "bg-blue-50 border-blue-200";
  const tagBg = isDark
    ? "bg-blue-900/40 text-blue-300 border-blue-700/50"
    : "bg-blue-100 text-blue-700 border-blue-200";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categoryColors = {
    core: isDark ? "bg-blue-600/20 text-blue-400 border-blue-500/30" : "bg-blue-100 text-blue-700 border-blue-300",
    ml: isDark ? "bg-purple-600/20 text-purple-400 border-purple-500/30" : "bg-purple-100 text-purple-700 border-purple-300",
    data: isDark ? "bg-emerald-600/20 text-emerald-400 border-emerald-500/30" : "bg-emerald-100 text-emerald-700 border-emerald-300",
    infra: isDark ? "bg-amber-600/20 text-amber-400 border-amber-500/30" : "bg-amber-100 text-amber-700 border-amber-300",
  };

  const categoryLabels = {
    core: "Core",
    ml: "ML / AI",
    data: "Data",
    infra: "Infrastructure",
  };

  return (
    <div
      className={`${containerBg} min-h-screen transition-colors duration-300 px-4 sm:px-6 lg:px-8 py-16 md:py-24`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent [text-fill-color:transparent] mb-4 leading-snug overflow-visible pb-1 pt-4">
            My Skills
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg md:text-xl ${textPrimary} max-w-3xl mx-auto`}>
            Expertise built through real-world projects in AI, NLP, and scalable systems
          </p>
        </div>

        {/* Core Expertise - Circular Progress */}
        <div className="mb-20">
          <h2 className={`text-2xl font-bold mb-2 text-center ${isDark ? "text-white" : "text-gray-900"}`}>
            Core Expertise
          </h2>
          <p className={`text-center mb-10 ${textPrimary}`}>
            Primary domains with proven project experience
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
            {coreSkills.map((skill, idx) => (
              <div
                key={skill.name}
                className="cursor-pointer"
                onClick={() => setActiveSkill(activeSkill === idx ? null : idx)}
              >
                <CircularProgress
                  percentage={skill.level}
                  size={110}
                  strokeWidth={7}
                  label={skill.name}
                  isDark={isDark}
                  delay={300 + idx * 150}
                />
              </div>
            ))}
          </div>

          {/* Skill Detail Card */}
          {activeSkill !== null && (
            <div
              className={`${cardBg} rounded-2xl border-2 p-6 transition-all duration-300 animate-fade-in max-w-2xl mx-auto`}
            >
              <h3 className={`text-xl font-bold mb-2 ${textSecondary}`}>
                {coreSkills[activeSkill].name}
              </h3>
              <p className={`mb-4 ${textPrimary}`}>
                {coreSkills[activeSkill].description}
              </p>
              <div>
                <span className={`text-sm font-semibold ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  Used in:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {coreSkills[activeSkill].projects.map((project) => (
                    <Link
                      key={project}
                      to="/work"
                      className={`text-xs px-3 py-1.5 rounded-full font-medium border transition-all duration-300 hover:-translate-y-0.5 ${tagBg}`}
                    >
                      {project}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className={`text-2xl font-bold mb-2 text-center ${isDark ? "text-white" : "text-gray-900"}`}>
            Tech Stack
          </h2>
          <p className={`text-center mb-8 ${textPrimary}`}>
            Technologies and tools I work with daily
          </p>

          {/* Category Legend */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <span
                key={key}
                className={`text-xs px-3 py-1.5 rounded-full font-semibold border ${categoryColors[key]}`}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, idx) => (
              <span
                key={tech.name}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default ${categoryColors[tech.category]}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(10px)",
                  transition: `all 0.5s ease ${0.8 + idx * 0.05}s`,
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Continuous Learning */}
        <div
          className={`rounded-2xl p-8 md:p-12 ${
            isDark
              ? "bg-blue-950/50 border-2 border-blue-900/40"
              : "bg-blue-100/50 border-2 border-blue-200"
          }`}
        >
          <h2
            className={`text-3xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Continuous Learning
          </h2>
          <p className={`text-lg mb-8 ${textPrimary}`}>
            Technology evolves rapidly, and so do I. I'm constantly exploring
            emerging technologies and refining my existing skills.
          </p>
          <div className="flex gap-4 flex-wrap">
            <div
              className={`${isDark ? "bg-blue-900/30 border-blue-800" : "bg-blue-100 border-blue-300"} border-2 px-6 py-3 rounded-full text-sm font-semibold ${textPrimary}`}
            >
              Currently: Advanced RAG Architectures
            </div>
            <div
              className={`${isDark ? "bg-blue-900/30 border-blue-800" : "bg-blue-100 border-blue-300"} border-2 px-6 py-3 rounded-full text-sm font-semibold ${textPrimary}`}
            >
              Next: Multi-Agent Systems
            </div>
            <div
              className={`${isDark ? "bg-blue-900/30 border-blue-800" : "bg-blue-100 border-blue-300"} border-2 px-6 py-3 rounded-full text-sm font-semibold ${textPrimary}`}
            >
              Exploring: Edge AI Deployment
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/work">
              <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                View My Projects
              </button>
            </Link>
            <Link to="/connect">
              <button
                className={`${
                  isDark
                    ? "border-2 border-blue-400 text-blue-400 hover:bg-blue-950"
                    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                } px-8 py-4 cursor-pointer rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1`}
              >
                Let's Collaborate
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Skills;
