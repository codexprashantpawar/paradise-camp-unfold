import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-camping.jpg';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury camping resort nestled in mountains near Pune"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <AnimatedSection animation="fade-in" className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 animate-float">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Premium Resort near Pune</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to <br />
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Subhadra's Paradise
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Experience luxury camping in nature's embrace. From stargazing to corporate retreats, 
            create unforgettable memories in our premium outdoor paradise.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sunset-orange text-sunset-orange" />
                ))}
              </div>
              <p className="text-white/80">5-Star Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-sunset-orange">50+</h3>
              <p className="text-white/80">Luxury Tents</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-sunset-orange">24/7</h3>
              <p className="text-white/80">Premium Service</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-sunset hover-glow font-semibold text-lg px-8 py-4 h-auto">
              <Link to="/packages" className="flex items-center gap-2">
                Explore Packages
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 h-auto">
              <Link to="/gallery">View Gallery</Link>
            </Button>
          </div>
        </AnimatedSection>

        {/* Scroll Indicator */}
        <AnimatedSection animation="fade-in" delay={800} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/60 animate-float">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-px h-12 bg-white/30"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;