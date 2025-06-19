
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Moinuddin Shovan
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Software Engineer specializing in full-stack development with expertise in 
            React, Node.js, and modern web technologies
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://linkedin.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
