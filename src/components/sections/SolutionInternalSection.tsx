import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import DeokIDyspepsia from '../../assets/deok-i-dyspepsia.webp';
import DeokIFatigue from '../../assets/deok-i-fatigue.webp';
import NaverCTA from '../NaverCTA';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const careBookings = {
  digestion: {
    text: '만성 소화불량 예약',
    href: 'https://m.booking.naver.com/booking/13/bizes/1520704/items/8114050',
  },
  fatigue: {
    text: '만성 피로 예약',
    href: 'https://m.booking.naver.com/booking/13/bizes/1520704/items/8114052',
  },
};

function HerbalOffer({ care }: { care: keyof typeof careBookings }) {
  const booking = careBookings[care];
  const placement = `care_${care}`;
  const trackPhone = () => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'click_phone', { cta_placement: placement });
    }
  };

  return (
    <div className="bg-accent/15 rounded-2xl p-5 md:p-6 mt-6">
      <p className="text-base md:text-lg font-bold text-primary/80">소화불량·피로 한약 첫 처방</p>
      <p className="text-2xl md:text-3xl font-bold text-primary mt-2">첫 15일 <span className="text-[#bd3a1d] text-4xl md:text-5xl whitespace-nowrap">15만 원</span></p>
      <p className="text-base md:text-lg text-primary mt-3 leading-relaxed">이후 15일 25만 원 · 이후 30일 45만 원</p>
      <p className="text-sm md:text-base text-primary/70 mt-2 leading-relaxed break-keep">첫 처방 1인 1회 · 일반 한약 기준 · 녹용 처방 별도<br />진찰 후 처방 여부와 복용 기간을 안내합니다.</p>
      <div className="flex flex-col sm:flex-row gap-3 mt-5">
        <NaverCTA className="px-5 py-4 text-lg w-full sm:flex-1" text={booking.text} href={booking.href} placement={placement} />
        <a href="tel:0537537797" onClick={trackPhone} className="inline-flex items-center justify-center rounded-xl border-2 border-primary/20 bg-white px-5 py-4 text-lg font-bold text-primary w-full sm:w-auto hover:bg-[#fff8ea]">전화로 문의</a>
      </div>
    </div>
  );
}

export default function SolutionInternalSection() {
  return (
    <section id="clinic-internal" className="py-16 md:py-28 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary break-keep">솔루션 2. 만성 소화불량·피로</h2>
          <p className="text-xl md:text-2xl text-primary/70 break-keep">반복되는 체기와 피로, 맞춤 한약으로 다스립니다.</p>
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
              또 체할까 걱정되는 식사,<br />이제 편안하게
            </h3>
          </div>
          <ul className="space-y-6 md:space-y-8">
            <li id="clinic-digestion" className="flex items-start gap-4 md:gap-5 scroll-mt-36">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
              <div className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5 space-y-4">
                <h4 className="text-primary font-bold">만성 소화불량</h4>
                <p>조금만 먹어도 꽉 막힌 듯 답답하고, 먹는 즐거움마저 잃으셨나요? 반복되는 더부룩함과 체기, 그때그때 넘기지 말고 치료를 시작하세요.</p>
                <p>오리한의원은 식후 불편감과 식욕, 평소 몸 상태를 꼼꼼히 짚어 맞춤 한약을 처방합니다. 위장 운동을 돕고 약해진 소화 기능을 다스리는 치료에 집중합니다.</p>
                <p className="text-primary font-bold">답답한 속을 다스리고, 한 끼를 편안하게 먹는 일상을 되찾으세요.</p>
                <HerbalOffer care="digestion" />
              </div>
            </li>
            <li id="clinic-fatigue" className="scroll-mt-36 pt-8 md:pt-10 border-t border-primary/10">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-6 md:mb-8">
                <img
                  src={DeokIFatigue}
                  alt="아침에 침대 가장자리에 앉아 피곤해하는 덕이"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-2xl"
                />
                <h3 className="text-2xl md:text-3xl font-bold leading-relaxed text-primary break-keep">
                  쉬어도 지치는 하루,<br />이제 활력을 되찾으세요.
                </h3>
              </div>
              <div className="flex items-start gap-4 md:gap-5">
                <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent shrink-0" />
                <div className="text-xl md:text-2xl text-primary/80 leading-relaxed break-keep mt-0.5 space-y-4">
                  <h4 className="text-primary font-bold">만성 피로</h4>
                  <p>아침부터 몸이 무겁고, 퇴근하면 눕기 바쁘신가요? 쉬는 날마저 피로를 풀다 끝난다면, 이제 반복되는 피로를 치료할 때입니다.</p>
                  <p>오리한의원은 피로의 양상과 소화·수면 상태를 함께 살펴 맞춤 한약을 처방합니다. 부족한 기력을 보충하고 긴장과 수면 불편을 다스려, 지친 일상을 회복하는 데 집중합니다.</p>
                  <p className="text-primary font-bold">밤에는 편안하게, 낮에는 활기차게. 피로에 빼앗긴 내 하루를 되찾으세요.</p>
                  <HerbalOffer care="fatigue" />
                </div>
              </div>
            </li>
          </ul>
          <p className="mt-8 text-base text-primary/70 leading-relaxed break-keep">치료 효과와 기간에는 개인차가 있습니다.</p>
        </motion.div>
      </div>
    </section>
  );
}
