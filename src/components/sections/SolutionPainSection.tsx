import React from 'react';
import NaverCTA from '../NaverCTA';
import { CareQuestions, RecoveryChart } from '../CareGuide';

export default function SolutionPainSection() {
  return <section id="clinic-pain" className="care-section care-dark">
    <div className="care-shell">
      <header className="care-heading">
        <p className="care-eyebrow">만성통증 · 도침 · 약침</p>
        <h2>치료받으면 괜찮다가,<br />다시 아파지나요?</h2>
        <p>통증이 줄어드는 정도와 다시 아파지기까지의 시간을 함께 살핍니다.</p>
      </header>
      <div className="care-grid">
        <div>
          <h3>통증 부위와 움직임에 맞춘 치료</h3>
          <p>오래된 통증도 원인과 상태는 다릅니다. 아픈 위치, 움직임의 제한, 이전 치료 후 변화를 진찰하고 도침·약침 등 필요한 치료를 정합니다.</p>
          <div className="care-treatment">
            <h4>도침</h4><p>진찰에서 유착 등으로 움직임이 제한된 부위가 의심되면, 해당 조직의 긴장과 제한을 풀기 위한 치료로 고려합니다.</p>
            <h4>약침</h4><p>통증과 염증 반응의 완화를 목표로 사용하며, 부위와 상태에 따라 도침과 함께 시행합니다.</p>
          </div>
          <div className="care-highlight"><strong>초기에는 2~3일 간격으로</strong><p>원장의 임상 경험을 바탕으로 한 기본 안내입니다. 치료 반응과 회복 상태를 확인하며 간격을 조절합니다.</p></div>
        </div>
        <div>
          <h3>좋아졌다가 조금 아파져도,<br />전체 경과를 봅니다</h3>
          <RecoveryChart type="pain" />
        </div>
      </div>
      <CareQuestions items={[
        { q: '다시 아프면 치료 효과가 없었던 건가요?', a: '다시 아픈 정도뿐 아니라 통증이 덜한 시간이 길어졌는지, 팔을 들거나 걷는 움직임이 편해졌는지도 함께 봅니다. 통증이 계속 심해지거나 양상이 달라지면 원인과 치료 계획을 다시 확인합니다.' },
        { q: '몇 번 치료하면 되나요?', a: '아픈 기간, 손상 상태, 생활 중 부담에 따라 달라집니다. 첫 진찰에서 치료 방향을 설명하고, 이후 반응을 보며 횟수와 간격을 조정합니다. 그래프의 날짜는 모든 환자에게 같은 결과를 약속하는 일정이 아닙니다.' },
        { q: '도침·약침 후에는 무엇을 알려야 하나요?', a: '시술 후 통증·멍 등이 생길 수 있어 반응을 확인합니다. 붓기나 통증이 심해지거나 열감·발열 등 평소와 다른 증상이 있으면 연락해 주세요. 복용 중인 약과 알레르기 여부도 진찰 때 알려주세요.' }
      ]} />
      <div className="care-actions"><NaverCTA text="통증 진료 예약" placement="care_pain" className="care-button" /><a href="tel:0537537797" className="care-phone">전화로 문의</a></div>
    </div>
  </section>;
}
