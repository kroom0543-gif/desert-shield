import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "motion/react";
import { Shield, ChevronRight, ChevronLeft, Check, Send, Phone, Mail, Building, Users, MapPin, Calculator } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

const quoteSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactPerson: z.string().min(2, "Contact person is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Valid phone number is required"),
  location: z.string().min(2, "City/Location is required"),
  serviceType: z.string().min(1, "Please select a service"),
  numberOfGuards: z.string().optional(),
  budgetRange: z.string().optional(),
  message: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const steps = [
  { id: 1, title: "Organization", icon: <Building className="w-5 h-5" /> },
  { id: 2, title: "Requirement", icon: <Shield className="w-5 h-5" /> },
  { id: 3, title: "Contact Info", icon: <Phone className="w-5 h-5" /> },
];

export function Quote() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof QuoteFormValues)[] = [];
    if (currentStep === 1) fieldsToValidate = ["companyName", "location"];
    if (currentStep === 2) fieldsToValidate = ["serviceType"];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, status: "pending", createdAt: new Date().toISOString() }),
      });
      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-brand-gray-light p-12 text-center shadow-premium rounded-sm border border-white/5"
        >
          <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-gold">
            <Check className="w-10 h-10 text-brand-black" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter italic">Request Received</h2>
          <p className="text-white/50 mb-8 font-medium">
            Thank you for reaching out to Desert Shield. A security expert will analyze your requirements and contact you within 24 hours.
          </p>
          <button
            onClick={() => window.location.href = "/"}
            className="w-full bg-brand-gold text-brand-black py-4 font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-gold"
          >
            Return Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tighter italic">Request Security Quote</h1>
          <p className="text-white/40 font-medium">Secure your assets with military precision and elite protection.</p>
        </div>

        {/* Progress Tracker */}
        <div className="flex justify-between items-center mb-16 relative max-w-2xl mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
          <div
            className="absolute top-1/2 left-0 h-px bg-brand-gold -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />

          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center">
              <div
                className={cn(
                  "w-12 h-12 rounded-sm flex items-center justify-center transition-all duration-300 border rotate-45",
                  currentStep >= step.id
                    ? "bg-brand-gold border-brand-gold text-brand-black shadow-gold"
                    : "bg-brand-black border-white/10 text-white/20"
                )}
              >
                <div className="-rotate-45">
                  {currentStep > step.id ? <Check className="w-5 h-5 font-black" /> : step.icon}
                </div>
              </div>
              <span className={cn(
                "mt-6 text-[10px] font-bold uppercase tracking-widest transition-all duration-300",
                currentStep >= step.id ? "text-brand-gold" : "text-white/20"
              )}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-brand-gray-light p-8 md:p-16 shadow-premium rounded-sm border border-white/5">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Company Name</label>
                    <div className="relative group">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-brand-gold transition-colors" />
                      <input
                        {...register("companyName")}
                        className="w-full bg-brand-black/40 border border-white/5 p-4 pl-12 focus:border-brand-gold/50 focus:ring-0 transition-all text-white placeholder:text-white/10"
                        placeholder="Organization Name"
                      />
                    </div>
                    {errors.companyName && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest">{errors.companyName.message}</p>}
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">City / Location</label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-brand-gold transition-colors" />
                      <input
                        {...register("location")}
                        className="w-full bg-brand-black/40 border border-white/5 p-4 pl-12 focus:border-brand-gold/50 focus:ring-0 transition-all text-white placeholder:text-white/10"
                        placeholder="Riyadh, Saudi Arabia"
                      />
                    </div>
                    {errors.location && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest">{errors.location.message}</p>}
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-8"
              >
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Security Service Requirement</label>
                  <select
                    {...register("serviceType")}
                    className="w-full bg-brand-black/40 border border-white/5 p-4 focus:border-brand-gold/50 focus:ring-0 transition-all appearance-none text-white"
                  >
                    <option value="" className="bg-brand-black text-white">Select a service...</option>
                    <option value="corporate" className="bg-brand-black text-white">Corporate Guarding</option>
                    <option value="event" className="bg-brand-black text-white">Event Security</option>
                    <option value="vip" className="bg-brand-black text-white">VIP Protection</option>
                    <option value="monitoring" className="bg-brand-black text-white">CCTV & Monitoring</option>
                    <option value="industrial" className="bg-brand-black text-white">Industrial/Construction</option>
                    <option value="other" className="bg-brand-black text-white">Other specialized requirements</option>
                  </select>
                  {errors.serviceType && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest">{errors.serviceType.message}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Guards Needed (Approx)</label>
                    <input
                      {...register("numberOfGuards")}
                      className="w-full bg-brand-black/40 border border-white/5 p-4 focus:border-brand-gold/50 focus:ring-0 transition-all text-white placeholder:text-white/10"
                      placeholder="e.g. 5-10"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Annual Budget Range</label>
                    <select
                      {...register("budgetRange")}
                      className="w-full bg-brand-black/40 border border-white/5 p-4 focus:border-brand-gold/50 focus:ring-0 transition-all text-white"
                    >
                      <option value="under-100k" className="bg-brand-black">Under 100k SAR</option>
                      <option value="100k-500k" className="bg-brand-black">100k - 500k SAR</option>
                      <option value="500k-1m" className="bg-brand-black">500k - 1M SAR</option>
                      <option value="over-1m" className="bg-brand-black">Over 1M SAR</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Contact Person Name</label>
                    <input
                      {...register("contactPerson")}
                      className="w-full bg-brand-black/40 border border-white/5 p-4 focus:border-brand-gold/50 focus:ring-0 transition-all text-white placeholder:text-white/10"
                      placeholder="Full Name"
                    />
                    {errors.contactPerson && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest">{errors.contactPerson.message}</p>}
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Phone Number</label>
                    <input
                      {...register("phone")}
                      className="w-full bg-brand-black/40 border border-white/5 p-4 focus:border-brand-gold/50 focus:ring-0 transition-all text-white placeholder:text-white/10"
                      placeholder="+966"
                    />
                    {errors.phone && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest">{errors.phone.message}</p>}
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Corporate Email Address</label>
                  <input
                    {...register("email")}
                    className="w-full bg-brand-black/40 border border-white/5 p-4 focus:border-brand-gold/50 focus:ring-0 transition-all text-white placeholder:text-white/10"
                    placeholder="corporate@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest">{errors.email.message}</p>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-12 flex justify-between gap-6">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/30 hover:text-brand-gold transition-colors"
              >
                <ChevronLeft className="w-5 h-5" /> Back
              </button>
            )}
            <div className="flex-grow" />
            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-white/5 border border-white/10 text-white px-12 py-5 flex items-center gap-3 font-bold uppercase tracking-widest hover:bg-white/10 transition-all rounded-sm"
              >
                Continue <ChevronRight className="w-5 h-5 text-brand-gold" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-gold text-brand-black px-12 py-5 flex items-center gap-3 font-bold uppercase tracking-widest hover:brightness-110 transition-all rounded-sm shadow-gold disabled:opacity-50"
              >
                {isSubmitting ? "Deploying..." : "Submit Quote Request"} <Send className="w-4 h-4 ml-2" />
              </button>
            )}
          </div>
        </form>

        <div className="mt-12 flex items-center justify-center gap-12 text-white/20">
           <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]">
              <Shield className="w-4 h-4 text-brand-gold" /> Licensed Entity
           </div>
           <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]">
              <Check className="w-4 h-4 text-brand-gold" /> Encrypted Submission
           </div>
        </div>
      </div>
    </div>
  );
}
