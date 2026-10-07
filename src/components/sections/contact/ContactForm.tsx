"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    service: "",
    description: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name || formData.name.length < 2)
      newErrors.name = "Name must be at least 2 characters";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.description || formData.description.length < 10)
      newErrors.description = "Please provide more details (at least 10 characters)";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage(data.message);
        setFormData({ name: "", email: "", whatsapp: "", company: "", service: "", description: "" });
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  const inputClass =
    "w-full bg-black/50 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors rounded-sm";

  if (status === "success") {
    return (
      <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm text-center py-20">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-bold text-white mb-4">Request Received!</h3>
        <p className="text-white/60 max-w-sm mx-auto">{message}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 px-6 py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-colors rounded-sm text-sm"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Email Address *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">WhatsApp Number</label>
            <input
              type="text"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className={inputClass}
              placeholder="+1 234 567 8900"
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Company</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className={inputClass}
              placeholder="Your Company Ltd"
            />
          </div>

          {/* Service */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Service</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className={inputClass + " appearance-none"}
            >
              <option value="" className="bg-black">Select service</option>
              <option value="Web Development" className="bg-black">Web Development</option>
              <option value="E-commerce" className="bg-black">E-commerce</option>
              <option value="SaaS Platform" className="bg-black">SaaS Platform</option>
              <option value="Website Redesign" className="bg-black">Website Redesign</option>
              <option value="Other" className="bg-black">Other</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Project Details *</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className={inputClass + " resize-none"}
            placeholder="Tell us about your project goals, requirements, and reference websites..."
          />
          {errors.description && <p className="text-red-400 text-xs">{errors.description}</p>}
        </div>

        {/* Server error */}
        {status === "error" && (
          <p className="text-red-400 text-sm bg-red-400/10 p-3 rounded-sm border border-red-400/20">
            {message}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex-[2] bg-white text-black font-medium py-4 rounded-sm hover:bg-white/90 transition-colors flex justify-center items-center gap-2 disabled:opacity-70"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending Inquiry...
              </>
            ) : (
              "Submit Inquiry"
            )}
          </button>
          
          <a
            href="https://wa.me/923107146019" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-transparent border border-white/20 text-white font-medium py-4 rounded-sm hover:bg-white/5 hover:border-white/40 transition-colors flex justify-center items-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
}
