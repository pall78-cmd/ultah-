import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Heart, Stars, Newspaper, Calendar as CalendarIcon, Quote, PenTool, Type, Award, Fingerprint } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isWishOpen, setIsWishOpen] = useState(false);

  const totalPages = 4;

  const handleNext = () => currentPage < totalPages - 1 && setCurrentPage(currentPage + 1);
  const handlePrev = () => currentPage > 0 && setCurrentPage(currentPage - 1);

  return (
    <div className="min-h-screen bg-[#ece9e0] flex items-center justify-center p-2 sm:p-4 font-serif overflow-hidden select-none">
      {/* Container Utama */}
      <div className="relative z-10 w-full max-w-4xl bg-[#fffdfa] shadow-[0_0_60px_rgba(0,0,0,0.15)] border border-[#d1ccc0] h-[90vh] max-h-[750px] flex flex-col rounded-sm overflow-hidden">
        
        {/* Header Koran Klasik - Statis di Atas */}
        <header className="px-4 py-3 sm:px-6 sm:py-4 border-b-4 border-double border-black bg-[#fdfaf5] shrink-0">
          <div className="flex justify-between text-[8px] sm:text-[10px] font-sans font-black uppercase tracking-[0.3em] text-gray-500 mb-2">
            <span>Arsip Digital 2026</span>
            <span>Senin, 30 Maret 2026</span>
          </div>
          <h1 className="text-3xl sm:text-6xl text-center font-black uppercase border-y-2 border-black py-2 tracking-tighter leading-none">
            GIRL GAZETTE
          </h1>
          <div className="flex justify-center gap-4 sm:gap-8 mt-2 text-[8px] font-bold italic text-gray-400 uppercase tracking-[0.2em]">
            <span>• Edisi Khusus •</span>
            <span>• Tanpa Foto •</span>
            <span>• Hanya Cinta •</span>
          </div>
        </header>

        {/* Area Viewport Utama */}
        <div className="flex-1 relative bg-[#fffdfa]">
          
          {/* Mekanisme Scroll Universal pada Kontainer Slide */}
          <div className="absolute inset-0 overflow-y-auto scrollbar-custom p-4 sm:p-8">
            
            {/* Slide 0: Berita Utama */}
            <div className={`transition-all duration-500 ${currentPage === 0 ? 'block opacity-100' : 'hidden opacity-0'}`}>
              <div className="max-w-2xl mx-auto space-y-8 py-4">
                <div className="flex items-center justify-between border-b border-black pb-2">
                  <div className="flex items-center gap-2 text-red-600">
                    <Award size={18} />
                    <span className="font-sans font-black uppercase tracking-widest text-[10px]">Laporan Utama</span>
                  </div>
                  <span className="font-sans text-[10px] font-bold text-gray-400 italic">Halaman 01</span>
                </div>
                
                <h2 className="text-4xl sm:text-7xl font-black leading-[0.85] text-black uppercase tracking-tighter italic border-b-8 border-black pb-6">
                  DUNIA RESMI<br/>MILIK KAMU<br/>HARI INI!
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base leading-relaxed text-gray-800 font-medium">
                  <p className="border-l-4 border-black pl-4 py-2 italic bg-gray-50">
                    "Tepat pada tanggal 30 Maret 2026, hukum fisika seolah berhenti sejenak untuk menghormati seseorang yang tengah merayakan hari lahirnya."
                  </p>
                  <p className="text-gray-600">
                    Laporan dari berbagai sudut kota menyebutkan bahwa tidak ada yang bisa menandingi kebahagiaan penulis saat ini. Efek domino dari senyum subjek utama dilaporkan merambat hingga ke seluruh penjuru dunia.
                  </p>
                </div>
                
                <div className="h-40 border-2 border-dashed border-gray-100 flex items-center justify-center text-gray-200 uppercase tracking-[1em] text-[10px] font-black">
                  Ruang Iklan Kasih Sayang
                </div>
              </div>
            </div>

            {/* Slide 1: Editorial Quote */}
            <div className={`transition-all duration-500 ${currentPage === 1 ? 'block opacity-100' : 'hidden opacity-0'}`}>
              <div className="max-w-xl mx-auto py-12 text-center space-y-10">
                <Quote size={80} className="mx-auto text-gray-100" />
                <h3 className="text-3xl sm:text-5xl font-black italic leading-tight text-gray-900 tracking-tight">
                  "Ada berita yang ditulis di kertas, ada pula berita yang ditulis di hati. Kamu adalah berita yang tak akan pernah basi."
                </h3>
                <div className="flex flex-col items-center gap-4 pt-6">
                  <div className="h-px w-24 bg-black"></div>
                  <span className="font-sans font-black uppercase tracking-[0.5em] text-[10px] text-gray-400">Arsip No. 3003</span>
                </div>
                <div className="flex justify-center gap-6 pt-4">
                  <Fingerprint size={24} className="text-gray-200" />
                  <PenTool size={24} className="text-gray-200" />
                  <Type size={24} className="text-gray-200" />
                </div>
                {/* Spacer ekstra untuk menguji scroll */}
                <div className="py-10 opacity-10 italic text-[10px] uppercase tracking-widest">Konten Editorial Bersambung...</div>
              </div>
            </div>

            {/* Slide 2: Kalender Maret 2026 */}
            <div className={`transition-all duration-500 ${currentPage === 2 ? 'block opacity-100' : 'hidden opacity-0'}`}>
              <div className="max-w-md mx-auto py-8">
                <div className="bg-white border-2 border-black p-6 sm:p-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,0.05)] relative">
                  <div className="flex justify-between items-center mb-8 border-b-2 border-black pb-4">
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="text-black" size={28} />
                      <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none">Maret 2026</h3>
                    </div>
                    <div className="bg-black text-white px-3 py-1 text-[10px] font-black italic">ULTAH!</div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2 text-center font-sans text-[10px] font-black opacity-30 uppercase mb-4 tracking-widest">
                    {['Min','Sen','Sel','Rab','Kam','Jum','Sab'].map(d => <div key={d}>{d}</div>)}
                  </div>

                  <div className="grid grid-cols-7 gap-3 sm:gap-4">
                    {[...Array(31)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`aspect-square flex items-center justify-center text-sm font-bold border border-gray-50 transition-all
                          ${i + 1 === 30 ? 'bg-black text-white scale-125 rotate-6 shadow-2xl ring-4 ring-white z-10' : 'text-gray-300 hover:text-black'}
                        `}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 pt-6 border-t border-dashed border-gray-200 text-center space-y-2">
                    <p className="text-[10px] font-sans font-black uppercase tracking-widest text-red-600 italic">
                      *** Pengumuman Penting ***
                    </p>
                    <p className="text-[9px] text-gray-400 font-medium">Senin, 30 Maret ditetapkan sebagai hari libur pribadi bagi kita berdua.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3: Surat Harapan */}
            <div className={`transition-all duration-500 ${currentPage === 3 ? 'block opacity-100' : 'hidden opacity-0'}`}>
              <div className="max-w-xl mx-auto py-8">
                <div className="bg-[#fffef5] border border-black/10 p-8 sm:p-12 shadow-sm relative">
                  <div className="text-center mb-10">
                    <button 
                      onClick={() => setIsWishOpen(!isWishOpen)}
                      className="group relative px-10 py-4 bg-black text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all hover:pr-14 active:scale-95 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)]"
                    >
                      <span>{isWishOpen ? 'Lipat Surat' : 'Buka Surat Rahasia'}</span>
                      <ChevronRight className={`absolute right-4 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${isWishOpen ? 'opacity-0' : 'opacity-100'}`} size={16} />
                    </button>
                  </div>
                  
                  <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${isWishOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="font-serif italic text-xl leading-relaxed text-gray-800 space-y-8 text-center pt-6">
                      <p className="first-letter:text-6xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-black first-letter:leading-none">
                        "Selamat Ulang Tahun, Sayang! Di tanggal 30 Maret 2026 ini, satu-satunya harapanku adalah agar setiap pagimu diawali dengan senyum dan setiap malammu diakhiri dengan rasa syukur."
                      </p>
                      <p>"Aku sangat beruntung memilikimu. Terima kasih sudah menjadi inspirasi di setiap kata-kata yang aku tulis. Aku sayang kamu!"</p>
                      
                      <div className="pt-10 border-t border-black/10 space-y-1">
                        <div className="font-black not-italic text-[10px] uppercase tracking-[0.5em] text-gray-300">Pimpinan Redaksi Hati</div>
                        <div className="text-3xl font-black italic">Pacar Favoritmu</div>
                      </div>
                    </div>
                  </div>

                  {!isWishOpen && (
                    <div className="flex flex-col items-center gap-6 py-12">
                      <div className="flex gap-4">
                        <Stars className="text-gray-100" />
                        <Newspaper className="text-gray-100" />
                        <Stars className="text-gray-100" />
                      </div>
                      <div className="text-gray-200 italic text-[10px] tracking-[0.6em] uppercase text-center">Data Terenkripsi Dengan Aman</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Navigasi Utama - Statis di Bawah */}
        <div className="h-20 sm:h-24 border-t-4 border-double border-black bg-[#fdfaf5] flex items-center px-6 sm:px-12 justify-between shrink-0 relative z-[100]">
          <button 
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="flex items-center gap-2 font-black uppercase text-[9px] sm:text-[11px] tracking-[0.3em] disabled:opacity-10 hover:text-red-600 transition-all outline-none"
          >
            <ChevronLeft size={20} /> Prev
          </button>
          
          <div className="flex gap-3 sm:gap-5">
            {[...Array(totalPages)].map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-none rotate-45 transition-all duration-500 ${currentPage === i ? 'bg-black scale-150' : 'bg-gray-200'}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="flex items-center gap-2 bg-black text-white px-6 sm:px-10 py-3 sm:py-4 font-black uppercase text-[9px] sm:text-[11px] tracking-[0.3em] hover:bg-red-700 transition-all shadow-xl outline-none active:scale-95 disabled:opacity-10"
          >
            Lanjut <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 p-8 opacity-[0.03] pointer-events-none font-black text-[20vw] leading-none uppercase select-none">News</div>
      <div className="fixed bottom-0 right-0 p-8 opacity-[0.03] pointer-events-none font-black text-[20vw] leading-none uppercase select-none italic">2026</div>

      <style>{`
        .scrollbar-custom::-webkit-scrollbar {
          width: 5px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #d1ccc0;
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #000;
        }
      `}</style>
    </div>
  );
};

export default App;
