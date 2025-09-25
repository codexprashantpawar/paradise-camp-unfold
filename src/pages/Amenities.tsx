import AnimatedSection from '../components/AnimatedSection';
import { 
  Tent, Wifi, Car, Shield, Utensils, Bath, 
  Camera, Music, TreePine, Waves, Sun, Moon 
} from 'lucide-react';

const Amenities = () => {
  const amenityCategories = [
    {
      title: "Accommodation",
      icon: Tent,
      color: "bg-gradient-nature",
      amenities: [
        "Luxury Canvas Tents",
        "Comfortable Bedding",
        "Private Bathrooms",
        "Climate Control",
        "Scenic Valley Views",
        "Housekeeping Service"
      ]
    },
    {
      title: "Dining & Refreshments",
      icon: Utensils,
      color: "bg-gradient-sunset",
      amenities: [
        "Multi-Cuisine Restaurant",
        "Outdoor BBQ Setup",
        "Campfire Dining",
        "Fresh Local Ingredients",
        "Vegetarian & Vegan Options",
        "Room Service Available"
      ]
    },
    {
      title: "Activities & Entertainment",
      icon: Music,
      color: "bg-nature-green",
      amenities: [
        "Professional Stargazing",
        "Adventure Sports",
        "Nature Trails",
        "Bonfire Evenings",
        "Live Music Sessions",
        "Photography Tours"
      ]
    },
    {
      title: "Modern Facilities",
      icon: Wifi,
      color: "bg-sky-blue",
      amenities: [
        "High-Speed Wi-Fi",
        "Power Backup",
        "Hot Water Supply",
        "Laundry Service",
        "Medical First Aid",
        "24/7 Reception"
      ]
    },
    {
      title: "Outdoor Features",
      icon: TreePine,
      color: "bg-earth-brown",
      amenities: [
        "Swimming Pool",
        "Outdoor Seating Areas",
        "Garden Spaces",
        "Walking Trails",
        "Meditation Zone",
        "Children's Play Area"
      ]
    },
    {
      title: "Safety & Security",
      icon: Shield,
      color: "bg-forest-deep",
      amenities: [
        "24/7 Security Staff",
        "CCTV Surveillance",
        "Emergency Response",
        "Fire Safety Equipment",
        "Secure Parking",
        "Guest Safety Briefing"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Premium <span className="text-sunset-orange">Amenities</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Experience luxury in the lap of nature with our comprehensive range of 
              modern amenities and world-class facilities designed for your comfort.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {amenityCategories.map((category, index) => (
              <AnimatedSection 
                key={category.title}
                animation="slide-up"
                delay={index * 100}
                className="group"
              >
                <div className="bg-card rounded-3xl shadow-soft hover:shadow-elegant transition-all duration-500 hover-scale overflow-hidden h-full">
                  {/* Header */}
                  <div className={`${category.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <category.icon className="w-full h-full" />
                    </div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4">
                        <category.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-3">
                      {category.amenities.map((amenity, amenityIndex) => (
                        <div 
                          key={amenity}
                          className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300"
                          style={{ transitionDelay: `${amenityIndex * 50}ms` }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Special <span className="text-primary">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unique amenities that set us apart and make your stay truly memorable.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Moon,
                title: "Night Sky Observatory",
                description: "Professional-grade telescopes for celestial observations"
              },
              {
                icon: Waves,
                title: "Natural Water Features",
                description: "Pristine streams and water bodies for relaxation"
              },
              {
                icon: Sun,
                title: "Sunrise View Points",
                description: "Carefully selected spots for breathtaking sunrise views"
              },
              {
                icon: Camera,
                title: "Photography Zones",
                description: "Instagram-worthy spots throughout the resort"
              }
            ].map((feature, index) => (
              <AnimatedSection 
                key={feature.title}
                animation="slide-up"
                delay={index * 150}
              >
                <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover-scale text-center h-full">
                  <div className="w-16 h-16 bg-gradient-nature rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-float">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;