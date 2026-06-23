"use client";

import React from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import ThreeHeroBg from "@/components/ui/ThreeHeroBg";

export default function Page() {
  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    
    const rotX = -normalizedY * 8; // Max 8 degrees tilt
    const rotY = normalizedX * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = "transform 0.1s ease-out, box-shadow 0.3s ease";
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = "transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease";
  };

  return (
    <>
      <TopNavBar active="About" />
      <main className="flex-grow flex flex-col items-center w-full gap-lg pb-huge bg-surface-container/10">
        
        {/* Hero Section */}
        <section className="w-full max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile pt-28 pb-12 md:pt-36 md:pb-20 border-b border-neutral-200/80 grid-bg relative overflow-hidden">
          <ThreeHeroBg />
          <div className="gsap-stagger-container grid grid-cols-12 gap-gutter items-center z-10 relative">
            <div className="col-span-12 md:col-span-8 flex flex-col justify-center animate-in fade-in slide-in-from-left duration-700">
              <p className="gsap-hero-animate font-sans text-xs uppercase tracking-widest text-on-surface-variant mb-md font-bold">Our Purpose</p>
              <h1 className="gsap-hero-animate font-display text-4xl md:text-display-lg uppercase font-bold tracking-tighter text-primary mb-lg">
                Engineering Reliability <br /> at Enterprise Scale.
              </h1>
              <p className="gsap-hero-animate font-sans text-md md:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                We don't just solve problems; we architect resilient systems. ScopateItaliane exists to bridge the gap between complex technical debt and streamlined, future-proof operational excellence.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 flex items-end justify-end mt-xl md:mt-0 animate-in fade-in slide-in-from-right duration-700">
              <div 
                className="gsap-stagger-item border border-neutral-200/80 bg-white p-lg w-full relative rounded-2xl shadow-md overflow-hidden text-primary cursor-pointer"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="absolute top-0 right-0 w-8 h-8 bg-[#CB2957] rounded-bl-xl"></div>
                <p className="font-sans text-xs uppercase tracking-widest text-on-surface-variant mb-sm font-bold">Founded</p>
                <p className="font-display text-2xl font-bold text-primary">2004</p>
                <div className="h-px bg-neutral-200/80 my-md w-full"></div>
                <p className="font-sans text-xs uppercase tracking-widest text-on-surface-variant mb-sm font-bold">Global Reach</p>
                <p className="font-display text-2xl font-bold text-primary">42 Countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="w-full max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile py-xxl border-b border-neutral-200/80">
          <div className="gsap-stagger-container grid grid-cols-12 gap-gutter">
            <div className="col-span-12 md:col-span-6 border-r-0 md:border-r border-neutral-200/80 pr-0 md:pr-xl mb-xl md:mb-0">
              <div className="flex items-center mb-md">
                <span className="material-symbols-outlined text-[#CB2957] mr-sm" data-icon="flag">flag</span>
                <h2 className="font-display text-xl font-bold uppercase text-primary">Mission</h2>
              </div>
              <p className="font-sans text-sm text-on-surface leading-relaxed">
                To eliminate digital friction through precise, uncompromising engineering. We empower enterprises to operate with absolute confidence by delivering robust, scalable infrastructure and support ecosystems.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 pl-0 md:pl-xl">
              <div className="flex items-center mb-md">
                <span className="material-symbols-outlined text-[#CB2957] mr-sm" data-icon="visibility">visibility</span>
                <h2 className="font-display text-xl font-bold uppercase text-primary">Vision</h2>
              </div>
              <p className="font-sans text-sm text-on-surface leading-relaxed">
                A technological landscape where operational downtime is obsolete, and enterprise software functions as a silent, flawless engine of continuous growth.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="w-full max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile py-huge border-b border-neutral-200/80 bg-surface rounded-3xl shadow-sm my-lg">
          <h2 className="font-display text-3xl font-bold uppercase text-primary mb-xxl px-4">Core Engineering Values</h2>
          <div className="gsap-stagger-container grid grid-cols-12 gap-md md:gap-gutter auto-rows-[220px] p-2">
            <div 
              className="col-span-12 md:col-span-8 border border-neutral-200/80 p-lg flex flex-col justify-between bg-white text-primary rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] hover:border-secondary/40 transition-all duration-500 group cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span className="material-symbols-outlined text-primary text-3xl group-hover:text-[#CB2957] transition-colors" data-icon="architecture">architecture</span>
              <div>
                <h3 className="font-display text-lg font-bold uppercase text-primary mb-xs">Structural Integrity</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">We build foundations that do not crumble under load. Every solution is architected for maximum fault tolerance.</p>
              </div>
            </div>

            <div 
              className="col-span-12 md:col-span-4 border border-neutral-200/80 p-lg flex flex-col justify-between bg-white text-primary rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] hover:border-secondary/40 transition-all duration-500 group cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span className="material-symbols-outlined text-secondary text-3xl mb-md" data-icon="speed">speed</span>
              <div>
                <h3 className="font-display text-lg font-bold uppercase text-primary mb-xs">Velocity</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">Speed without friction. Rapid deployment paired with rigorous testing.</p>
              </div>
            </div>

            <div 
              className="col-span-12 md:col-span-4 border border-neutral-200/80 p-lg flex flex-col justify-between bg-white text-primary rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] hover:border-secondary/40 transition-all duration-500 group cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span className="material-symbols-outlined text-primary text-3xl group-hover:text-[#CB2957] transition-colors" data-icon="security">security</span>
              <div>
                <h3 className="font-display text-lg font-bold uppercase text-primary mb-xs">Zero Trust</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">Security is not a feature; it is the baseline of our architecture.</p>
              </div>
            </div>

            <div 
              className="col-span-12 md:col-span-8 border border-neutral-200/80 p-lg flex flex-col justify-between bg-white text-primary rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] hover:border-secondary/40 transition-all duration-500 relative overflow-hidden group cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
              <span className="material-symbols-outlined text-primary text-3xl relative z-10 group-hover:text-[#CB2957] transition-colors" data-icon="analytics">analytics</span>
              <div className="relative z-10">
                <h3 className="font-display text-lg font-bold uppercase text-primary mb-xs">Data Determinism</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">Decisions driven by hard metrics, not intuition. We measure everything to improve continuously.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Milestones Timeline */}
        <section className="w-full max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile py-16 relative">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-tr from-secondary/5 to-indigo-500/5 rounded-full filter blur-xl pointer-events-none z-0"></div>
          
          <div className="max-w-3xl mb-xxl gsap-slide-up relative z-10">
            <span className="font-sans text-xs uppercase tracking-widest text-[#6366F1] font-bold block mb-sm">03 // Our History</span>
            <h2 className="font-display text-3xl font-bold uppercase text-primary tracking-tight">Engineering Milestones</h2>
            <p className="font-sans text-sm md:text-base text-neutral-500 mt-xs">Two decades of constructing deterministic systems, scaling infrastructure, and establishing global engineering nodes.</p>
          </div>

          <div className="relative border-l-2 border-neutral-200/60 ml-4 md:ml-8 pl-8 md:pl-12 py-4 space-y-xl z-10">
            {[
              { year: "2004", title: "Zürich Foundation", desc: "ScopateItaliane is established in Zürich, Switzerland, specializing in high-availability UNIX server clustering and redundant datacenter design.", icon: "home" },
              { year: "2009", title: "DevOps & Cloud Acceleration", desc: "Opened Munich office. Built our first Kubernetes cluster automation systems and type-safe API gateways for logistics clients.", icon: "cloud_done" },
              { year: "2014", title: "IIoT Twin Division", desc: "Launched predictive telemetry pipelines for heavy manufacturing plants, syncing over 50,000 active Edge nodes to dynamic timeseries databases.", icon: "precision_manufacturing" },
              { year: "2024", title: "Active-Active Global Scale", desc: "Deployed synchronous multi-region, zero-data-loss databases across Europe, US, and Asia, running under sub-45ms SLA response bounds.", icon: "public" }
            ].map((milestone, idx) => (
              <div key={idx} className="relative group gsap-slide-up">
                <span className="absolute -left-[53px] md:-left-[69px] top-1.5 w-10 h-10 rounded-full bg-white border border-neutral-200/80 shadow-md flex items-center justify-center text-neutral-400 group-hover:text-secondary group-hover:border-secondary transition-all duration-300">
                  <span className="material-symbols-outlined text-[18px]">{milestone.icon}</span>
                </span>
                
                <div 
                  className="border border-neutral-200/50 bg-white/80 backdrop-blur-md p-lg rounded-2xl shadow-sm hover:shadow-[0_12px_30px_rgba(0,0,0,0.02)] transition-all duration-300 cursor-pointer"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <span className="font-display text-lg font-bold text-secondary">{milestone.year}</span>
                  <h3 className="font-display text-md font-bold uppercase text-primary mt-xs mb-sm">{milestone.title}</h3>
                  <p className="font-sans text-sm text-neutral-500 leading-relaxed max-w-3xl">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section Card Island */}
        <section className="mx-4 md:mx-margin-desktop max-w-container-max md:w-[calc(100%-128px)] bg-primary text-white text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-xl p-lg md:p-[64px] rounded-3xl shadow-xl my-huge border border-neutral-800 relative overflow-hidden self-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-secondary/15 to-[#6366F1]/5 rounded-full filter blur-[80px] pointer-events-none" />
          
          <div className="max-w-2xl relative z-10 gsap-slide-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-md">Ready to re-architect your operations?</h2>
            <p className="font-sans text-md text-surface-dim">Engage with our senior engineering team to discuss your infrastructure challenges.</p>
          </div>
          
          <div className="relative z-10 whitespace-nowrap shrink-0 gsap-scale-in">
            <Link href="/contact" className="accent-bg text-white hover:bg-white hover:text-primary border border-transparent px-8 py-4 font-sans text-xs uppercase tracking-widest rounded-full font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
              Schedule Assessment
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
