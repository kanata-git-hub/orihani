import React from 'react';
import NaverCTA from '../NaverCTA';
import { RecoveryChart } from '../CareGuide';
export default function SolutionAutoSection() {
  return <section id="clinic-auto" className="care-section care-auto"><div className="care-shell">
    <header className="care-heading"><h2>교통사고 후,<br />통증·동반 증상 치료</h2></header>
    <div className="care-grid">
      <div><h3>회복에는<br />보통 한 달 정도</h3><p>통증은 오르내려요</p><RecoveryChart type="accident" /></div>
      <div><div className="care-card care-mint"><h3>교통사고 환자의 1/2은</h3><p>어지럼 · 구역감 · 두근거림 · 불면<br />중 하나 이상 있습니다.</p><strong>21일(7일씩) 한약으로 치료합니다</strong></div>
      <div className="care-treatment care-auto-treatments"><h3>통증 치료</h3><h4>약침</h4><p>소염</p><h4>추나</h4><p>관절 교정</p><h4>침</h4><p>근육 이완</p></div></div>
    </div>
    <div className="care-actions"><NaverCTA text="교통사고 진료 예약" placement="care_accident" className="care-button" /></div>
  </div></section>;
}
