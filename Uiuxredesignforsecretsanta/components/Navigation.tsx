import { Gift } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Create Event', page: 'tool' },
    { name: 'How it Works', page: 'how-it-works' },
    { name: 'FAQ', page: 'faq' },
    { name: 'Privacy', page: 'privacy' },
    { name: 'Email Preview', page: 'email-preview' }
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#F9F6F0]/95 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-[#D24545] rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                <Gift className="w-6 h-6 text-[#F9F6F0]" />
              </div>
              <span className="text-xl text-[#2F4F4F] tracking-tight">Secret Santa</span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => onNavigate(link.page)}
                  className={`relative transition-colors ${
                    currentPage === link.page 
                      ? 'text-[#D24545]' 
                      : 'text-[#2F4F4F] hover:text-[#D24545]'
                  }`}
                >
                  {link.name}
                  {currentPage === link.page && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D24545]" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger Icon */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-[#2F4F4F] hover:text-[#D24545] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Integrated Light Garland - Replaces Bottom Border */}
        <div className="w-full pointer-events-none">
          <div className="max-w-7xl mx-auto px-6">
            {/* Desktop & Mobile Garland */}
            <div className="relative w-full flex items-center justify-center">
              {/* Horizontal line separator */}
              <div className="absolute left-0 right-0 h-[1px] bg-[#333333]" />
              
              {/* Light orbs - Full width with controlled variations */}
              <div className="absolute left-0 right-0 flex items-center justify-between px-4">
                {[
                  { color: '#D24545', size: 10, delay: '0s' },      // Red
                  { color: '#FFD700', size: 9, delay: '0.6s' },     // Gold
                  { color: '#2F4F4F', size: 11, delay: '1.2s' },    // Forest Green
                  { color: '#D24545', size: 8, delay: '1.8s' },     // Red
                  { color: '#FFD700', size: 12, delay: '2.4s'},     // Gold
                  { color: '#2F4F4F', size: 10, delay: '3s' },      // Forest Green
                  { color: '#D24545', size: 9, delay: '3.6s' },     // Red
                  { color: '#FFD700', size: 11, delay: '4.2s' },    // Gold
                  { color: '#2F4F4F', size: 8, delay: '4.8s' },     // Forest Green
                  { color: '#D24545', size: 10, delay: '5.4s' },    // Red
                  { color: '#FFD700', size: 12, delay: '0.3s' },    // Gold
                  { color: '#2F4F4F', size: 9, delay: '0.9s' },     // Forest Green
                  { color: '#D24545', size: 11, delay: '1.5s' },    // Red
                  { color: '#FFD700', size: 8, delay: '2.1s' },     // Gold
                  { color: '#2F4F4F', size: 10, delay: '2.7s' },    // Forest Green
                  { color: '#D24545', size: 12, delay: '3.3s' },    // Red
                  { color: '#FFD700', size: 9, delay: '3.9s' },     // Gold
                  { color: '#2F4F4F', size: 11, delay: '4.5s' },    // Forest Green
                ].map((light, index) => (
                  <div
                    key={index}
                    className="garland-light"
                    style={{
                      width: `${light.size}px`,
                      height: `${light.size}px`,
                      borderRadius: '50%',
                      backgroundColor: light.color,
                      color: light.color,
                      boxShadow: `
                        0 2px 4px rgba(0, 0, 0, 0.15),
                        0 0 8px ${light.color}66,
                        0 0 12px ${light.color}33
                      `,
                      animationDelay: light.delay,
                      flexShrink: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Overlay Background */}
          <div 
            className="absolute inset-0 bg-[#2F4F4F] animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Overlay Content */}
          <div className="relative h-full flex flex-col animate-slideIn">
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center text-white hover:text-[#D24545] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-3xl transition-colors ${
                    currentPage === link.page 
                      ? 'text-[#D24545]' 
                      : 'text-white hover:text-[#D24545]'
                  }`}
                >
                  {link.name}
                </button>
              ))}

              {/* CTA Button */}
              <button
                onClick={() => handleNavClick('tool')}
                className="mt-8 px-8 py-4 bg-[#D24545] text-white rounded-xl hover:bg-[#D24545]/90 transition-all shadow-lg"
              >
                Create Your Event
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes twinkle {
          0%, 100% { 
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15), 0 0 8px currentColor;
            opacity: 0.8;
          }
          50% { 
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), 0 0 16px currentColor, 0 0 24px currentColor;
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
        .garland-light {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}