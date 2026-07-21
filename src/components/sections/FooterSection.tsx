import React from 'react';
import { Clock, MapPin, Car, Instagram, Youtube, Globe } from 'lucide-react';
import NaverCTA from '../NaverCTA';
import KakaoMap from '../KakaoMap';
import DoctorImage from '../../프사 1대1.png';

export default function FooterSection() {
  return (
    <footer className="bg-primary text-[#fff8ea] pt-20 md:pt-28 pb-12 md:pb-16 border-t-8 border-accent">
      <div className="max-w-5xl mx-auto px-6">
        <div id="profile" className="flex flex-col items-center text-center mb-16 md:mb-20 scroll-mt-24">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-accent overflow-hidden mb-6 md:mb-8 bg-[#fefaf4] shadow-2xl">
            <img src={DoctorImage} alt="오원장님 프로필" className="w-full h-full object-cover" 
                 onError={(e) => { e.currentTarget.style.display='none'; }} />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-3xl leading-relaxed mb-4 md:mb-6 break-keep">
            "과장하지 않고,<br/>환자분의 오늘과 내일을 잇는<br/>바른 진료를 약속합니다."
          </h2>
          <p className="text-xl md:text-2xl text-accent font-bold mt-2 md:mt-4 mb-8 md:mb-10">- 대표원장 손 영 남 올림 -</p>
          
          <div className="bg-white/5 rounded-2xl md:rounded-3xl p-6 md:p-10 w-full max-w-3xl text-left border border-white/10 shadow-inner">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-accent flex items-center gap-2">
              <span className="w-1.5 h-6 bg-accent rounded-full inline-block"></span> 약력
            </h3>
            <ul className="text-base md:text-lg text-white/80 space-y-3 break-keep">
              <li className="flex gap-3"><span className="text-accent/50 shrink-0">■</span> 동국대학교 한의과대학 졸업</li>
              <li className="flex gap-3"><span className="text-accent/50 shrink-0">■</span> 척추신경추나의학회 정회원</li>
              <li className="flex gap-3"><span className="text-accent/50 shrink-0">■</span> 한방비만학회 정회원</li>
              <li className="flex gap-3"><span className="text-accent/50 shrink-0">■</span> 한방비만치료 인증한의사 (전문가과정 수료)</li>
              <li className="flex gap-3"><span className="text-accent/50 shrink-0">■</span> &lt;실전 한약가이드&gt; 번역 출간</li>
              <li className="flex gap-3"><span className="text-accent/50 shrink-0">■</span> 신세계한의원 진료원장 (2017)</li>
              <li className="flex gap-3"><span className="text-accent/50 shrink-0">■</span> 인제요양병원 한방과장 (2018~2020)</li>
              <li className="flex gap-3"><span className="text-accent/50 shrink-0">■</span> 홍제한의원 진료원장 (2021~2025)</li>
            </ul>
          </div>
        </div>

        <div id="info" className="grid md:grid-cols-2 gap-12 md:gap-16 border-t border-white/20 pt-12 md:pt-16 mb-16 md:mb-20">
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center gap-3">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-accent" /> 오시는 길
            </h3>
            <p className="text-xl md:text-2xl text-white mb-2 md:mb-3">대구 동구 동대구로 445, 2층</p>
            <p className="text-lg md:text-xl text-white/50 mb-4 md:mb-6 break-keep">(영남일보 동대구역 방면 옆 건물)</p>
            <KakaoMap />
            <a 
              href="https://naver.me/FzsJSH0h"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-bold transition-all transform hover:scale-105 rounded-xl shadow-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 md:px-6 py-2.5 md:py-3 mb-6 md:mb-8 text-base md:text-lg"
            >
              <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              네이버 지도로 보기
            </a>
            <div className="flex items-start gap-3 md:gap-4 bg-white/10 p-5 md:p-6 rounded-2xl border border-white/10">
              <Car className="w-6 h-6 md:w-8 h-8 text-accent shrink-0" />
              <p className="text-base md:text-lg leading-relaxed text-white/90 break-keep">건물 뒷편 넓은 <strong>전용 주차장</strong> 무료 이용 가능</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center gap-3">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-accent" /> 진료 시간
            </h3>
            <ul className="space-y-3 md:space-y-4 text-lg md:text-xl">
              <li className="flex justify-between border-b border-white/10 pb-3 md:pb-4 items-center">
                <span className="text-white/70">평일</span>
                <span className="text-white font-bold text-right ml-4">11:00 - 19:30</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3 md:pb-4 items-center">
                <span className="text-accent font-bold bg-accent/20 px-2.5 md:px-3 py-1 rounded-lg text-base md:text-lg whitespace-nowrap">점심 진료 실시</span>
                <span className="text-accent font-bold text-right ml-4">11:30 - 13:00</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3 md:pb-4 items-center">
                <span className="text-white/90 font-bold bg-white/10 px-2.5 md:px-3 py-1 rounded-lg text-base md:text-lg whitespace-nowrap border border-white/20">점심시간</span>
                <span className="text-white/90 text-right ml-4">14:00 - 15:00</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3 md:pb-4 items-center">
                <span className="text-accent font-bold bg-accent/20 px-2.5 md:px-3 py-1 rounded-lg text-base md:text-lg whitespace-nowrap">토요일</span>
                <span className="text-accent font-bold text-right ml-4">10:00 - 14:00</span>
              </li>
              <li className="flex justify-between pt-3 md:pt-4 items-center">
                <span className="text-red-400">일요일 / 공휴일</span>
                <span className="text-red-400 font-bold text-right ml-4">휴진</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#fff8ea] rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 lg:p-16 text-center border-4 border-accent shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 relative z-10 break-keep">더 이상 통증을 참지 마세요.</h2>
          <p className="text-xl md:text-2xl text-primary/70 mb-8 md:mb-10 relative z-10 break-keep">친절하고 세밀한 상담부터 시작합니다.</p>
          <NaverCTA 
            className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 text-xl md:text-2xl shadow-xl shadow-accent/30 hover:shadow-accent/50 relative z-10" 
            text="지금 네이버로 예약하기" 
            showIcon={true}
          />
        </div>
        
        <div className="flex flex-col items-center mt-12 md:mt-16">
          <div className="flex items-center gap-4 mb-8">
            <a href="https://blog.naver.com/orihani" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-accent hover:text-primary transition-colors rounded-full text-white">
              <Globe className="w-6 h-6" />
              <span className="sr-only">네이버 블로그</span>
            </a>
            <a href="https://www.youtube.com/@%EC%98%A4%EB%A6%AC%ED%95%9C%EC%9D%98%EC%9B%90" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-accent hover:text-primary transition-colors rounded-full text-white">
              <Youtube className="w-6 h-6" />
              <span className="sr-only">유튜브 채널</span>
            </a>
            <a href="https://www.instagram.com/ori.han.i/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-accent hover:text-primary transition-colors rounded-full text-white">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">인스타그램</span>
            </a>
          </div>

          <div className="text-center text-white/40 text-base md:text-lg">
            <p>© {new Date().getFullYear()} 오리한의원. All rights reserved.</p>
            <p className="mt-3 md:mt-4 text-sm md:text-base break-keep">본 페이지의 모든 내용은 의료법을 준수하여 작성되었습니다.<br className="hidden md:block"/>환자 개인의 체질과 상태에 따라 치료 결과가 다를 수 있으며, 시술 전 원장님과의 1:1 상담이 필수입니다.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
