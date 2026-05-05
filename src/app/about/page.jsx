"use client"; // لإضافة حركات تفاعلية

export default function AboutPage() {
  // 🎨 لوحة ألوان الروز المتوافقة مع الهوية الجديدة
  const theme = {
    title: "text-rose-950",
    cardBg: "bg-white/70",
    accent: "bg-rose-600",
    text: "text-slate-700"
  };

  return (
    <div className="min-h-screen py-20 px-6 overflow-hidden" dir="rtl">
      
      <div className="max-w-5xl mx-auto relative z-10 text-right">
        
        {/* العناوين الرئيسية مع حركة دخول */}
        <div className="text-center mb-20 space-y-4">
          <h1 className={`text-5xl md:text-6xl font-black ${theme.title} tracking-tight`}>
            رحلة <span className="text-rose-600 italic underline decoration-rose-200">حكاية بلدنا</span>
          </h1>
          <p className="text-xl text-rose-800/70 font-medium italic">أين يلتقي الماضي بالمستقبل الرقمي</p>
        </div>

        {/* البطاقة الرئيسية - من نحن */}
        <div className={`${theme.cardBg} backdrop-blur-xl border-2 border-rose-50 p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-rose-100/30 relative overflow-hidden group mb-12 transition-all hover:shadow-rose-200/50`}>
          {/* لمسة جمالية في الخلفية */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl group-hover:bg-rose-300/30 transition-all duration-700"></div>
          
          <div className="relative z-10">
            <h2 className={`text-3xl font-black ${theme.title} mb-8 flex items-center gap-4`}>
              <span className="w-12 h-1.5 bg-rose-600 rounded-full"></span>
              هويتنا التعليمية
            </h2>
            <p className={`text-xl md:text-2xl ${theme.text} leading-[1.8] font-medium`}>
              نحن لسنا مجرد منصة تعليمية عادية؛ نحن نافذة رقمية تفتح لطلاب المرحلة الابتدائية آفاقاً جديدة لاستكشاف <span className="font-bold text-rose-700">عظمة التراث المصري</span>. 
              مهمتنا هي تحويل مادة الدراسات الاجتماعية من نصوص صامتة إلى <span className="font-bold text-rose-700">حكايات تفاعلية</span> تلمس قلب وعقل الطالب، 
              مما يساعده على فهم قضايا مجتمعه بوعي وذكاء.
            </p>
          </div>
        </div>

        {/* شبكة الأهداف والرؤية بتصميم زجاجي مطور */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* بطاقة الرؤية */}
          <div className={`${theme.cardBg} backdrop-blur-lg border border-white/50 p-10 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-all duration-500`}>
            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">
              👁️‍🗨️
            </div>
            <h3 className={`text-2xl font-black ${theme.title} mb-4`}>رؤيتنا المستقبيلة</h3>
            <p className={`text-lg ${theme.text} leading-relaxed`}>
              نسعى لأن نكون المرجع الأول للطفل المصري في فهم تاريخه المعاصر، من خلال بناء جيل يمتلك أدوات التفكير النقدي ويعتز بجذوره التاريخية.
            </p>
          </div>

          {/* بطاقة الهدف */}
          <div className={`${theme.cardBg} backdrop-blur-lg border border-white/50 p-10 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-all duration-500`}>
            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">
              🎯
            </div>
            <h3 className={`text-2xl font-black ${theme.title} mb-4`}>أهدافنا الذكية</h3>
            <p className={`text-lg ${theme.text} leading-relaxed`}>
              دمج التكنولوجيا بالتعليم لخلق بيئة اختبارات ذكية ومحتوى بصري جذاب يكسر حاجز الملل الدراسي ويحفز الفضول المعرفي لدى الطلاب.
            </p>
          </div>

        </div>

        {/* قسم إضافي للتفاعل: أرقامنا */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "مادة علمية", val: "+100" },
            { label: "اختبار ذكي", val: "تفاعلي" },
            { label: "دعم فني", val: "24/7" },
            { label: "طلابنا", val: "المستقبل" }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-rose-950/5 rounded-2xl border border-rose-100">
              <div className="text-2xl font-black text-rose-700">{item.val}</div>
              <div className="text-sm font-bold text-rose-900/60 uppercase tracking-widest">{item.label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}