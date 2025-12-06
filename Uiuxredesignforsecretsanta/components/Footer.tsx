export function Footer() {
  return (
    <footer className="mt-20 bg-[#F9F6F0] relative">
      {/* Integrated Light Garland - Replaces Top Border */}
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
                { color: '#FFD700', size: 12, delay: '2.4s' },    // Gold
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
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4">Secret Santa</h3>
            <p className="text-[#333333]/70">
              Making gift exchanges magical and effortless since 2025.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#333333]/70 hover:text-[#D24545]">How it Works</a></li>
              <li><a href="#" className="text-[#333333]/70 hover:text-[#D24545]">FAQ</a></li>
              <li><a href="#" className="text-[#333333]/70 hover:text-[#D24545]">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4">Contact</h3>
            <p className="text-[#333333]/70">
              Have questions? We're here to help make your Secret Santa perfect.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#2F4F4F]/10 text-center text-[#333333]/60">
          <p>&copy; 2025 Secret Santa. All rights reserved.</p>
        </div>
      </div>
      
      <style>{`
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
        .garland-light {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}