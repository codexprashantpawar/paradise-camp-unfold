import { useParams } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Calendar, Users, Clock, MapPin, Star, 
  Utensils, Camera, Music, Award 
} from 'lucide-react';
import stargazingImage from '@/assets/stargazing.jpg';
import kidsCampImage from '@/assets/kids-camp.jpg';
import corporateImage from '@/assets/corporate-outing.jpg';

const Events = () => {
  const { eventType } = useParams();

  const events = {
    'stargazing': {
      title: 'Stargazing Nights',
      subtitle: 'Witness the Wonders of the Universe',
      image: stargazingImage,
      description: 'Experience the magic of the night sky with our professional stargazing sessions. Our expert astronomers will guide you through constellations, planets, and deep-sky objects using high-quality telescopes.',
      features: [
        'Professional-grade telescopes',
        'Expert astronomy guides',
        'Constellation identification',
        'Planet observation sessions',
        'Photography assistance',
        'Hot beverages included'
      ],
      duration: '3-4 hours',
      capacity: '30 people',
      timing: '7:00 PM - 11:00 PM',
      price: '₹1,500 per person'
    },
    'kids-summer-camp': {
      title: 'Kids Summer Camp',
      subtitle: 'Adventure & Learning Combined',
      image: kidsCampImage,
      description: 'A perfect blend of fun, adventure, and learning designed specifically for children. Our supervised activities ensure safety while promoting creativity, teamwork, and outdoor skills.',
      features: [
        'Age-appropriate activities',
        'Qualified supervisors',
        'Adventure sports training',
        'Nature exploration',
        'Creative workshops',
        'Safety equipment provided'
      ],
      duration: '5 days / 4 nights',
      capacity: '25 kids per batch',
      timing: 'Multiple batches available',
      price: '₹8,500 per child'
    },
    'corporate-outing': {
      title: 'Corporate Outing - Camping',
      subtitle: 'Team Building in Nature',
      image: corporateImage,
      description: 'Strengthen your team bonds with our comprehensive corporate outing packages. Combine team-building exercises with the serenity of nature for enhanced productivity and relationships.',
      features: [
        'Team building activities',
        'Leadership workshops',
        'Problem-solving challenges',
        'Meeting facilities',
        'Catering services',
        'Custom packages available'
      ],
      duration: '1-3 days',
      capacity: '50-100 people',
      timing: 'Flexible scheduling',
      price: '₹3,500 per person'
    },
    'hurda-party': {
      title: 'Hurda Party',
      subtitle: 'Traditional Rural Celebration',
      image: corporateImage, // Using corporate image as placeholder
      description: 'Experience the authentic rural celebration of Hurda Party - roasting tender corn over open fires, traditional games, and cultural performances under the open sky.',
      features: [
        'Fresh tender corn roasting',
        'Traditional rural games',
        'Cultural performances',
        'Folk music sessions',
        'Authentic rural dining',
        'Bonfire celebrations'
      ],
      duration: '4-5 hours',
      capacity: '40 people',
      timing: '4:00 PM - 9:00 PM',
      price: '₹1,200 per person'
    }
  };

  // If specific event is requested
  if (eventType && events[eventType as keyof typeof events]) {
    const event = events[eventType as keyof typeof events];
    
    return (
      <div className="pt-20">
        {/* Event Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-white">
            <AnimatedSection animation="fade-in" className="text-center">
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
                {event.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                {event.subtitle}
              </p>
              <Button asChild size="lg" className="bg-gradient-sunset hover-glow">
                <Link to="/contact">Book This Event</Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <AnimatedSection animation="slide-in-left">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Event <span className="text-primary">Details</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {event.description}
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Duration</p>
                      <p className="text-muted-foreground text-sm">{event.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Capacity</p>
                      <p className="text-muted-foreground text-sm">{event.capacity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Timing</p>
                      <p className="text-muted-foreground text-sm">{event.timing}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Price</p>
                      <p className="text-muted-foreground text-sm">{event.price}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  What's <span className="text-primary">Included</span>
                </h3>
                <div className="space-y-4">
                  {event.features.map((feature, index) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-sage-light rounded-2xl">
                  <h4 className="font-semibold text-foreground mb-3">Ready to Book?</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Contact us to check availability and make reservations for this amazing experience.
                  </p>
                  <Button asChild className="w-full bg-gradient-nature">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Main events page
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-nature text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-sunset-orange">Events</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              From magical stargazing nights to exciting adventure camps, we offer a variety of 
              unique experiences designed to create unforgettable memories.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {Object.entries(events).map(([key, event], index) => (
              <AnimatedSection 
                key={key}
                animation="slide-up"
                delay={index * 200}
                className="group"
              >
                <div className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover-scale">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay group-hover:opacity-50 transition-opacity"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        {event.duration}
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{event.price}</span>
                      <Button asChild className="bg-gradient-sunset">
                        <Link to={`/events/${key}`}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;