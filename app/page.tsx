"use client";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  BellRing,
  BookOpen,
  Brain,
  Zap,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const WEB_APP_URL = "https://app.brainguin.app"; // Your Expo web URL

  // 🚨 FIX: Explicitly type the animation variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-page/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/main.png"
              alt="BrainGuin Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <Image
              src="/images/icon-text-light.png"
              alt="BrainGuin"
              width={120}
              height={30}
              className="object-contain"
            />
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href={WEB_APP_URL}
              className="hidden md:block text-text-muted hover:text-action font-semibold transition-colors"
            >
              Log In
            </Link>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WEB_APP_URL}
              className="bg-action hover:bg-action-hover text-white px-6 py-3 rounded-full font-heading font-bold shadow-lg shadow-action/30 transition-all"
            >
              Start For Free
            </motion.a>
          </nav>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-34 pb-20 px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6 border border-accent/20"
          >
            <Sparkles size={16} className="text-accent" />
            <span className="text-accent font-semibold tracking-wide text-sm">
              Meet your beautiful new study space
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-heading font-black text-primary leading-[1.1] mb-6"
          >
            Study Smarter, <br className="hidden md:block" />
            <span className="text-action">Not Harder.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto lg:mx-0 leading-[1.8] font-body"
          >
            Upload any massive{" "}
            <span className="bg-black/5 text-primary px-2 py-1 rounded-lg font-medium border border-black/[0.05]">
              Document
            </span>
            ,{" "}
            <span className="bg-black/5 text-primary px-2 py-1 rounded-lg font-medium border border-black/[0.05]">
              Lecture slides
            </span>
            ,{" "}
            <span className="bg-black/5 text-primary px-2 py-1 rounded-lg font-medium border border-black/[0.05]">
              Webpage
            </span>
            ,{" "}
            <span className="bg-black/5 text-primary px-2 py-1 rounded-lg font-medium border border-black/[0.05]">
              YouTube video
            </span>
            , or{" "}
            <span className="bg-black/5 text-primary px-2 py-1 rounded-lg font-medium border border-black/[0.05]">
              paste a topic
            </span>
            . BrainGuin instantly generates a custom deck of flashcards and
            builds a daily study schedule, so you can stop stressing and start
            learning.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href={WEB_APP_URL}
              className="bg-primary hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-heading font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              Try it on Web <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Phones */}
        <motion.div
          className="flex-1 relative w-full h-[600px] flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="lg:absolute left-0 md:left-10 z-10 w-[240px]"
          >
            <Image
              src="/images/2.png"
              alt="Dashboard Screen"
              width={300}
              height={600}
              className="rounded-[40px]"
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="lg:absolute right-0 md:right-10 z-20 w-[260px] top-10"
          >
            <Image
              src="/images/3.png"
              alt="Study Screen"
              width={300}
              height={600}
              className="rounded-[40px]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Three simple steps to hack your memory and compress hours of
              studying into just minutes a day.
            </p>
          </div>

          <div className="space-y-32">
            {/* Feature 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="flex flex-col md:flex-row items-center gap-16"
            >
              <div className="flex-1 flex justify-center relative">
                <div className="absolute inset-0 bg-accent/5 rounded-[3rem] -rotate-6 scale-105 z-0" />
                <Image
                  src="/images/pdf.png"
                  alt="Upload Anything"
                  width={350}
                  height={350}
                  className="object-contain drop-shadow-2xl z-10"
                />
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <BookOpen size={28} className="text-accent" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                  Upload Anything. Literally.
                </h3>
                <p className="text-text-muted text-lg leading-relaxed text-center md:text-left">
                  Got a massive 100-page PDF syllabus or a dense deck of
                  PowerPoint lecture slides? Found the perfect 40-minute YouTube
                  tutorial or a long web article? Or maybe you just want to
                  learn about a specific topic like "Quantum Physics"? Just drop
                  it in, and let our AI digest the entire thing instantly.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="flex flex-col md:flex-row-reverse items-center gap-16"
            >
              <div className="flex-1 flex justify-center relative">
                <div className="absolute inset-0 bg-action/5 rounded-[3rem] rotate-6 scale-105 z-0" />
                <Image
                  src="/images/smarter.png"
                  alt="Smart Flashcards"
                  width={350}
                  height={350}
                  className="object-contain drop-shadow-2xl z-10"
                />
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <div className="w-14 h-14 rounded-2xl bg-action/10 flex items-center justify-center mb-6">
                  <Zap size={28} className="text-action" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                  AI Extracts The Magic
                </h3>
                <p className="text-text-muted text-lg leading-relaxed text-center md:text-left">
                  Our engine instantly reads, watches, and digests your
                  materials for you, turning hours of overwhelming content into
                  perfectly organized flashcards. Hours of note-taking saved.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="flex flex-col md:flex-row items-center gap-16"
            >
              <div className="flex-1 flex justify-center relative">
                <div className="absolute inset-0 bg-status-easy/5 rounded-[3rem] -rotate-3 scale-105 z-0" />
                <Image
                  src="/images/processor.png"
                  alt="Pacing"
                  width={310}
                  height={310}
                  className="object-contain drop-shadow-2xl z-10"
                />
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <div className="w-14 h-14 rounded-2xl bg-status-easy/10 flex items-center justify-center mb-6">
                  <Brain size={28} className="text-status-easy" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                  Set Your Exam Deadline
                </h3>
                <p className="text-text-muted text-lg leading-relaxed text-center md:text-left">
                  Tell BrainGuin when your test is. Our Spaced Repetition
                  algorithm will compress your daily study schedule, feeding you
                  exactly the cards you need to see today so you are 100%
                  prepared for exam day.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WIDGETS & NOTIFICATIONS SECTION --- */}
      <section className="py-24 bg-page relative overflow-hidden border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="inline-block bg-wood/10 px-4 py-2 rounded-full mb-6"
            >
              <span className="text-wood font-bold tracking-widest text-sm uppercase">
                Stay on Track
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-heading font-black text-primary leading-tight mb-6"
            >
              Your goals, <br />
              <span className="text-wood">always in sight.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-text-muted mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Building a study habit shouldn't feel like a chore. With gorgeous
              native widgets and friendly reminders, BrainGuin keeps you gently
              on track without the burnout.
            </motion.p>

            <motion.ul
              variants={fadeUp}
              className="space-y-5 mb-8 text-left max-w-sm mx-auto lg:mx-0"
            >
              <li className="flex items-center gap-4 text-text-main font-medium bg-white px-4 py-3 rounded-2xl border border-black/[0.03]">
                <div className="w-10 h-10 rounded-xl bg-action/10 flex items-center justify-center flex-shrink-0">
                  <BellRing size={18} className="text-action" />
                </div>
                Supportive reminders based on your schedule
              </li>
              <li className="flex items-center gap-4 text-text-main font-medium bg-white px-4 py-3 rounded-2xl border border-black/[0.03]">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Zap size={18} className="text-accent" />
                </div>
                Aesthetic widgets for your home screen
              </li>
            </motion.ul>
          </motion.div>

          {/* Widget Phones Configuration */}
          <motion.div
            className="flex-1 relative w-full h-[500px] flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Phone (Widget Screen) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="lg:absolute left-0 md:left-10 z-10 w-[240px]"
            >
              <Image
                src="/images/5.png" // Assuming 1.jpg is your home screen with the streak/widget
                alt="Widget Preview"
                width={300}
                height={600}
              />
            </motion.div>

            {/* Right Phone (Notification/Lock Screen or alternate view) */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="lg:absolute right-0 md:right-10 z-20 w-[260px] top-10"
            >
              <Image
                src="/images/6.png"
                alt="Notification Preview"
                width={300}
                height={600}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 relative overflow-hidden bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#1e293b] to-primary rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_20px_60px_rgba(15,23,42,0.2)] relative overflow-hidden"
        >
          {/* Subtle inner glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-action/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex-1 text-center md:text-left z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight">
              Ready to feel prepared?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-md font-body">
              Join thousands of students who have traded study anxiety for
              confidence. Download BrainGuin today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="https://apps.apple.com/fr/app/brainguin/id6758918032"
                className="block self-center transition-transform hover:scale-105 hover:-translate-y-1"
              >
                <Image
                  src="/images/appstore.png"
                  alt="App store Logo"
                  width={200}
                  height={65}
                  className="object-contain"
                />
              </Link>
              <Link
                href={WEB_APP_URL}
                className="block self-center transition-transform hover:scale-105 hover:-translate-y-1"
              >
                <Image
                  src="/images/googleplay.png"
                  alt="Google play Logo"
                  width={200}
                  height={65}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block flex-shrink-0 z-10">
            <Image
              src="/images/celebrator.png"
              alt="Celebrate"
              width={220}
              height={220}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-page py-12 border-t border-black/5 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/images/main.png"
              alt="BrainGuin Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/images/icon-text-light.png"
              alt="BrainGuin"
              width={90}
              height={30}
              className="object-contain"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
            <a
              href="https://gist.github.com/francesco-saponaro/aeb8f04b6fd0b80a809fdb7119158fe5"
              target="_blank"
              className="hover:text-action transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://gist.github.com/francesco-saponaro/d344c6bdaf1b47fe045772874ee35807"
              target="_blank"
              className="hover:text-action transition-colors"
            >
              Terms of Service
            </a>
            <Link
              href={WEB_APP_URL}
              className="hover:text-action transition-colors"
            >
              Web App
            </Link>
          </div>
          <p className="text-sm text-text-muted/60">
            © {new Date().getFullYear()} BrainGuin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
