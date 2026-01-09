
import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    service: 'Tax Services',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide some details about your requirements';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);

    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        service: 'Tax Services',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#001242] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-[#8a7eb5]/10 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 reveal-left">
              <span className="text-[#8a7eb5] font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block">Connect With Us</span>
              <h2 className="text-5xl font-serif font-bold text-white mb-8 leading-tight">Let's Discuss <br />Your Strategy.</h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                Experience the difference of a professional consulting partnership. Reach out for a confidential initial conversation.
              </p>

              <div className="space-y-10">
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#8a7eb5] transition-all group-hover:bg-[#8a7eb5] group-hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Direct Line</p>
                    <p className="text-xl font-bold text-white">+1-443.974.8346</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#8a7eb5] transition-all group-hover:bg-[#8a7eb5] group-hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 012-2V7a2 2 0 01-2-2H5a2 2 0 01-2 2v10a2 2 0 012 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Electronic Mail</p>
                    <p className="text-xl font-bold text-white">ordiafinance@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#8a7eb5] transition-all group-hover:bg-[#8a7eb5] group-hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Location</p>
                    <p className="text-xl font-bold text-white">Overton Avenue, Baltimore MD 21236</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 reveal-right">
              <div className="dark-glass p-10 lg:p-16 rounded-[3rem] shadow-2xl relative">
                {submitted && (
                  <div className="mb-8 p-6 bg-green-500/10 border border-green-500/20 rounded-2xl animate-fade-in">
                    <div className="flex items-center space-x-3 text-green-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <p className="font-bold">Thank you! Your inquiry has been sent successfully.</p>
                    </div>
                  </div>
                )}

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Legal Name</label>
                      <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:bg-white/10 focus:border-[#8a7eb5] outline-none transition-all`}
                        placeholder="e.g. Jane Doe"
                      />
                      {errors.name && <p className="text-red-400 text-[10px] font-bold ml-1 mt-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:bg-white/10 focus:border-[#8a7eb5] outline-none transition-all`}
                        placeholder="jane@example.com"
                      />
                      {errors.email && <p className="text-red-400 text-[10px] font-bold ml-1 mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Service Interest</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-[#8a7eb5] outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option className="bg-[#001242]">Tax Services</option>
                      <option className="bg-[#001242]">Accounting & Bookkeeping</option>
                      <option className="bg-[#001242]">Business Consulting</option>
                      <option className="bg-[#001242]">Advisory Services</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Consultation Details</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:bg-white/10 focus:border-[#8a7eb5] outline-none transition-all resize-none`}
                      placeholder="Briefly describe your requirements..."
                    ></textarea>
                    {errors.message && <p className="text-red-400 text-[10px] font-bold ml-1 mt-1">{errors.message}</p>}
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-white text-[#001242] hover:bg-[#8a7eb5] hover:text-white font-bold py-5 rounded-full shadow-2xl transition-all duration-300 transform active:scale-95 uppercase tracking-widest text-xs flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <span>Send Inquiry</span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
