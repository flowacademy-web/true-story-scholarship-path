
import React from 'react';
import { BookOpen, Rocket, FileText, Globe } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "📘 코스 플래닝",
      subtitle: "전공과 목표 대학에 최적화된 수업 구성과 GPA 전략",
      features: [
        "전공 및 편입 요건에 따른 2년 수강 계획",
        "GPA와 흥미를 동시에 고려한 과목 선택",
        "IGETC, UC/CSU 필수 과목 이수 가이드",
        "CC 카운슬러 및 제휴 대학과의 수업 연계"
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "🚀 대외활동 설계 (Extra-Curricular Design)",
      subtitle: "입학사정관이 주목하는 실행형 활동을 직접 설계",
      features: [
        "연구, 인턴십, 창업, 대회 등 실적 중심 활동 기획",
        "관심 분야에 맞춘 맞춤형 활동 로드맵",
        "온라인 프로젝트 및 포트폴리오 구축",
        "활동 기록 정리 및 에세이 활용 전략 제공"
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "📝 에세이 & 어플리케이션 전략",
      subtitle: "성장을 보여주는 '진짜 이야기'로 입학사정관을 사로잡기",
      features: [
        "2년 동안 에세이에 담길 핵심 서사 준비",
        "Common App, UC App 등 지원서 전략 컨설팅",
        "입학사정관 시선에서 피드백 제공",
        "에세이 초안부터 최종 완성까지 1:1 피드백 제공"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "🌎 현지 기회 연결 & 여름 인턴십",
      subtitle: "미국 대학 생활을 확장시키는 현지 리소스 연계",
      features: [
        "미국 현지 캠퍼스 리소스 활용법 교육",
        "교내 연구실, 랩, 동아리 등 기회 탐색 가이드",
        "한국 스타트업 및 비영리단체 무급 인턴십 연계",
        "여름방학을 활용한 실무 경험 설계"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            💡 우리의 솔루션
          </h2>
          <p className="text-xl text-gray-600">
            체계적인 전략으로 여러분의 성공을 설계합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {solution.subtitle}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
