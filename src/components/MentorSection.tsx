import React, { useState, useRef } from "react";
import { Award, GraduationCap, Users, BookOpen, Clock, Smile, CheckCircle, Sparkles } from "lucide-react";

// 카드 공통 호버 컴포넌트 (마우스 커서 위치 감지 및 불빛 모션)
const InteractiveCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 group ${className}`}
    >
      {/* 마우스 커서 따라다니는 스폿라이트 불빛 효과 */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />
      
      {/* 테두리 은은한 글로우 레이어 */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.3), transparent 40%)`,
        }}
      />

      {/* 내부 콘텐츠 */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default function MentorSection() {
  // 우측 4개 수치 데이터
  const stats = [
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      value: "150+",
      label: "Total Hours Taught",
      desc: "Proven 1-on-1 & group coaching experience"
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-400" />,
      value: "25+",
      label: "Active Students",
      desc: "Global learners building natural habits"
    },
    {
      icon: <Smile className="w-6 h-6 text-cyan-400" />,
      value: "100%",
      label: "Satisfaction Rate",
      desc: "Tailored feedback & real-life fluency"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-sky-400" />,
      value: "50+",
      label: "Custom Materials",
      desc: "Proprietary visual aids & slang decks"
    }
  ];

  // 좌측 자격/경력 데이터
  const qualifications = [
    {
      icon: <Award className="w-6 h-6 text-blue-400" />,
      title: "Preply SuperTutor",
      subtitle: "Verified Top-Rated Educator",
      desc: "Consistently recognized for exceptional teaching performance and student satisfaction."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-400" />,
      title: "BA in Korean Language & Culture",
      subtitle: "Academic Expertise",
      desc: "Deep knowledge of Korean linguistics, history, and natural communication nuances."
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: "25K+ Social Media Followers",
      subtitle: "Global Content Creator",
      desc: "Bridging Korean culture and language through viral educational content."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-sky-400" />,
      title: "Certified Korean Teacher",
      subtitle: "Official Qualifications",
      desc: "Equipped with professional pedagogy for effective non-native learner guidance."
    }
  ];

  return (
    <section className="relative py-20 bg-slate-950 text-white overflow-hidden">
      {/* 배경 장식 원형 빛 효과 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 섹션 헤더 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Meet Your Mentor</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Learn with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Wonbin Ssem</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Empowering global learners to speak natural, confident Korean through immersive and customized coaching.
          </p>
        </div>

        {/* 그리드 레이아웃: 좌측 자격 카드 / 우측 4개 수치 박스 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT: 자격 및 경력 카드 (4개) */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200 mb-2 px-1">
              Qualifications & Credentials
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {qualifications.map((item, index) => (
                <InteractiveCard key={index}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm font-medium text-blue-400/80 mb-1">
                        {item.subtitle}
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>

          {/* RIGHT: 핵심 수치 박스 (4개) - 이제 완전히 똑같이 반응합니다! */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200 mb-2 px-1">
              Performance & Impact
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <InteractiveCard key={index} className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-slate-800/80 border border-white/5 text-blue-400">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight group-hover:scale-105 group-hover:text-blue-400 transition-all origin-left mb-1">
                      {stat.value}
                    </div>
                    <div className="text-base font-semibold text-slate-200 mb-2">
                      {stat.label}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stat.desc}
                  </p>
                </InteractiveCard>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}