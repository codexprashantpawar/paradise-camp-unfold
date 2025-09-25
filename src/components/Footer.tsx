import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Packages', path: '/packages' },
  ];

  const services = [
    { name: 'Stargazing', path: '/events/stargazing' },
    { name: 'Corporate Outing', path: '/events/corporate-outing' },
    { name: 'Kids Summer Camp', path: '/events/kids-summer-camp' },
    { name: 'Hurda Party', path: '/events/hurda-party' },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: MessageCircle, name: 'WhatsApp', url: '#' },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-nature rounded-full flex items-center justify-center">
                <span className="text-foreground font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">Subhadra's Paradise</h3>
                <p className="text-sm text-white/80">Camping & Resort</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Experience luxury camping in nature's embrace. Create unforgettable memories 
              with our premium outdoor adventures and exceptional hospitality.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover-scale"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/80">+91 98765 43210</p>
                  <p className="text-white/80">+91 87654 32109</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/80">info@subhadrasparadise.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80">Near Lonavala</p>
                  <p className="text-white/80">Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              © 2025 Subhadra's Paradise Camping & Resort. All rights reserved.
            </p>
            <p className="text-white/80 text-sm">
              Designed by <span className="text-primary font-semibold">SunRayz Technology</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;