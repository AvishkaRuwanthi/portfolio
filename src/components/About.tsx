import React from 'react';
import { Quote, Code2, Rocket, Heart } from 'lucide-react';

const About: React.FC = () => {
  const recommendations = [
    {
      name: "Sarah Jenkins",
      role: "Product Manager at TechFlow",
      text: "Avishka is a rare talent who combines technical depth with a keen eye for user experience. She delivered our core platform ahead of schedule with zero major bugs.",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "Marcus Thorne",
      role: "CTO at Nexus Solutions",
      text: "Having worked with dozens of full-stack engineers, Avishka stands out for her ability to architect scalable systems. Her Node.js expertise saved us months of rework.",
      avatar: "https://picsum.photos/seed/marcus/100/100"
    }
  ];

  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl -z-10"></div>
      
      <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Our Story
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Crafting the future of <span className="text-blue-500">digital experiences</span> with precision.
          </h2>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-2xl">
            <p>
              I am a passionate Full-Stack Developer with over 5 years of experience in crafting digital experiences that live at the intersection of design and technology.
            </p>
            <p>
              My philosophy is simple: <span className="text-white font-medium">build for the user, engineer for the scale</span>. I specialize in modern JavaScript frameworks while maintaining a strong foundation in backend architecture and database optimization.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-6">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl border-l-4 border-l-blue-500">
              <Code2 className="text-blue-500 mb-3" size={24} />
              <h4 className="text-white font-bold mb-1">Architecture</h4>
              <p className="text-xs text-gray-500">Clean, scalable systems built to last.</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl border-l-4 border-l-purple-500">
              <Rocket className="text-purple-500 mb-3" size={24} />
              <h4 className="text-white font-bold mb-1">Performance</h4>
              <p className="text-xs text-gray-500">Optimized for speed and SEO.</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl border-l-4 border-l-pink-500">
              <Heart className="text-pink-500 mb-3" size={24} />
              <h4 className="text-white font-bold mb-1">User First</h4>
              <p className="text-xs text-gray-500">Designs that users actually love.</p>
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
            <p className="text-blue-500 font-bold text-4xl mb-1">5+</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Years Experience</p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="pt-24 border-t border-white/5">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Testimonials</p>
          <h3 className="text-3xl font-bold">What Industry Leaders Say</h3>
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