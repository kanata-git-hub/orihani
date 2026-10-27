import React from 'react';

export function RecoveryChart({ type }: { type: 'pain' | 'accident' }) {
  const pain = type === 'pain';
  return <figure className="care-chart">
    <div className="care-legend" aria-hidden="true">
      <span><i />치료를 이어갈 때</span>
      <span><i className="dashed" />{pain ? '치료를 쉬었을 때' : '치료하지 않았을 때'}</span>
    </div>
    {/* Inline SVG inherits the page font; external SVG images cannot. */}
    <svg xmlns="http://www.w3.org/2000/svg" width="360" height="350" viewBox="0 0 360 350"
      className="mx-auto block h-auto w-full max-w-[480px] max-[639px]:max-w-[300px]"
      role="img"
      aria-label={pain ? '0일·3일차·6일차의 통증 기복과 치료 경과를 설명한 예시. 오리한의원 워터마크 포함.' : '사고 직후부터 약 한 달까지 통증이 오르내리는 회복 경과 예시. 오리한의원 워터마크 포함.'}>
      <title>{pain ? '만성통증 치료 경과 예시' : '교통사고 후 회복 경과 예시'}</title>
      <desc>{pain ? '통증이 오르내리며 줄어드는 경과와 치료를 쉬었을 때 다시 아플 수 있는 경과를 설명한 그림입니다.' : '사고 후 한 달 정도의 기간에 통증이 오르내리는 모습을 설명한 그림입니다.'}</desc>
      <rect width="360" height="350" rx="20" fill="#fffdf8" />
      <g fontFamily="inherit" fill="#62574d" fontSize="20">
        <text x="24" y="30">통증 강도</text>
        <path d="M34 48V276H336" fill="none" stroke="#baa99b" strokeWidth="1.5" />
        <path d="M34 110H326 M34 190H326" fill="none" stroke="#e8ded1" strokeDasharray="3 6" />
        <text x="180" y="174" textAnchor="middle" fontSize="43" fontWeight="700" fill="#552c24" opacity=".13" transform="rotate(-12 180 174)">오리한의원</text>
        <path d={pain
          ? 'M158 143 C199 108 252 70 326 66'
          : 'M34 72 C55 85 65 105 85 100 S107 76 128 106 S151 128 174 114 S194 135 215 126 S239 111 260 135 S302 151 326 139'}
          fill="none" stroke="#b94c2e" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 7" />
        <path d={pain
          ? 'M34 65 C50 92 57 155 80 163 S132 147 158 143 C177 170 184 212 206 214 S252 193 270 191 C291 215 297 239 326 248'
          : 'M34 72 C50 85 62 140 83 132 S104 101 124 137 S151 192 173 171 S195 183 216 202 S242 183 263 219 S300 251 326 259'}
          fill="none" stroke="#21735d" strokeWidth="5" strokeLinecap="round" />
        {pain && <g fill="#e0a41c" stroke="#fffdf8" strokeWidth="2">
          <circle cx="34" cy="65" r="6" /><circle cx="158" cy="143" r="6" /><circle cx="270" cy="191" r="6" />
        </g>}
        {pain ? <>
          <text x="34" y="304">0일</text>
          <text x="158" y="304" textAnchor="middle">3일차</text>
          <text x="270" y="304" textAnchor="middle">6일차</text>
        </> : <>
          <text x="34" y="304">사고 직후</text>
          <text x="326" y="304" textAnchor="end">약 한 달</text>
        </>}
        <text x="180" y="335" textAnchor="middle" fontSize="13" fill="#76675b">© 오리한의원</text>
      </g>
    </svg>
    <figcaption>회복기간과 치료에는 개인차가 있습니다.</figcaption>
  </figure>;
}

export function CareNote() {
  return <p className="care-note">회복기간과 치료에는 개인차가 있습니다.</p>;
}
