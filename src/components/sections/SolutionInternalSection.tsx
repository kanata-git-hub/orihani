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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary break-keep">솔루션 3. 비위 중심 1:1 맞춤 한약</h2>
          <p className="text-xl md:text-2xl text-primary/70 break-keep">속이 편안한 피부, 소화기, 알레르기 질환 관리</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#fefaf4] p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-lg border-2 border-[#fff8ea]">
          <p className="text-lg md:text-xl text-primary mb-6 md:mb-8 font-bold bg-accent/20 inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-xl">소화기 상태를 최우선으로 점검합니다.</p>
          <ul className="space-y-6 md:space-y-8">
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">소화기 질환:</strong> 만성 소화불량, 과민성 대장 증후군 등 위장 문제를 근본적으로 치료합니다.</span>
            </li>
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">피부 및 알레르기 질환:</strong> 아토피, 비염 등 면역 체계를 바로잡아 편안한 일상을 되찾아 드립니다.</span>
            </li>
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">만성 피로 회복:</strong> 피로를 덜고 활력을 돋우는 <strong className="text-primary">명품 경옥고</strong> 및 <strong className="text-primary">원방 공진단</strong> 처방.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
