import React from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Logo from "../UI/Logo";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-black-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <Logo className="relative" />
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  TechBlog
                </h2>
                <p className="text-sm text-gray-400">Code. Create. Innovate.</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Exploring the cutting-edge world of technology, sharing insights,
              tutorials, and innovations that shape our digital future.
            </p>

            <div className="flex space-x-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/ay05h",
                  label: "GitHub",
                },
                {
                  icon: Twitter,
                  href: "https://x.com/_ay05h_",
                  label: "Twitter",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/ayush-kumar-rai-ay05h/?originalSubdomain=in",
                  label: "LinkedIn",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/_ay05h_/",
                  label: "Instagram",
                },
                // { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {["Home", "Articles", "Tutorials", "Reviews", "About"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block group"
                    >
                      <span className="border-b border-transparent group-hover:border-purple-400 transition-all duration-200">
                        {item}
                      </span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative">
              Categories
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "AI & Machine Learning",
                "Mobile Apps",
                "DevOps",
                "Cybersecurity",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block group"
                  >
                    <span className="border-b border-transparent group-hover:border-cyan-400 transition-all duration-200">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">dev.ayushkumar.in@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Coimbatore, Tamil Nadu</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+91 751-006-5645</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <h4 className="text-sm font-medium text-white mb-2">
                Subscribe to Newsletter
              </h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 hover:scale-105">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 TechBlog. All rights reserved. Made by Ayush
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
