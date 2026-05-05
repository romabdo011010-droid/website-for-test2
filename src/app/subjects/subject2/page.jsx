import React from 'react';

export default function SocialIssuesPage() {
  const issues = [
    {
      id: 1,
      title: "مشكلة الأمية الهجائية",
      content: "تُعد عدم قدرة الفرد على القراءة والكتابة من أخطر المشكلات التي تعيق برامج التنمية المستدامة في المجتمع المصري.",
      details: [
        "بلغت نسبة الأمية في مصر عام 2017 نحو 25.8% من إجمالي السكان.",
        "تزداد النسبة بشكل ملحوظ في الريف مقارنة بالمناطق الحضرية.",
        "تعتبر الزيادة السكانية والفقر من أهم أسباب تسرب الأطفال من المدارس."
      ],
      icon: "📚"
    },
    {
      id: 2,
      title: "البطالة والفقر",
      content: "البطالة هي وجود أفراد في سن العمل وقادرون عليه ولكنهم لا يجدون فرص عمل حقيقية.",
      details: [
        "ترتبط البطالة بالأمية والفقر في حلقة تؤثر سلباً على نمو المجتمع.",
        "تؤدي هذه المشكلات إلى تهديد أمن واستقرار الدولة وزيادة معدلات الجريمة."
      ],
      icon: "💼"
    },
    {
      id: 3,
      title: "التعليم عند المصريين القدماء",
      content: "أدرك المصريون القدماء أن التعليم هو أساس بناء الحضارة القوية منذ فجر التاريخ.",
      details: [
        "اخترعوا الكتابة الهيروغليفية واستخدموا ورق البردي لتدوين علومهم وأحداثهم.",
        "أنشأوا جامعة 'أون' (On) التي تُعد أول وأقدم جامعة في تاريخ البشرية.",
        "كانت وظيفة 'الكاتب' تمنح صاحبها تقديراً كبيراً وأعلى مكانة في الدولة."
      ],
      icon: "🏺"
    }
  ];

  return (
    <div className="p-4 md:p-10 max-w-6xl mx-auto leading-relaxed text-right font-sans bg-rose-50/20 min-h-screen transition-colors duration-700" dir="rtl">
      
      {/* 1. رأس الصفحة - تصميم نيتي وروز */}
      <header className="relative bg-linear-to-br from-[#5a0c1a] to-[#8a1a2f] text-white p-12 md:p-16 rounded-[4rem] mb-20 shadow-2xl overflow-hidden border-b-10 border-rose-300">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 md:text-right text-center">
            <span className="bg-white/15 text-rose-100 px-6 py-1.5 rounded-full text-sm font-black backdrop-blur-md mb-6 inline-block border border-white/10">
مادة الدراسات الاجتماعية • الصف الرابع الابتدائي      
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-lg">
              مشكلات مجتمعنا <br/> <span className="text-rose-300">في مصر</span>
            </h1>
          </div>
          <div className="bg-white/10 p-8 rounded-[3rem] backdrop-blur-xl border border-white/20">
             <div className="text-[8rem] leading-none drop-shadow-2xl animate-pulse">📉</div>
          </div>
        </div>
      </header>

      {/* 2. عرض المشكلات - نظام (نص في جنب / أيقونة في جنب) */}
      <section className="mb-24 space-y-16">
        {issues.map((issue, index) => (
          <div key={issue.id} className={`grid grid-cols-1 md:grid-cols-10 gap-8 items-stretch ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* جانب النص - يشغل مساحة أكبر */}
            <div className={`md:col-span-7 bg-white p-10 rounded-[3.5rem] shadow-xl border-r-12 ${index % 2 === 0 ? 'border-[#5a0c1a]' : 'border-rose-400'}`}>
              <h2 className="text-3xl font-black text-[#5a0c1a] mb-6 flex items-center gap-4">
                 <span className="bg-rose-50 p-2 rounded-xl">{issue.icon}</span> {issue.title}
              </h2>
              <p className="text-xl text-rose-950 font-black leading-snug mb-8 opacity-80">
                {issue.content}
              </p>
              <div className="space-y-4">
                {issue.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-4 text-lg font-bold text-rose-800/80 bg-rose-50/50 p-4 rounded-2xl border border-rose-100/50">
                    <span className="w-3 h-3 bg-rose-400 rounded-full mt-2 shrink-0"></span> 
                    <p>{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* جانب الصورة/الأيقونة البصرية */}
            <div className={`md:col-span-3 rounded-[3.5rem] flex items-center justify-center shadow-xl ${index % 2 === 0 ? 'bg-rose-900 text-white' : 'bg-rose-200 text-[#5a0c1a]'}`}>
               <span className="text-[10rem] drop-shadow-2xl hover:scale-110 transition-transform cursor-default">
                  {issue.icon}
               </span>
            </div>
          </div>
        ))}
      </section>

      {/* 3. جهود الدولة - تصميم الأثر الاقتصادي والاجتماعي */}
      <section className="mb-24">
        <div className="bg-[#4a0a16] p-12 md:p-20 rounded-[5rem] text-white shadow-2xl relative overflow-hidden border-b-15 border-rose-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
               <h2 className="text-4xl md:text-5xl font-black mb-10 text-rose-300">كيف تواجه الدولة الأمية؟</h2>
               <ul className="space-y-6">
                 {[
                   { t: 'الهيئة العامة لتعليم الكبار', d: 'تم إنشاؤها عام 1992 لمحو أمية المواطنين.', i: '🏛️' },
                   { t: 'بناء المدارس الجديدة', d: 'لاستيعاب كل الأطفال ومنع ظاهرة التسرب.', i: '🏗️' },
                   { t: 'رفع الوعي المجتمعي', d: 'مبادرات لتوضيح أهمية التعليم لمستقبل الفرد.', i: '📢' },
                   { t: 'تطوير المناهج الرقمية', d: 'مواكبة العصر التكنولوجي والتحول الرقمي.', i: '💻' }
                 ].map((item, i) => (
                   <li key={i} className="flex gap-6 items-start bg-white/5 p-5 rounded-4xl border border-white/10 hover:bg-white/10 transition-all">
                     <span className="text-3xl bg-rose-600 p-3 rounded-2xl shadow-lg">{item.i}</span>
                     <div>
                       <h4 className="text-xl font-black text-rose-100">{item.t}</h4>
                       <p className="text-rose-100/50 font-bold mt-1 text-sm">{item.d}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>
            <div className="hidden md:flex justify-center items-center">
               <div className="text-[20rem] opacity-10 transform rotate-12 select-none font-serif">GOV</div>
               <div className="absolute text-[12rem] animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* الخاتمة - رسالة الطالب */}
      <footer className="text-center bg-white p-14 rounded-[4.5rem] border-4 border-rose-100 shadow-xl">
        <p className="text-3xl md:text-4xl text-[#5a0c1a] max-w-4xl mx-auto font-black leading-snug italic">
          "بالعلم ترتقي الأمم.. وبوعينا نقضي على المشكلات لنبني مصر المستقبل."
        </p>
      </footer>

      <div className="mt-12 text-center text-rose-900/30 font-black pb-10 tracking-widest uppercase">
        بوابة التعلم الرقمي • حكاية بلدنا 
      </div>

    </div>
  );
}