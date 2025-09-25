import AnimatedSection from '../components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Heart, Award, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Nature",
      description: "We believe in creating experiences that connect people with the beauty and tranquility of nature."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building lasting relationships and creating memorable experiences for families, friends, and colleagues."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "Committed to providing exceptional hospitality and premium facilities for all our guests."
    },
    {
      icon: Target,
      title: "Sustainable Tourism",
      description: "Promoting eco-friendly practices and responsible tourism to preserve our natural environment."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-nature text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              About Subhadra's Paradise
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Creating unforgettable outdoor experiences since our inception, we are passionate about 
              connecting people with nature through luxury camping and adventure activities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Journey Began with a <span className="text-primary">Dream</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to create the perfect blend of adventure and luxury, 
                  Subhadra's Paradise has grown from a simple camping ground to a premier 
                  outdoor resort destination near Pune.
                </p>
                <p>
                  Our founders, passionate outdoor enthusiasts, recognized the need for a 
                  place where people could escape the hustle of city life while enjoying 
                  modern comforts and world-class amenities.
                </p>
                <p>
                  Today, we proudly host thousands of guests annually, from corporate teams 
                  seeking team-building experiences to families creating lasting memories 
                  under the stars.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-gradient-sunset hover-glow">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="relative">
                <div className="bg-gradient-nature rounded-3xl p-8 text-white">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-sunset-orange mb-2">5000+</h3>
                      <p>Happy Guests</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-sunset-orange mb-2">100+</h3>
                      <p>Events Hosted</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-sunset-orange mb-2">50+</h3>
                      <p>Luxury Tents</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-sunset-orange mb-2">24/7</h3>
                      <p>Service</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and define our commitment to 
              providing exceptional outdoor experiences.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection 
                key={value.title}
                animation="slide-up"
                delay={index * 100}
              >
                <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover-scale text-center h-full">
                  <div className="w-16 h-16 bg-gradient-nature rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
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

export default About;