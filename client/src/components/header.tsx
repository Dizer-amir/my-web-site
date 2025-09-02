import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="glass-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl font-bold">
              💊
            </div>
            <span className="text-white text-2xl font-bold">Dawa</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex gap-6">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white/90 hover:text-white px-4 py-2 rounded-full glass-card transition-all duration-300 hover:scale-105"
                  data-testid="nav-home"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('search')}
                  className="text-white/90 hover:text-white px-4 py-2 rounded-full glass-card transition-all duration-300 hover:scale-105"
                  data-testid="nav-search"
                >
                  البحث
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('interactions')}
                  className="text-white/90 hover:text-white px-4 py-2 rounded-full glass-card transition-all duration-300 hover:scale-105"
                  data-testid="nav-interactions"
                >
                  فحص التفاعلات
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/90 hover:text-white px-4 py-2 rounded-full glass-card transition-all duration-300 hover:scale-105"
                  data-testid="nav-about"
                >
                  حول التطبيق
                </button>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4">
            <ul className="flex flex-col gap-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="w-full text-white/90 hover:text-white px-4 py-2 rounded-full glass-card transition-all duration-300"
                  data-testid="mobile-nav-home"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('search')}
                  className="w-full text-white/90 hover:text-white px-4 py-2 rounded-full glass-card transition-all duration-300"
                  data-testid="mobile-nav-search"
                >
                  البحث
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('interactions')}
                  className="w-full text-white/90 hover:text-white px-4 py-2 rounded-full glass-card transition-all duration-300"
                  data-testid="mobile-nav-interactions"
                >
                  فحص التفاعلات
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="w-full text-white/90 hover:text-white px-4 py-2 rounded-full glass-card transition-all duration-300"
                  data-testid="mobile-nav-about"
                >
                  حول التطبيق
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
