import AnimatedSection from '../components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Star, Users, Calendar } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: "Adventure Seeker",
      price: "₹2,500",
      period: "per person/night",
      description: "Perfect for solo travelers and adventure enthusiasts looking for an exciting outdoor experience.",
      features: [
        "Luxury tent accommodation",
        "All meals included",
        "Adventure activities",
        "Bonfire sessions",
        "Basic stargazing",
        "Nature walks"
      ],
      popular: false,
      color: "border-border"
    },
    {
      name: "Family Paradise",
      price: "₹4,200",
      period: "per person/night",
      description: "Ideal for families seeking quality time together with activities suitable for all ages.",
      features: [
        "Premium tent accommodation",
        "All meals + snacks",
        "Family activities",
        "Kids play area access",
        "Professional stargazing",
        "Photography sessions",
        "Room service",
        "Priority booking"
      ],
      popular: true,
      color: "border-primary"
    },
    {
      name: "Corporate Getaway",
      price: "₹3,800",
      period: "per person/night",
      description: "Designed for corporate teams with meeting facilities and team-building activities.",
      features: [
        "Deluxe tent accommodation",
        "All meals + refreshments",
        "Meeting room access",
        "Team building activities",
        "Wi-Fi connectivity",
        "Professional photography",
        "Custom catering options"
      ],
      popular: false,
      color: "border-border"
    }
  ];

  const addOns = [
    {
      name: "Extended Stargazing Session",
      price: "₹500",
      description: "3-hour guided stargazing with professional telescopes"
    },
    {
      name: "Adventure Sports Package",
      price: "₹800",
      description: "Rock climbing, rappelling, and zip-lining activities"
    },
    {
      name: "Photography Workshop",
      price: "₹600",
      description: "Learn nature photography with professional guidance"
    },
    {
      name: "Hurda Party Experience",
      price: "₹400",
      description: "Traditional corn roasting with folk music and dance"
    },
    {
      name: "Bonfire & BBQ Deluxe",
      price: "₹700",
      description: "Premium bonfire setup with gourmet BBQ options"
    },
    {
      name: "Sunrise Trekking",
      price: "₹300",
      description: "Guided trek to scenic viewpoints for sunrise"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-sunset-orange">Packages</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Choose from our carefully crafted packages designed to suit different needs, 
              from solo adventures to family getaways and corporate retreats.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Choose Your Perfect <span className="text-primary">Package</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              All packages include accommodation, meals, and basic amenities. 
              Customize your experience with our add-on options.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <AnimatedSection 
                key={pkg.name}
                animation="slide-up"
                delay={index * 150}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-sunset text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`bg-card rounded-3xl border-2 ${pkg.color} p-8 shadow-soft hover:shadow-elegant transition-all duration-300 hover-scale h-full ${pkg.popular ? 'scale-105' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      {pkg.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground text-sm ml-2">{pkg.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    asChild 
                    className={`w-full ${pkg.popular ? 'bg-gradient-sunset hover-glow' : 'bg-gradient-nature'}`}
                  >
                    <Link to="/contact">Book This Package</Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Enhance Your <span className="text-primary">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Add these exciting experiences to any package for a more customized adventure.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <AnimatedSection 
                key={addon.name}
                animation="slide-up"
                delay={index * 100}
              >
                <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover-scale h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-foreground text-lg">
                      {addon.name}
                    </h3>
                    <span className="text-primary font-bold text-lg">
                      {addon.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {addon.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-in" delay={600} className="text-center mt-12">
            <div className="bg-card p-8 rounded-3xl shadow-soft max-w-2xl mx-auto">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Need a Custom Package?
              </h3>
              <p className="text-muted-foreground mb-6">
                We can create personalized packages based on your specific requirements, 
                group size, and preferences. Contact us for a custom quote.
              </p>
              <Button asChild size="lg" className="bg-gradient-nature hover-glow">
                <Link to="/contact">Get Custom Quote</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Packages;