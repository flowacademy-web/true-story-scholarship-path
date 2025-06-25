
import React from 'react';
import Header from '@/components/Header';
import { GraduationCap, Award, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      name: "김민준",
      initials: "K.M.",
      schools: ["UC Berkeley", "UCLA", "UCSD"],
      major: "Computer Science",
      admissionType: "Regular Decision",
      stats: {
        honors: 8,
        extracurriculars: 12,
        sat: { reading: 740, math: 800, essay: 22 }
      },
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "1년간 GPA만 챙기다가 아무 것도 남은 게 없었어요. 하지만 여기선 활동부터 에세이까지 전공 맞춤으로 함께 했고, '진짜 제가 만든 이야기'로 합격할 수 있었어요."
    },
    {
      id: 2,
      name: "이서윤",
      initials: "L.S.",
      schools: ["UC Berkeley Haas", "Columbia"],
      major: "Business Administration",
      admissionType: "Early Decision",
      stats: {
        honors: 6,
        extracurriculars: 10,
        sat: { reading: 750, math: 730, essay: 24 }
      },
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616c27d9ba8?w=150&h=150&fit=crop&crop=face",
      quote: "경영 쪽으로 가고 싶었지만, 어떻게 증명해야 할지 몰랐어요. 이 팀과 함께 하며 제 활동이 하나의 포트폴리오로 연결됐고, 인터뷰와 에세이에서 진심이 전해졌습니다."
    },
    {
      id: 3,
      name: "정시우",
      initials: "J.S.",
      schools: ["UC Berkeley", "USC", "UCLA"],
      major: "Political Science & Philosophy",
      admissionType: "Regular Decision",
      stats: {
        honors: 5,
        extracurriculars: 9,
        sat: { reading: 760, math: 720, essay: 23 }
      },
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "처음엔 그냥 GPA 유지만 목표였어요. 그런데 리서치, 컨퍼런스 발표, 철학적 주제로 블로그 운영까지. 저 스스로도 몰랐던 관심사를 찾게 됐어요."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🎓 합격 사례
            </h1>
            <p className="text-xl text-gray-600">
              Flow Prep과 함께 꿈의 대학에 합격한 학생들의 실제 이야기
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img 
                      src={story.profileImage} 
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{story.name}</h3>
                    <p className="text-lg text-blue-600 font-medium">{story.major}</p>
                    <p className="text-gray-600">{story.admissionType}</p>
                  </div>
                </div>

                {/* Schools */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">합격 대학:</h4>
                  <div className="flex flex-wrap gap-2">
                    {story.schools.map((school, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                      >
                        {school}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{story.stats.honors}</div>
                    <div className="text-sm text-gray-600">수상 경력</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{story.stats.extracurriculars}</div>
                    <div className="text-sm text-gray-600">과외활동</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {story.stats.sat.reading + story.stats.sat.math}
                    </div>
                    <div className="text-sm text-gray-600">SAT 점수</div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 italic mb-6 border-l-4 border-blue-500 pl-4">
                  "{story.quote}"
                </blockquote>

                {/* View Details Button */}
                <Link
                  to={`/success-stories/${story.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  자세한 프로필 보기
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              다음 합격 주인공은 바로 당신입니다
            </h2>
            <p className="text-xl mb-6">
              Flow Prep과 함께 꿈의 대학 합격을 이루어보세요
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              무료 상담 신청하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
