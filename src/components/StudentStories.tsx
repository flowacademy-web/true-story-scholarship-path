
import React from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';

const StudentStories = () => {
  const stories = [
    {
      name: "김민준",
      schools: "UCB, UCLA, UCSD 합격",
      quote: "1년간 GPA만 챙기다가 아무 것도 남은 게 없었어요. 하지만 여기선 활동부터 에세이까지 전공 맞춤으로 함께 했고, '진짜 제가 만든 이야기'로 합격할 수 있었어요.",
      journey: [
        "한국대 입학 후 유학 전향",
        "컴공 전공 희망 → 오픈소스 참여 + 해커톤 멘토링 + 코딩 봉사활동",
        "여름방학 스타트업 인턴",
        "UCB, UCLA, UCSD 합격"
      ],
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      name: "이서윤",
      schools: "UC Berkeley Haas, Columbia 합격",
      quote: "경영 쪽으로 가고 싶었지만, 어떻게 증명해야 할지 몰랐어요. 이 팀과 함께 하며 제 활동이 하나의 포트폴리오로 연결됐고, 인터뷰와 에세이에서 진심이 전해졌습니다.",
      journey: [
        "인문계 + 경영 관심 혼합형",
        "캘리포니아 최대 비영리단체, CA PBL에서 팀 리딩",
        "'조직 내 리더십' 주제로 에세이 구성",
        "UC Berkeley Haas, Columbia GS 합격"
      ],
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "정시우",
      schools: "UCB, USC, UCLA 합격",
      quote: "처음엔 그냥 GPA 유지만 목표였어요. 그런데 리서치, 컨퍼런스 발표, 철학적 주제로 블로그 운영까지. 저 스스로도 몰랐던 관심사를 찾게 됐어요.",
      journey: [
        "정치+철학 전공 희망",
        "캠퍼스 연구 조교 → 결과 정리 후 교내 발표",
        "윤리 관련 블로그 운영 (5000+ 조회수)",
        "UCB, USC, UCLA 합격"
      ],
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📚 실제 학생 사례
            </h2>
            <p className="text-xl text-gray-600">Real Stories</p>
          </div>

          <div className="space-y-12">
            {stories.map((story, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-full shadow-md">
                    <div className="text-blue-600">
                      {story.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        🎓 {story.name} / {story.schools}
                      </h3>
                      <blockquote className="text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4">
                        "{story.quote}"
                      </blockquote>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {story.journey.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      ))}
                    </div>
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

export default StudentStories;
