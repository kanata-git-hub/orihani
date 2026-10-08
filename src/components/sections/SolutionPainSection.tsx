import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import NaverCTA from '../NaverCTA';

const symptoms = [
  { title: '목·어깨·등', detail: '승모근과 날개뼈 주변이 자주 뭉치고, 고개를 돌릴 때 당기는 불편함' },
  { title: '허리·엉덩이', detail: '오래 앉아 있거나 허리를 굽히고 펼 때 반복되는 뻣뻣함과 통증' },
  { title: '어깨 관절', detail: '팔을 들거나 뒤로 돌릴 때 아프고 움직임이 제한되는 증상' },
  { title: '팔꿈치·무릎 등', detail: '반복해서 쓰는 부위의 힘줄·관절 주변 통증과 움직일 때의 불편함' },
];

const careSteps = [
  { title: '불편한 부위를 구체적으로', detail: '통증 위치, 압통과 움직임을 살피고 필요한 경우 초음파로 조직 상태를 확인합니다.' },
  { title: '상태에 맞는 도침·약침', detail: '도침이 필요한 부위와 자극 정도를 정하고, 진찰 결과에 따라 약침·침 등을 함께 활용합니다.' },
  { title: '통증과 움직임을 함께 확인', detail: '덜 아픈지, 움직임이 편해졌는지 경과를 살피며 치료 계획을 조절합니다.' },
];

export default function SolutionPainSection() {
  return (
    <section id="clinic-pain" className="py-16 md:py-28 bg-primary text-[#fff8ea] relative scroll-mt-36">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-lg md:text-xl text-accent font-bold mb-3">오리한의원 도침·통증 진료</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 break-keep leading-tight">
            통증을 줄이고,<br/>움직임을 편하게.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed break-keep max-w-3xl mb-10 md:mb-14">
            오리한의원은 도침을 통증 진료의 주요 치료로 활용합니다. 반복되는 결림과 오래된 근골격계 통증을 살피고, 통증 완화와 움직임 개선을 목표로 치료합니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start">
          <div className="bg-black/20 p-6 md:p-8 rounded-3xl border border-white/15">
            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">도침은 어떻게 도움이 되나요?</h3>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed break-keep mb-5">
              도침은 끝이 납작한 날 형태인 특수 침으로, 굳고 유착된 연부조직을 풀어 통증과 움직임 제한을 줄이는 데 사용하는 치료입니다.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed break-keep mb-6">
              반복되는 근육·힘줄 주변 통증에서 적용을 검토하며, 진찰 결과에 따라 약침을 병행해 통증과 염증 완화를 돕습니다.
            </p>
            <div className="border-t border-white/20 pt-5 space-y-4">
              <p className="flex items-start gap-3 text-lg md:text-xl break-keep"><CheckCircle2 aria-hidden="true" className="w-6 h-6 shrink-0 text-accent mt-1" /><span><strong className="text-accent">통증 완화</strong><br/>반복해서 아프고 당기는 부위의 불편함을 줄이는 것이 목표입니다.</span></p>
              <p className="flex items-start gap-3 text-lg md:text-xl break-keep"><CheckCircle2 aria-hidden="true" className="w-6 h-6 shrink-0 text-accent mt-1" /><span><strong className="text-accent">움직임 개선</strong><br/>목 돌리기, 팔 들기 등 불편했던 동작이 편해지도록 치료합니다.</span></p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-5">이런 불편함으로 진료받으세요</h3>
            <div className="grid gap-4">
              {symptoms.map(({ title, detail }) => (
                <div key={title} className="bg-white/5 border border-white/15 rounded-2xl p-5 md:p-6">
                  <h4 className="text-xl md:text-2xl font-bold mb-2">{title}</h4>
                  <p className="text-lg md:text-xl text-white/85 leading-relaxed break-keep">{detail}</p>
                </div>
              ))}
            </div>
            <p className="text-base md:text-lg text-white/75 leading-relaxed mt-4 break-keep">같은 증상도 원인은 다릅니다. 진찰 후 도침의 적합성을 판단하며, 상태에 따라 다른 치료나 추가 검사가 필요할 수 있습니다.</p>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 break-keep">오리한의원은 이렇게 치료합니다</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {careSteps.map(({ title, detail }, index) => (
              <div key={title} className="border-t-2 border-accent/60 pt-5">
                <p className="text-accent font-bold mb-2">0{index + 1}</p>
                <h4 className="text-xl md:text-2xl font-bold mb-3 break-keep">{title}</h4>
                <p className="text-lg md:text-xl text-white/85 leading-relaxed break-keep">{detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <NaverCTA className="px-7 py-4 text-xl w-full sm:w-auto" text="도침·통증 진료 예약" />
            <p className="text-base md:text-lg text-white/75 mt-5 leading-relaxed break-keep">치료 효과는 개인에 따라 다릅니다. 도침 시술 후 통증·멍·출혈이 생길 수 있고, 드물게 감염·신경·혈관 손상이나 시술 부위에 따른 기흉 등이 발생할 수 있습니다. 시술 전 예상 효과와 주의사항을 설명드립니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
