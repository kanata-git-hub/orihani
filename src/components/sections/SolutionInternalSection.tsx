import React from 'react';
import DeokIDyspepsia from '../../assets/deok-i-dyspepsia.webp';
import DeokIFatigue from '../../assets/deok-i-fatigue.webp';
import NaverCTA from '../NaverCTA';
import { CareNote } from '../CareGuide';

const careBookings = {
  digestion: { text: '만성 소화불량 예약', href: 'https://m.booking.naver.com/booking/13/bizes/1520704/items/8114050' },
  fatigue: { text: '만성 피로 예약', href: 'https://m.booking.naver.com/booking/13/bizes/1520704/items/8114052' }
};
function HerbalOffer({ care }: { care: keyof typeof careBookings }) {
  const booking = careBookings[care];
  return <div className="care-offer">
    <p className="care-eyebrow">소화불량·피로 한약 첫 처방</p>
    <p className="care-price">첫 15일 <strong>15만 원</strong></p>
    <p>이후 15일 25만 원 · 30일 45만 원</p>
    <p className="care-note">첫 처방 1인 1회 · 일반 한약 기준 · 녹용 처방 별도</p>
    <div className="care-actions"><NaverCTA {...booking} placement={`care_${care}`} className="care-button" /><a href="tel:0537537797" className="care-phone" onClick={() => { if (typeof (window as any).gtag === 'function') (window as any).gtag('event', 'click_phone', { cta_placement: `care_${care}` }); }}>전화로 문의</a></div>
  </div>;
}
export default function SolutionInternalSection() {
  return <section id="clinic-internal" className="care-section care-internal"><div className="care-shell">
    <article id="clinic-digestion" className="care-article">
      <div className="care-intro"><img src={DeokIDyspepsia} alt="식사 앞에서 속이 불편한 덕이" width="1536" height="1024" loading="lazy" decoding="async" /><header className="care-heading"><h2>만성 소화불량,<br />증상에 맞춘 한약</h2></header></div>
      <h3>어떤 증상이 있으신가요?</h3>
      <div className="care-two-cards">
        <div className="care-card care-peach"><h4>속이 쓰리고<br />화끈거려요</h4><p>심하면 머리로 열이 올라<br />잠들기 어려워요</p><strong>염증·구역감 완화<br />속과 잠을 편안하게</strong></div>
        <div className="care-card care-mint"><h4>잘 체하고<br />막힌 듯 답답해요</h4><p>소화제는 잠깐만 듣고<br />체하는 일이 반복돼요</p><strong>막힌 느낌을 풀고<br />약한 비위를 보해요</strong></div>
      </div>
      <div className="care-highlight"><strong>복용 10일쯤부터</strong><p>쓰리고 막힌 느낌이 풀리기 시작해요</p></div>
      <CareNote /><HerbalOffer care="digestion" />
    </article>
    <article id="clinic-fatigue" className="care-article">
      <div className="care-intro"><img src={DeokIFatigue} alt="잠에서 깨어도 피곤한 덕이" width="1200" height="800" loading="lazy" decoding="async" /><header className="care-heading"><h2>만성 피로,<br />잠과 기력을 함께</h2><p>피곤함 · 나른함 · 기력 저하</p></header></div>
      <div className="care-highlight"><strong>기력과 함께<br />수면 문제를 같이 살펴요</strong></div>
      <h3>함께 나타나는 수면 문제</h3>
      <div className="care-two-cards"><div className="care-card care-peach"><h4>잠들기 어려움</h4><p>스트레스·긴장</p></div><div className="care-card care-blue"><h4>자주 깨는 잠</h4><p>불안·허약</p></div></div>
      <div className="care-highlight care-mint"><p>한약으로</p><strong>수면 개선 + 기력 보충<br />피로 회복</strong></div>
      <div className="care-highlight"><strong>복용 10일쯤부터</strong><p>피로 회복을 느끼기 시작해요</p></div>
      <CareNote /><HerbalOffer care="fatigue" />
    </article>
  </div></section>;
}
