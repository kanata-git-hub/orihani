import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function SolutionInternalSection() {
  return (
    <section id="clinic-internal" className="py-16 md:py-28 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary break-keep">솔루션 2. 만성 소화불량·피로</h2>
          <p className="text-xl md:text-2xl text-primary/70 break-keep">소화제 달고 사는 속, 쉬어도 지친 몸</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#fefaf4] p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-lg border-2 border-[#fff8ea]">
          <p className="text-lg md:text-xl text-primary mb-6 md:mb-8 font-bold bg-accent/20 inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-xl">한 끼를 편하게, 하루를 가볍게.</p>
          <ul className="space-y-6 md:space-y-8">
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">만성 소화불량:</strong> 오래 반복된 체기·더부룩함을 줄여, 한 끼를 편하게 드시도록 <strong className="text-primary">한약 처방.</strong></span>
            </li>
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">만성 피로 회복:</strong> 자도 쉬어도 남는 피로를 덜고, 퇴근 후에도 내 생활을 할 힘을 되찾도록.</span>
            </li>
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">복용 후에도 꼼꼼하게:</strong> 식후 불편함과 피로의 변화를 살펴 처방을 조정합니다.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
