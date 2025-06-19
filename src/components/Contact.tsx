
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'moinuddin.shovan@example.com',
      link: 'mailto:moinuddin.shovan@example.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'New York, NY',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's connect and create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
              <p className="text-gray-300 mb-8">
                Have a project in mind or want to collaborate? I'd love to hear from you. 
                Send me a message and I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                >
                  <div className="text-blue-400">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.title}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                    required
                  />
                </div>
              </div>
              
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                required
              />
              
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 resize-none"
                required
              />
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2024 Moinuddin Shovan. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
