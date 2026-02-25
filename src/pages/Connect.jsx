import React, { useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MessageCircle,
  Send,
  MapPin,
} from "lucide-react";
import { useTheme } from "../context/Theme/ThemeContext";

const Connect = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    // mailto fallback - opens user's email client
    const mailtoLink = `mailto:mairevhlfoutou@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");

    setSending(false);
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus(null), 5000);
  };

  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      link: "https://github.com/bit-collab",
      handle: "@bit-collab",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/exaucey-kibamba-27261025b/",
      handle: "Exaucey Kibamba",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      link: "https://wa.me/79488526",
      handle: "Chat with me",
    },
  ];

  const inputClass = `w-full px-4 py-3 rounded-xl border transition-all duration-300 outline-none ${
    isDark
      ? "bg-blue-950/40 border-blue-900/40 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-blue-950/60"
      : "bg-white border-blue-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-blue-50"
  }`;

  return (
    <div
      className={`min-h-screen px-4 sm:px-6 py-12 pt-24 transition-colors duration-500 ${
        isDark
          ? "bg-black text-gray-300"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-700"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p
            className={`text-lg max-w-xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form - Takes 3 columns */}
          <div
            className={`lg:col-span-3 rounded-2xl p-8 border transition-all duration-500 ${
              isDark
                ? "bg-blue-950/40 border-blue-900/40"
                : "bg-white/90 border-blue-100 shadow-xl"
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className={inputClass}
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={inputClass}
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                rows={6}
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                disabled={sending}
                className={`w-full sm:w-auto px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  isDark
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/20"
                } disabled:opacity-60`}
              >
                <Send className="w-4 h-4" />
                {sending ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-500 font-medium mt-2">
                  Your email client has been opened. Send the message to complete!
                </p>
              )}
            </form>
          </div>

          {/* Contact Info - Takes 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Quick Contact */}
            <div
              className={`rounded-2xl p-6 border transition-all duration-500 ${
                isDark
                  ? "bg-blue-950/40 border-blue-900/40"
                  : "bg-white/90 border-blue-100 shadow-xl"
              }`}
            >
              <h2
                className={`text-xl font-bold mb-5 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Info
              </h2>

              <div className="space-y-4">
                <a
                  href="mailto:mairevhlfoutou@gmail.com"
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                    isDark ? "hover:bg-blue-950" : "hover:bg-blue-50"
                  }`}
                >
                  <div className="p-2 rounded-lg bg-blue-600 text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>Email</p>
                    <p className={`text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                      mairevhlfoutou@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/79488526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                    isDark ? "hover:bg-blue-950" : "hover:bg-blue-50"
                  }`}
                >
                  <div className="p-2 rounded-lg bg-blue-600 text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>Phone</p>
                    <p className={`text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                      +228 79 48 85 26
                    </p>
                  </div>
                </a>

                <div
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    isDark ? "" : ""
                  }`}
                >
                  <div className="p-2 rounded-lg bg-blue-600 text-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>Location</p>
                    <p className={`text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                      Lome, Togo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div
              className={`rounded-2xl p-6 border transition-all duration-500 ${
                isDark
                  ? "bg-blue-950/40 border-blue-900/40"
                  : "bg-white/90 border-blue-100 shadow-xl"
              }`}
            >
              <h2
                className={`text-xl font-bold mb-5 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Find Me Online
              </h2>

              <div className="space-y-3">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 group hover:-translate-y-0.5 ${
                      isDark
                        ? "border-blue-900/40 hover:bg-blue-950 hover:border-blue-700"
                        : "border-blue-100 hover:bg-blue-50 hover:border-blue-300"
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-blue-600 text-white group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                        {social.label}
                      </p>
                      <p className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                        {social.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
