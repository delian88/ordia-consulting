
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

interface ContactProps {
  isStandalone?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isStandalone = true }) => {
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
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'Email required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Details required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', service: 'Tax Services', message: '' });
      setTimeout(() => setSubmitted(false), 8000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className={`py-20 md:py-32 ${isStandalone ? 'lg:pt-48 min-h-screen' : ''} bg-[#001a33] relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 reveal-left">
              <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block">Direct Engagement</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">Elevate Your <br />Financial Strategy.</h2>
              <p className="text-slate-400 text-base md:text-lg mb-10 md:12 leading-relaxed">
                Connect with our advisory team to discover how a 360-degree approach to accounting and tax can transform your business trajectory.
              </p>

              <div className="space-y-8 md:space-y-10">
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white border border-white/10 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Direct Line</p>
                    <p className="text-lg md:text-xl font-bold text-white">+1-443.974.8346</p>
                  </div>
                </div>
                {/* ... other contact info similarly updated ... */}
              </div>
            </div>

            <div className="lg:col-span-7 reveal-right">
              <div className="bg-white/5 backdrop-blur-md p-6 md:p-10 lg:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative border border-white/10">
                {submitted && (
                  <div className="mb-8 p-6 bg-green-500/10 border border-green-500/20 rounded-2xl animate-fade-in text-green-400">
                    <p className="font-bold">Transmission Successful</p>
                    <p className="text-sm opacity-80">Expect a response within 24 business hours.</p>
                  </div>
                )}
                <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Full Name</label>
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-blue-500 outline-none transition-all"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Work Email</label>
                      <input 
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-blue-500 outline-none transition-all"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Project Details</label>
                    <textarea 
                      rows={4} name="message" value={formData.message} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-blue-500 outline-none transition-all resize-none"
                      placeholder="Tell us about your financial challenges..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-blue-600 text-white hover:bg-white hover:text-blue-900 font-bold py-5 rounded-full shadow-2xl transition-all duration-300 uppercase tracking-widest text-xs">
                    {isSubmitting ? 'Transmitting...' : 'Schedule Free Consultation'}
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
