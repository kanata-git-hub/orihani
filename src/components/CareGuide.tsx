import React from 'react';
import PainRecovery from '../assets/pain-recovery.svg';
import AccidentRecovery from '../assets/accident-recovery.svg';

export function RecoveryChart({ type }: { type: 'pain' | 'accident' }) {
  const pain = type === 'pain';
  return <figure className="care-chart">
    <div className="care-legend" aria-hidden="true">
      <span><i />치료를 이어갈 때</span>
      <span><i className="dashed" />{pain ? '치료를 쉬었을 때' : '치료하지 않았을 때'}</span>
    </div>
    <img src={pain ? PainRecovery : AccidentRecovery} width="360" height="350"
      alt={pain ? '0일·3일차·6일차의 통증 기복과 치료 경과를 설명한 예시. 오리한의원 워터마크 포함.' : '사고 직후부터 약 한 달까지 통증이 오르내리는 회복 경과 예시. 오리한의원 워터마크 포함.'}
      loading="lazy" decoding="async" />
    <figcaption>회복기간과 치료에는 개인차가 있습니다.</figcaption>
  </figure>;
}

export function CareNote() {
  return <p className="care-note">회복기간과 치료에는 개인차가 있습니다.</p>;
}
