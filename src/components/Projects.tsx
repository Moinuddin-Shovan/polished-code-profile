
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Site',
      description: 'A responsive ecommerce website built with Python, Django, PostgreSQL, Bootstrap and StripeAPI featuring user registration, admin panel, rating system, filtering options, and order tracking.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Bootstrap', 'Stripe API'],
      github: 'https://github.com/moinuddin-shovan',
      live: '#'
    },
    {
      title: 'Bohon: Parcel Delivery App',
      description: 'Real-time multi-user cross-platform Flutter parcel delivery app with Firebase Auth, Google Sign-in, encrypted messaging, push notifications, and embedded chatting system.',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop',
      technologies: ['Flutter', 'Firebase', 'MongoDB', 'Push Notifications'],
      github: 'https://github.com/moinuddin-shovan',
      live: '#'
    },
    {
      title: 'Patient Action Detection System',
      description: 'Computer vision-based surveillance system for patient monitoring using Deep Learning. Achieved 94% precision with MobileNetV2, 2D CNN, and GRU for fall detection.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'MobileNetV2', 'Computer Vision'],
      github: 'https://github.com/moinuddin-shovan',
      live: '#'
    },
    {
      title: 'Retail Software Solutions',
      description: 'Developed omni-channel retail software using C++ with TDD, integrated low-latency APIs, and created EFT drivers for payment terminals handling 3M+ daily transactions.',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=500&h=300&fit=crop',
      technologies: ['C++', 'JavaScript', 'Python', 'REST API', 'TDD'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
