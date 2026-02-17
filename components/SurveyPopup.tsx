
import React, { useState, useEffect } from 'react';

const SurveyPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const hasAnswered = localStorage.getItem('apex_survey_completed');
    if (!hasAnswered) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 180000); // 3 minute delay as requested (180,000 ms)
      return () => clearTimeout(timer);
    }
  }, []);

  const handleOptionSelect = (option: string) => {
    console.log(`User heard about us via: ${option}`);
    setIsSubmitted(true);
    localStorage.setItem('apex_survey_completed', 'true');
    
    setTimeout(() => {
      setIsVisible(false);
    }, 1800);
  };

  const closeSurvey = () => {
    setIsVisible(false);
    localStorage.setItem('apex_survey_completed', 'true');
  };

  if (!isVisible) return null;

  const options = [
    { id: 'social', label: 'LinkedIn / Social Media', icon: 'share' },
    { id: 'referral', label: 'Professional Referral', icon: 'person_add' },
    { id: 'search', label: 'Google Search', icon: 'search' },
    { id: 'ai', label: 'Suggested by AI', icon: 'psychology' },
    { id: 'other', label: 'Other Source', icon: 'more_horiz' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Soft Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-1000"
        onClick={closeSurvey}
      />
      
      {/* Compact Modal Container */}
      <div className="relative bg-white/95 dark:bg-black/95 backdrop-blur-xl w-full max-w-sm rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden border border-accent-gold/10 border-b-[6px] border-b-accent-gold animate-in zoom-in slide-in-from-bottom-8 duration-700">
        
        <button 
          onClick={closeSurvey}
          className="absolute top-5 right-5 text-slate-400 hover:text-accent-gold transition-colors p-1"
        >
          <span className="material-icons text-xl">close</span>
        </button>

        <div className="p-8 text-center">
          {!isSubmitted ? (
            <>
              <div className="w-12 h-12 bg-accent-gold/10 rounded-xl flex items-center justify-center mx-auto mb-5 border border-accent-gold/10">
                <span className="material-icons text-accent-gold text-2xl">insights</span>
              </div>
              
              <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-tight mb-2 leading-none">
                Help Us <span className="text-accent-gold">Grow</span>
              </h3>
              
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-medium leading-relaxed px-4">
                We value our community. How did you first discover Apex Advocates & Solicitors?
              </p>

              <div className="space-y-2">
                {options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.label)}
                    className="w-full flex items-center justify-between px-5 py-3 bg-slate-50/50 dark:bg-secondary-grey/20 hover:bg-accent-gold hover:text-black dark:hover:bg-accent-gold dark:hover:text-black border border-slate-100 dark:border-accent-gold/5 rounded-xl transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-accent-gold group-hover:text-black text-lg">{option.icon}</span>
                      <span className="text-[13px] font-bold tracking-tight">{option.label}</span>
                    </div>
                    <span className="material-icons text-xs opacity-0 group-hover:opacity-100 transition-opacity">east</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="py-10 animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-accent-gold text-3xl">done_all</span>
              </div>
              <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-tight mb-2">
                Thank You
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Your input helps us improve our reach.
              </p>
            </div>
          )}
        </div>
        
        {/* Minimal Footer */}
        <div className="bg-slate-50/50 dark:bg-secondary-grey/10 py-3 px-8 text-[9px] text-slate-400 font-black uppercase tracking-[0.2em] text-center border-t border-slate-100 dark:border-white/5">
          Apex Advocates & Solicitors
        </div>
      </div>
    </div>
  );
};

export default SurveyPopup;
