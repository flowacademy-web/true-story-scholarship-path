
import React from 'react';
import { Check } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    "70%의 비용으로 더 깊은 컨설팅",
    "100건 이상의 실질적인 합격 케이스 보유",
    "현지 출신 팀의 전략 컨설팅",
    "한국 스타트업 인턴십 직접 연계",
    "2년간 함께 달리는 1:1 전담 멘토링 시스템",
    "전공별 커리큘럼 & 액티비티 템플릿 제공"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🏆 우리가 선택받는 이유
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-gray-800 font-medium">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
