'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInFooter, setIsInFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px (appx banner height)
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 400);

      // Check if button is within footer
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        // If the top of the footer is visible in the viewport and less than the button's bottom-most position
        // The button is fixed at bottom-6 (24px).
        // Let's say if footer top is less than viewport height - 80px
        setIsInFooter(footerRect.top < window.innerHeight - 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className={`fixed right-6 bottom-6 z-50 border backdrop-blur-sm p-4 px-5 cursor-pointer transition-all group 
            ${isInFooter 
              ? 'border-white text-white hover:bg-white hover:text-black' 
              : 'border-black text-black hover:bg-black hover:text-white'}`}
        >
          <span className="text-[10px] uppercase font-lato tracking-[0.08em] font-medium">Top</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
