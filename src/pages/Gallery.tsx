import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-camping.jpg';
import stargazingImage from '@/assets/stargazing.jpg';
import kidsCampImage from '@/assets/kids-camp.jpg';
import corporateImage from '@/assets/corporate-outing.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  const galleryImages = [
    {
      src: heroImage,
      alt: "Luxury camping resort with mountain views",
      category: "accommodation",
      title: "Luxury Tents"
    },
    {
      src: stargazingImage,
      alt: "Stargazing session under the night sky",
      category: "activities",
      title: "Stargazing Experience"
    },
    {
      src: kidsCampImage,
      alt: "Children enjoying summer camp activities",
      category: "activities",
      title: "Kids Summer Camp"
    },
    {
      src: corporateImage,
      alt: "Corporate team building activities",
      category: "events",
      title: "Corporate Events"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'accommodation', name: 'Accommodation' },
    { id: 'activities', name: 'Activities' },
    { id: 'events', name: 'Events' }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setCurrentIndex(galleryImages.findIndex(img => img.src === imageSrc));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Photo <span className="text-accent">Gallery</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-foreground/90">
              Explore our beautiful resort through these captivating images showcasing 
              our accommodations, activities, and the natural beauty that surrounds us.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={filter === category.id ? "default" : "outline"}
                  onClick={() => setFilter(category.id)}
                  className={filter === category.id ? "bg-primary text-primary-foreground" : "border-border text-foreground hover:bg-muted"}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <AnimatedSection 
                key={`${image.src}-${index}`}
                animation="slide-up"
                delay={index * 100}
                className="group"
              >
                <div 
                  className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover-scale cursor-pointer"
                  onClick={() => openLightbox(image.src)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-background">
                      <h3 className="font-semibold text-lg">{image.title}</h3>
                      <p className="text-sm text-background/80 capitalize">{image.category}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-foreground/50 hover:bg-foreground/70 text-background rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Ready to Create Your Own <span className="text-primary">Memories?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your stay with us and experience these amazing moments firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:shadow-elegant">
                <Link to="/packages">View Packages</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-muted">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Gallery;