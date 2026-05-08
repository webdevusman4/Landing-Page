"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  ArrowRight,
  Play,
  LayoutGrid,
  UploadCloud,
  MessageSquare,
  Mic,
  Sparkles,
  Zap,
  Target,
  Goal,
  User,
  GraduationCap,
} from "lucide-react";
import FAQ from "@/components/faq";
import Image from "next/image";

export default function LandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      {/* Background glow effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* ZONE 1: The Transparent Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-zinc-950/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
              ParhoMate
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["Features", "How it Works", "Boards", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Log In
            </button>
            <button className="text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-full px-5 py-2 transition-colors">
              Get Started — Free
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* ZONE 2: The Hero Section (Above the Fold) */}
        <section className="pt-32 pb-16 px-6 flex flex-col items-center text-center relative overflow-hidden">
          {/* Abstract background image accent */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2560&auto=format&fit=crop"
              alt="Abstract Geometry Component"
              fill
              className="object-cover mix-blend-screen [mask-image:radial-gradient(ellipse_at_top,black,transparent_80%)]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/80 to-zinc-950" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-[11px] font-medium text-indigo-300 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            ✨ Built for Sindh, Federal & Aga Khan Boards
          </motion.div>

          <motion.h1
            {...fadeIn}
            className="relative z-10 text-4xl sm:text-6xl font-bold max-w-3xl tracking-tight leading-[1.1] mb-4"
          >
            Your AI Tutor. Strictly Locked to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Your Syllabus.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 text-zinc-400 text-base max-w-xl mb-8"
          >
            Stop getting generic global answers. ParhoMate reads your exact
            textbooks to provide hyper-accurate tutoring, mock vivas, and exam
            prep.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-6"
          >
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-colors">
              Start Learning Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors">
              <Play className="w-5 h-5" />
              See How it Works
            </button>
          </motion.div>

          {/* Abstract floating UI mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-4xl h-48 md:h-64 mt-16 rounded-t-3xl border-t border-x border-white/10 bg-gradient-to-b from-white/10 to-transparent relative z-10 overflow-hidden backdrop-blur-sm flex justify-center"
          >
            {/* Pulsing engine core */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-purple-600/30 blur-[60px] rounded-full animate-pulse" />

            <div className="w-full max-w-3xl h-full flex flex-col justify-end pb-0">
              <div className="w-full h-full md:mt-8 mx-auto border-t border-x border-white/10 rounded-t-2xl bg-zinc-900/50 backdrop-blur-md shadow-2xl relative overflow-hidden flex flex-col">
                {/* Mock Window Header */}
                <div className="h-10 border-b border-white/5 flex items-center px-4 gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="h-4 w-48 bg-white/5 rounded-md" />
                </div>
                {/* Mock Content */}
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-white/10 rounded w-1/4" />
                      <div className="h-12 bg-white/5 rounded-[4px]" />
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                      <Brain className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-white/10 rounded w-1/3" />
                      <div className="h-8 bg-indigo-500/10 rounded-[4px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 4. The "Why ParhoMate?" Core Features (Bento Grid) */}
        <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight"
            >
              Why ParhoMate?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
            {/* Large Card 1 (Left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 bg-zinc-900/30 border border-white/5 rounded-3xl p-8 relative overflow-hidden group flex flex-col"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-colors" />
              <div className="relative z-10 flex-1">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 mb-6">
                  <Target className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  100% Contextual (RAG Pipeline)
                </h3>
                <p className="text-zinc-400 max-w-sm mb-8">
                  Powered by an advanced retrieval pipeline that strictly bounds
                  the AI to your textbook. If it&apos;s not in your syllabus,
                  it&apos;s not in the answer. This prevents out-of-context
                  hallucinations.
                </p>
              </div>
              <div className="relative h-48 mt-auto rounded-xl border border-white/5 bg-zinc-950/50 p-4 overflow-hidden">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-mono">
                    Fetching Sindh Board Ch-4, p.62...
                  </span>
                </div>
                <div className="space-y-2 opacity-70">
                  <div className="h-2 w-full bg-white/5 rounded" />
                  <div className="h-2 w-4/5 bg-white/5 rounded" />
                </div>
              </div>
            </motion.div>

            <div className="md:col-span-5 flex flex-col gap-6">
              {/* Large Card 2 (Right Top) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex-1 bg-zinc-900/30 border border-white/5 rounded-3xl p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[60px] rounded-full" />
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20 mb-4">
                    <Brain className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Think Deeply Mode</h3>
                  <p className="text-zinc-400 text-sm">
                    Uncover the &quot;why&quot; behind complex physics and math
                    problems. Step-by-step reasoning that mimics an expert
                    tutor.
                  </p>
                </div>
              </motion.div>

              {/* Large Card 3 (Right Bottom) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex-1 bg-zinc-900/30 border border-white/5 rounded-3xl p-8 relative overflow-hidden group"
              >
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full" />
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 mb-4">
                    <Mic className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mock Viva Engine</h3>
                  <p className="text-zinc-400 text-sm">
                    Perfect for languages and science practicals. Practice with
                    your voice and get instant assessments on fluency and
                    accuracy.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. The "How it Works" Pipeline (4 Steps) */}
        <section
          id="how-it-works"
          className="py-32 px-6 max-w-7xl mx-auto relative border-t border-white/5"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight"
            >
              From Upload to A-Grade in 4 Steps.
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              {
                icon: LayoutGrid,
                title: "Select Board",
                desc: "Choose your specific national or provincial curriculum.",
              },
              {
                icon: UploadCloud,
                title: "Upload Syllabus",
                desc: "Attach your PDF textbooks, past papers, or photos of notes.",
              },
              {
                icon: MessageSquare,
                title: "Ask the AI",
                desc: "Get instant answers strictly confined to your textbook's vocabulary.",
              },
              {
                icon: Goal,
                title: "Ace Exams",
                desc: "Master your material through contextual tutoring and mock assessments.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-zinc-900/30 border border-white/5 p-6 rounded-2xl relative"
              >
                <span className="text-sm font-bold text-zinc-600 absolute top-6 right-6">
                  0{i + 1}
                </span>
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
                  <step.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-zinc-200">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 6. Interactive Demo / Feature Showcase */}
        <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Side: Mockup Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Ask complex questions. Get precise answers.
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed max-w-md">
                Our specialized RAG pipeline ensures that every explanation is
                rooted in your specific textbook context, preventing
                out-of-syllabus hallucinations.
              </p>

              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 relative shadow-xl backdrop-blur-sm">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm shrink-0">
                    <User className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4 text-sm text-zinc-200">
                    Explain the process of balancing redox equations in acidic
                    medium, as described in chapter 8 of the Federal Board
                    textbook.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Mockup Output */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] border border-white/10 rounded-3xl bg-zinc-900/30 overflow-hidden flex flex-col p-6 backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <Brain className="w-5 h-5 text-indigo-400 animate-pulse" />
                <span className="text-sm font-semibold text-indigo-300">
                  Searching Textbook Context...
                </span>
              </div>

              {/* Animated Book Context Line */}
              <div className="relative z-10 w-full h-16 bg-white/5 rounded-xl border border-white/5 mb-4 overflow-hidden p-3 flex items-center justify-between">
                <div className="flex flex-col gap-2 w-2/3">
                  <div className="h-2 bg-white/20 rounded w-full" />
                  <div className="h-2 bg-white/10 rounded w-3/4" />
                </div>
                <motion.div
                  animate={{ x: [-100, 100], opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent w-1/2"
                />
                <div className="bg-indigo-500/20 text-indigo-300 text-[10px] px-2 py-1 rounded font-mono border border-indigo-500/20">
                  Federal Chemistry Ch-8, p.142
                </div>
              </div>

              {/* Answer Streaming Mockup */}
              <div className="flex-1 space-y-3 mt-4 pr-12 relative z-10">
                <motion.div
                  className="h-3 bg-white/10 rounded w-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.div
                  className="h-3 bg-white/10 rounded w-5/6"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
                <motion.div
                  className="h-3 bg-white/10 rounded w-4/6"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />
                <motion.div
                  className="h-12 bg-indigo-500/10 rounded-lg border border-indigo-500/20 w-full mt-4 flex items-center px-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <span className="text-indigo-400 font-mono text-xs">
                    Cr2O7^2- + 14H+ + 6e- {"->"} 2Cr^3+ + 7H20
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 7. Subjects & Grades Matrix */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-8"
            >
              Master Every Subject.
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mb-12">
              {["9th Grade", "10th Grade", "11th Grade", "12th Grade"].map(
                (grade) => (
                  <span
                    key={grade}
                    className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-300"
                  >
                    {grade}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              {
                name: "Physics",
                icon: Goal,
                img: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=400&auto=format&fit=crop",
              },
              {
                name: "Chemistry",
                icon: Target,
                img: "https://images.unsplash.com/photo-1603126859567-baaa5ccdc5de?q=80&w=400&auto=format&fit=crop",
              },
              {
                name: "Biology",
                icon: Brain,
                img: "https://images.unsplash.com/photo-1532187643603-ebf81a79f8fa?q=80&w=400&auto=format&fit=crop",
              },
              {
                name: "Mathematics",
                icon: GraduationCap,
                img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400&auto=format&fit=crop",
              },
              {
                name: "Computer Science",
                icon: LayoutGrid,
                img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
              },
            ].map((subject, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={subject.name}
                className="bg-zinc-900 border border-white/5 rounded-2xl relative overflow-hidden group cursor-default min-h-[160px] flex flex-col justify-end p-4"
              >
                <Image
                  src={subject.img}
                  alt={subject.name}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                <div className="relative z-10 w-8 h-8 bg-indigo-500/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-indigo-500/30 mb-2">
                  <subject.icon className="w-4 h-4 text-indigo-400" />
                </div>
                <h3 className="relative z-10 font-bold text-zinc-200 text-lg leading-tight">
                  {subject.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 8. The Audio/Viva Feature Spotlight */}
        <section className="py-32 bg-zinc-900/50 border-y border-white/5 relative overflow-hidden">
          {/* Glows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-indigo-600/10 blur-[80px] rounded-full" />

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300 mb-6">
                <Mic className="w-3 h-3" /> Voice Assessment
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Don&apos;t just type.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  Speak.
                </span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-lg mb-8">
                Practice Viva Voce exams and spoken English effortlessly.
                ParhoMate listens, analyzes your pronunciation, technical
                vocabulary, and contextual accuracy, providing instant graded
                feedback.
              </p>
              <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                Try Voice Mode
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-80 flex items-center justify-center p-8 bg-zinc-900 rounded-3xl border border-white/5 relative overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop"
                alt="Microphone"
                fill
                className="object-cover opacity-30 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

              {/* Waveform Animation (Detailed) */}
              <div className="flex items-center justify-center gap-[2px] h-32 w-full max-w-sm relative z-10 backdrop-blur-sm bg-black/20 p-4 rounded-2xl border border-white/10 shadow-2xl">
                {Array.from({ length: 50 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: [10, Math.sin(i * 0.3) * 50 + 40, 10],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5 + (i % 5) * 0.1,
                      delay: i * 0.03,
                      ease: "easeInOut",
                    }}
                    className={`w-1.5 rounded-full ${i % 3 === 0 ? "bg-gradient-to-t from-purple-500 to-indigo-400" : "bg-gradient-to-t from-indigo-500/50 to-purple-400/50"}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 9. Testimonials / Success Stories */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Trusted by Students Who Know.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Faizan",
                role: "10th Grade, Sindh Board",
                text: "ParhoMate saved my exams. Instead of scanning an entire chapter, I just asked the AI to summarize my textbook notes and generate mock vivas. Incredible.",
                img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
              },
              {
                name: "Hasan",
                role: "12th Grade, Federal Board",
                text: "I was skeptical about AI hallucinations, but ParhoMate literally quotes the textbook pages. It doesn't give me university-level answers when I only need Federal board level.",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
              },
              {
                name: "Aisha",
                role: "11th Grade, Aga Khan Board",
                text: "The Think Deeply mode for Chemistry changed everything. It explains multi-step stoichiometry better than any teacher I've had. Pure magic.",
                img: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=200&auto=format&fit=crop",
              },
            ].map((testi, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/50 transition-colors flex flex-col relative overflow-hidden"
              >
                <p className="text-zinc-300 mb-8 leading-relaxed flex-1 relative z-10">
                  &quot;{testi.text}&quot;
                </p>
                <div className="flex items-center gap-4 mt-auto relative z-10">
                  <div className="w-12 h-12 rounded-full relative overflow-hidden border-2 border-indigo-500/30 shadow-lg">
                    <Image
                      src={testi.img}
                      alt={testi.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-zinc-200">
                      {testi.name}
                    </div>
                    <div className="text-xs text-zinc-500">{testi.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* 10. The Final Footer CTA */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between bg-indigo-900/10 border border-indigo-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-md gap-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_70%)]" />

            <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-30 pointer-events-none hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
                alt="Graduation Cap"
                fill
                className="object-cover mix-blend-screen [mask-image:linear-gradient(to_left,black,transparent)]"
              />
            </div>

            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Ready to beat the board exams?
              </h2>
              <p className="text-indigo-300/60 text-sm md:text-base">
                Join 10,000+ students studying smarter with syllabus-locked AI.
              </p>
            </div>

            <button className="relative z-10 whitespace-nowrap px-8 py-4 bg-white text-zinc-950 rounded-2xl font-bold transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Create Your Free Account
            </button>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-400" />
            <span className="text-lg font-bold tracking-tight text-zinc-200">
              ParhoMate
            </span>
          </div>

          <div className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} ParhoMate. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Lovable Tags based on original image */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
        <div className="bg-zinc-800/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 flex items-center gap-2 shadow-2xl pointer-events-auto cursor-pointer hover:bg-zinc-700/80 transition-colors">
          <Sparkles className="w-4 h-4 text-zinc-300" />
          <span className="text-sm font-medium text-zinc-200">
            Edit with Lovable
          </span>
        </div>
        <div className="bg-zinc-900/80 backdrop-blur-md pb-1 pt-1 px-4 rounded flex items-center justify-center opacity-70 pointer-events-auto cursor-pointer hover:opacity-100 transition-opacity ml-auto">
          <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
            Lovable Remix
          </span>
        </div>
      </div>
    </div>
  );
}
