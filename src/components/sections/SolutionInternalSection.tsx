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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary break-keep">솔루션 3. 만성 소화불량·피로 회복</h2>
          <p className="text-xl md:text-2xl text-primary/70 break-keep">소화제를 달고 살아도, 먹고 나면 또 불편하신가요?</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#fefaf4] p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-lg border-2 border-[#fff8ea]">
          <p className="text-lg md:text-xl text-primary mb-6 md:mb-8 font-bold bg-accent/20 inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-xl">늘 체하고 더부룩한 속, 한 끼를 편하게</p>
          <ul className="space-y-6 md:space-y-8">
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">몇 달, 몇 년째 먹는 양과 음식까지 가리며 지내셨다면:</strong> 오리한의원은 잦은 체기와 식후 더부룩함을 줄이는 한약을 처방합니다. 먹고 나서 고생할 걱정을 덜고, 한 끼를 편하게 드실 수 있도록 치료합니다.</span>
            </li>
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">자도 쉬어도 피곤하고, 퇴근하면 누워 있기 바쁘신가요?</strong> 피로를 덜고 퇴근 후에도 내 생활을 할 힘을 되찾도록 돕겠습니다. 피로 양상과 몸 상태, 소화력을 살펴 <strong className="text-primary">한약</strong>을 처방합니다.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
