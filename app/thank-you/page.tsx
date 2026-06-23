import React from "react";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="w-full px-4 md:px-margin-desktop py-xl border-b border-neutral-200/80 bg-surface/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
        <div className="max-w-container-max mx-auto flex items-center justify-between">
          <Link href="/" className="font-display text-2xl font-bold tracking-tighter text-primary hover:text-secondary transition-colors">
            ScopateItaliane
          </Link>
          <Link className="font-sans text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors flex items-center gap-sm font-bold bg-neutral-100 hover:bg-neutral-200/80 py-2 px-4 rounded-full" href="/">
            <span className="material-symbols-outlined text-[18px]">close</span>
            Close
          </Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center py-huge px-4 pb-huge bg-surface-container/20">
        <div className="max-w-4xl w-full mx-auto text-center mb-huge animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary text-on-primary mb-xl relative rounded-full shadow-md">
            <div className="absolute inset-2 border border-on-primary opacity-30 rounded-full"></div>
            <span className="material-symbols-outlined text-display-lg" style={{fontVariationSettings: '"FILL" 1'}}>check</span>
          </div>
          <h1 className="gsap-hero-animate font-display text-4xl md:text-display-lg uppercase font-bold tracking-tighter text-primary mb-lg leading-tight">
            Submission Received.
          </h1>
          <h2 className="font-display text-lg font-semibold uppercase text-on-surface-variant">Your Infrastructure Audit is Underway.</h2>
        </div>

        <div className="max-w-container-max w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter mb-huge">
          <div className="md:col-span-7 border border-neutral-200/80 bg-surface p-xl md:p-xxl flex flex-col justify-between rounded-2xl shadow-md">
            <div>
              <div className="flex items-center gap-md mb-xl border-b border-neutral-200/80 pb-md">
                <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: '"FILL" 1'}}>calendar_today</span>
                <h3 className="font-sans text-xs uppercase tracking-widest text-primary font-bold">Next Steps Sequence</h3>
              </div>
              <p className="font-sans text-md text-on-surface mb-xl leading-relaxed">
                A senior systems engineer has been assigned to review your initial telemetry data. We are preparing a preliminary vulnerability matrix and architecture overview.
              </p>
            </div>
            <div className="bg-surface-container-low border border-neutral-200/80 p-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-lg rounded-2xl shadow-sm">
              <div>
                <p className="font-sans text-[10px] text-on-surface-variant uppercase mb-sm font-bold">Action Required</p>
                <p className="font-sans text-sm text-primary font-bold">Schedule your 30-min strategy call</p>
              </div>
              <Link className="inline-flex items-center gap-sm px-xl py-3.5 bg-secondary text-white hover:bg-primary rounded-full transition-all duration-300 font-sans text-xs uppercase tracking-widest flex-shrink-0 font-bold hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md" href="/contact">
                <span className="material-symbols-outlined text-[18px]">event</span>
                Book Calendar
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 border border-neutral-200/80 bg-surface p-xl md:p-xxl flex flex-col rounded-2xl shadow-md">
            <div className="flex items-center gap-md mb-xl border-b border-neutral-200/80 pb-md">
              <span className="material-symbols-outlined text-primary">library_books</span>
              <h3 className="font-sans text-xs uppercase tracking-widest text-primary font-bold">While You Wait</h3>
            </div>
            <p className="font-sans text-sm text-on-surface-variant mb-xl leading-relaxed">
              Review how our engineering protocols have resolved critical systemic failures in high-availability environments.
            </p>
            <div className="flex flex-col gap-md flex-grow justify-end">
              <Link className="group block p-md border border-neutral-200/80 hover:border-neutral-200/80 hover:shadow-md bg-surface-container-lowest rounded-xl transition-all duration-300" href="/case-studies/fintech-analytics-platform">
                <div className="flex justify-between items-center mb-xs">
                  <span className="font-sans text-[10px] text-secondary uppercase tracking-widest font-bold">Case Study</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5">arrow_forward</span>
                </div>
                <span className="font-display text-sm text-primary font-bold uppercase block">Global FinTech Migration Protocol</span>
              </Link>
              <Link className="group block p-md border border-neutral-200/80 hover:border-neutral-200/80 hover:shadow-md bg-surface-container-lowest rounded-xl transition-all duration-300" href="/case-studies/healthcare-digital-platform">
                <div className="flex justify-between items-center mb-xs">
                  <span className="font-sans text-[10px] text-secondary uppercase tracking-widest font-bold">Case Study</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5">arrow_forward</span>
                </div>
                <span className="font-display text-sm text-primary font-bold uppercase block">Healthcare Cloud Compliance Framework</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-container-max w-full mx-auto border-t border-neutral-200/80 pt-xl flex flex-col md:flex-row justify-between items-center gap-xl">
          <div className="text-center md:text-left">
            <p className="gsap-hero-animate font-sans text-xs uppercase tracking-widest text-on-surface-variant mb-sm font-bold">Need Immediate Intervention?</p>
            <p className="font-sans text-sm text-primary">Our Tier 3 support and sales architects are on standby.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-md w-full md:w-auto">
            <Link className="inline-flex items-center justify-center gap-sm px-xl py-4 border border-neutral-200/80 bg-transparent text-primary hover:bg-neutral-100 transition-all duration-300 font-sans text-xs uppercase tracking-widest w-full sm:w-auto font-bold text-center rounded-full shadow-sm hover:scale-[1.02] active:scale-[0.98]" href="/contact">
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              Request Support
            </Link>
            <Link className="inline-flex items-center justify-center gap-sm px-xl py-4 bg-primary text-white hover:bg-neutral-800 transition-all duration-300 font-sans text-xs uppercase tracking-widest w-full sm:w-auto font-bold text-center border border-neutral-200/80 rounded-full shadow-sm hover:scale-[1.02] active:scale-[0.98]" href="/contact">
              <span className="material-symbols-outlined text-[18px]">mail</span>
              Sales Inquiry
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

