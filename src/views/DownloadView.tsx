import { motion } from "motion/react";
import { Download, Search } from "lucide-react";

export const DownloadView = ({ onSearch }: { onSearch: () => void }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 pb-32 min-h-[80vh] flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-white text-xl">A</div>
          <h1 className="text-xl md:text-2xl font-bold text-white">Download</h1>
        </div>
        <button onClick={onSearch} className="text-white hover:text-gray-300">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Full Website ZIP Source Code Download Card */}
      <div className="w-full max-w-2xl mx-auto mb-10 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-900 border border-primary/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              <Download className="w-3.5 h-3.5" /> Full Source Code
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              ওয়েবসাইটের সম্পূর্ণ জিপ ফাইল (ZIP)
            </h2>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-3">
              ওয়েবসাইটের সম্পূর্ণ ডিজাইন, ফ্রন্টএন্ড কোড, ToonStream স্ক্র্যাপার এবং ব্যাকএন্ড ভিডিও এপিআই সহ রানিং প্রজেক্টের সব ফাইল এক ক্লিকে ডাউনলোড করুন।
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] text-gray-400">
              <span className="bg-black/40 px-2.5 py-1 rounded-md border border-white/5">React + Tailwind</span>
              <span className="bg-black/40 px-2.5 py-1 rounded-md border border-white/5">ToonStream Scraper</span>
              <span className="bg-black/40 px-2.5 py-1 rounded-md border border-white/5">Multi-Server Player</span>
              <span className="bg-black/40 px-2.5 py-1 rounded-md border border-white/5">README Setup Guide</span>
            </div>
          </div>
          <a
            href="/api/download/project.zip"
            download="anime-stream-project.zip"
            className="w-full md:w-auto bg-primary text-black hover:bg-primary/90 font-bold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <Download className="w-4 h-4 fill-black" />
            এক ক্লিকে ডাউনলোড করুন
          </a>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-sm mx-auto">
        <div className="w-36 h-36 mb-4 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="relative z-10 w-24 h-24 text-gray-500 opacity-60 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 12L12 16L16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-300 mb-1">অফলাইন অ্যানিমে ডাউনলোড তালিকা খালি</h3>
        <p className="text-gray-500 text-xs leading-relaxed">
          আপনার পছন্দের অ্যানিমে দেখার সময় ডাউনলোড অপশন ব্যবহার করে অফলাইনে দেখার জন্য সেভ করতে পারেন।
        </p>
      </div>
    </motion.div>
  );
};
