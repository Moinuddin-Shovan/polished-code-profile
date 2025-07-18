
const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Software engineer with 3+ years of experience in C++ development for retail solutions, 
              advanced algorithms, and low-latency APIs. Proficient in payment device integration, 
              TDD, and API scripting with JavaScript and Python.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Experienced in integrating different Machine Learning (ML) models with Android and 
              developing cross-platform apps with Flutter. Enthusiastic about AI, MLOps, LLMOps, 
              Cyber Security, Computer Vision and Blockchain.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
                <div className="space-y-2">
                  <p className="text-gray-300">B.Sc. in Computer Science and Engineering</p>
                  <p className="text-blue-400">University of Chittagong</p>
                  <p className="text-gray-400">CGPA: 3.43/4.00 | Graduated 2022</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Focus Areas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• AI & Machine Learning</li>
                  <li>• Computer Vision</li>
                  <li>• Cybersecurity</li>
                  <li>• Blockchain</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Experience Highlights</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-white">C++ Development</h4>
                  <p className="text-gray-300">3+ years experience in retail solutions and low-latency APIs</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-semibold text-white">Machine Learning Integration</h4>
                  <p className="text-gray-300">Android ML model integration and cross-platform development</p>
                </div>
                
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="text-lg font-semibold text-white">API Development</h4>
                  <p className="text-gray-300">Handling 3M+ daily transactions with robust API architecture</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Problem Solving</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">450+</div>
                  <div className="text-gray-300 text-sm">Problems Solved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">4</div>
                  <div className="text-gray-300 text-sm">Active Platforms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
