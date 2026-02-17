
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero */}
      <section className="relative py-24 bg-black overflow-hidden border-b border-accent-gold/10">
        <div className="absolute inset-0 opacity-20 pointer-events-none grayscale">
          <img 
            alt="Legal Background" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi6B4OarqlSjDfdNwcGUGG2twihUBwmXCkKUbdCx6fv3Ypk1-ThdeP1zfQ5ybmmdm5WB2rx8bHV3W40dA5VzEVk7hhWfDa7oakYb9z8SaNPpLr5QCJn64GnYcoCX9SQR19IrOtP8y0Ju8EwL6bsQ7MQRh6uRL9WEt3hMNB0FRFrKvldh44HRGnFbpn6qFDegs9Ap5FXfeBqOey0dz5u6ufnsi-5GqOuLfMDWxwSZpEtHf_YVXGsUG-JslaPwx8wZIF9A5jQDSHT7c" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">Let's Discuss <br/><span className="text-accent-gold">Your Case</span></h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              We are ready to provide you with expert legal guidance. Excellence, precision, and confidentiality are our cornerstones.
            </p>
            <div className="flex flex-wrap gap-10">
              <div className="flex items-center text-accent-gold">
                <span className="material-icons mr-3">verified</span>
                <span className="font-black uppercase tracking-widest text-xs">Premier Tier Firm</span>
              </div>
              <div className="flex items-center text-accent-gold">
                <span className="material-icons mr-3">security</span>
                <span className="font-black uppercase tracking-widest text-xs">Airtight Confidentiality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Form */}
          <div id="direct-inquiry" className="bg-white dark:bg-secondary-grey/5 rounded-3xl p-10 lg:p-14 shadow-2xl border border-slate-100 dark:border-accent-gold/10 scroll-mt-32">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Submit Inquiry</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-12">Expect a response from our senior associate within one business day.</p>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-black dark:text-accent-gold uppercase tracking-widest">Full Name</label>
                  <input className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-accent-gold/20 bg-slate-50 dark:bg-black text-white focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-black dark:text-accent-gold uppercase tracking-widest">Email Address</label>
                  <input className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-accent-gold/20 bg-slate-50 dark:bg-black text-white focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-black dark:text-accent-gold uppercase tracking-widest">Legal Service</label>
                <select className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-accent-gold/20 bg-slate-50 dark:bg-black text-white focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all appearance-none">
                  <option>Corporate Advisory</option>
                  <option>Sports</option>
                  <option>Intellectual Property</option>
                  <option>Dispute Resolution</option>
                  <option>CAC Issues</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-black dark:text-accent-gold uppercase tracking-widest">Case Description</label>
                <textarea className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-accent-gold/20 bg-slate-50 dark:bg-black text-white focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all resize-none min-h-[180px]" placeholder="Briefly summarize your requirements..."></textarea>
              </div>
              <button className="w-full bg-accent-gold text-black py-5 rounded-xl font-black text-lg hover:bg-yellow-600 transition-all shadow-xl shadow-accent-gold/20 flex items-center justify-center gap-3 group">
                Submit Inquiry <span className="material-icons group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-6">Connect With Us</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                Apex Advocates & Solicitors is located in Lagos, Nigeria providing easy access to corporate clients and individuals across Nigeria.
              </p>
              <div className="space-y-10">
                {[
                  { icon: 'email', title: 'Email Us', detail: 'apexadvocatesandsolicitors@gmail.com' },
                  { icon: 'phone', title: 'Call Our Office', detail: '+234 8163216169' },
                  { icon: 'location_on', title: 'Visit Us', detail: 'Lagos, Nigeria' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-accent-gold/10 flex items-center justify-center flex-shrink-0 border border-accent-gold/10 group-hover:bg-accent-gold transition-all group-hover:scale-110">
                      <span className="material-icons text-accent-gold text-3xl group-hover:text-black">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-2xl font-bold text-black dark:text-white">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/5 dark:bg-secondary-grey/20 rounded-3xl p-10 border border-accent-gold/10 relative overflow-hidden">
              <h3 className="text-xl font-bold text-black dark:text-white mb-8 border-l-4 border-accent-gold pl-4 uppercase tracking-widest text-xs">Office Hours</h3>
              <div className="space-y-5 relative z-10">
                <div className="flex justify-between items-center pb-5 border-b border-accent-gold/5">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">Monday - Friday</span>
                  <span className="font-bold text-black dark:text-white">08:00 AM - 05:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-5 border-b border-accent-gold/5">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">Saturday</span>
                  <span className="font-bold text-black dark:text-white">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">Sunday</span>
                  <span className="font-bold text-accent-gold italic">By Appointment Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[550px] relative group border-8 border-white dark:border-accent-gold/10">
           <img 
            alt="Lagos Office Map" 
            className="w-full h-full object-cover grayscale opacity-60 transition-transform duration-1000 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7RbIvs-VjDvluQIDkAhTwL3gU3bsj5MBbvBFlBub-T1dwj47NoD8yyzHcrsXuehcgzHlSVm6bgEdBJ2HLXXPiMxkLwR7XuXnkmUAzyZqzBzzqwU4CrOELJfNQCuPwm46qKqNCn-uFjE3WzY0LT4CgGNMmdanSTqOe5pM2xcqCc1vQKdJ3jHbIcR_w7uiO7TXFIdTrtcFhbFtVTl51uJ7oF3ec_uwsrkN3gwX9RCr3KhyMG9vckqFQn-ZC1uYQUpk23CeVwTEjUMA" 
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          <div className="absolute top-10 left-10 bg-black dark:bg-black p-10 rounded-3xl shadow-2xl border border-accent-gold/30 max-w-sm backdrop-blur-xl bg-opacity-90">
            <h4 className="text-2xl font-bold text-white mb-3">Lagos Office</h4>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">Centrally located in the business hub of Lagos for our corporate partners.</p>
            <a href="https://maps.google.com" target="_blank" className="bg-accent-gold text-black px-8 py-4 rounded-xl font-bold text-sm inline-flex items-center gap-3 hover:bg-yellow-600 transition-all">
              Navigate <span className="material-icons text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
