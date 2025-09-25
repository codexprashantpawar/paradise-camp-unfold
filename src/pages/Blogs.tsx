import AnimatedSection from '../components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import stargazingImage from '@/assets/stargazing.jpg';
import kidsCampImage from '@/assets/kids-camp.jpg';
import corporateImage from '@/assets/corporate-outing.jpg';
import heroImage from '@/assets/hero-camping.jpg';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Stargazing: What to Expect at Subhadra's Paradise",
      excerpt: "Discover the wonders of the night sky with our comprehensive guide to stargazing. Learn about the best times to visit, what celestial objects you can observe, and how our professional equipment enhances your experience.",
      image: stargazingImage,
      author: "Dr. Rajesh Astronomer",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Stargazing",
      featured: true
    },
    {
      id: 2,
      title: "Why Corporate Retreats in Nature Boost Team Performance",
      excerpt: "Explore how stepping away from the office environment and into nature can dramatically improve team dynamics, creativity, and overall productivity. Our corporate packages are designed with these benefits in mind.",
      image: corporateImage,
      author: "Priya Sharma",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Corporate"
    },
    {
      id: 3,
      title: "Creating Unforgettable Memories: Kids Summer Camp Adventures",
      excerpt: "From adventure sports to nature exploration, discover how our kids summer camp programs are designed to build confidence, foster creativity, and create lasting friendships in a safe, supervised environment.",
      image: kidsCampImage,
      author: "Amit Patel",
      date: "March 5, 2024",
      readTime: "5 min read",
      category: "Kids Activities"
    },
    {
      id: 4,
      title: "Sustainable Camping: How We Protect the Environment",
      excerpt: "Learn about our eco-friendly practices and commitment to sustainable tourism. Discover how you can enjoy luxury camping while minimizing your environmental impact.",
      image: heroImage,
      author: "Environmentalist Team",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Sustainability"
    },
    {
      id: 5,
      title: "The Art of Glamping: Luxury Meets Adventure",
      excerpt: "Explore how glamping combines the best of both worlds - the thrill of outdoor adventure with the comfort of luxury accommodations. Discover what makes our tents special.",
      image: heroImage,
      author: "Design Team",
      date: "February 20, 2024",
      readTime: "4 min read",
      category: "Accommodation"
    },
    {
      id: 6,
      title: "Photography Tips for Capturing Perfect Camping Moments",
      excerpt: "Professional photographer shares expert tips for capturing stunning photos during your camping experience. From golden hour shots to night sky photography.",
      image: stargazingImage,
      author: "Photographer Pro",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Photography"
    }
  ];

  const categories = ["All", "Stargazing", "Corporate", "Kids Activities", "Sustainability", "Accommodation", "Photography"];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-nature text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-sunset-orange">Blog</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Discover insights, tips, and stories from our camping adventures. 
              Get inspired for your next outdoor experience with expert advice and behind-the-scenes content.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Article */}
      {blogPosts.filter(post => post.featured).map((post) => (
        <section key={post.id} className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in" className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-sunset text-white rounded-full text-sm font-semibold mb-6">
                Featured Article
              </span>
            </AnimatedSection>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="slide-in-left">
                <div className="relative group overflow-hidden rounded-3xl">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">By {post.author}</span>
                  </div>

                  <Button className="bg-gradient-nature hover-glow group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* Blog Grid */}
      <section className="py-20 bg-sage-light">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Latest <span className="text-primary">Articles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay updated with our latest stories, tips, and insights from the world of outdoor adventures.
            </p>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection animation="fade-in" className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Button>
            ))}
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <AnimatedSection 
                key={post.id}
                animation="slide-up"
                delay={index * 100}
                className="group"
              >
                <article className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover-scale h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-primary rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary group">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <div className="bg-gradient-nature text-white rounded-3xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Stay Updated with Our Latest Stories
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Subscribe to our newsletter and never miss out on new adventures, tips, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground border-0 focus:ring-2 focus:ring-sunset-orange outline-none"
                />
                <Button className="bg-gradient-sunset hover-glow px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Blogs;