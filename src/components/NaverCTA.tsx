import React from 'react';
import { ChevronRight } from 'lucide-react';

interface NaverCTAProps {
  className?: string;
  text?: string;
  showIcon?: boolean;
  placement?: string;
  href?: string;
}

export default function NaverCTA({ className = "", text = "네이버 예약하기", showIcon = true, placement = "general", href = "https://m.booking.naver.com/booking/13/bizes/1520704/items/7140755" }: NaverCTAProps) {
  const handleClick = () => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'click_naver_reservation', { cta_placement: placement });
    }
  };

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center font-bold transition-all transform hover:scale-105 rounded-xl shadow-lg bg-accent text-primary hover:bg-[#ffe180] ${className}`}
    >
      {text}
      {showIcon && <ChevronRight className="w-6 h-6 ml-1" />}
    </a>
  );
}
