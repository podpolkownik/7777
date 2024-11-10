import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertCircle, Heart } from 'lucide-react';

export const Story = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
          {...fadeInUp}
        >
          <img 
            src="https://sun9-80.userapi.com/impg/fdY7lBAQhEBWF7bWlNmYUH8Yy9_-XhEEfbpxLQ/qSN2pj-xwOk.jpg?size=1024x1024&quality=96&sign=692f0c36088313db13207b210f11df15&type=album"
            alt="Начало проблемы"
            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
          />
          <div className="space-y-8">
            <motion.h2 
              className="text-3xl font-bold text-gray-900"
              {...fadeInUp}
            >
              Моя история борьбы с недугом
            </motion.h2>
            <motion.div 
              className="prose prose-lg text-gray-700"
              {...fadeInUp}
            >
              <p className="text-lg leading-relaxed">
                В 43 года я столкнулась с серьезной проблемой, которая перевернула мою жизнь. Несмотря на здоровый образ жизни и регулярные упражнения, болезнь застала меня врасплох.
              </p>
              <p className="text-lg leading-relaxed">
                Всё началось с небольшого дискомфорта, которому я поначалу не придала значения. Но постепенно симптомы усиливались, превращая каждый день в настоящее испытание.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <Clock className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Первые симптомы</h3>
            <img 
              src="https://sun9-28.userapi.com/impg/FmvW2hgoRj1c_uoI7I1pgixIxyAncI8_QP4xrQ/Eh2tgoh60NE.jpg?size=810x1080&quality=96&sign=dcf3c83babf9f8f338305ae3bd72f749&type=album"
              alt="Прогрессирование симптомов"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Постоянный дискомфорт
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Проблемы при ходьбе
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <AlertCircle className="w-12 h-12 text-red-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ухудшение состояния</h3>
            <img 
              src="https://sun9-29.userapi.com/impg/4WHWd-2tyo-SKTbk9dTXO2h7nJaca4iKLBKETA/2gKZML6t-SY.jpg?size=864x1080&quality=96&sign=37871613d26c5bace11bb8bdb6edff0e&type=album"
              alt="Ухудшение состояния"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                Сильные боли
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                Бессонница
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <Heart className="w-12 h-12 text-green-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Путь к выздоровлению</h3>
            <img 
              src="https://sun9-55.userapi.com/impg/3Fz1u6eO-kvD47OVq2cu4ZPgbaM8V3QeOP9IoA/y30r4xX1BOw.jpg?size=720x1080&quality=96&sign=ee8ba75fa8ed36765e9bdaa864cf1ff9&type=album"
              alt="После лечения"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Консультация врача
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Полное восстановление
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};