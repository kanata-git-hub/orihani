import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Syringe } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function SolutionPainSection() {
  return (
    <section id="clinic-pain" className="py-16 md:py-28 bg-primary text-[#fff8ea] overflow-hidden relative scroll-mt-24">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-accent break-keep">솔루션 1. 만성 통증 클리닉</h2>
            <p className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white break-keep">
              굳어버린 통증의 <span className="whitespace-nowrap">핵심 타겟팅,</span><br className="hidden md:block"/>
              도침 & 약침 시너지
            </p>
            <div className="space-y-6 md:space-y-8 text-white/90">
              <p className="text-xl md:text-2xl leading-relaxed break-keep">
                1개월 이상 지속된 지독한 통증은 이미 조직이 엉겨붙은 '유착' 상태일 확률이 높습니다. 일반 침이나 물리치료로는 이 단단한 띠를 풀기 어렵습니다.
              </p>
              <div className="bg-black/30 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 shadow-xl">
                <h3 className="font-bold text-xl md:text-2xl text-accent mb-2 md:mb-3 flex items-center gap-2 md:gap-3">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7" /> 도침
                </h3>
                <p className="text-lg md:text-xl mb-5 md:mb-6 text-white/80 break-keep">침 끝이 칼날 모양으로 된 특수 침으로, 엉겨붙은 유착 부위를 정밀하게 박리(뜯어냄)하여 가동 범위를 회복합니다.</p>
                
                <h3 className="font-bold text-xl md:text-2xl text-accent mb-2 md:mb-3 flex items-center gap-2 md:gap-3">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7" /> 약침
                </h3>
                <p className="text-lg md:text-xl mb-4 text-white/80 break-keep">도침으로 열린 공간에 순수 한약재 추출액을 주입하여 염증을 빠르게 씻어내고 재생을 돕습니다.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="aspect-[4/3] bg-white/5 rounded-[2rem] md:rounded-[3rem] flex items-center justify-center p-8 md:p-10 border border-white/10 backdrop-blur-sm shadow-2xl">
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 relative border-4 border-accent/50">
                  <Syringe className="w-12 h-12 md:w-16 md:h-16 text-accent absolute" style={{ transform: 'rotate(-45deg)' }} />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">유착 박리 + 항염증</p>
                <p className="text-accent/80 text-lg md:text-xl font-medium">만성 근골격계 통증에 특화된 집중 치료</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
