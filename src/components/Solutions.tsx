
import React from 'react';
import { BookOpen, Rocket, FileEdit, Globe } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "코스 플래닝",
      points: [
        "전공/목표 대학에 맞는 수업 구성",
        "GPA와 흥미를 함께 잡는 전략"
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Extra Curricular 설계",
      points: [
        "연구, 인턴십, 창업, 대회, 온라인 프로젝트",
        "관심 분야 기반 실행형 활동 로드맵"
      ]
    },
    {
      icon: <FileEdit className="w-8 h-8" />,
      title: "에세이 & 어플리케이션 전략",
      points: [
        "2년 동안 에세이에 들어갈 '진짜 이야기' 준비",
        "입학사정관이 기억할 수 있는 성장 서사 구축"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "현지 기회 연결 & 여름 인턴십",
      points: [
        "미국 현지 캠퍼스 리소스 연계",
        "한국 스타트업 무급 인턴십 연계 제공"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🧩 우리가 다르게 하는 방법
            </h2>
            <p className="text-xl text-gray-600">우리는 처음부터 끝까지 '진짜 준비'를 합니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-600 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <ul className="space-y-3">
                  {solution.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-gray-700">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
