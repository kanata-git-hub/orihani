import React from 'react';
import NaverCTA from '../NaverCTA';
import { RecoveryChart } from '../CareGuide';
export default function SolutionPainSection() {
  return <section id="clinic-pain" className="care-section care-dark"><div className="care-shell">
    <header className="care-heading"><h2>만성 통증,<br />다시 아프기 전에</h2></header>
    <div className="care-grid"><div>
      <div className="care-treatment col-span-2"><h3>도침 치료</h3><p>납작한 특수침으로 굳은 조직을 풀어<br />만성통증을 치료합니다.</p></div>
      <div className="care-highlight"><p>통증 회복을 목표로</p><strong>2~3일 간격 도침+약침치료</strong></div>
    </div><RecoveryChart type="pain" /></div>
    <div className="care-actions"><NaverCTA text="통증 진료 예약" placement="care_pain" className="care-button" /><a href="tel:0537537797" className="care-phone">전화로 문의</a></div>
  </div></section>;
}
