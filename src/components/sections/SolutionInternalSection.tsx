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
          <p className="text-xl md:text-2xl text-primary/70 break-keep">소화제를 달고 사는데, 식사는 여전히 불편하신가요?</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#fefaf4] p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-lg border-2 border-[#fff8ea]">
          <p className="text-lg md:text-xl text-primary mb-6 md:mb-8 font-bold bg-accent/20 inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-xl">몇 달, 몇 년째 반복돼 생활까지 바뀐 불편함을 진료합니다.</p>
          <ul className="space-y-6 md:space-y-8">
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">늘 체하는 속 때문에, 먹고 싶은 것도 참고 계신가요?</strong> 오래도록 자주 체하고 식후 더부룩함이 반복돼, 먹는 양을 줄이고 음식까지 가려 드시는 분. 한 끼를 먹고도 속 때문에 고생하지 않도록, 반복되는 식후 불편을 줄이는 한약 치료를 합니다.</span>
            </li>
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">배가 불안해서 외식이나 장거리 이동을 피하시나요?</strong> 복통과 설사가 반복돼 화장실 위치부터 확인하고, 약속까지 미루는 분. 배 아픈 횟수와 급한 배변을 줄여, 배 때문에 일정을 바꾸는 부담을 덜도록 한약을 처방합니다.</span>
            </li>
            <li className="flex items-start gap-4 md:gap-5">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <span className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5"><strong className="text-primary font-bold">피부가 가라앉는 날보다, 신경 쓰이는 날이 더 많으신가요?</strong> 관리해도 발진과 가려움이 되풀이되고, 긁느라 일에 집중하기 어렵거나 잠을 설치는 분. 붉어짐과 가려움이 생활을 방해하는 정도를 줄이도록, 소화 상태와 기존 치료를 함께 살펴 처방합니다.</span>
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
