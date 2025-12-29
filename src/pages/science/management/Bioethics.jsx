import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaBalanceScale,
  FaShieldAlt,
  FaUserMd,
  FaClipboardList
} from 'react-icons/fa';
import batyralievPhoto from '../../../assets/science/management/batyraliev-235x300.jpeg';

const Bioethics = () => {
  const { t } = useTranslation();

  // Простая функция для получения перевода с fallback
  const getTranslation = (key, fallback = '') => {
    try {
      const translation = t(key, { returnObjects: true });
      
      // Если перевод не найден или это ключ, возвращаем fallback
      if (!translation || translation === key || (typeof translation === 'object' && Object.keys(translation).length === 0)) {
        return fallback;
      }
      
      return translation;
    } catch (error) {
      console.warn(`Translation error for key "${key}":`, error);
      return fallback;
    }
  };

  // Получение строки
  const getString = (key, fallback = '') => {
    const value = getTranslation(key, fallback);
    
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value[0] || fallback;
    if (typeof value === 'object') {
      return value.title || value.name || value.text || fallback;
    }
    return fallback;
  };

  // Получение массива
  const getArray = (key, fallback = []) => {
    const value = getTranslation(key, fallback);
    
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') return [value];
    if (typeof value === 'object') {
      if (value.items) return value.items;
      if (value.tasks) return value.tasks;
      if (value.functions) return value.functions;
      if (value.leadership) return value.leadership;
      if (value.members) return value.members;
      return Object.values(value);
    }
    return fallback;
  };

  // Fallback значения на кыргызском языке
  const kyrgyzFallbacks = {
    back: "Басманага кайтуу",
    badge: "Биоэтика",
    title: "Биоэтика боюнча комитет",
    subtitle: "Илимий иштердин этикалык стандарттарын көзөмөлдөөчү уюм",
    descTitle: "Жалпы маалымат",
    descText: "Биоэтика боюнча комитет университетте жүргүзүлгөн илимий-изилдөө иштеринин этикалык жоболоруна ылайыктуулугун текшерүүчү орган болуп саналат. Комитет илимий изилдөөлөрдүн этикалык стандарттарын сактоону камсыз кылат жана илимпоздорго кеңеш берүү менен аларды колдоо үчүн түзүлгөн.",
    chairmanTitle: "Комитеттин төрагасы",
    chairmanName: "Батыралиев Талантбек Абдуллаевич",
    chairmanDesc: "Медицина илимдеринин доктору, профессор, Кыргыз Республикасынын медицина илимдеринин академиги. Кесипкөй саламаттыкты сактоо иштеринде 30 жылдан ашык тажрыйбасы бар илимпоз.",
    membersTitle: "Комитеттин мүчөлөрү",
    tasksTitle: "Негизги милдеттер",
    functionsTitle: "Башкы функциялар"
  };

  // Получение данных с fallback
  const tasks = getArray('science.management.bioethics.tasks', [
    "Университетте жүргүзүлгөн илимий-изилдөө иштеринин этикалык жоболоруна ылайыктуулугун текшерүү",
    "Илимий изилдөөлөрдүн планын этикалык талдоодон өткөрүү",
    "Изилдөөлөрдүн катышуучуларынын укуктарын жана коопсуздугун камсыз кылуу",
    "Илимий долбоорлорго биоэтикалык экспертиза жүргүзүү",
    "Илимпоздорго этикалык кеңештерди берүү",
    "Биоэтикалык тартиптер боюнча окутуу жана тарбиялоо иштерин уюштуруу"
  ]);

  const functions = getArray('science.management.bioethics.functions', [
    "Изилдөө долбоорлорун этикалык баалоо",
    "Илимий макалаларды этикалык текшерүү",
    "Катышуучулардын макулдашуу формаларын кароо",
    "Этикалык стандарттардын бузулушуна карата иштерди жүргүзүү",
    "Биоэтика боюнча ички нормативдик-укуктук актыларды иштеп чыгуу",
    "Эл аралык этикалык стандарттарды колдонууну көзөмөлдөө"
  ]);

  const leadership = getArray('science.management.bioethics.leadership', [
    { label: "Туулган күнү", value: "1965-жыл" },
    { label: "Билими", value: "Медицина илимдеринин доктору" },
    { label: "Илимий даражасы", value: "Профессор" },
    { label: "Иштеген жылы", value: "30+ жыл" }
  ]);

  const members = getArray('science.management.bioethics.members', [
    "Абдылдаев Рысбек Алдагандаевич, мед. илимд. докт., профессор",
    "Иманкулова Асел Сансызбаевна, мед. илимд. докт., профессор",
    "Жумадилов Эсенгелди Жумадилович, PhD",
    "Токтогазы Молдалиевич Түлексеев, мед. илимд. докт., профессор",
    "Узакбаев Камчыбек Аскарбекович, мед. илимд. докт., профессор"
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/science/management"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {getString('science.management.bioethics.back', kyrgyzFallbacks.back)}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {getString('science.management.bioethics.badge', kyrgyzFallbacks.badge)}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {getString('science.management.bioethics.title', kyrgyzFallbacks.title)}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {getString('science.management.bioethics.subtitle', kyrgyzFallbacks.subtitle)}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Описание */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaShieldAlt className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {getString('science.management.bioethics.descTitle', kyrgyzFallbacks.descTitle)}
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            {getString('science.management.bioethics.descText', kyrgyzFallbacks.descText)}
          </p>
        </motion.div>

        {/* Председатель комитета */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaUserMd className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {getString('science.management.bioethics.chairmanTitle', kyrgyzFallbacks.chairmanTitle)}
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={batyralievPhoto} 
                alt="Батыралиев Талантбек Абдуллаевич" 
                className="w-64 h-auto rounded-2xl shadow-lg object-cover"
              />
            </motion.div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {getString('science.management.bioethics.chairmanName', kyrgyzFallbacks.chairmanName)}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {getString('science.management.bioethics.chairmanDesc', kyrgyzFallbacks.chairmanDesc)}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-200">
            {/* Безопасный рендеринг leadership */}
            {leadership.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {leadership.map((item, index) => {
                  const label = typeof item === 'object' ? item.label : '';
                  const value = typeof item === 'object' ? item.value : item;
                  
                  return (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-100">
                      <p className="text-gray-700 text-lg">
                        <span className="font-semibold text-[#023E8A]">{label}:</span> {value}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Безопасный рендеринг members */}
            {members.length > 0 && (
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  {getString('science.management.bioethics.membersTitle', kyrgyzFallbacks.membersTitle)}
                </p>
                <div className="space-y-2">
                  {members.map((member, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-gray-100">
                      <p className="text-gray-700">{member}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Основные задачи */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaBalanceScale className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {getString('science.management.bioethics.tasksTitle', kyrgyzFallbacks.tasksTitle)}
            </h2>
          </div>
          <div className="space-y-4">
            {tasks.map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start group"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#023E8A]/10 to-[#0077B6]/10 rounded-lg flex items-center justify-center mr-4 mt-1 group-hover:from-[#023E8A]/20 group-hover:to-[#0077B6]/20 transition-colors">
                  <span className="text-[#023E8A] font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed flex-1">
                  {typeof task === 'string' ? task : task.text || task.title || JSON.stringify(task)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Основные функции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
              <FaClipboardList className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {getString('science.management.bioethics.functionsTitle', kyrgyzFallbacks.functionsTitle)}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {functions.map((func, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all hover:border-[#0077B6]/30"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {typeof func === 'string' ? func : func.text || func.description || JSON.stringify(func)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Bioethics;