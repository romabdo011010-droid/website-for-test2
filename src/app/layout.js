"use client";

import { useState } from "react";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  // الحالة الافتراضية true ليبدأ الموقع "مظلم"
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "حول المنصة", href: "/about" },
    { name: "المواد الدراسية", href: "/subjects" },
    { name: "الاختبارات", href: "/exam" },
      ];

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <html lang="ar" dir="rtl">
      <body 
        className={`antialiased font-sans transition-all duration-700 ${
          isDarkMode ? "text-rose-100" : "text-rose-950"
        }`}
        style={{
          backgroundImage: isDarkMode 
            ? `linear-gradient(to bottom, rgba(30, 10, 20, 0.92), rgba(20, 10, 15, 0.88)), url('https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070')`
            : `linear-gradient(to bottom, rgba(255, 245, 247, 0.85), rgba(255, 240, 245, 0.75)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      >
        {/* الشريط العلوي */}
        <nav className={`sticky top-0 z-50 transition-all duration-500 border-b shadow-xl ${
          isDarkMode 
          ? "bg-rose-950/80 border-rose-900 shadow-black/20" 
          : "bg-rose-50/80 border-rose-100 shadow-rose-100/50" 
        } backdrop-blur-xl`}>
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* اللوجو */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-linear-to-br from-rose-500 to-rose-700 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
                <span className="text-[10px] font-bold leading-tight text-center">منصة<br/>تعليمية</span>
              </div>
              <span className={`text-2xl font-black transition-colors ${isDarkMode ? "text-rose-300" : "text-rose-900"}`}>
                حكاية بلدنا
              </span>
            </Link>

            {/* الروابط */}
            <div className="hidden md:flex items-center gap-8"> 
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`text-base font-bold transition-all duration-300 ${
                    isDarkMode ? "text-rose-200 hover:text-white" : "text-rose-700 hover:text-rose-500"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* زر تبديل الوضع */}
            <button 
              onClick={toggleDarkMode}
              className={`p-2 w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 shadow-xl transform active:scale-90 ${
                isDarkMode 
                ? "bg-rose-900 border-rose-700 text-yellow-400" 
                : "bg-white border-rose-200 text-rose-600" 
              }`}
            >
              <span className="text-3xl select-none leading-none">
                {isDarkMode ? "🌙" : "☀️"} 
              </span>
            </button>

          </div>
        </nav>
        
        {/* المحتوى الرئيسي */}
        <main className="min-h-screen relative z-10">
          {children}
        </main>

        {/* تذييل الصفحة - مبسط ليحتوي على الحقوق فقط */}
        <footer className={`transition-all duration-500 py-10 px-6 border-t backdrop-blur-md ${
          isDarkMode ? "bg-rose-950/95 border-rose-900 text-rose-300" : "bg-rose-50/90 border-rose-100 text-rose-900"
        }`}>
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
             <p className="text-sm md:text-base font-bold opacity-80 text-center">
                تصميم الطالبة: جنات أيمن سيد عثمان - كلية التربية النوعية - تكنولوجيا التعليم
             </p>
             <p className="text-xs font-black opacity-60 tracking-widest">
                © 2026 منصة حكاية بلدنا التعليمية
             </p>
          </div>
        </footer>
      </body>
    </html>
  );
}