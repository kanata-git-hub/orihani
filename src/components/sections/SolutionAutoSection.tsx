import React from 'react';
import NaverCTA from '../NaverCTA';
import { CareQuestions, RecoveryChart } from '../CareGuide';
export default function SolutionAutoSection() {
  return <section id="clinic-auto" className="care-section care-auto"><div className="care-shell">
    <header className="care-heading"><p className="care-eyebrow">교통사고 후 진료</p><h2>목·허리 통증부터<br />어지럼과 잠의 변화까지</h2><p>사고 후 달라진 몸 상태를 함께 살핍니다.</p></header>
    <div className="care-grid">
      <div><h3>통증이 오르내리는<br />회복 과정을 확인합니다.</h3><p>원장의 임상 경험상 회복 과정을 한 달 정도 살펴보는 경우가 많습니다. 하루의 통증만 보지 않고 움직임·수면·일상 복귀를 함께 확인합니다.</p><RecoveryChart type="accident" /></div>
      <div>
        <div className="care-card care-mint"><p className="care-eyebrow">진료실에서 함께 살피는 증상</p><h3>어지럼 · 구역감<br />두근거림 · 불면</h3><p>원장의 임상 경험상, 내원한 교통사고 환자의 약 절반에서 이 중 하나 이상을 함께 호소하는 것으로 체감합니다.</p><p className="care-note">일반 인구의 통계가 아닌 원장의 진료 경험에 따른 설명입니다.</p></div>
        <div className="care-treatment care-auto-treatments"><h4>약침 · 추나 · 침</h4><p>통증 부위와 움직임을 확인하고, 통증·염증 반응과 근육 긴장을 다스리는 치료를 조합합니다.</p><h4>동반 증상에 맞춘 한약</h4><p>필요한 경우 7일씩 경과를 확인하며 총 21일을 기본 안내로 삼습니다. 실제 처방 여부와 기간은 증상·진찰 결과에 따라 정합니다.</p></div>
      </div>
    </div>
    <CareQuestions items={[
      { q: '통증 외의 증상도 말씀드려야 하나요?', a: '네. 사고 이후 생긴 어지럼, 구역감, 두근거림, 잠의 변화도 알려주세요. 기존 증상과 사고 후 달라진 점을 구분해 확인합니다. 모든 증상을 사고 후유증으로 단정하지 않고 필요한 평가를 안내합니다.' },
      { q: '한 달이면 모두 회복되나요?', a: '한 달은 원장의 임상 경험을 바탕으로 경과를 설명하는 참고 기간입니다. 사고의 정도, 손상과 이전 건강 상태에 따라 더 짧거나 길어질 수 있습니다. 호전이 부족하거나 증상이 달라지면 다시 평가합니다.' },
      { q: '사고 후 바로 검사가 필요한 경우도 있나요?', a: '새로 생긴 팔다리의 힘 빠짐이나 보행 이상 등 신경학적 증상이 있으면 신속한 평가가 필요합니다. 처음 받은 검사 결과와 현재 복용약을 알려주시면 진료에 도움이 됩니다.' }
    ]} />
    <div className="care-visit"><div><h3>직장인 점심 진료</h3><p>11:30~13:00에도 진료합니다.<br />휴게시간 14:00~15:00</p></div><NaverCTA text="교통사고 진료 예약" placement="care_accident" className="care-button" /></div>
  </div></section>;
}
