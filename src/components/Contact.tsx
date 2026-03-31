"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // TODO: Send form data to backend
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error for this field when user starts typing
    if (errors[id as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-[120px] md:py-[180px]" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="mb-6 text-[40px] md:text-[64px] font-semibold tracking-[-0.01em]">
          Let&apos;s Create Together
        </h2>
        <p className="mb-[80px] max-w-[500px] text-[#A1A1A1]">
          Available for international commissions, editorial features, and luxury brand campaigns.
        </p>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-8 rounded-lg bg-[#ea5d4c]/10 border border-[#ea5d4c]/20 px-6 py-4 text-center text-[#A1A1A1]"
          >
            <p>Thank you for your inquiry. We&apos;ll be in touch soon.</p>
          </motion.div>
        )}

        <form 
          className="flex w-full max-w-[600px] flex-col gap-8 text-left"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form"
        >
          <div className="flex flex-col gap-2">
            <label 
              htmlFor="name" 
              className="text-[12px] uppercase tracking-widest text-[#A1A1A1]"
            >
              Name <span aria-label="required" className="text-[#ea5d4c]">*</span>
            </label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              className={`border-b bg-transparent py-3 text-white focus:outline-none transition-colors ${
                errors.name ? "border-[#ea5d4c]" : "border-[var(--color-border)] focus:border-white"
              }`}
              placeholder="J. Doe"
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span id="name-error" className="text-[12px] text-[#ea5d4c]">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label 
              htmlFor="email" 
              className="text-[12px] uppercase tracking-widest text-[#A1A1A1]"
            >
              Email <span aria-label="required" className="text-[#ea5d4c]">*</span>
            </label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              className={`border-b bg-transparent py-3 text-white focus:outline-none transition-colors ${
                errors.email ? "border-[#ea5d4c]" : "border-[var(--color-border)] focus:border-white"
              }`}
              placeholder="hello@example.com"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" className="text-[12px] text-[#ea5d4c]">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label 
              htmlFor="message" 
              className="text-[12px] uppercase tracking-widest text-[#A1A1A1]"
            >
              Message <span aria-label="required" className="text-[#ea5d4c]">*</span>
            </label>
            <textarea 
              id="message" 
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`resize-none border-b bg-transparent py-3 text-white focus:outline-none transition-colors ${
                errors.message ? "border-[#ea5d4c]" : "border-[var(--color-border)] focus:border-white"
              }`}
              placeholder="Tell me about your project..."
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <span id="message-error" className="text-[12px] text-[#ea5d4c]">{errors.message}</span>
            )}
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button 
              type="submit" 
              className="px-12 py-4"
              aria-label="Submit contact form"
            >
              Send Inquiry
            </Button>
          </div>
        </form>

        <div className="mt-[120px] flex gap-8 text-[#A1A1A1]">
          <a 
            href="https://instagram.com/vinay.filmlab" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
            aria-label="Visit Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a 
            href="mailto:vinayfilmlab@gmail.com"
            className="hover:text-white transition-colors duration-300"
            aria-label="Send email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
