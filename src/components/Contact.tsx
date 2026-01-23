import React from 'react';
import { Mail, MessageSquare, Phone, Send, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative scroll-mt-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-black uppercase tracking-widest">
            Let's Collaborate
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to bring your <span className="text-blue-500 italic">vision</span> to life?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            I'm currently accepting new projects for Q3 & Q4 2024. Reach out for a free consultation about your technical needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-white text-xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-blue-500"></span>
              Contact Information
            </h3>
            
            <a href="mailto:hello@avishka.dev" className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center gap-6 group hover:border-blue-500/50 transition-all">
              <div className="bg-blue-600/10 p-4 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div className="grow">
                <p className="text-xs text-gray-500 font-black uppercase tracking-widest mb-1">Email Me</p>
                <p className="text-white font-bold text-lg">hello@avishka.dev</p>
              </div>
              <ArrowUpRight size={20} className="text-gray-600 group-hover:text-blue-500 transition-all" />
            </a>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center gap-6 group hover:border-blue-500/50 transition-all cursor-pointer">
              <div className="bg-blue-600/10 p-4 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <MessageSquare size={24} />
              </div>
              <div className="grow">
                <p className="text-xs text-gray-500 font-black uppercase tracking-widest mb-1">Discord</p>
                <p className="text-white font-bold text-lg">avishka_codes</p>
              </div>
              <ArrowUpRight size={20} className="text-gray-600 group-hover:text-blue-500 transition-all" />
            </div>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center gap-6 group hover:border-blue-500/50 transition-all cursor-pointer">
              <div className="bg-blue-600/10 p-4 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div className="grow">
                <p className="text-xs text-gray-500 font-black uppercase tracking-widest mb-1">Location</p>
                <p className="text-white font-bold text-lg">San Francisco, CA</p>
              </div>
              <ArrowUpRight size={20} className="text-gray-600 group-hover:text-blue-500 transition-all" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 p-12 rounded-3xl space-y-8 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-white/50 uppercase tracking-widest ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. Elon Musk" 
                    className="w-full bg-white/3 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-white/50 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="elon@mars.com" 
                    className="w-full bg-white/3 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-xs font-black text-white/50 uppercase tracking-widest ml-1">Service Required</label>
                <select 
                className="w-full bg-white/3 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all appearance-none cursor-pointer"
                aria-label="Service Required"
                title="Select the service you need"
                >
                <option value="web" className="bg-gray-950">Full-Stack Web App</option>
                <option value="mobile" className="bg-gray-950">Mobile Development</option>
                <option value="consulting" className="bg-gray-950">Technical Consulting</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-white/50 uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Describe your project goals and timeline..." 
                  className="w-full bg-white/3 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all resize-none"
                ></textarea>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-3xl font-bold text-lg flex items-center justify-center gap-4 transition-all shadow-lg shadow-blue-500/50 group">
                Initiate Project
                <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;