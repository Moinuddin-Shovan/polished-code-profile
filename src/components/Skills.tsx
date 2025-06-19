
const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'C/C++', level: 95 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Dart', level: 75 }
      ]
    },
    {
      category: 'Web & Mobile Development',
      skills: [
        { name: 'Django', level: 85 },
        { name: 'MERN Stack', level: 80 },
        { name: 'Next.js', level: 75 },
        { name: 'Flutter', level: 85 },
        { name: 'Android (Kotlin)', level: 80 }
      ]
    },
    {
      category: 'ML & Tools',
      skills: [
        { name: 'OpenCV', level: 85 },
        { name: 'TensorFlow', level: 80 },
        { name: 'YOLO', level: 75 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 hover:from-blue-400 hover:to-purple-400"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
