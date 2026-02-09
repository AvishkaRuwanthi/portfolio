import React from 'react';
import { Mail, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative scroll-mt-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-black uppercase tracking-widest">
            Get In Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Let's work together on your <span className="text-blue-500 italic">next project</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            I'm open to freelance opportunities, collaborations, and full-time positions. Let's discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-white text-xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-blue-500"></span>
              Connect With Me
            </h3>
            
            <a href="mailto:avishkark999@gmail.com" className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center gap-6 group hover:border-blue-500/50 transition-all">
              <div className="bg-blue-600/10 p-4 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div className="grow">
                <p className="text-xs text-gray-500 font-black uppercase tracking-widest mb-1">Email Me</p>
                <p className="text-white font-bold text-sm break-all">avishkark999@gmail.com</p>
              </div>
              <ArrowUpRight size={20} className="text-gray-600 group-hover:text-blue-500 transition-all" />
            </a>

            <a href="http://www.linkedin.com/in/avishkark" target="_blank" rel="noopener noreferrer" className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center gap-6 group hover:border-blue-500/50 transition-all cursor-pointer">
              <div className="bg-blue-600/10 p-4 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Linkedin size={24} />
              </div>
              <div className="grow">
                <p className="text-xs text-gray-500 font-black uppercase tracking-widest mb-1">LinkedIn</p>
                <p className="text-white font-bold text-sm">Connect with me</p>
              </div>
              <ArrowUpRight size={20} className="text-gray-600 group-hover:text-blue-500 transition-all" />
            </a>

            <a href="https://github.com/AvishkaRuwanthi" target="_blank" rel="noopener noreferrer" className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center gap-6 group hover:border-blue-500/50 transition-all cursor-pointer">
              <div className="bg-blue-600/10 p-4 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Github size={24} />
              </div>
              <div className="grow">
                <p className="text-xs text-gray-500 font-black uppercase tracking-widest mb-1">GitHub</p>
                <p className="text-white font-bold text-sm">View my code</p>
              </div>
              <ArrowUpRight size={20} className="text-gray-600 group-hover:text-blue-500 transition-all" />
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <form 
              action="https://formsubmit.co/b8fe283320125717cacdf270c28f47bf" 
              method="POST"
              className="backdrop-blur-md bg-white/5 border border-white/10 p-12 rounded-3xl space-y-8 shadow-2xl"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New message from Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-white/50 uppercase tracking-widest ml-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="John Doe" 
                    required
                    className="w-full bg-white/3 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-white/50 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="john@example.com" 
                    required
                    className="w-full bg-white/3 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-white/50 uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  rows={5} 
                  name="message"
                  placeholder="Tell me about your project or opportunity..." 
                  required
                  className="w-full bg-white/3 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all resize-none"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-3xl font-bold text-lg flex items-center justify-center gap-4 transition-all shadow-lg shadow-blue-500/50 group">
                Send Message
                <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;