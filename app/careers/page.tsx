"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import ThreeHeroBg from "@/components/ui/ThreeHeroBg";
import { jobRequisitions } from "./careersData";

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
  const [department, setDepartment] = useState("All Departments");



  const filteredJobs = jobRequisitions.filter(job => {
    return department === "All Departments" || job.department === department;
  });

  return (
    <>
      <TopNavBar active="Careers" />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-neutral-200/80 overflow-hidden">
          <ThreeHeroBg />
          <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter items-center z-10 relative">
            <div className="md:col-span-7 pr-0 md:pr-xl">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold mb-sm block">Join TechSupportSites</span>
              <h1 className="gsap-hero-animate font-display text-4xl md:text-display-lg uppercase font-bold tracking-tighter text-primary mb-lg leading-tight">
                Engineering Excellence.
              </h1>
              <p className="gsap-hero-animate font-sans text-md md:text-body-lg text-on-surface-variant mb-xl max-w-2xl leading-relaxed">
                We don't just write code; we architect solutions that drive enterprise scale. Join a team where precision meets innovation, and your work directly impacts global infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-md">
                <Link className="bg-secondary text-white px-lg py-md text-center font-sans text-xs uppercase tracking-widest hover:bg-primary transition-colors border border-secondary font-bold rounded-full" href="#jobs">
                  View Open Roles
                </Link>
                <Link className="bg-transparent text-primary px-lg py-md text-center font-sans text-xs uppercase tracking-widest border border-neutral-200/80 hover:bg-surface-container transition-colors font-bold rounded-full" href="/careers/life-at-tech-support-sites">
                  Our Culture & Life
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 mt-xl md:mt-0 relative h-[400px] border border-neutral-200/80 bg-white overflow-hidden rounded-2xl cursor-pointer">
              <div 
                className="w-full h-full"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <img 
                  alt="Abstract architectural structure representing engineering precision" 
                  className="w-full h-full object-cover" 
                  src="/images/careers_hero_visual.png" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="py-huge px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-neutral-200/80 bg-surface" id="culture">
          <div className="mb-xxl">
            <h2 className="font-display text-3xl font-bold uppercase text-primary mb-md">Our Operating Principles</h2>
            <p className="font-sans text-sm md:text-body-lg text-on-surface-variant max-w-3xl">The rigid standards we hold ourselves to every day.</p>
          </div>
          <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[250px]">
            <div 
              className="md:col-span-8 row-span-2 border border-neutral-200/80 p-xl flex flex-col justify-between bg-white relative overflow-hidden group hover:border-secondary/40 hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] transition-all duration-300 rounded-2xl text-primary cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="z-10">
                <span className="material-symbols-outlined text-[48px] text-primary group-hover:text-secondary transition-colors mb-lg">architecture</span>
                <h3 className="font-display text-2xl font-bold uppercase text-primary mb-md">Architectural Integrity First</h3>
                <p className="font-sans text-sm text-on-surface-variant max-w-lg leading-relaxed">We prioritize scalable, secure, and maintainable systems over quick hacks. Every line of code is an asset or a liability.</p>
              </div>
            </div>

            <div 
              className="md:col-span-4 border border-neutral-200/80 p-lg flex flex-col justify-between bg-white hover:border-secondary/40 hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] transition-all duration-300 rounded-2xl text-primary cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span className="material-symbols-outlined text-[32px] text-secondary mb-md">speed</span>
              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest text-primary mb-sm font-bold">Velocity & Precision</h4>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">Moving fast doesn't mean breaking things. We deploy with confidence through rigorous testing.</p>
              </div>
            </div>

            <div 
              className="md:col-span-4 border border-neutral-200/80 p-lg flex flex-col justify-between bg-white hover:border-secondary/40 hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] transition-all duration-300 rounded-2xl text-primary cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span className="material-symbols-outlined text-[32px] text-secondary mb-md">forum</span>
              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest text-primary mb-sm font-bold">Radical Transparency</h4>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">Open communication across all levels. No hidden agendas, just honest feedback.</p>
              </div>
            </div>

            <div 
              className="md:col-span-12 border border-neutral-200/80 p-xl flex flex-col md:flex-row items-center justify-between bg-white text-primary rounded-2xl hover:border-secondary/40 transition-colors duration-300 cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="md:w-2/3 mb-lg md:mb-0">
                <h3 className="font-display text-xl font-bold uppercase text-primary mb-md">Continuous Learning</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">The technology landscape shifts constantly. We allocate dedicated time and resources for our engineers to master emerging paradigms.</p>
              </div>
              <span className="material-symbols-outlined text-[64px] text-on-surface-variant">school</span>
            </div>
          </div>
        </section>

        {/* Blueprint */}
        <section className="py-huge px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-neutral-200/80 bg-grid-pattern relative">
          <div className="absolute inset-0 bg-surface/80"></div>
          <div className="relative z-10">
            <div className="mb-xxl text-center">
              <h2 className="font-display text-3xl font-bold uppercase text-primary mb-md">The Hiring Blueprint</h2>
              <p className="font-sans text-sm md:text-body-lg text-on-surface-variant">A structured, predictable path to joining our team.</p>
            </div>
            <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-6 gap-md">
              <div 
                className="p-lg border border-neutral-200/80 bg-white text-primary hover:border-secondary/40 hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] transition-all duration-300 rounded-xl shadow-sm cursor-pointer"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="font-sans text-xs uppercase tracking-widest text-secondary font-bold mb-sm">01</div>
                <h4 className="font-sans text-sm font-bold text-primary mb-xs">Application</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Submit your resume and portfolio.</p>
              </div>

              <div 
                className="p-lg border border-neutral-200/80 bg-white text-primary hover:border-secondary/40 hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] transition-all duration-300 rounded-xl shadow-sm cursor-pointer"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="font-sans text-xs uppercase tracking-widest text-secondary font-bold mb-sm">02</div>
                <h4 className="font-sans text-sm font-bold text-primary mb-xs">Recruiter Screen</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">30-min alignment check.</p>
              </div>

              <div 
                className="p-lg border border-neutral-200/80 bg-white text-primary hover:border-secondary/40 hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] transition-all duration-300 rounded-xl shadow-sm cursor-pointer"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="font-sans text-xs uppercase tracking-widest text-secondary font-bold mb-sm">03</div>
                <h4 className="font-sans text-sm font-bold text-primary mb-xs">Technical Deep Dive</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Systems design & coding architecture.</p>
              </div>

              <div 
                className="p-lg border border-neutral-200/80 bg-white text-primary hover:border-secondary/40 hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] transition-all duration-300 rounded-xl shadow-sm cursor-pointer"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="font-sans text-xs uppercase tracking-widest text-secondary font-bold mb-sm">04</div>
                <h4 className="font-sans text-sm font-bold text-primary mb-xs">Pair Programming</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Collaborative problem solving.</p>
              </div>

              <div 
                className="p-lg border border-neutral-200/80 bg-white text-primary hover:border-secondary/40 hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] transition-all duration-300 rounded-xl shadow-sm cursor-pointer"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="font-sans text-xs uppercase tracking-widest text-secondary font-bold mb-sm">05</div>
                <h4 className="font-sans text-sm font-bold text-primary mb-xs">Leadership Interview</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Culture and trajectory discussion.</p>
              </div>

              <div 
                className="p-lg border border-neutral-200/80 bg-white text-primary hover:border-secondary/40 hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] transition-all duration-300 rounded-xl shadow-sm cursor-pointer"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="font-sans text-xs uppercase tracking-widest text-secondary font-bold mb-sm">06</div>
                <h4 className="font-sans text-sm font-bold text-primary mb-xs">Offer</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Welcome to TechSupportSites.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Requisitions */}
        <section className="py-huge px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="jobs">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-xl gap-lg">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase text-primary mb-md">Open Requisitions</h2>
              <p className="font-sans text-sm md:text-body-lg text-on-surface-variant">Find your role in the system.</p>
            </div>

            <div className="flex flex-wrap gap-md w-full md:w-auto">
              <select 
                className="gsap-stagger-item border border-neutral-200/80 bg-white text-primary py-2 px-4 font-sans text-xs uppercase tracking-widest focus:border-secondary focus:ring-0 rounded-full w-full md:w-auto outline-none cursor-pointer"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="All Departments">All Departments</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Consulting">Consulting</option>
              </select>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter z-10 relative">
            {filteredJobs.map((job) => (
              <Link 
                key={job.slug} 
                href={`/careers/jobs/${job.slug}`}
                className="flex flex-col border border-neutral-200/80 bg-white rounded-2xl overflow-hidden group cursor-pointer hover:border-secondary/40 hover:shadow-[0_8px_30px_rgba(203,41,87,0.12)] transition-all duration-300 text-primary animate-in fade-in duration-300 w-full"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="aspect-[16/10] relative border-b border-neutral-200/80 overflow-hidden bg-neutral-100 w-full">
                  <img 
                    alt={job.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]" 
                    src={job.image} 
                  />
                  {job.hot && (
                    <div className="absolute top-md right-md bg-white/90 backdrop-blur-sm px-sm py-xs border border-secondary rounded-lg shadow-sm animate-pulse">
                      <span className="font-label-sm text-[9px] uppercase tracking-widest text-secondary font-bold">Hot Role</span>
                    </div>
                  )}
                </div>
                <div className="p-lg flex flex-col flex-grow gap-sm justify-between w-full">
                  <div>
                    <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest mb-xs">
                      <span className="text-secondary font-bold">{job.department}</span>
                      <span className="text-neutral-450 font-semibold text-[10px] tracking-wider">{job.location}</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary leading-tight group-hover:text-secondary transition-colors">
                      {job.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mt-xs">
                      {job.summary}
                    </p>
                  </div>
                  <div className="flex items-center justify-end mt-md pt-md border-t border-neutral-100 w-full">
                    <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-neutral-400 group-hover:text-secondary inline-flex items-center gap-1 transition-colors">
                      Apply Now <span className="material-symbols-outlined text-[12px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {filteredJobs.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-on-surface-variant">
                <span className="material-symbols-outlined text-[48px] text-neutral-300 mb-sm">search_off</span>
                <p className="font-sans text-sm">No active requisitions match your filter criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
