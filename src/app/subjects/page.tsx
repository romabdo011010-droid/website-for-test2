"use client";

import Link from 'next/link';

export default function SubjectsPage() {
  const topics = [
    { 
      id: 'subject1', 
      title: 'التراث الثقافي لسكان بلدنا', 
      desc: 'استكشف عادات وتقاليد وفنون الشعب المصري الأصيل من النوبة إلى القناة بأسلوب تفاعلي.',
      image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=2070&auto=format&fit=crop',
    },
    { 
      id: 'subject2', 
      title: 'نماذج للمشكلات الاجتماعية', 
      desc: 'تعرف على التحديات الاجتماعية المعاصرة وكيف تسعى الدولة لبناء مستقبل أفضل ومستدام.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 max-w-6xl mx-auto transition-colors duration-700" dir="rtl">
      
      {/* 1. رأس الصفحة (Header) بتصميم زجاجي روز */}
      <header className="relative h-56 md:h-72 rounded-[3rem] mb-16 overflow-hidden shadow-2xl border border-white/20 group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=2070')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-t from-rose-950/90 via-rose-900/40 to-transparent"></div>
        <div className="absolute bottom-8 right-10 text-white">
          <span className="bg-rose-500/80 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold mb-3 inline-block border border-rose-400/30">
            المنهج المصري الحديث
          </span>
          <h1 className="text-3xl md:text-5xl font-black drop-shadow-xl tracking-tight">
            رحلة المقررات <span className="text-rose-300 italic">2026</span>
          </h1>
        </div>
      </header>

      {/* 2. شبكة الدروس (Topics Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {topics.map((topic) => (
          <div 
            key={topic.id} 
            className="group flex flex-col overflow-hidden rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 border border-white/20 bg-white/40 dark:bg-rose-950/40 backdrop-blur-xl shadow-xl hover:shadow-rose-500/20"
          >
            {/* قسم الصورة */}
            <div className="h-52 relative overflow-hidden">
              <img 
                src={topic.image} 
                alt={topic.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-rose-950/60 to-transparent opacity-60"></div>
            </div>

            {/* قسم المحتوى */}
            <div className="p-8 flex flex-col flex-1 justify-between text-right">
              <div className="mb-6">
                <h2 className="text-2xl font-black mb-3 leading-tight transition-colors duration-700">
                  {topic.title}
                </h2>
                <p className="text-lg opacity-80 leading-relaxed font-medium transition-colors duration-700">
                  {topic.desc}
                </p>
              </div>

              <Link href={`/subjects/${topic.id}`} className="w-full">
                <button className="w-full bg-linear-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-rose-500/30 transition-all active:scale-95 flex items-center justify-center gap-3">
                  ابدأ استكشاف الدرس
                  <span className="text-2xl group-hover:-translate-x-1.25 transition-transform">📖</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* تذييل الصفحة البسيط */}
      <footer className="mt-20 text-center opacity-50 font-bold border-t border-rose-500/10 pt-8 text-sm tracking-widest">
        بوابة التعلم الرقمي • حكاية بلدنا 🇪🇬
      </footer>
    </div>
  );
}