# 🎬 AnimeStream - ToonStream Anime Streaming Platform

একটি সম্পূর্ণ আধুনিক ও হাই-স্পিড অ্যানিমে স্ট্রিমিং ওয়েব অ্যাপ্লিকেশন, যা ToonStream ওয়েবসাইট থেকে স্বয়ংক্রিয়ভাবে লেটেস্ট অ্যানিমে, এপিসোড, পোস্টার ও মাল্টি-সার্ভার ভিডিও স্ট্রিম সংগ্রহ করে প্লে করে।

---

## 🌟 প্রধান ফিচারসমূহ (Key Features)

1. **স্বয়ংক্রিয় ToonStream স্ক্র্যাপিং ও ভিডিও ভেরিফিকেশন (Automatic Scraper & Video Verification)**:
   - ToonStream-এর ক্যাটাগরি (`/category/anime`, `/category/hindi-dubbed`) থেকে সরাসরি অ্যানিমে ও পোস্টার সংগ্রহ করে।
   - **Video Availability Verification**: যেসকল অ্যানিমেতে কার্যকর ভিডিও বা স্ট্রিমিং সার্ভার নেই, সেগুলোকে স্বয়ংক্রিয়ভাবে বাদ দিয়ে শুধুমাত্র কার্যকর অ্যানিমে তালিকাভুক্ত করে।
2. **মাল্টি-সার্ভার ভিডিও প্লেয়ার (Multi-Server HD Player)**:
   - Ruby, Vidmoly, Abyssplayer, WatchDL সহ একাধিক ফাস্ট ক্লাউড সার্ভার সাপোর্ট।
   - সাবটাইটেল (Sub) এবং হিন্দি ডাব (Dub) অডিও পরিবর্তন করার সুবিধা।
   - ফুল-মুভি (Full Movie) এবং পর্বভিত্তিক (Episodes 1, 2, 3...) প্লেব্যাক।
3. **আধুনিক প্রিমিয়াম UI/UX ডিজাইন**:
   - রিয়েক্ট (React), টেলউইন্ড সিএসএস (Tailwind CSS), মোশন ট্রানজিশন (Framer Motion)।
   - ডার্ক থিম, রেসপন্সিভ মোবাইল এবং ডেক্সটপ লেআউট।
   - রিয়েল-টাইম সার্চ, ওয়াচলিস্ট ও অফলাইন ডাউনলোড ভিউ।
4. **HLS ও m3u8 প্রক্সি সুবিধা (CORS Fix)**:
   - সার্ভার-সাইড প্রক্সি (`/api/anime/hls-proxy`) দিয়ে কোনো ক্রস-অরিজিন (CORS) সমস্যা ছাড়াই নিরবচ্ছিন্ন স্ট্রিমিং।

---

## 🚀 কিভাবে প্রজেক্ট চালাবেন (How to Run Locally)

### ১. ডিপেন্ডেন্সি ইনস্টল করুন:
```bash
npm install
```

### ২. ডেভেলপমেন্ট সার্ভার চালু করুন:
```bash
npm run dev
```
সার্ভার চালু হলে ব্রাউজারে `http://localhost:3000` এ প্রজেক্টটি দেখতে পাবেন।

### ৩. প্রোডাকশন বিল্ড তৈরি করুন:
```bash
npm run build
npm start
```

---

## 📂 প্রজেক্ট ফাইল স্ট্রাকচার (Project Structure)

```
├── server.ts                  # ব্যাকএন্ড Express সার্ভার ও ToonStream স্ক্র্যাপার
├── src/
│   ├── App.tsx                # মূল ফ্রন্টএন্ড লেআউট ও স্টেট ম্যানেজমেন্ট
│   ├── views/
│   │   ├── PlayerView.tsx     # ভিডিও প্লেয়ার ও সার্ভার সিলেকশন
│   │   ├── DetailsView.tsx    # অ্যানিমে ডিটেইলস ও পর্ব তালিকা
│   │   ├── SearchView.tsx     # লাইভ সার্চ অপশন
│   │   ├── GenresView.tsx     # ক্যাটাগরি ও জঁরা
│   │   ├── DownloadView.tsx   # ডাউনলোড ও সোর্স কোড জিপ
│   │   ├── WatchlistView.tsx  # পছন্দের তালিকা
│   │   └── AdminView.tsx      # অ্যাডমিন প্যানেল
│   ├── components/            # UI কম্পোনেন্টস (TiltCard, ইত্যাদি)
│   ├── types.ts               # টাইপস্ক্রিপ্ট টাইপ ডেফিনিশন
│   └── firebase.ts            # ফায়ারবেস কনফিগারেশন
├── package.json               # প্রজেক্ট ডিপেন্ডেন্সি ও স্ক্রিপ্ট
├── tsconfig.json              # টাইপস্ক্রিপ্ট কনফিগারেশন
└── vite.config.ts             # Vite বান্ডলার কনফিগারেশন
```

---

## ⚙️ ব্যাকএন্ড এপিআই রুটস (Backend API Endpoints)

- `GET /api/toonstream/feed?page=1&category=anime`: নিশ্চিত ভিডিও থাকা অ্যানিমে তালিকা স্ক্র্যাপ করে রিটার্ন করে।
- `GET /api/toonstream/series?url=...`: কোনো সিরিজের সমস্ত এপিসোড বা মুভির বিবরণ সংগ্রহ করে।
- `GET /api/toonstream/episode?episodeUrl=...`: কার্যকর ভিডিও সার্ভার (Ruby, Vidmoly, Abyss) এক্সট্রাক্ট করে।
- `GET /api/download/project.zip`: পুরো ওয়েবসাইটের রানিং সোর্স কোডের জিপ ফাইল ডাউনলোড করার সরাসরি রুট।

---
Enjoy Anime Streaming! 🍿
