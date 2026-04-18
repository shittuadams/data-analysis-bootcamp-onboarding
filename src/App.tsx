/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Send, 
  Download, 
  PlayCircle, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  Database,
  Terminal,
  BarChart3,
  BrainCircuit,
  Briefcase,
  Layers,
  HelpCircle
} from "lucide-react";

const TELEGRAM_LINK = "https://t.me/+hxBFM3L3juI4Yjk0"; // Replace with actual link
const WHATSAPP_NUMBER = "08077555789";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export default function App() {
  const steps = [
    {
      id: "step-1",
      title: "Join Telegram Class Group",
      description: "This is where all live sessions and daily communication happen.",
      icon: <Send className="w-5 h-5" />,
      active: true,
    },
    {
      id: "step-2",
      title: "Download Course Datasets",
      description: "Locate the \"General Section\" in Telegram to get your practice files.",
      icon: <Download className="w-5 h-5" />,
    },
    {
      id: "step-3",
      title: "Start Module 0 (Orientation)",
      description: "Begin your journey by understanding the Data Analyst mindset.",
      icon: <PlayCircle className="w-5 h-5" />,
    },
  ];

  const modules = [
    { id: "M0", title: "Orientation & Analyst Mindset", current: true },
    { id: "M1", title: "Excel-Based Data Analysis" },
    { id: "M2", title: "Advanced Excel & Power Query" },
    { id: "M3", title: "SQL for Data Analysis" },
    { id: "M4", title: "Python for Data Analysis" },
    { id: "M5", title: "Power BI Visualization" },
    { id: "M6", title: "AI for Data Analysis" },
    { id: "M7", title: "Portfolio & Job Readiness" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col p-6 md:p-12 selection:bg-blue-100">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col max-w-6xl mx-auto w-full"
      >
        {/* Header Section */}
        <motion.header variants={itemVariants} className="mb-6">
          <h1 className="text-3xl font-[800] tracking-tight text-[#0F172A] mb-1">
            Welcome to the Data Analysis Bootcamp 🚀
          </h1>
          <p className="text-slate-500 font-medium">
            Congratulations on your enrollment! You now have lifetime access to the curriculum.
          </p>
        </motion.header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-6 w-full">
          {/* Left Column: Onboarding Steps */}
          <motion.section variants={itemVariants} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col">
            <h2 className="text-[14px] font-[700] uppercase tracking-widest text-slate-500 mb-5 flex items-center after:content-[''] after:flex-1 after:h-[1px] after:bg-slate-200 after:ml-3">
              Onboarding Steps
            </h2>
            
            <div className="space-y-4 flex-1">
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  className={`flex gap-4 p-5 rounded-2xl border transition-all ${
                    step.active 
                      ? "bg-[#EFF6FF] border-[#BFDBFE]" 
                      : "bg-[#F1F5F9] border-transparent"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                    step.active ? "bg-[#3B82F6] text-white" : "bg-slate-300 text-white"
                  }`}>
                    {index + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-[#1E293B] text-base">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Support Box (Sticking to bottom of card) */}
            <div className="mt-6 bg-[#F8FAFC] border border-dashed border-slate-300 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-lg border border-slate-200 mt-0.5">
                  <HelpCircle className="w-5 h-5 text-slate-400" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[12px] font-bold text-slate-500 uppercase tracking-tight">Need assistance?</div>
                  <div className="text-sm font-semibold text-[#1E293B]">We are here to help you</div>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    className="text-[#059669] font-bold text-sm hover:underline mt-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    08077555789
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Right Column: Roadmap */}
          <motion.section variants={itemVariants} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col overflow-hidden">
            <h2 className="text-[14px] font-[700] uppercase tracking-widest text-slate-500 mb-5 flex items-center after:content-[''] after:flex-1 after:h-[1px] after:bg-slate-200 after:ml-3">
              Course Roadmap
            </h2>
            
            <div className="space-y-2 overflow-y-auto pr-1">
              {modules.map((module) => (
                <div 
                  key={module.id} 
                  className={`flex items-center p-3 rounded-xl border-l-[4px] transition-all ${
                    module.current 
                      ? "bg-[#F0FDF4] border-[#22C55E]" 
                      : "bg-[#F8FAFC] border-slate-300"
                  }`}
                >
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter mr-3 ${
                    module.current ? "bg-[#DCFCE7] text-[#15803D]" : "bg-slate-200 text-slate-600"
                  }`}>
                    {module.id}
                  </span>
                  <span className={`text-sm font-bold ${module.current ? "text-emerald-900" : "text-slate-700"}`}>
                    {module.title}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-center italic text-xs text-slate-400 text-center">
              "The best time to plant a tree was 20 years ago. The second best time is now."
            </div>
          </motion.section>
        </div>

        {/* Footer CTA */}
        <motion.section variants={itemVariants} className="mt-6 p-6 bg-[#1E293B] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-xl shadow-slate-900/10">
          <div className="text-center md:text-left">
            <div className="text-lg font-bold">Ready to dive in?</div>
            <div className="text-sm text-slate-400 font-medium">Click below to join your fellow students on Telegram.</div>
          </div>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3B82F6] hover:bg-blue-600 text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-95 text-lg shrink-0"
          >
            Join Telegram Class Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.section>
      </motion.div>
    </div>
  );
}
