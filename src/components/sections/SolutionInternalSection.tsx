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
              한 끼를 편안하게<br />먹고 싶다면
            </h3>
          </div>
          <ul className="space-y-6 md:space-y-8">
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <div className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5 space-y-4">
                <h4 className="text-primary font-bold">만성 소화불량</h4>
                <p>조금만 먹어도 더부룩하고, 음식이 내려가지 않는 듯 답답하신가요? 자주 체하고 입맛까지 떨어졌다면 소화 상태를 살펴볼 필요가 있습니다.</p>
                <p>증상과 몸 상태에 따라, 위장 운동을 돕고 약해진 소화 기능을 보완하는 한약을 처방합니다.</p>
                <p className="text-primary font-bold">식후 더부룩함과 답답함이 줄고, 식사가 한결 편안해질 수 있습니다.</p>
              </div>
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
              <div className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5 space-y-4">
                <h3 className="text-primary font-bold">만성 피로 — 쉬어도 피곤하고 잠까지 불편하다면</h3>
                <p>아침부터 몸이 무겁고, 조금만 움직여도 쉽게 지치시나요? 피곤한데도 스트레스로 잠들기 어렵거나, 자고 나도 개운하지 않으신가요?</p>
                <p>피로의 원인과 소화·수면 상태를 살핀 뒤, 기력을 보충하고 동반된 긴장과 수면 불편을 다스리는 한약을 몸 상태에 맞게 처방합니다.</p>
                <p className="text-primary font-bold">밤에는 잠들기가 한결 편해지고, 낮에는 피로감이 줄어 일상생활이 수월해질 수 있습니다.</p>
              </div>
            </li>
          </ul>
          <p className="mt-8 text-base text-primary/70 leading-relaxed break-keep">치료 효과와 기간에는 개인차가 있습니다.</p>
        </motion.div>
      </div>
    </section>
  );
}
