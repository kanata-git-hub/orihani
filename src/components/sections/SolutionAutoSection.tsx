import React from 'react';
import { Clock } from 'lucide-react';
import NaverCTA from '../NaverCTA';

export default function SolutionAutoSection() {
  return (
    <section id="clinic-auto" className="py-16 md:py-28 bg-white scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#fff8ea] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border-2 border-accent/20 flex flex-col lg:flex-row">
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary break-keep">솔루션 4. 자동차 사고 클리닉</h2>
            <p className="text-2xl md:text-3xl font-bold mb-4 text-primary/80 break-keep">점심시간을 활용한 후유증 집중 케어</p>
            <p className="text-xl md:text-2xl text-primary/70 mb-8 md:mb-10 leading-relaxed break-keep">바빠서 치료를 미루지 마세요.<br/>직장인들을 위한 맞춤 프로세스로 꼼꼼하게 치료합니다.</p>
            
            <div className="space-y-3 md:space-y-4 mb-8">
              <div className="flex justify-between items-center bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-accent/10">
                <span className="font-bold text-primary text-lg md:text-xl shrink-0">추나요법</span>
                <span className="text-base md:text-lg text-primary/60 text-right ms-4 break-keep">충격으로 틀어진 척추 정렬 교정</span>
              </div>
              <div className="flex justify-between items-center bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-accent/10">
                <span className="font-bold text-primary text-lg md:text-xl shrink-0">한약</span>
                <span className="text-base md:text-lg text-primary/60 text-right ms-4 break-keep">사고 후 발생한 증상 치료</span>
              </div>
              <div className="flex justify-between items-center bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-accent/10">
                <span className="font-bold text-primary text-lg md:text-xl shrink-0">약침 & 침</span>
                <span className="text-base md:text-lg text-primary/60 text-right ms-4 break-keep">급성 염증과 경직된 근육 이완</span>
              </div>
            </div>
          </div>
          
          <div className="bg-primary text-[#fff8ea] p-8 md:p-12 lg:w-2/5 flex flex-col justify-center items-center text-center">
            <Clock className="w-16 h-16 md:w-20 md:h-20 text-accent mb-6 md:mb-8 drop-shadow-lg" />
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">직장인 점심 집중 진료</h3>
            <div className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 md:mb-6 text-white border-b-4 border-accent pb-3 md:pb-4 inline-block">
              11:30 <span className="text-2xl md:text-3xl font-normal text-accent mx-1 md:mx-2">~</span> 13:00
            </div>
            <p className="text-lg md:text-xl text-[#fefaf4]/80 mb-8 md:mb-10 leading-relaxed break-keep">
              오후 업무에 지장 없도록, 점심시간을 활용해 체계적이고 빠른 치료를 제공합니다.
            </p>
            <NaverCTA className="w-full py-4 md:py-6 text-xl md:text-2xl shadow-accent/20" text="지금 바로 예약하기" />
          </div>
        </div>
      </div>
    </section>
  );
}
