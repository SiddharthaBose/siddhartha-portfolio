"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { portfolioData, SocialLink } from "@/data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setStatusMessage(
          "Thank you! Your message has been sent directly to Siddhartha Bose."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Server submission error");
      }
    } catch {
      // Graceful fallback to client mailto
      setSubmitStatus("success");
      setStatusMessage("Opening default mail application to send enquiry...");
      const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "github":
        return <Github className="w-4 h-4" />;
      case "instagram":
        return <Instagram className="w-4 h-4" />;
      case "send":
        return <Send className="w-4 h-4" />;
      case "facebook":
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#070a12] overflow-hidden">
      {/* Circuit overlay */}
      <div className="absolute inset-0 circuit-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-cyber-orange/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-cyber-blue/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
            GET IN <span className="text-cyber-orange">TOUCH</span>
          </h2>

          <p className="max-w-md text-sm text-cyber-light font-body mt-3">
            Discuss a Fintech enterprise engagement, digital banking solutions, or career collaboration.
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyber-orange" />
            <span className="w-2.5 h-2.5 rotate-45 border border-cyber-orange bg-cyber-dark" />
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyber-orange" />
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-7 rounded-2xl bg-[#0b0f19]/90 border border-white/10 shadow-hud-card backdrop-blur-md">
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Direct Channels
              </h3>
              <p className="text-xs text-cyber-light leading-relaxed mb-6 font-body">
                Reach out for technical consulting, OBDX advisory, or digital banking opportunities.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-cyber-card/60 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-cyber-dark border border-white/10 flex items-center justify-center text-cyber-orange shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-[10px] font-mono text-cyber-slate uppercase tracking-wider mb-1">
                      Email Addresses
                    </span>
                    <div className="flex flex-col gap-1">
                      {portfolioData.personal.emails.map((em) => (
                        <a
                          key={em}
                          href={`mailto:${em}`}
                          className="text-sm text-white font-medium hover:text-cyber-orange transition-colors block"
                        >
                          {em}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-cyber-card/60 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-cyber-dark border border-white/10 flex items-center justify-center text-cyber-blue shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-[10px] font-mono text-cyber-slate uppercase tracking-wider mb-1">
                      Phone / Mobile
                    </span>
                    <div className="flex flex-col gap-1">
                      {portfolioData.personal.phones.map((ph) => (
                        <a
                          key={ph}
                          href={`tel:${ph.replace(/\s+/g, "")}`}
                          className="text-sm text-white font-medium hover:text-cyber-blue transition-colors block"
                        >
                          {ph}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-cyber-card/60 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-cyber-dark border border-white/10 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-cyber-slate uppercase tracking-wider">
                      Location
                    </span>
                    <strong className="text-sm text-white font-medium">
                      {portfolioData.personal.location}
                    </strong>
                  </div>
                </div>

                {/* Ask Anything Google Form */}
                <a
                  href={portfolioData.personal.askAnythingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-cyber-card/60 hover:bg-cyber-card border border-white/5 hover:border-amber-400/40 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyber-dark border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-cyber-slate uppercase tracking-wider">
                      Online Form
                    </span>
                    <strong className="text-sm text-white font-medium group-hover:text-amber-400 transition-colors">
                      Submit an Inquiry via Google Form
                    </strong>
                  </div>
                </a>
              </div>

              {/* Social Circles */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <span className="block text-[11px] font-mono text-cyber-slate uppercase tracking-wider mb-3">
                  Connected Social Gateways:
                </span>
                <div className="flex items-center gap-2.5">
                  {portfolioData.socialLinks.map((s: SocialLink) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.name}
                      className="w-9 h-9 rounded-full bg-cyber-card border border-white/10 flex items-center justify-center text-cyber-light hover:text-cyber-orange hover:border-cyber-orange hover:shadow-[0_0_12px_rgba(249,115,22,0.4)] transition-all"
                    >
                      {getSocialIcon(s.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative p-7 sm:p-9 rounded-2xl bg-[#0b0f19]/90 border border-white/10 shadow-hud-card backdrop-blur-md">
              <span className="hud-corner hud-corner-tl" />
              <span className="hud-corner hud-corner-tr" />
              <span className="hud-corner hud-corner-bl" />
              <span className="hud-corner hud-corner-br" />

              <h3 className="text-xl font-heading font-bold text-white mb-1">
                Send Direct Message
              </h3>
              <p className="text-xs font-mono text-cyber-slate mb-6">
                [ SECURE COMMUNICATIONS PROTOCOL // DIRECT DISPATCH ]
              </p>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-cyber-emerald/10 border border-cyber-emerald/40 text-cyber-emerald text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-medium text-cyber-light"
                    >
                      Your Name <span className="text-cyber-orange">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-cyber-card border border-white/10 text-white placeholder-cyber-slate text-sm focus:outline-none focus:border-cyber-orange transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-medium text-cyber-light"
                    >
                      Email Address <span className="text-cyber-orange">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-cyber-card border border-white/10 text-white placeholder-cyber-slate text-sm focus:outline-none focus:border-cyber-orange transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono font-medium text-cyber-light"
                  >
                    Subject <span className="text-cyber-orange">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Consulting Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-cyber-card border border-white/10 text-white placeholder-cyber-slate text-sm focus:outline-none focus:border-cyber-orange transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-medium text-cyber-light"
                  >
                    Message Details <span className="text-cyber-orange">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your project, timeline, or consultation scope..."
                    className="w-full px-4 py-3 rounded-xl bg-cyber-card border border-white/10 text-white placeholder-cyber-slate text-sm focus:outline-none focus:border-cyber-orange transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyber-orange to-[#ea580c] text-black font-heading font-extrabold text-xs tracking-widest uppercase rounded-full shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span>TRANSMITTING...</span>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>SEND DISPATCH</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
