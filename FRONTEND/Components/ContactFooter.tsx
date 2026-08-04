import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  ChatUploadIcon,
  Copy01Icon,
  CheckmarkBadge01Icon,
  Location01Icon,
  Clock01Icon,
  ArrowUpRight01Icon,
  SparklesIcon,
  GithubIcon,
  Linkedin01Icon,
  ArrowUp01Icon,
} from "@hugeicons/core-free-icons";

function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState("Full Stack Dev");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const email = "asmityadav2410@gmail.com"; // Replace with your email

  const services = [
    "Full Stack Dev",
    "Freelance Project",
    "AI & Backend",
    "Say Hello 👋",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative  backdrop-blur-md bottom-0 px-6 pt-24 pb-12 text-white overflow-hidden border-t border-white/10">
      {/* Dynamic Background Glow Orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 -z-10 h-96 w-96 rounded-full bg-blue-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Top Header Banner */}
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold text-blue-400 backdrop-blur-md">
              <HugeiconsIcon icon={SparklesIcon} size={14} />
              <span>Let's Create Something Extraordinary</span>
            </div>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Let's Bring Your Product to Life
            </h2>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-emerald-300">
              Available for Hire & Freelance
            </span>
          </div>
        </div>

        {/* Main Grid: Form (Left) + Digital Card (Right) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl shadow-2xl relative">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Message
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Select what you're looking for and drop your message below.
            </p>

            {/* Service Category Pills */}
            <div className="mb-6 flex flex-wrap gap-2">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className={`rounded-xl px-4 py-2 text-xs font-medium transition-all duration-200 ${
                    selectedService === service
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                      : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-white/5"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>

            {formSubmitted ? (
              <div className="my-12 flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-blue-500/10 border border-blue-500/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white mb-4">
                  <HugeiconsIcon icon={CheckmarkBadge01Icon} size={24} />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Message Received!
                </h4>
                <p className="text-sm text-slate-300 mt-2">
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Asmit Yadav"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-600 transition duration-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hello@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-600 transition duration-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={`Tell me about your project or inquiry regarding ${selectedService}...`}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-600 transition duration-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]"
                >
                  <span>Send Message</span>
                  <HugeiconsIcon icon={ChatUploadIcon} size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Digital Business Card & Status Widget (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Copy Email Card */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Direct Contact
              </span>
              <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <HugeiconsIcon icon={Mail01Icon} size={20} />
                  </div>
                  <span className="truncate font-mono text-sm text-slate-200">
                    {email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex h-9 shrink-0 items-center gap-1.5 rounded-lg bg-blue-600 px-3 text-xs font-semibold text-white transition hover:bg-blue-500 active:scale-95"
                >
                  <HugeiconsIcon
                    icon={copied ? CheckmarkBadge01Icon : Copy01Icon}
                    size={14}
                  />
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Location & Time Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <HugeiconsIcon icon={Location01Icon} size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Location
                  </span>
                </div>
                <p className="text-sm font-medium text-white">VIT Bhopal</p>
                <p className="text-xs text-slate-400">Madhya Pradesh, India</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                  <HugeiconsIcon icon={Clock01Icon} size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Timezone
                  </span>
                </div>
                <p className="text-sm font-medium text-white">
                  IST (UTC +5:30)
                </p>
                <p className="text-xs text-slate-400">India Standard Time</p>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect Elsewhere
              </span>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/Asmit-Yadav07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-950/60 p-3.5 text-sm font-medium text-slate-300 transition duration-200 hover:border-blue-500/40 hover:bg-slate-950 hover:text-white"
                >
                  <div className="flex items-center gap-2.5">
                    <HugeiconsIcon icon={GithubIcon} size={18} />
                    <span>GitHub</span>
                  </div>
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
                </a>

                <a
                  href="https://www.linkedin.com/in/asmit-yadav-9432b2319/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-950/60 p-3.5 text-sm font-medium text-slate-300 transition duration-200 hover:border-blue-500/40 hover:bg-slate-950 hover:text-white"
                >
                  <div className="flex items-center gap-2.5">
                    <HugeiconsIcon icon={Linkedin01Icon} size={18} />
                    <span>LinkedIn</span>
                  </div>
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Asmit Yadav. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            <span>Crafted with passion, precision & purpose</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-xs text-slate-300 transition duration-200 hover:border-blue-500/40 hover:bg-slate-800 hover:text-white"
          >
            <span>Back to top</span>
            <HugeiconsIcon icon={ArrowUp01Icon} size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default ContactFooter;
