export default function HeritagePro() {
  return (
    <div className="p-4 md:p-10 max-w-6xl mx-auto leading-relaxed text-right font-sans bg-rose-50/20 min-h-screen transition-colors duration-700" dir="rtl">
      
      {/* 1. رأس الصفحة - تصميم بانورامي فاخر */}
      <header className="relative bg-linear-to-br from-[#5a0c1a] to-[#8a1a2f] text-white p-12 md:p-16 rounded-[4rem] mb-20 shadow-2xl overflow-hidden border-b-10 border-rose-300">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 md:text-right text-center">
            <span className="bg-white/15 text-rose-100 px-6 py-1.5 rounded-full text-sm font-black backdrop-blur-md mb-6 inline-block border border-white/10">
              مادة الدراسات الاجتماعية • الصف الرابع الابتدائي
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-lg">
              التراث الثقافي <br/> <span className="text-rose-300">لسكان مصر</span>
            </h1>
          </div>
          <div className="bg-white/10 p-8 rounded-[3rem] backdrop-blur-xl border border-white/20">
             <div className="text-[8rem] leading-none drop-shadow-2xl">🏺</div>
          </div>
        </div>
      </header>

      {/* 2. تعريف التراث - نظام الجانبين */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* الجانب الأيمن: المحتوى النصي */}
          <div className="md:col-span-7 bg-white p-10 md:p-14 rounded-[3.5rem] shadow-xl border-r-12 border-[#5a0c1a]">
            <h2 className="text-4xl font-black text-[#5a0c1a] mb-8 flex items-center gap-4">
               <span>📜</span> ما هو التراث الثقافي؟
            </h2>
            <p className="text-2xl text-rose-950 font-black leading-snug mb-8">
              هو كل ما تركه لنا الأجداد من قيم مادية ومعنوية توارثتها الأجيال عبر الزمان.
            </p>
            <div className="space-y-4">
              {['الصناعات الحرفية التقليدية', 'الفنون الشعبية والأغاني', 'القيم والعادات والتقاليد', 'المواقع الأثرية العريقة'].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-xl font-bold text-rose-800/80 bg-rose-50/50 p-4 rounded-2xl">
                  <span className="w-3 h-3 bg-rose-400 rounded-full"></span> {text}
                </div>
              ))}
            </div>
          </div>
          {/* الجانب الأيسر: العناصر البصرية */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="bg-[#5a0c1a] p-10 rounded-[3rem] text-center shadow-lg transform rotate-2">
               <div className="text-[10rem] drop-shadow-2xl">🏛️</div>
            </div>
            <div className="bg-rose-200 p-8 rounded-[3rem] text-center shadow-inner transform -rotate-2">
               <p className="font-black text-[#5a0c1a] text-xl">تراثنا.. هويتنا الفخورة</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. رحلة المحافظات - توزيع متوازي ومستقل */}
      <section className="mb-24 space-y-12">
        <h2 className="text-4xl font-black text-[#5a0c1a] mb-12 text-center md:text-right border-r-8 border-rose-400 pr-6">نماذج من التراث المصري</h2>
        
        {/* واحة سيوة */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-stretch">
          <div className="md:col-span-7 bg-white p-10 rounded-[3rem] shadow-lg border border-rose-100 flex flex-col justify-center">
             <h3 className="text-3xl font-black text-rose-900 mb-4 italic">واحة سيوة (مطروح)</h3>
             <h4 className="text-xl font-black text-rose-500 mb-3 underline underline-offset-8">عيد السياحة:</h4>
             <p className="text-xl text-rose-950/70 font-bold leading-relaxed">
               يحتفل السكان في منتصف أكتوبر بحصاد التمور والزيتون، ويرتدون الملابس التقليدية ويرددون أغانيهم الخاصة.
             </p>
          </div>
          <div className="md:col-span-3 bg-rose-900 rounded-[3rem] flex items-center justify-center shadow-xl">
             <span className="text-[9rem]">🌵</span>
          </div>
        </div>

        {/* بلاد النوبة */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-stretch">
          <div className="md:col-span-3 bg-rose-200 rounded-[3rem] flex items-center justify-center shadow-inner">
             <span className="text-[9rem]">🚣</span>
          </div>
          <div className="md:col-span-7 bg-[#5a0c1a] text-white p-10 rounded-[3rem] shadow-lg flex flex-col justify-center">
             <h3 className="text-3xl font-black text-rose-200 mb-4 italic">بلاد النوبة (أسوان)</h3>
             <p className="text-xl font-bold leading-relaxed mb-6">
               تراث ممتد لآلاف السنين؛ يحتفلون بـ "اليوم العالمي للنوبة" في 7 يوليو، ولغتهم كانت سر انتصار أكتوبر.
             </p>
             <div className="bg-white/10 p-4 rounded-xl border-r-4 border-rose-400 font-black text-rose-200">
               معلومة: اللغة النوبية هي لغة فريدة يتوارثها الأجيال.
             </div>
          </div>
        </div>

        {/* مدن القناة والصعيد */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white p-10 rounded-[3rem] shadow-lg border-t-8 border-rose-600 flex gap-8 items-center">
              <div className="text-7xl bg-rose-50 p-4 rounded-3xl">🎻</div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-rose-900 mb-2">مدن القناة</h3>
                <p className="font-bold text-rose-800/60 leading-relaxed">آلة السمسمية ورقصة البمبوطية الشهيرة.</p>
              </div>
           </div>
           <div className="bg-white p-10 rounded-[3rem] shadow-lg border-t-8 border-rose-900 flex gap-8 items-center">
              <div className="text-7xl bg-rose-50 p-4 rounded-3xl">⚔️</div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-rose-900 mb-2">صعيد مصر</h3>
                <p className="font-bold text-rose-800/60 leading-relaxed">السيرة الهلالية (الربابة) وفن التحطيب.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. أهمية التراث - تصميم الأثر */}
      <section className="mb-24">
        <div className="bg-[#4a0a16] p-12 md:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
               <h2 className="text-4xl md:text-5xl font-black mb-8 text-rose-300">أهمية التراث الاقتصادي</h2>
               <ul className="space-y-8">
                 {[
                   { t: 'تنشيط السياحة', d: 'جذب الزوار للمهرجانات والآثار.', i: '🌍' },
                   { t: 'فرص عمل للشباب', d: 'وظائف متنوعة في كل المحافظات.', i: '👷' },
                   { t: 'زيادة الدخل القومي', d: 'دعم قوة الاقتصاد المصري.', i: '📈' }
                 ].map((item, i) => (
                   <li key={i} className="flex gap-6 items-start">
                     <span className="text-4xl bg-white/10 p-3 rounded-2xl">{item.i}</span>
                     <div>
                       <h4 className="text-2xl font-black text-rose-100">{item.t}</h4>
                       <p className="text-rose-100/50 font-bold mt-1">{item.d}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>
            <div className="hidden md:flex justify-center">
               <div className="text-[18rem] opacity-20 transform -rotate-12 select-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* الخاتمة - رسالة الطالب */}
      <footer className="text-center bg-white p-14 rounded-[4rem] border-4 border-rose-100 shadow-xl">
        <p className="text-3xl md:text-4xl text-[#5a0c1a] max-w-4xl mx-auto font-black leading-snug italic">
          "تراثنا هو الجذور التي تجعلنا أقوياء.. الحفاظ عليه هو مسؤوليتنا جميعاً."
        </p>
      </footer>

      <div className="mt-12 text-center text-rose-900/30 font-black pb-10">
        بوابة التعلم الرقمي • حكاية بلدنا 
      </div>

    </div>
  );
}