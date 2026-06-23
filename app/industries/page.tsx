"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
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
      <Navbar />
      <main className="w-full max-w-container-max mx-auto px-margin-desktop py-xxl space-y-huge bg-surface-container/10">

        {/* Hero Section */}
        <section className="gsap-stagger-container grid grid-cols-12 gap-gutter items-center mb-huge pt-28 pb-12 md:pt-36 md:pb-20 relative overflow-hidden">
          <ThreeHeroBg />
          <div className="col-span-12 md:col-span-8 z-10">
            <h1 className="gsap-hero-animate font-display-lg text-display-lg md:text-display-lg font-display-lg-mobile text-display-lg-mobile mb-md">
              Vertical-Specific <br /><span className="text-secondary">Engineering Precision.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-lg">
              We architect robust, scalable solutions tailored to the unique operational challenges of high-stakes industries. From predictive maintenance in manufacturing to algorithmic trading platforms in FinTech.
            </p>
            <button className="gsap-hero-animate btn-accent">Explore Industry Matrix</button>
          </div>
          <div className="col-span-12 md:col-span-4 z-10">
            <div 
              className="w-full aspect-[16/10] border border-neutral-200/80 relative overflow-hidden bg-surface-container-low group shadow-lg hover:shadow-xl transition-all duration-500 gsap-image-reveal cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <img 
                alt="Abstract architectural structural grid." 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] rounded-2xl" 
                src="/images/architecture_layout.png" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/20 to-transparent pointer-events-none rounded-2xl" />
            </div>
          </div>
        </section>

        {/* Core Sectors */}
        <section className="mb-huge">
          <div className="mb-lg">
            <h2 className="font-headline-xl text-headline-xl border-b border-neutral-200/80 pb-sm inline-block">Core Sectors</h2>
          </div>
          <div className="gsap-stagger-scale grid grid-cols-1 md:grid-cols-4 gap-md">

            <div 
              className="gsap-stagger-item bento-card p-lg col-span-1 md:col-span-2 flex flex-col justify-between min-h-[16rem] h-auto cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div>
                <span className="material-symbols-outlined text-secondary mb-sm" style={{fontSize: '32px'}}>precision_manufacturing</span>
                <h3 className="font-headline-md text-headline-md mb-xs">Manufacturing</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">IoT integration, predictive maintenance, and supply chain twin simulations.</p>
              </div>
              <Link className="font-label-sm text-label-sm uppercase hover:text-secondary flex items-center mt-md w-fit" href="/industries/manufacturing">View Specs <span className="material-symbols-outlined ml-xs text-sm">arrow_forward</span></Link>
            </div>

            <div 
              className="gsap-stagger-item bento-card p-lg col-span-1 min-h-[16rem] h-auto flex flex-col justify-between cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div>
                <span className="material-symbols-outlined text-secondary mb-sm" style={{fontSize: '32px'}}>account_balance</span>
                <h3 className="font-headline-md text-headline-md text-xl mb-xs">FinTech</h3>
                <p className="font-body-md text-body-md text-sm text-on-surface-variant">High-frequency trading infrastructure and ledger tech.</p>
              </div>
              <Link className="font-label-sm text-label-sm uppercase hover:text-secondary flex items-center mt-md w-fit" href="/industries/fintech">View Specs <span className="material-symbols-outlined ml-xs text-sm">arrow_forward</span></Link>
            </div>

            <div 
              className="gsap-stagger-item bento-card p-lg col-span-1 min-h-[16rem] h-auto flex flex-col justify-between cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div>
                <span className="material-symbols-outlined text-secondary mb-sm" style={{fontSize: '32px'}}>local_shipping</span>
                <h3 className="font-headline-md text-headline-md text-xl mb-xs">Logistics</h3>
                <p className="font-body-md text-body-md text-sm text-on-surface-variant">Routing algorithms and autonomous fleet management.</p>
              </div>
              <Link className="font-label-sm text-label-sm uppercase hover:text-secondary flex items-center mt-md w-fit" href="/industries/logistics">View Specs <span className="material-symbols-outlined ml-xs text-sm">arrow_forward</span></Link>
            </div>

            <div 
              className="gsap-stagger-item bento-card p-lg col-span-1 md:col-span-4 min-h-[12rem] h-auto flex flex-col md:flex-row md:items-center justify-between gap-md cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="max-w-xl">
                <div className="flex items-center mb-sm">
                  <span className="material-symbols-outlined text-secondary mr-sm" style={{fontSize: '32px'}}>health_and_safety</span>
                  <h3 className="font-headline-md text-headline-md">Healthcare</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">Highly secure data lakes, telemedicine platforms, and genomic data processing pipelines.</p>
              </div>
              <Link className="gsap-hero-animate btn-primary whitespace-nowrap w-fit text-center" href="/industries/healthcare">Explore Healthcare IT</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
