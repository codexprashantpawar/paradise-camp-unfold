import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Amenities', path: '/amenities' },
    { 
      name: 'Our Events', 
      path: '/events',
      subItems: [
        { name: 'Hurda Party', path: '/events/hurda-party' },
        { name: 'Stargazing', path: '/events/stargazing' },
        { name: 'Corporate Outing', path: '/events/corporate-outing' },
        { name: 'Kids Summer Camp', path: '/events/kids-summer-camp' },
      ]
    },
    { name: 'Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-soft border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-scale">
            <div className="w-10 h-10 bg-gradient-nature rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <div className="hidden md:block">
              <h1 className="font-heading text-xl font-bold text-foreground">
                Subhadra's Paradise
              </h1>
              <p className="text-sm text-muted-foreground -mt-1">Camping & Resort</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsEventsOpen(true)}
                    onMouseLeave={() => setIsEventsOpen(false)}
                  >
                    <button className="flex items-center px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {isEventsOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-card border border-border rounded-lg shadow-elegant animate-fade-in">
                        <div className="py-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-gradient-sunset hover-glow font-medium">
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-elegant animate-slide-up">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() => setIsEventsOpen(!isEventsOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-foreground hover:bg-muted rounded-md transition-colors"
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transform transition-transform ${isEventsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isEventsOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md transition-colors ${
                        location.pathname === item.path
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Button asChild className="w-full bg-gradient-sunset">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;