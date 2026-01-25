
import React, { useState } from 'react';

const consultationServices = [
  "Outsourced CPA Strategy",
  "Tax Planning & Minimization",
  "Construction WIP & Accounting",
  "Non-Profit Financial Oversight",
  "Healthcare Practice Optimization",
  "Fractional CFO Leadership",
  "QuickBooks Professional Setup",
  "M&A / Business Valuation"
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", 
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

export const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white pt-48 pb-20 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full bg-slate-50 p-12 rounded-[3rem] border border-slate-100 text-center animate-fade-in shadow-2xl">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-8 animate-bounce">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-4">Consultation Confirmed</h2>
          <p className="text-slate-500 mb-10 leading-relaxed">
            Thank you, {formData.name}. Our executive advisory team has received your request for {formData.date} at {formData.time}. A calendar invitation and preliminary brief have been sent to {formData.email}.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-blue-900 transition-all shadow-xl"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 md:pt-48 pb-20 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] rounded-full -mr-32 -mt-32"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 reveal-left">
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block border-l-2 border-blue-500 pl-4">Schedule Advisory</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">
                Reserved <br />
                <span className="italic font-normal text-blue-500">Expertise.</span>
              </h1>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-10">
                Secure a focused session with our specialized Outsourced CPAs. We dedicate this time to understanding your specific fiscal architecture and providing actionable technical guidance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">01</div>
                  <p className="text-sm font-bold text-blue-900">Select your industry specialty</p>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">02</div>
                  <p className="text-sm font-bold text-blue-900">Pick a dedicated time slot</p>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">03</div>
                  <p className="text-sm font-bold text-blue-900">Recieve a strategy brief</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 reveal-right">
              <div className="bg-[#001a33] p-8 md:p-12 rounded-[3rem] shadow-2xl relative border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-blue-400 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-blue-500 outline-none transition-all"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-blue-400 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-blue-500 outline-none transition-all"
                        placeholder="jane@corporate.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-blue-400 ml-1">Consultation Category</label>
                    <select 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white appearance-none focus:border-blue-500 outline-none transition-all cursor-pointer"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="" className="bg-[#001a33]">Select a core specialty...</option>
                      {consultationServices.map((service) => (
                        <option key={service} value={service} className="bg-[#001a33]">{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-blue-400 ml-1">Preferred Date</label>
                      <input 
                        required
                        type="date" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-blue-500 outline-none transition-all [color-scheme:dark]"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-blue-400 ml-1">Time Window</label>
                      <select 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white appearance-none focus:border-blue-500 outline-none transition-all cursor-pointer"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                      >
                        <option value="" className="bg-[#001a33]">Select time...</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot} className="bg-[#001a33]">{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-white hover:text-blue-900 transition-all uppercase tracking-[0.2em] text-xs disabled:opacity-50 flex items-center justify-center space-x-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
                          <span>Verifying Schedule...</span>
                        </>
                      ) : (
                        <span>Confirm Appointment Request</span>
                      )}
                    </button>
                    <p className="text-white/20 text-[10px] text-center mt-6 uppercase tracking-widest">
                      Your technical strategy session is free of charge.
                    </p>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
