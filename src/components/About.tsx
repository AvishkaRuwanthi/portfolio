import React from 'react';
import { Quote, Code2, Rocket, Heart } from 'lucide-react';

const About: React.FC = () => {
  const recommendations = [
    {
      name: "Malith Gamage",
      role: "Co-Founder/Dev - ZapDigits",
      text: "I’m delighted to recommend Avishka, who worked with me as a full-stack developer intern at ZapDigits. She consistently demonstrated strong technical skills, a positive attitude, and a willingness to take on new challenges. Avishka contributed across both frontend and backend, writing clean, maintainable code and quickly adapting to new tools and tasks. She communicated effectively, handled feedback well, and showed clear improvement throughout the internship. I’m confident she has a bright future as a full-stack developer and would be a valuable addition to any engineering team.",
      avatar: "assets/Malith Gamage.png"
    },
    {
      name: "Mandy Matthies",
      role: "Co-Founder/UX - ZapDigits",
      text: "I had a very positive experience working with Avishka. She demonstrated strong technical skills, clear communication, and reliability throughout our collaboration. As a designer, smooth handovers were important, and Avishka handled them effectively. She was also comfortable working with Figma, which made the process even easier. I would gladly recommend collaborating with her and would be happy to work together again in the future.",
      avatar: "assets/Mandy Matthies.png"
    }
  ];

  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl -z-10"></div>
      
      <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            My Journey
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Building <span className="text-blue-500">production-ready solutions</span> from day one.
          </h2>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-2xl">
            <p>
              I'm a recent Management and IT graduate with hands-on experience building real-world features for SaaS platforms and enterprise systems. Through internships at ZapDigits and SLTMobitel, I've contributed to production codebases that serve hundreds of users.
            </p>
            <p>
              My approach is practical: <span className="text-white font-medium">write clean code, solve real problems, and keep learning</span>. I specialize in full-stack development with React, Next.js, TypeScript, and PHP, focusing on building features that make a tangible impact on user experience and business operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-6">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl border-l-4 border-l-blue-500">
              <Code2 className="text-blue-500 mb-3" size={24} />
              <h4 className="text-white font-bold mb-1">Clean Code</h4>
              <p className="text-xs text-gray-500">Maintainable, well-structured solutions.</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl border-l-4 border-l-purple-500">
              <Rocket className="text-purple-500 mb-3" size={24} />
              <h4 className="text-white font-bold mb-1">Fast Learner</h4>
              <p className="text-xs text-gray-500">Quick to adapt to new tech stacks.</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl border-l-4 border-l-pink-500">
              <Heart className="text-pink-500 mb-3" size={24} />
              <h4 className="text-white font-bold mb-1">User Impact</h4>
              <p className="text-xs text-gray-500">Features that solve real problems.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative z-10 aspect-4/5 rounded-3xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 p-4 transform rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
              alt="Workspace" 
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          {/* Decorative floating elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl animate-[bounce-slow_3s_infinite]"></div>
          <div className="absolute -bottom-6 -left-6 backdrop-blur-md bg-white/5 border border-white/10 px-8 py-5 rounded-3xl shadow-2xl z-20 animate-bounce-slow">
            <p className="text-blue-500 font-bold text-4xl mb-1">100+</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Users Impacted</p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="pt-24 border-t border-white/5">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Testimonials</p>
          <h3 className="text-3xl font-bold">What My Mentors Say</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {recommendations.map((rec, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/5 border border-white/10 p-10 rounded-3xl relative group hover:-translate-y-2 transition-all">
              <Quote className="absolute top-8 right-10 text-blue-500/10 group-hover:text-blue-500/30 transition-all transform group-hover:scale-110" size={60} />
              <p className="text-gray-300 text-lg italic mb-10 leading-relaxed relative z-10">"{rec.text}"</p>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <img src={rec.avatar} alt={rec.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-500/20" />
                  <div className="absolute -bottom-1 -right-1 bg-blue-500 w-4 h-4 rounded-full border-2 border-gray-950 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{rec.name}</h4>
                  <p className="text-xs text-blue-400 font-semibold uppercase tracking-widest">{rec.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
