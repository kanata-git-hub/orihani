import React from 'react';
import DeokIDyspepsia from '../../assets/deok-i-dyspepsia.webp';
import DeokIFatigue from '../../assets/deok-i-fatigue.webp';
import NaverCTA from '../NaverCTA';
import { CareQuestions, CareNote } from '../CareGuide';

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
    <p className="care-note">첫 처방 1인 1회 · 일반 한약 기준 · 녹용 처방 별도<br />진찰 후 처방 여부와 복용 기간을 안내합니다.</p>
    <div className="care-actions"><NaverCTA {...booking} placement={`care_${care}`} className="care-button" /><a href="tel:0537537797" className="care-phone" onClick={() => { if (typeof (window as any).gtag === 'function') (window as any).gtag('event', 'click_phone', { cta_placement: `care_${care}` }); }}>전화로 문의</a></div>
  </div>;
}
export default function SolutionInternalSection() {
  return <section id="clinic-internal" className="care-section care-internal">
    <div className="care-shell">
      <header className="care-heading"><p className="care-eyebrow">만성 소화불량 · 만성 피로</p><h2>또 더부룩? 자도 피곤?<br />증상에 맞춘 한약 진료</h2><p>익숙해진 불편함도, 치료를 시작할 이유가 됩니다.</p></header>
      <article id="clinic-digestion" className="care-article">
        <div className="care-intro"><img src={DeokIDyspepsia} alt="식사 앞에서 속이 불편한 덕이" width="1536" height="1024" loading="lazy" decoding="async" /><div><p className="care-eyebrow">01 · 만성 소화불량</p><h3>쓰린 속과 막힌 속,<br />불편한 양상부터 봅니다.</h3><p>조금만 먹어도 답답한지, 속쓰림과 구역감이 더 힘든지. 식후 불편감·식욕·수면을 함께 살펴 처방합니다.</p></div></div>
        <div className="care-two-cards">
          <div className="care-card care-peach"><h4>속이 쓰리고<br />화끈거려요</h4><p>속쓰림과 구역감, 불편해서 잠들기 어려운 상태까지 함께 확인합니다.</p><strong>쓰림과 구역감을 다스리고<br />속과 잠을 편안하게</strong></div>
          <div className="care-card care-mint"><h4>잘 체하고<br />막힌 듯 답답해요</h4><p>소화제를 먹어도 체하는 일이 반복되고, 식후 더부룩함이 오래 남는지 살핍니다.</p><strong>막힌 느낌을 풀고<br />약한 비위를 보해요</strong></div>
        </div>
        <div className="care-highlight"><strong>복용 10일쯤부터의 변화를 확인합니다</strong><p>원장의 임상 경험상, 이 무렵 쓰림과 막힌 느낌이 줄기 시작하는 경우를 봅니다. 식사량·식후 불편감·구역감의 변화를 함께 확인합니다.</p></div>
        <CareQuestions items={[
          { q: '검사에서 큰 이상이 없어도 진료받을 수 있나요?', a: '기존 검사 결과와 복용약을 확인하고 반복되는 증상의 양상을 살핍니다. 검사상 큰 이상이 없더라도 불편감은 있을 수 있습니다. 원인 확인이 더 필요하면 추가 검사를 안내합니다.' },
          { q: '10일이 지나도 그대로면 어떻게 하나요?', a: '복용 10일은 경과를 살피는 참고 시점입니다. 호전 정도와 새로 생긴 불편을 확인하고 처방이나 진료 계획을 조정합니다. 체중이 이유 없이 줄거나 검은 변, 반복되는 구토가 있으면 먼저 원인 평가가 필요합니다.' }
        ]} />
        <CareNote /><HerbalOffer care="digestion" />
      </article>
      <article id="clinic-fatigue" className="care-article">
        <div className="care-intro"><img src={DeokIFatigue} alt="잠에서 깨어도 피곤한 덕이" width="1200" height="800" loading="lazy" decoding="async" /><div><p className="care-eyebrow">02 · 만성 피로</p><h3>잠과 기력을 함께,<br />낮의 피로까지 살핍니다.</h3><p>아침부터 몸이 무겁고 퇴근하면 눕기 바쁜가요? 기력이 떨어진 상태와 잠을 방해하는 문제를 함께 봅니다.</p></div></div>
        <div className="care-two-cards">
          <div className="care-card care-peach"><h4>잠들기 어려워요</h4><p>피곤한데도 생각이 많고 긴장이 풀리지 않는지, 잠들기까지 얼마나 걸리는지 확인합니다.</p></div>
          <div className="care-card care-blue"><h4>자주 깨고 개운하지 않아요</h4><p>밤중에 깨는 횟수와 다시 잠드는 시간, 아침과 낮의 기력 저하를 함께 살핍니다.</p></div>
        </div>
        <div className="care-highlight care-mint"><strong>수면 개선 + 기력 보충</strong><p>증상에 맞춘 한약으로 잠의 불편을 다스리고 기력을 보충해, 낮의 피로 회복을 목표로 합니다.</p></div>
        <div className="care-callout"><h4>복용 10일쯤, 잠과 낮의 변화를 함께</h4><p>원장의 임상 경험상 이 무렵 피로 회복을 느끼기 시작하는 경우를 봅니다. 잠드는 시간, 깨는 횟수, 아침의 개운함과 오후의 피로를 확인합니다.</p></div>
        <CareQuestions items={[
          { q: '피곤하면 모두 보약을 먹으면 되나요?', a: '피로의 원인은 다양합니다. 수면·식사·복용약과 기존 검사 결과를 확인하고, 빈혈·갑상선 문제·수면무호흡 등 원인 평가가 필요하면 검사를 안내합니다. 진찰 후 한약 치료가 적절한지 판단합니다.' },
          { q: '잠은 괜찮은데 기운만 없으면요?', a: '수면 문제가 꼭 있어야 하는 것은 아닙니다. 피로가 심해지는 시간대, 식사와 소화 상태, 활동 후 회복 정도를 중심으로 처방 방향을 정합니다.' }
        ]} />
        <CareNote /><HerbalOffer care="fatigue" />
      </article>
    </div>
  </section>;
}
