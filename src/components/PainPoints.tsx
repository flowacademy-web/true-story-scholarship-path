
import React from 'react';
import { X, Clock, Users2, FileText, AlertTriangle } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: <X className="w-6 h-6" />,
      text: "❌ GPA만 챙기고 활동은 0"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "❌ 어떤 전공에 관심 있는지도 모른 채 2년 흐름"
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      text: "❌ 나중엔 다 똑같은 스펙, 차별성 없음"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      text: "❌ 유학원은 단순 행정만 대행 (비자, 이메일 등)"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      text: "❌ 결국, 에세이 시즌에 가짜 스토리 급조"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              😰 유학생 대부분이 겪는 문제,
            </h2>
            <p className="text-2xl text-gray-700 font-medium">혹시 당신도?</p>
          </div>

          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-red-100"
              >
                <div className="flex items-center gap-4">
                  <div className="text-red-500 bg-red-50 p-3 rounded-full">
                    {point.icon}
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
