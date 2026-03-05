"use client";

import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, ChevronRight, Camera, Zap, BarChart3, MessageSquare, Smartphone, Globe } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Setup", href: "#setup" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "Contact", href: "#contact" },
  ];

  const features = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "OpenClaw Gateway",
      description: "24/7 AI gateway running on MacBook Pro 2017 with Ollama models",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Social Media Automation",
      description: "AI-powered content generation for 9 platforms with Google Sheets integration",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Dashboard",
      description: "Monitor gateway status, platform performance, and engagement metrics",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Telegram Bot Integration",
      description: "Control your AI assistant directly from Telegram with @Angie6168_bot",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Connected",
      description: "Android app integration for on-the-go access and monitoring",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Platform",
      description: "WhatsApp, Telegram, Facebook, Instagram, Twitter, YouTube, Pinterest, Threads",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "9", label: "Platforms" },
    { value: "4", label: "AI Models" },
    { value: "24/7", label: "Availability" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-white">
                PNZ
              </div>
              <span className="text-white font-semibold">Primes and Zooms</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#setup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                View Setup
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#setup"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-center"
              >
                View Setup
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI-Powered{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Social Media
            </span>{" "}
            Management
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
            Complete OpenClaw configuration running 24/7 on MacBook Pro. 
            Automated content generation for 9 platforms with real-time analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#setup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              Explore Setup <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#dashboard"
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              View Dashboard
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Complete AI Integration</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need to automate your social media presence with AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section id="setup" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">System Architecture</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Complete OpenClaw configuration with all integrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Hardware</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  MacBook Pro 2017 13"
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  macOS 13.7.8
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Node.js 22.x (via nvm)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Ollama for local LLMs
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Software Stack</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  OpenClaw Gateway 2026.3.2
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  4 AI Models (262K context)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  Telegram Bot Integration
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  Google Sheets API
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  Todoist & Notion Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Real-time Dashboard</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Monitor and control your entire AI setup from one beautiful interface
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-700">
              <div className="p-8">
                <h3 className="text-lg font-semibold text-white mb-4">Platform Performance</h3>
                <div className="space-y-4">
                  {[
                    { name: "Instagram", value: "5.8K", color: "bg-pink-500" },
                    { name: "Facebook", value: "2.4K", color: "bg-blue-500" },
                    { name: "Twitter", value: "3.1K", color: "bg-cyan-500" },
                  ].map((platform) => (
                    <div key={platform.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-300">{platform.name}</span>
                        <span className="text-white font-medium">{platform.value}</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className={`h-full ${platform.color} rounded-full`} style={{ width: platform.value.includes("5") ? "85%" : platform.value.includes("3") ? "58%" : "65%" }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors text-left">
                    Generate Content
                  </button>
                  <button className="w-full bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors text-left">
                    View Analytics
                  </button>
                  <button className="w-full bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors text-left">
                    Manage Schedule
                  </button>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-lg font-semibold text-white mb-4">Connected Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["WhatsApp", "Telegram", "Facebook", "Instagram", "Twitter", "YouTube", "Pinterest", "Threads"].map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-slate-400 text-lg mb-8">
            Want to set up your own AI-powered social media management system?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/primesandzooms"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Telegram Channel
            </a>
            <a
              href="https://wa.me/919503275757"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-white text-sm">
              PNZ
            </div>
            <span className="text-slate-400">Primes and Zooms, Pune</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
