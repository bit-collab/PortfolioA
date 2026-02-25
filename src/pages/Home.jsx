import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import {
  FaBrain,
  FaDatabase,
  FaPython,
  FaChartLine,
  FaRobot,
  FaMicrochip,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";

  const roles = [
    {
      icon: FaBrain,
      title: "AI Engineer",
      desc: "Designing neural architectures & intelligent systems",
    },
    {
      icon: FaRobot,
      title: "NLP Expert",
      desc: "Hybrid NLTK + LLM architectures",
    },
    {
      icon: FaMicrochip,
      title: "Computer Vision",
      desc: "Image processing & OCR (YOLO)",
    },
    {
      icon: FaPython,
      title: "Backend Engineer",
      desc: "Real-time APIs & WebSockets with FastAPI",
    },
    {
      icon: FaChartLine,
      title: "Data Engineering",
      desc: "ETL pipelines with Prefect & PySpark",
    },
    {
      icon: FaDatabase,
      title: "Cloud & MLOps",
      desc: "AWS deployment & scalable ML pipelines",
    },
  ];

  return (
    <div
      className={`${containerBg} min-h-screen transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start pt-14">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Mairevh Exaucey
              </span>
            </h1>

            <p
              className={`text-lg sm:text-xl md:text-2xl font-semibold mb-6 ${textSecondary}`}
            >
              AI Engineer
            </p>

            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 ${textPrimary}`}
            >
              Holding a <span className="font-semibold">Master's in AI & Big Data</span>, I am passionate about architecting intelligent systems.
              I specialize in <span className="font-semibold">hybrid NLP</span>, <span className="font-semibold">financial anomaly detection</span>,
              and deploying scalable solutions for digital transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/work">
                <button
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer ${
                    isDark
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  View My Projects
                </button>
              </Link>

              <Link to="/connect">
                <button
                  className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 text-sm sm:text-base cursor-pointer ${
                    isDark
                      ? "border-blue-400 text-blue-400 hover:bg-blue-950"
                      : "border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div
              className={`relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 ${
                isDark ? "border-blue-900/40" : "border-blue-200"
              } shadow-2xl`}
            >
              <img
                src="./pro.png"
                alt="Mairevh Exaucey KIBAMBA MFOUTOU"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role, idx) => {
                const Icon = role.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                      isDark
                        ? "bg-blue-950 hover:bg-blue-900/80"
                        : "bg-blue-100 hover:bg-blue-200"
                    }`}
                  >
                    <Icon className={`text-xl sm:text-2xl ${textSecondary}`} />
                    <div>
                      <h4
                        className={`font-bold text-base sm:text-lg ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {role.title}
                      </h4>
                      <p
                        className={`text-sm sm:text-base ${textPrimary} leading-snug`}
                      >
                        {role.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
