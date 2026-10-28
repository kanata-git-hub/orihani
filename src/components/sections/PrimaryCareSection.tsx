import React from 'react';
import { ChevronRight } from 'lucide-react';

const primaryCare = [
  { id: 'clinic-digestion', title: '소화불량', description: '소화 한약' },
  { id: 'clinic-fatigue', title: '만성 피로', description: '피로 한약' },
  { id: 'clinic-pain', title: '만성통증', description: '도침·약침' },
];

export default function PrimaryCareSection({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <section className="primary-care" aria-labelledby="primary-care-title">
      <div className="primary-care-shell">
        <h2 id="primary-care-title">오리한의원 주요 진료</h2>
        <div className="primary-care-options">
          {primaryCare.map(({ id, title, description }) => (
            <button key={id} type="button" onClick={() => onSelect(id)} aria-label={`${title} 진료 안내 보기`}>
              <strong>{title}</strong>
              <span>{description}</span>
              <ChevronRight aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
