import React from 'react';
import { motion } from 'motion/react';
import WaitingRoomImage from '../../대기실.jpg';
import TreatmentRoomImage from '../../치료실 전경.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function InteriorSection() {
  return (
    <section className="py-16 md:py-28 bg-[#fefaf4]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">쾌적하고 편안한 진료 환경</h2>
          <p className="text-lg md:text-xl text-primary/70">환자분들이 항상 편안하게 머무르실 수 있도록 정성을 다합니다.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="group">
            <div className="rounded-[2rem] overflow-hidden shadow-lg border-2 border-primary/5 mb-4 relative aspect-[4/3] bg-white">
              <img src={WaitingRoomImage} alt="대기실" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display='none'; }} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-center text-primary">대기실</h3>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="group transition-delay-100">
            <div className="rounded-[2rem] overflow-hidden shadow-lg border-2 border-primary/5 mb-4 relative aspect-[4/3] bg-white">
              <img src={TreatmentRoomImage} alt="치료실 전경" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display='none'; }} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-center text-primary">치료실 전경</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
