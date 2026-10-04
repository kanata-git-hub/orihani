import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../../constants/data';

export default function FAQSection() {
  return (
    <section className="py-16 md:py-28 bg-[#fefaf4]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">자주 묻는 질문</h2>
          <p className="text-lg md:text-xl text-primary/70">내원 전 가장 많이 궁금해하시는 점을 모았습니다.</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {FAQ_DATA.map((faq, idx) => (
            <details key={idx} className="group bg-white p-6 md:p-8 rounded-2xl border border-primary/5 shadow-sm" open={idx === 0}>
              <summary className="text-xl md:text-2xl font-bold text-primary flex items-start gap-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-accent shrink-0">Q.</span>
                <span className="break-keep flex-1">{faq.q}</span>
                <ChevronDown aria-hidden="true" className="w-6 h-6 mt-1 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-lg md:text-xl text-primary/70 pl-8 md:pl-10 mt-4 leading-relaxed break-keep">
                <span className="font-bold text-primary/40 mr-2">A.</span>
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
