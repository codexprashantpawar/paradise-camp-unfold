import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Telescope, Utensils } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import stargazingImage from '@/assets/stargazing.jpg';
import kidsCampImage from '@/assets/kids-camp.jpg';
import corporateImage from '@/assets/corporate-outing.jpg';

const EventsPreview = () => {
  const events = [
    {
      icon: Telescope,
      title: "Stargazing Nights",
      description: "Witness the beauty of celestial bodies with professional-grade telescopes and expert astronomers.",
      image: stargazingImage,
      link: "/events/stargazing",
      features: ["Professional Telescopes", "Expert Guides", "Constellation Maps"]
    },
    {
      icon: Users,
      title: "Corporate Outings",
      description: "Team building activities, leadership workshops, and networking in nature's serene environment.",
      image: corporateImage,
      link: "/events/corporate-outing", 
      features: ["Team Building", "Meeting Spaces", "Catering Services"]
    },
    {
      icon: Calendar,
      title: "Kids Summer Camp",
      description: "Adventure-filled camps with outdoor activities, learning experiences, and supervised fun.",
      image: kidsCampImage,
      link: "/events/kids-summer-camp",
      features: ["Adventure Activities", "Educational Programs", "Safety First"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Unforgettable <span className="text-primary">Experiences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            From magical stargazing nights to exciting corporate retreats and fun-filled kids camps, 
            we offer a variety of experiences tailored to create lasting memories.
          </p>
          <Button asChild variant="outline" size="lg" className="hover-glow">
            <Link to="/events" className="flex items-center gap-2">
              View All Events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <AnimatedSection 
              key={event.title}
              animation="slide-up"
              delay={index * 200}
              className="group"
            >
              <div className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover-scale">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay group-hover:opacity-50 transition-opacity"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {event.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-gradient-nature hover-glow">
                    <Link to={event.link} className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;