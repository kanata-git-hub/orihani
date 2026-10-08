import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import DeokIDyspepsia from '../../assets/deok-i-dyspepsia.webp';

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
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-6 md:mb-8">
            <img
              src={DeokIDyspepsia}
              alt="식사 앞에서 속이 불편해 배를 감싸는 덕이"
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl"
            />
            <h3 className="text-2xl md:text-3xl font-bold leading-relaxed text-primary break-keep">
              매번 체해서,<br />먹는 게 겁나셨나요?
            </h3>
          </div>
          <ul className="space-y-6 md:space-y-8">
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">만성 소화불량:</strong> 반복되는 체기·더부룩함을 줄여, 한 끼를 편하게 드시도록 <strong className="text-primary">한약 처방.</strong></span>
            </li>
            <li className="bg-accent/20 rounded-2xl p-5 md:p-6">
              <p className="text-xl md:text-2xl font-bold leading-relaxed break-keep">
                <span className="inline-block">첫 15일,</span>{' '}
                <span className="inline-block">비용 부담을 낮췄습니다.</span>
              </p>
              <p className="text-base md:text-lg text-primary/80 mt-2 break-keep">만성 소화불량 한약 첫 처방 혜택 · 1인 1회</p>
            </li>
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">만성 피로 회복:</strong> 자도 쉬어도 남는 피로를 덜고, 퇴근 후에도 내 생활을 할 힘을 되찾도록.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
