
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Full-Stack Development',
      description: 'Experienced in both frontend and backend technologies'
    },
    {
      icon: <Database size={32} />,
      title: 'Database Design',
      description: 'Proficient in SQL and NoSQL database management'
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Technologies',
      description: 'Modern frameworks and responsive design principles'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile app development experience'
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
              I'm a passionate software engineer with over 3 years of experience in developing 
              robust, scalable applications. I specialize in modern web technologies and have 
              a strong foundation in computer science fundamentals.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in software development started with a curiosity about how things work 
              behind the scenes. Today, I'm proficient in multiple programming languages and 
              frameworks, always eager to learn new technologies and solve complex problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm">
                Team Player
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm">
                Continuous Learner
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
