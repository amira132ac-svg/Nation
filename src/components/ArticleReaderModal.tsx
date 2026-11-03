import React from 'react';
import { X, Send, ArrowUpRight, FileText } from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';

export const ArticleReaderModal: React.FC = () => {
  const { lang, selectedArticle, closeArticle } = usePlatform();

  if (!selectedArticle) return null;

  const isFa = lang === 'fa';
  const title = isFa ? selectedArticle.titleFa : selectedArticle.titleEn;
  const body = isFa ? selectedArticle.bodyFa : selectedArticle.bodyEn;
  const published = isFa
    ? selectedArticle.publishedLabelFa
    : selectedArticle.publishedLabelEn;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-panel-enter">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#070E22] border border-white/15 shadow-[0_25px_90px_rgba(0,0,0,0.9)] text-[#F5F7FF]">
        {selectedArticle.imageAsset && (
          <div className="relative h-60 sm:h-72 w-full overflow-hidden border-b border-white/10">
            <img
              src={selectedArticle.imageAsset}
              alt={selectedArticle.titleEn}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070E22] via-[#070E22]/40 to-transparent" />
            <button
              onClick={closeArticle}
              className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2.5 rounded-xl bg-black/60 hover:bg-black/80 border border-white/20 text-white cursor-pointer"
              aria-label="Close Document"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="p-6 sm:p-10 space-y-6">
          {!selectedArticle.imageAsset && (
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono-numbers text-[#93C5FD]">
                <FileText className="w-4 h-4" />
                <span dir="ltr">{selectedArticle.referenceCode}</span>
              </div>
              <button
                onClick={closeArticle}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                aria-label="Close Document"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Clean Single-Language Official Document Body */}
          <div className="space-y-5 text-start">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono-numbers text-slate-400">
              <span dir="ltr" className="text-[#93C5FD] font-bold">
                {selectedArticle.referenceCode} · {isFa ? selectedArticle.categoryFa : selectedArticle.category}
              </span>
              <span>{published}</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
              {title}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-200 leading-relaxed pt-2 border-t border-white/10">
              {body.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {selectedArticle.registrationUrl && (
                <a
                  href={selectedArticle.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#7B2CFF] hover:bg-[#6D28D9] text-white font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span dir="ltr">Registration: @Perez_Himself</span>
                </a>
              )}
              {selectedArticle.telegramChannels.map((ch) => (
                <a
                  key={ch.url}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-mono-numbers font-bold text-white flex items-center gap-1.5 transition-all"
                >
                  <span dir="ltr">{ch.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>

            <button
              onClick={closeArticle}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white cursor-pointer"
            >
              {isFa ? 'بستن بیانیه' : 'Close Document'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
