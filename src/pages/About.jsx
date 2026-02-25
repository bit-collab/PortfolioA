import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { Link } from "react-router-dom";
import {
  FaBrain,
  FaGraduationCap,
  FaArrowRight,
  FaUsers,
  FaPlane,
} from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const cardBg = isDark ? "bg-blue-950/40" : "bg-blue-50";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";
  const headingColor = isDark ? "text-white" : "text-gray-900";

  const journey = [
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Master's in AI & Big Data",
      description:
        "Graduated from Ecole Polytechnique de Lome in partnership with UTBM (France). Specialized in complex architectures and large-scale data processing.",
    },
    {
      icon: <FaPlane className="text-2xl" />,
      title: "Aeronautical Background",
      description:
        "Former air traffic control technician (EAMAC). An experience that shaped my rigor and critical systems management before transitioning to AI.",
    },
    {
      icon: <FaBrain className="text-2xl" />,
      title: "AI & NLP Expertise",
      description:
        "Designing hybrid NLTK + LLM systems, financial anomaly detection (98% precision), and automated document processing (YOLO/OCR).",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Social Engagement",
      description:
        "Amnesty International member and trainer at Bloc des Innovateurs de Lome, committed to ethical and inclusive technology.",
    },
  ];

  const skills = [
    {
      category: "AI & Machine Learning",
      items: ["NLP (NLTK, Groq, Llama)", "Computer Vision (YOLO, OCR)", "Machine Learning", "Predictive Analysis"],
    },
    {
      category: "Data Engineering",
      items: ["Prefect (ETL)", "PySpark", "PostgreSQL", "AWS Cloud"],
    },
    {
      category: "Backend & API",
      items: ["FastAPI", "WebSockets", "Python", "JWT Auth"],
    },
  ];

  return (
    <div
      className={`${containerBg} min-h-screen py-20 transition-colors duration-300 relative overflow-hidden`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-gradient-to-br from-blue-950/10 via-transparent to-black/30"
            : "bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/20"
        }`}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${headingColor} pt-4`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${textPrimary}`}>
            AI Engineer combining deep technical expertise with a product-oriented mindset.
          </p>
        </div>

        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 md:p-10 mb-16 backdrop-blur-sm shadow-xl`}
        >
          <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
            My Professional Journey
          </h2>
          <p className={`text-lg leading-relaxed ${textPrimary} mb-4`}>
            I am{" "}
            <span className="font-semibold text-blue-500">
              Mairevh Exaucey KIBAMBA MFOUTOU
            </span>
            , an AI Engineer based in Togo. My hybrid profile allows me to navigate from AI engineering to complex systems architecture, with a particular focus on inclusive finance and digital transformation in West Africa.
          </p>
          <p className={`text-lg leading-relaxed ${textPrimary}`}>
            Today, I develop intelligent solutions for fintechs and microfinance institutions, optimizing everything from customer support via WebSockets to fraud detection with a documented 98% precision.
          </p>
        </div>

        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${headingColor}`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journey.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl border ${borderColor} ${cardBg} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm`}
              >
                <div className={`text-blue-500 mb-4`}>{item.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${headingColor}`}>
                  {item.title}
                </h3>
                <p className={`${textPrimary} leading-relaxed`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${headingColor}`}
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className={`rounded-xl border ${borderColor} ${cardBg} p-6 backdrop-blur-sm`}
              >
                <h3 className={`text-xl font-bold mb-4 ${headingColor}`}>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        isDark
                          ? "bg-blue-900/60 text-blue-300 border border-blue-700/50 hover:bg-blue-900"
                          : "bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 md:p-10 mb-12 backdrop-blur-sm shadow-xl`}
        >
          <h2 className={`text-3xl font-bold mb-8 ${headingColor}`}>
            Key Metrics &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">
                98%
              </div>
              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  Detection Precision
                </h3>
                <p className={textPrimary}>
                  Financial anomaly detection models optimized to minimize false positives.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">
                300k+
              </div>
              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  Transactions Analyzed
                </h3>
                <p className={textPrimary}>
                  Large-scale data processing via PySpark and distributed architectures.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">
                0
              </div>
              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  LLM Tokens (FAQ)
                </h3>
                <p className={textPrimary}>
                  Drastic cost optimization through hybrid NLP architectures.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">

              </div>
              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  Financial Inclusion
                </h3>
                <p className={textPrimary}>
                  Solutions dedicated to women's empowerment and informal sector digitalization.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className={`text-lg mb-8 ${textPrimary}`}>
            Looking to collaborate on an AI or Data Engineering project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/work"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/50"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
              }`}
            >
              Explore My Work <FaArrowRight className="text-sm" />
            </Link>
            <Link
              to="/connect"
              className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 inline-flex items-center justify-center gap-2 ${
                isDark
                  ? "border-blue-400 text-blue-400 hover:bg-blue-950/50"
                  : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
