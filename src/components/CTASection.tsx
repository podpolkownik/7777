import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Check, Star } from 'lucide-react';

export const CTASection = () => (
  <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
    <motion.div 
      className="container mx-auto px-4 max-w-4xl text-center relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex items-center justify-center gap-2 mb-4"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        ))}
      </motion.div>
      
      <motion.h2 
        className="text-4xl font-bold mb-8"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Специальное предложение
      </motion.h2>
      
      <motion.div 
        className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg mb-8"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <Clock className="w-6 h-6" />
          <span className="text-xl">Ограниченное предложение</span>
        </div>
        
        <div className="text-7xl font-bold mb-4">$99</div>
        <p className="text-xl opacity-90 mb-8">Полный курс лечения Vitacaps</p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
            <Check className="w-6 h-6 text-green-400" />
            <span className="text-lg">Быстрый результат</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
            <Check className="w-6 h-6 text-green-400" />
            <span className="text-lg">Без побочных эффектов</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
            <Check className="w-6 h-6 text-green-400" />
            <span className="text-lg">Натуральный состав</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
            <Check className="w-6 h-6 text-green-400" />
            <span className="text-lg">Гарантия качества</span>
          </div>
        </div>

        <motion.button 
          className="bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition-colors flex items-center mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Заказать сейчас
          <ArrowRight className="ml-2 w-6 h-6" />
        </motion.button>
      </motion.div>
      
      <motion.p 
        className="text-sm opacity-75"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        * Предложение действует ограниченное время
      </motion.p>
    </motion.div>
    
    <div className="absolute inset-0 bg-blue-600 opacity-10 background-pattern"></div>
  </section>
);