import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin } from 'lucide-react';
import NaverCTA from './components/NaverCTA';
import LogoImage from './오리 - 로고_브라운(화이트).png';

import HeroSection from './components/sections/HeroSection';
import PainPointSection from './components/sections/PainPointSection';
import SolutionPainSection from './components/sections/SolutionPainSection';
import SolutionDietSection from './components/sections/SolutionDietSection';
import SolutionInternalSection from './components/sections/SolutionInternalSection';
import SolutionAutoSection from './components/sections/SolutionAutoSection';
import InteriorSection from './components/sections/InteriorSection';
import ReviewSection from './components/sections/ReviewSection';
import FAQSection from './components/sections/FAQSection';
import FooterSection from './components/sections/FooterSection';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // sticky header + menu offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen text-primary bg-[#fefaf4] selection:bg-accent/40">
      
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'}`}>
        <div className="transition-all duration-300 py-3">
          <div className="max-w-5xl px-4 md:px-6 mx-auto flex justify-between items-center">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity focus:outline-none">
              <img src={LogoImage} alt="오리한의원 로고" className="w-10 h-10 md:w-12 md:h-12 object-contain bg-white rounded-full shadow-sm" onError={(e) => { e.currentTarget.style.display='none'; }}/>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-primary">오리한의원</span>
            </button>
            <div className="flex items-center gap-3 md:gap-4">
              <button onClick={() => scrollTo('info')} className="text-primary font-bold text-sm md:text-base whitespace-nowrap transition-colors hover:text-accent flex items-center gap-1">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" /> 위치·시간
              </button>
              <NaverCTA className="px-4 py-2 md:px-6 md:py-3 text-base md:text-lg" text="빠른 예약" showIcon={false}/>
            </div>
          </div>
        </div>
        
        {/* Quick Nav Bar (Always Visible) */}
        <div className="w-full overflow-hidden bg-white/50 border-t border-accent/10">
          <div className="max-w-5xl mx-auto px-2 md:px-6 py-2 flex items-center overflow-x-auto whitespace-nowrap scrollbar-hide space-x-2 md:space-x-3">
            <button onClick={() => scrollTo('clinic-pain')} className="px-4 py-1.5 rounded-full bg-primary/5 hover:bg-accent/30 text-primary font-bold text-sm md:text-base whitespace-nowrap shrink-0 transition-colors">
              만성통증
            </button>
            <button onClick={() => scrollTo('clinic-diet')} className="px-4 py-1.5 rounded-full bg-primary/5 hover:bg-accent/30 text-primary font-bold text-sm md:text-base whitespace-nowrap shrink-0 transition-colors">
              다이어트
            </button>
            <button onClick={() => scrollTo('clinic-internal')} className="px-4 py-1.5 rounded-full bg-primary/5 hover:bg-accent/30 text-primary font-bold text-sm md:text-base whitespace-nowrap shrink-0 transition-colors">
              맞춤 한약
            </button>
            <button onClick={() => scrollTo('clinic-auto')} className="px-4 py-1.5 rounded-full bg-primary/5 hover:bg-accent/30 text-primary font-bold text-sm md:text-base whitespace-nowrap shrink-0 transition-colors">
              교통사고
            </button>
            <button onClick={() => scrollTo('profile')} className="px-4 py-1.5 rounded-full bg-primary/5 hover:bg-accent/30 text-primary font-bold text-sm md:text-base whitespace-nowrap shrink-0 transition-colors">
              약력
            </button>
          </div>
        </div>
      </header>

      <HeroSection />
      <PainPointSection />
      <SolutionPainSection />
      <SolutionDietSection />
      <SolutionInternalSection />
      <SolutionAutoSection />
      <InteriorSection />
      <ReviewSection />
      <FAQSection />
      <FooterSection />
      
      {/* Floating Bottom Right Button */}
      <a 
        href="https://naver.me/FzsJSH0h"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-accent text-primary px-5 py-3 rounded-full font-bold shadow-2xl hover:bg-[#ffe180] transition-transform hover:scale-105 flex items-center gap-1 md:gap-1.5 border-2 border-primary/10 group"
      >
        <span className="text-base md:text-lg">예약</span>
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}
