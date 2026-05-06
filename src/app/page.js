import Link from 'next/link';

export default function HomePage() {
  // 🎨 لوحة تحكم الألوان - تم اختيار درجات الروز والوردي الدافئ
  const styleConfig = {
    titleColor: "text-rose-950",      // لون العنوان غامق مائل للروز
    subtitleColor: "text-slate-700",
    cardBg: "bg-white/70",            // خلفية زجاجية شفافة
    // تدرجات ألوان الروز للمربعات
    roseGradient1: "from-rose-400 to-rose-600",
    roseGradient2: "from-pink-400 to-rose-500",
    accentText: "text-rose-600",
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden" dir="rtl">
      
      {/* 🖼️ خلفية الموقع (الصورة التحفة) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,241,242,0.6), rgba(255,255,255,0.7)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* المحتوى الفعلي */}
      <div className="relative z-10 w-full max-w-5xl text-center">
        
        {/* العنوان الرئيسي */}
        <header className="mb-16">
          <h1 className={`text-5xl md:text-7xl font-black ${styleConfig.titleColor} mb-6 tracking-tight`}>
            منصة <span className="bg-linear-to-l from-rose-600 to-rose-400 bg-clip-text text-transparent italic">"حكاية بلدنا"</span>
          </h1>
          <p className={`text-xl md:text-2xl ${styleConfig.subtitleColor} max-w-2xl mx-auto leading-relaxed font-medium`}>
            رحلتك نحو استكشاف التراث المصري وحل قضايا المجتمع بأسلوب رقمي ممتع.
          </p>
        </header>

        {/* المربعين (البطاقات المطورة بألوان الروز) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* بطاقة المواد الدراسية */}
          <Link href="/subjects" 
            className={`group relative p-10 ${styleConfig.cardBg} backdrop-blur-md border-2 border-rose-50 rounded-[3rem] shadow-2xl shadow-rose-100/40 transition-all duration-500 hover:-translate-y-3`}
          >
            <div className={`w-20 h-20 mx-auto bg-linear-to-br ${styleConfig.roseGradient1} rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-lg shadow-rose-200 group-hover:rotate-6 transition-transform`}>
              📚
            </div>
            <h2 className={`text-3xl font-black ${styleConfig.titleColor} mb-4`}>المواد الدراسية</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              تصفح الدروس والمناهج التعليمية بأسلوب تفاعلي حديث.
            </p>
            <div className={`mt-6 font-bold ${styleConfig.accentText} flex items-center justify-center gap-2 group-hover:gap-4 transition-all`}>
              ابدأ الرحلة الآن <span>←</span>
            </div>
          </Link>

          {/* بطاقة الاختبارات */}
          <Link href="/exam" 
            className={`group relative p-10 ${styleConfig.cardBg} backdrop-blur-md border-2 border-rose-50 rounded-[3rem] shadow-2xl shadow-rose-100/40 transition-all duration-500 hover:-translate-y-3`}
          >
            <div className={`w-20 h-20 mx-auto bg-linear-to-br ${styleConfig.roseGradient2} rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-lg shadow-rose-200 group-hover:-rotate-6 transition-transform`}>
              📝
            </div>
            <h2 className={`text-3xl font-black ${styleConfig.titleColor} mb-4`}>الاختبارات</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              قيم معلوماتك وتحدى نفسك في اختبارات ذكية وشاملة.
            </p>
            <div className={`mt-6 font-bold ${styleConfig.accentText} flex items-center justify-center gap-2 group-hover:gap-4 transition-all`}>
              اختبر نفسك <span>←</span>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}