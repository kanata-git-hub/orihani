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
          <p className="text-xl md:text-2xl text-primary/70 break-keep">먹고 나면 또 불편할까 봐, 식사부터 조심하고 계신가요?</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#fefaf4] p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-lg border-2 border-[#fff8ea]">
          <p className="text-lg md:text-xl text-primary mb-6 md:mb-8 font-bold bg-accent/20 inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-xl">반복되는 체기·복통·설사, 피부 발진·가려움</p>
          <ul className="space-y-6 md:space-y-8">
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">먹을 때마다 체할까 봐 걱정된다면:</strong> 조금만 먹어도 더부룩하고, 소화제를 자주 찾게 되는 분. 식후 답답함을 줄여 한 끼를 편하게 드실 수 있도록 한약을 처방합니다.</span>
            </li>
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">외출 전에는 화장실부터 찾는다면:</strong> 반복되는 복통과 설사 때문에 출근길이나 식사 약속이 부담스러운 분. 배 아픈 횟수와 무른 변·급한 배변을 줄이는 데 초점을 맞춰 한약을 처방합니다.</span>
            </li>
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">가라앉았다가 또 올라오는 피부라면:</strong> 발진과 가려움이 반복돼 긁느라 일이나 잠에 지장이 있는 분. 붉어짐과 가려움을 줄이는 것을 목표로, 소화 상태와 기존 치료도 함께 살펴 한약을 처방합니다.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
