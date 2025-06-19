
import { Code, Database, Globe, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'C++ Development',
      description: '2+ years experience in retail solutions and low-latency APIs'
    },
    {
      icon: <Database size={32} />,
      title: 'Machine Learning',
      description: 'Experience integrating ML models with Android and computer vision'
    },
    {
      icon: <Globe size={32} />,
      title: 'Full-Stack Development',
      description: 'MERN stack, Django, Next.js, and cross-platform mobile apps'
    },
    {
      icon: <Shield size={32} />,
      title: 'Cybersecurity & AI',
      description: 'Enthusiast in AI, MLOps, LLMOps, and Cyber Security'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Software engineer with 2+ years of experience in C++ development for retail solutions, 
              advanced algorithms, and low-latency APIs. Currently working at Fiftytwo A/S, 
              maintaining APIs handling 3 million transactions daily.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Proficient in payment device integration, TDD, and API scripting with JavaScript and Python. 
              Experienced in integrating Machine Learning models with Android and developing cross-platform 
              apps with Flutter. Passionate about AI, MLOps, LLMOps, Cyber Security, Computer Vision and Blockchain.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm">
                C++ Developer
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm">
                AI Enthusiast
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm">
                Problem Solver
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10"
              >
                <div className="text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
