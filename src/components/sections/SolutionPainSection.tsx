import React from 'react';
import NaverCTA from '../NaverCTA';
import { RecoveryChart } from '../CareGuide';
export default function SolutionPainSection() {
  return <section id="clinic-pain" className="care-section care-dark"><div className="care-shell">
    <header className="care-heading"><h2>만성 통증,<br />다시 아프기 전에</h2></header>
    <div className="care-grid"><div>
      <h3>치료를 쉬면<br />다시 아플 수 있어요</h3>
      <div className="care-treatment"><h3>치료를 이어가면<br />통증 감소</h3></div>
      <div className="care-highlight"><p>통증 회복을 목표로</p><strong>2~3일 간격 도침+약침치료</strong></div>
    </div><RecoveryChart type="pain" /></div>
    <div className="care-actions"><NaverCTA text="통증 진료 예약" placement="care_pain" className="care-button" /><a href="tel:0537537797" className="care-phone">전화로 문의</a></div>
  </div></section>;
}
