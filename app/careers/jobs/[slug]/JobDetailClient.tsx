"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThreeHeroBg from "@/components/ui/ThreeHeroBg";
import { JobRequisition } from "../../careersData";

interface JobDetailClientProps {
  job: JobRequisition;
}

export default function JobDetailClient({ job }: JobDetailClientProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    coverLetter: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");

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

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: ""
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.portfolio.trim()) {
      errors.portfolio = "Portfolio / LinkedIn URL is required";
    } else if (!/^https?:\/\//i.test(formData.portfolio)) {
      errors.portfolio = "URL must start with http:// or https://";
    }
    if (!formData.coverLetter.trim()) errors.coverLetter = "Cover Letter is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const generatedId = Math.floor(Math.random() * 900000) + 100000;
    setRefId(generatedId.toString());
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-surface-container/10">
        <ThreeHeroBg />

        <div className="z-10 relative flex flex-col gap-huge">
          {/* Header */}
          <header className="max-w-[1000px] mx-auto w-full pb-xl border-b border-neutral-200/80 flex flex-col md:flex-row justify-between items-start md:items-end gap-lg">
            <div>
              <div className="flex flex-wrap items-center gap-sm mb-md">
                <span className="font-label-sm text-[10px] uppercase text-secondary px-sm py-xs border border-secondary bg-white font-bold rounded-md">
                  {job.department}
                </span>
                <span className="font-label-sm text-[10px] uppercase text-neutral-500 px-sm py-xs border border-neutral-200 bg-white font-semibold rounded-md">
                  {job.location}
                </span>
                <span className="font-label-sm text-[10px] uppercase text-neutral-500 px-sm py-xs border border-neutral-200 bg-white font-semibold rounded-md">
                  {job.type}
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-headline-xl text-primary font-bold tracking-tight">
                {job.title}
              </h1>
            </div>
          </header>

          {/* Details Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-huge max-w-[1000px] mx-auto w-full items-start">
            
            {/* Left Content */}
            <section className="lg:col-span-7 flex flex-col gap-xl text-primary leading-relaxed font-body-lg text-body-lg">
              <div>
                <h2 className="font-headline-md text-headline-md text-primary mb-md">Role Overview</h2>
                <p className="text-on-surface-variant leading-relaxed">{job.overview}</p>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-primary mb-md">Core Responsibilities</h2>
                <ul className="list-disc pl-lg space-y-md border-l border-neutral-200/80 ml-sm">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="pl-md text-on-surface-variant">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-primary mb-md">Technical Requirements</h2>
                <ul className="list-disc pl-lg space-y-md border-l border-neutral-200/80 ml-sm">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="pl-md text-on-surface-variant">
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Right Application Form */}
            <section 
              className="lg:col-span-5 border border-neutral-200/80 bg-white p-xl rounded-2xl shadow-md z-10 relative flex flex-col gap-lg transition-transform duration-300 w-full"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              {!submitted ? (
                <>
                  <div className="border-b border-neutral-100 pb-md">
                    <h3 className="font-headline-md text-[20px] text-primary font-bold">Apply for this Role</h3>
                    <p className="font-sans text-xs text-on-surface-variant mt-xs">Connect your node to our network. All fields are required.</p>
                  </div>
                  
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-md w-full">
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-sm text-[10px] uppercase tracking-widest text-primary font-bold">FULL NAME</label>
                      <input 
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        className={`bg-surface-container-low border text-primary px-md py-[10px] font-sans text-sm focus:outline-none focus:border-secondary rounded-xl outline-none ${
                          formErrors.name ? "border-secondary" : "border-neutral-200/80"
                        }`}
                        placeholder="ENTER YOUR FULL NAME"
                        type="text"
                      />
                      {formErrors.name && <span className="text-[10px] text-secondary font-semibold">{formErrors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-xs">
                      <label className="font-label-sm text-[10px] uppercase tracking-widest text-primary font-bold">EMAIL ADDRESS</label>
                      <input 
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className={`bg-surface-container-low border text-primary px-md py-[10px] font-sans text-sm focus:outline-none focus:border-secondary rounded-xl outline-none ${
                          formErrors.email ? "border-secondary" : "border-neutral-200/80"
                        }`}
                        placeholder="ENTER YOUR EMAIL ADDRESS"
                        type="email"
                      />
                      {formErrors.email && <span className="text-[10px] text-secondary font-semibold">{formErrors.email}</span>}
                    </div>

                    <div className="flex flex-col gap-xs">
                      <label className="font-label-sm text-[10px] uppercase tracking-widest text-primary font-bold">PORTFOLIO / LINKEDIN URL</label>
                      <input 
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleFormChange}
                        className={`bg-surface-container-low border text-primary px-md py-[10px] font-sans text-sm focus:outline-none focus:border-secondary rounded-xl outline-none ${
                          formErrors.portfolio ? "border-secondary" : "border-neutral-200/80"
                        }`}
                        placeholder="HTTPS://GITHUB.COM/YOURNAME"
                        type="text"
                      />
                      {formErrors.portfolio && <span className="text-[10px] text-secondary font-semibold">{formErrors.portfolio}</span>}
                    </div>

                    <div className="flex flex-col gap-xs">
                      <label className="font-label-sm text-[10px] uppercase tracking-widest text-primary font-bold">COVER LETTER / SUMMARY</label>
                      <textarea 
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleFormChange}
                        rows={4}
                        className={`bg-surface-container-low border text-primary px-md py-[10px] font-sans text-sm focus:outline-none focus:border-secondary rounded-xl outline-none resize-none ${
                          formErrors.coverLetter ? "border-secondary" : "border-neutral-200/80"
                        }`}
                        placeholder="BRIEFLY DESCRIBE YOUR RELEVANT SKILLSETS..."
                      />
                      {formErrors.coverLetter && <span className="text-[10px] text-secondary font-semibold">{formErrors.coverLetter}</span>}
                    </div>

                    <button 
                      type="submit" 
                      className="btn-accent w-full text-center mt-sm flex items-center justify-center gap-xs cursor-pointer py-3 rounded-xl font-bold uppercase tracking-widest text-xs"
                    >
                      Submit Requisition Application
                      <span className="material-symbols-outlined text-[16px]">send</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-xl gap-md animate-in fade-in duration-500 w-full">
                  <span className="material-symbols-outlined text-[64px] text-secondary">task_alt</span>
                  <h3 className="font-headline-md text-primary font-bold">Application Registered</h3>
                  <p className="font-body-md text-on-surface-variant max-w-sm">
                    Thank you, <strong>{formData.name}</strong>. Your talent profile has been securely received by our recruitment systems group.
                  </p>
                  <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mt-xs">Talent Ops Ref: #{refId}</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-md bg-transparent text-primary hover:bg-neutral-50 px-md py-2 border border-neutral-200 rounded-full font-sans text-xs uppercase tracking-widest cursor-pointer"
                  >
                    Reset Form
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
