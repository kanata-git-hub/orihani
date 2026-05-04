import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import NaverCTA from '../NaverCTA';
import DoctorImage from '../../프사 1대1.png';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#fefaf4] via-white to-[#fff8ea]">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeIn}
          className="flex flex-col items-start z-10"
        >
          <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 mb-4 md:mb-6 text-lg md:text-xl font-bold text-primary bg-accent/30 rounded-full mt-8 md:mt-0">
            동대구역 직장인 맞춤 한방 주치의
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-primary mb-6 md:mb-8 break-keep">
            물리치료를 받아도<br/>그 때 뿐인가요?<br/>
            <span className="relative inline-block mt-2">
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-accent -z-10 opacity-70"></span>
              반복된 통증, 이제 '원인'을 끊어냅니다.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary/80 mb-8 md:mb-10 max-w-lg leading-relaxed font-medium">
            1개월 이상 지속된 지독한 통증부터<br/>
            지친 일상의 피로까지.<br/> 
            오리한의원에서 답답했던 몸의 짐을 내려놓으세요.
          </p>
          <NaverCTA className="px-8 py-4 md:px-10 md:py-5 text-xl md:text-2xl w-full sm:w-auto" text="네이버 예약으로 통증 끝내기" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[350px] md:h-[400px] lg:h-[500px] flex justify-center items-center mt-6 md:mt-0"
        >
          <div className="relative w-full max-w-[280px] md:max-w-md aspect-square rounded-full shadow-2xl overflow-hidden border-8 border-white bg-[#fff8ea]">
            <img src={DoctorImage} alt="오리한의원 대표원장" className="w-full h-full object-cover scale-110" 
                 onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x400/FFFBEB/D97706?text=Image+Not+Found"; }} />
          </div>
          
          <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-white p-4 md:p-5 rounded-2xl md:rounded-3xl shadow-xl animate-bounce-slow border-2 border-accent">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-accent/20 p-2 md:p-3 rounded-full text-primary">
                <span className="block w-6 h-6 md:w-8 md:h-8 font-bold text-center leading-[24px] md:leading-[32px]">✓</span>
              </div>
              <div>
                <p className="text-lg md:text-xl font-bold text-primary">점심 진료 실시</p>
                <p className="text-base md:text-lg text-primary/70">11:30 ~ 13:00</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
