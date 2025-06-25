
import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "GPA 관리도 해주나요?",
      answer: "네, GPA 전략은 기본입니다. 수업 선택, 교수 피드백, 학기별 밸런싱까지 함께 설계합니다."
    },
    {
      question: "활동 기획은 어떻게 하나요?",
      answer: "전공, 관심사, 시간표, 위치 등을 고려한 맞춤형 제안 + 정기 점검 + 리소스 연결을 제공합니다."
    },
    {
      question: "실제 인턴십이나 대회는 어떻게 찾나요?",
      answer: "저희가 보유한 리스트 + 현지 학교 내 기회 + 한국 스타트업 직접 연결을 활용합니다."
    },
    {
      question: "비용이 왜 저렴한가요?",
      answer: "본사의 대형 구조 없이, 직접 경험한 컨설턴트들이 lean하게 운영하기 때문에 가능합니다."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🧠 자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 mt-1">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Q. {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      → {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
