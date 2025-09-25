import { Tent, Star, Users, Shield, Wifi, Car } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const FeaturesSection = () => {
  const features = [
    {
      icon: Tent,
      title: "Luxury Accommodations",
      description: "Premium tents with modern amenities, comfortable bedding, and stunning views of nature."
    },
    {
      icon: Star,
      title: "Stargazing Experience",
      description: "Professional telescopes and guided sessions under the clear night sky away from city lights."
    },
    {
      icon: Users,
      title: "Corporate Retreats",
      description: "Team building activities, meeting spaces, and customized packages for corporate events."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "24/7 security, first aid facilities, and trained staff ensuring your safety and comfort."
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "Wi-Fi connectivity, charging stations, and modern bathroom facilities for your convenience."
    },
    {
      icon: Car,
      title: "Easy Accessibility",
      description: "Convenient location near Pune with ample parking and comfortable transportation options."
    }
  ];

  return (
    <section className="py-20 bg-sage-light">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">Subhadra's Paradise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the perfect blend of adventure and luxury with our premium camping facilities 
            and exceptional services designed for unforgettable outdoor experiences.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={feature.title}
              animation="slide-up"
              delay={index * 100}
              className="group"
            >
              <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover-scale h-full">
                <div className="w-16 h-16 bg-gradient-nature rounded-2xl flex items-center justify-center mb-6 group-hover:animate-float">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;