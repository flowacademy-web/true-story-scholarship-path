
import React from 'react';
import { X, Clock, Users2, FileText, AlertTriangle } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: <X className="w-6 h-6" />,
      text: "❌ GPA만 신경 쓰고 미국 대학 합격을 놓침"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "❌ 미국 유학을 위한 활동 설계 없이 시간 낭비"
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      text: "❌ 나중엔 유학원에서 주는 형식적인 에세이로 지원"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      text: "❌ 비슷한 스펙의 학생들이 너무 많아 차별성 부족"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🎯 유학생들이 흔히 겪는 문제
            </h2>
            <p className="text-2xl text-gray-700 font-medium">GPA만 챙기고 미국 대학 합격을 놓침</p>
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
