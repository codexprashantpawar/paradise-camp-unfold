import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, Mail, MapPin, Clock, 
  Facebook, Instagram, Twitter, MessageCircle 
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    eventType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      eventType: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+91 98765 43210", "+91 87654 32109"],
      action: "Call us anytime"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@subhadrasparadise.com", "bookings@subhadrasparadise.com"],
      action: "Send us an email"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["At Temghar, Tal, Mulshi, Lavasa", "Pune, Maharashtra 412115"],
      action: "Get directions"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Sun: 9:00 AM - 9:00 PM", "24/7 Emergency Support"],
      action: "Visit anytime"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Twitter, name: "Twitter", url: "#" },
    { icon: MessageCircle, name: "WhatsApp", url: "#" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-nature text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="text-sunset-orange">Us</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to embark on your next adventure? Get in touch with us to book your 
              perfect camping experience or ask any questions about our services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection animation="slide-in-left">
              <div className="bg-card p-8 rounded-3xl shadow-soft">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Send us a <span className="text-primary">Message</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Message subject"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                      >
                        <option value="">Select event type</option>
                        <option value="stargazing">Stargazing</option>
                        <option value="corporate">Corporate Outing</option>
                        <option value="kids-camp">Kids Summer Camp</option>
                        <option value="hurda-party">Hurda Party</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements, preferred dates, group size, and any special requests..."
                      rows={5}
                      required
                      className="w-full resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-sunset hover-glow font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection animation="slide-in-right">
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                    Get in <span className="text-primary">Touch</span>
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We're here to help you plan the perfect outdoor experience. 
                    Reach out to us through any of the following channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <AnimatedSection 
                      key={info.title}
                      animation="slide-up"
                      delay={index * 100}
                    >
                      <div className="flex items-start gap-4 p-6 bg-sage-light rounded-2xl hover:shadow-soft transition-shadow">
                        <div className="w-12 h-12 bg-gradient-nature rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                          {info.details.map((detail) => (
                            <p key={detail} className="text-muted-foreground">{detail}</p>
                          ))}
                          <p className="text-primary text-sm mt-1">{info.action}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="w-12 h-12 bg-gradient-nature rounded-xl flex items-center justify-center hover-scale hover-glow transition-all duration-300"
                        aria-label={social.name}
                      >
                        <social.icon className="w-6 h-6 text-primary-foreground" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Find <span className="text-primary">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Located in the scenic hills of Temghar, Mulshi near Lavasa, our resort is easily accessible 
              and offers breathtaking views of nature.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up">
            <div className="bg-card rounded-3xl p-2 shadow-soft overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.1051353203866!2d73.52999117398116!3d18.433534982643216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29f8ef400d20f%3A0x183ef503aef95adf!2sSubhadra&#39;s%20Paradise!5e0!3m2!1sen!2sin!4v1759227545290!5m2!1sen!2sin"
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;