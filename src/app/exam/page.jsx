"use client";
import { useState } from 'react';

export default function InteractiveExam() {
  const questions = [
    // --- المجموعة الأولى: التراث الثقافي (10 أسئلة) ---
    { q: "أي من المحافظات التالية يشتهر سكانها بإنشاد السيرة الهلالية؟", options: ["القاهرة", "مطروح", "قنا", "بورسعيد"], ans: 2 },
    { q: "تعد جامعة ......... أول جامعة في التاريخ في مصر القديمة.", options: ["طيبة", "أون", "منف", "بوتو"], ans: 1 },
    { q: "يحتفل سكان واحة سيوة بعيد حصاد التمور والزيتون في شهر .........", options: ["يناير", "مايو", "أغسطس", "أكتوبر"], ans: 3 },
    { q: "آلة السمسمية والرقصات الفلكلورية (البمبوطية) تشتهر بها مدن .........", options: ["الصعيد", "القناة", "سيناء", "النوبة"], ans: 1 },
    { q: "تنتشر رقصة 'التحطيب' كفن تراثي عريق بين سكان .........", options: ["الوجه البحري", "مدن القناة", "صعيد مصر", "سيناء"], ans: 2 },
    { q: "استخدم الجيش المصري اللغة ......... كشفرة في حرب أكتوبر 1973.", options: ["العربية", "النوبية", "الإنجليزية", "الهيروغليفية"], ans: 1 },
    { q: "تعتبر الكتابة ......... هي أول كتابة اخترعها المصريون القدماء.", options: ["المسمارية", "اليونانية", "الهيروغليفية", "القبطية"], ans: 2 },
    { q: "تعتبر 'سباقات الهجين' (الإبل) من أشهر الرياضات التراثية في .........", options: ["سيناء", "النوبة", "سيوة", "المنوفية"], ans: 0 },
    { q: "يرتبط فن التحطيب عند المصريين القدماء بالملك .........", options: ["رمسيس الثاني", "أمنحتب الثالث", "خوفو", "توت عنخ آمون"], ans: 1 },
    { q: "تقع محمية 'الغابة المتحجرة' في محافظة .........", options: ["الجيزة", "القاهرة", "الفيوم", "الإسكندرية"], ans: 1 },

    // --- المجموعة الثانية: المشكلات الاجتماعية (10 أسئلة) ---
    { q: "تعد مشكلة ......... هي السبب الرئيسي لانتشار الجهل والخرافات.", options: ["البطالة", "الفقر", "الأمية الهجائية", "التلوث"], ans: 2 },
    { q: "أقل محافظات مصر من حيث نسبة الأمية هي محافظة .........", options: ["المنيا", "بني سويف", "البحر الأحمر", "قنا"], ans: 2 },
    { q: "تزداد نسبة الأمية في ......... أكثر من المدن.", options: ["المصانع", "الريف", "النوادي", "المدارس"], ans: 1 },
    { q: "يعد عدم قدرة الفرد على الوصول للمعلومات عبر التكنولوجيا أمية .........", options: ["هجائية", "معلوماتية", "بصرية", "سمعية"], ans: 1 },
    { q: "من النتائج المترتبة على مشكلة البطالة .........", options: ["زيادة الوعي", "تحسن المعيشة", "تهديد أمن المجتمع", "توفير العمل"], ans: 2 },
    { q: "ترجع زيادة نسبة الأمية في مصر بشكل أساسي إلى .........", options: ["النمو السكاني", "كثرة المدارس", "التطور التكنولوجي", "قلة السكان"], ans: 0 },
    { q: "تسعى الدولة للقضاء على الأمية من خلال إنشاء .........", options: ["المطاعم", "الهيئة العامة لتعليم الكبار", "النوادي الرياضية", "المولات"], ans: 1 },
    { q: "ترتبط مشكلة الأمية بمشكلتي الفقر و .........", options: ["الصحة", "البطالة", "التجارة", "السياحة"], ans: 1 },
    { q: "أعلى محافظات مصر في نسبة الأمية هي محافظة .........", options: ["بورسعيد", "المنيا", "القاهرة", "السويس"], ans: 1 },
    { q: "يوم 8 سبتمبر من كل عام هو اليوم الدولي لـ .........", options: ["الطفولة", "محو الأمية", "البيئة", "المرأة"], ans: 1 }
  ];

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [feedback, setFeedback] = useState(Array(questions.length).fill(null));

  const handleSelect = (qIndex, oIndex) => {
    if (userAnswers[qIndex] !== null) return;
    const isCorrect = oIndex === questions[qIndex].ans;
    const newAnswers = [...userAnswers];
    newAnswers[qIndex] = oIndex;
    setUserAnswers(newAnswers);
    const newFeedback = [...feedback];
    newFeedback[qIndex] = isCorrect ? 'correct' : 'wrong';
    setFeedback(newFeedback);
  };

  const finalScore = userAnswers.reduce((acc, curr, idx) => {
    return curr === questions[idx].ans ? acc + 1 : acc;
  }, 0);

  const isFinished = !userAnswers.includes(null);

  return (
    <div className="min-h-screen bg-rose-50/50 dark:bg-[#1a0509] p-4 md:p-8 transition-colors duration-700" dir="rtl">
      <div className="max-w-4xl mx-auto">
        
        {/* هيدر نيتي وروز */}
        <header className="bg-linear-to-br from-[#5a0c1a] to-[#8a1a2f] p-10 md:p-14 rounded-[3.5rem] shadow-2xl mb-12 text-white text-center border-b-8 border-rose-300 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 text-[10rem] opacity-10 rotate-12">🎓</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">الاختبار الشامل ياعباقرة 🧠</h1>
          <p className="text-xl font-bold text-rose-200 opacity-90"> أمامك 20 سؤالاً.. اقرأ جيداً ثم أجب</p>
          <div className="mt-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-8 py-3 rounded-2xl border border-white/20">
             <span className="text-lg">النتيجة الحالية:</span>
             <span className="text-rose-300 font-black text-3xl">{finalScore}</span>
          </div>
        </header>

        {/* قائمة الأسئلة */}
        <div className="space-y-10">
          {questions.map((item, qIndex) => (
            <div key={qIndex} className="bg-rose-100/40 dark:bg-rose-950/20 backdrop-blur-xl p-6 md:p-10 rounded-[3rem] shadow-xl border border-rose-200/50 dark:border-rose-900/30 relative transition-all duration-300 hover:shadow-rose-200/40 group">
              
              <div className={`absolute right-0 top-0 w-3 h-full rounded-l-full transition-colors duration-500 ${feedback[qIndex] === 'correct' ? 'bg-green-500' : feedback[qIndex] === 'wrong' ? 'bg-rose-400' : 'bg-rose-200 group-hover:bg-rose-400'}`}></div>

              <div className="flex items-start gap-5 mb-8">
                <span className="bg-[#5a0c1a] text-rose-100 w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl shrink-0 shadow-lg shadow-rose-900/30">
                  {qIndex + 1}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#5a0c1a] dark:text-rose-100 leading-tight pt-2">
                  {item.q}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {item.options.map((opt, oIndex) => {
                  const isSelected = userAnswers[qIndex] === oIndex;
                  const isCorrectAnswer = oIndex === item.ans;
                  
                  let btnStyle = "bg-white/80 dark:bg-rose-900/20 border-rose-200 dark:border-rose-900/40 text-slate-700 dark:text-rose-100 shadow-sm hover:border-rose-400 hover:bg-rose-50";
                  
                  if (userAnswers[qIndex] !== null) {
                    if (isSelected) {
                      // تم تخفيف اللون الأحمر هنا إلى rose-500
                      btnStyle = isCorrectAnswer ? "bg-green-600 border-green-700 text-white shadow-lg scale-95" : "bg-rose-500 border-rose-600 text-white shadow-lg scale-95";
                    } else if (isCorrectAnswer) {
                      btnStyle = "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-300 border-dashed";
                    } else {
                      btnStyle = "bg-rose-50/30 dark:bg-rose-950/10 border-transparent text-rose-300 dark:text-rose-900 opacity-40 shadow-none";
                    }
                  }

                  return (
                    <button
                      key={oIndex}
                      onClick={() => handleSelect(qIndex, oIndex)}
                      disabled={userAnswers[qIndex] !== null}
                      className={`p-5 rounded-3xl border-2 text-xl font-black transition-all flex items-center gap-4 ${btnStyle}`}
                    >
                      <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold opacity-60 shrink-0">
                        {oIndex + 1}
                      </div>
                      <span className="leading-tight">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {feedback[qIndex] && (
                <div className={`mt-6 p-4 rounded-2xl font-black text-center text-lg ${feedback[qIndex] === 'correct' ? 'text-green-600 dark:text-green-400' : 'text-rose-500 dark:text-rose-400'}`}>
                   {feedback[qIndex] === 'correct' ? "أصبت! إجابة عبقرية 🎯" : "للأسف خطأ.. الإجابة الصحيحة بالأخضر"}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* لوحة النتائج النهائية */}
        {isFinished && (
          <div className="mt-20 bg-linear-to-b from-[#4a0a16] to-[#2a050d] text-white p-12 md:p-20 rounded-[5rem] text-center shadow-3xl border-b-20 border-rose-400">
            <h2 className="text-4xl font-black mb-6">انتهت الرحلة! 🏁</h2>
            <div className="text-[10rem] font-black text-rose-300 leading-none mb-8 drop-shadow-2xl">
                {finalScore}<span className="text-4xl opacity-50 text-white">/20</span>
            </div>
            
            <div className="text-2xl font-bold mb-12 max-w-lg mx-auto leading-relaxed text-rose-100/80">
              {finalScore === 20 ? "أنت أسطورة! ملك الدراسات الاجتماعية بلا منازع 🌟👑" : 
               finalScore >= 15 ? "رائع جداً! مستواك متميز ونفتخر بك ⭐" : 
               finalScore >= 10 ? "جيد جداً، مراجعة بسيطة وستصبح بطلاً 📚" : 
               "لا بأس، المحارب يتعلم من أخطائه! حاول مرة أخرى 💪"}
            </div>

            <button 
              onClick={() => window.scrollTo({top:0, behavior:'smooth'}) + setTimeout(() => window.location.reload(), 800)}
              className="bg-rose-400 text-[#5a0c1a] px-24 py-6 rounded-full font-black text-3xl hover:bg-rose-300 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-rose-950/50"
            >
              إعادة الاختبار 🔄
            </button>
          </div>
        )}

        <footer className="mt-20 text-center text-rose-900/40 dark:text-rose-100/20 font-black pb-20 tracking-tighter uppercase">
            بوابة التعلم الرقمي • حكاية بلدنا 🇪🇬
        </footer>
      </div>
    </div>
  );
}