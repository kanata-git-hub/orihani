import React from 'react';
import { ChevronRight } from 'lucide-react';
import { REVIEW_KEYWORDS } from '../../constants/data';

export default function ReviewSection() {
  return (
    <section className="py-16 md:py-28 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">환자분들의 생생한 후기</h2>
          <p className="text-lg md:text-xl text-primary/70">네이버 예약 평점으로 증명하는 바른 진료</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-16">
          {REVIEW_KEYWORDS.map((keyword, idx) => (
            <span key={idx} className="bg-[#fefaf4] text-primary border border-[#fff8ea] px-4 py-2 md:px-5 md:py-3 rounded-full text-base md:text-lg font-medium shadow-sm flex items-center gap-2">
              <span className="text-accent">★</span>
              {keyword}
            </span>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://m.place.naver.com/hospital/2068032626/review/visitor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold transition-all transform hover:scale-105 rounded-xl shadow-lg bg-accent text-primary hover:bg-[#ffe180] px-8 py-4 md:px-10 md:py-5 text-xl md:text-2xl w-full sm:w-auto"
          >
            네이버 리뷰 보기
            <ChevronRight className="w-6 h-6 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
