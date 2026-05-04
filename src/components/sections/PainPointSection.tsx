import React from 'react';
import { motion } from 'motion/react';
import CharacterImage from '../../1대1 오원장.png';
import { CLINIC_PAIN_CARDS } from '../../constants/data';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function PainPointSection() {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-primary break-keep">왜 늘 어깨가 뭉치고, 치료받아도 다시 아플까요?</h2>
          <p className="text-xl md:text-2xl text-primary/60 mb-10 md:mb-16 break-keep">잠깐의 완화가 아닌, 근본적인 원인을 찾아야 할 때입니다.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {CLINIC_PAIN_CARDS.map((text, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-[#fff8ea] px-6 py-8 md:py-10 rounded-3xl relative text-center border border-[#ffcd4a]/30 shadow-sm flex items-center justify-center"
            >
              <p className="text-xl md:text-2xl text-primary font-bold leading-relaxed whitespace-pre-line z-10">
                "{text}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="bg-primary/5 border border-primary/20 p-8 md:p-10 rounded-3xl text-primary flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left"
        >
          <div className="w-28 h-28 md:w-40 md:h-40 shrink-0">
            <img src={CharacterImage} alt="오원장 캐릭터" className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">단순 근육 뭉침이 아닙니다.</p>
            <p className="text-xl md:text-2xl leading-relaxed">
              원인은 오래되어 엉겨 붙은 <strong className="bg-accent/40 px-2 pb-1 rounded-lg">유착</strong>과<br />
              무너진 <strong className="bg-accent/40 px-2 pb-1 rounded-lg">대사 밸런스</strong>에 있습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
