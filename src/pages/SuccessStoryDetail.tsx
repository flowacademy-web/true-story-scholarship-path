
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import { GraduationCap, Award, Clock, MapPin, ExternalLink } from 'lucide-react';

const SuccessStoryDetail = () => {
  const { id } = useParams();

  // 실제로는 API에서 가져올 데이터
  const studentProfile = {
    name: "김민준",
    initials: "K.M.",
    university: "University of California, Berkeley",
    major: "Computer Science",
    admissionType: "Regular Decision",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    stats: {
      honors: 8,
      extracurriculars: 12
    },
    academics: {
      sat: {
        readingWriting: 740,
        math: 800,
        essay: 22
      },
      gpa: "3.85/4.0",
      curriculum: "일반고 + AP 과목 5개 수강"
    },
    honors: [
      {
        title: "전국 정보올림피아드 동상",
        description: "알고리즘 문제해결 부문에서 상위 5% 성과",
        level: "국가 단위"
      },
      {
        title: "해커톤 대회 1위",
        description: "AI 기반 교육 플랫폼 개발로 우승",
        level: "지역 단위"
      },
      {
        title: "오픈소스 기여상",
        description: "GitHub에서 인정받는 프로젝트 기여",
        level: "국제 단위"
      }
    ],
    extracurriculars: [
      {
        title: "코딩 교육 봉사 동아리 창립",
        category: "리더십",
        timeCommitment: "15시간/주",
        description: "초중학생 대상 무료 코딩 교육 프로그램을 기획하고 운영. 100명 이상의 학생들에게 프로그래밍 교육을 제공하며, 디지털 격차 해소에 기여했습니다."
      },
      {
        title: "스타트업 인턴십",
        category: "직업 체험",
        timeCommitment: "20시간/주",
        description: "AI 스타트업에서 백엔드 개발자로 3개월간 근무. 실제 서비스에 사용되는 API를 개발하고 데이터베이스를 설계하는 경험을 쌓았습니다."
      },
      {
        title: "교내 컴퓨터과학 연구 프로젝트",
        category: "학술 연구",
        timeCommitment: "10시간/주",
        description: "머신러닝을 이용한 학습 패턴 분석 연구를 진행. 연구 결과를 교내 학술 발표회에서 발표하고 우수상을 수상했습니다."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img 
                  src={studentProfile.profileImage} 
                  alt={studentProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {studentProfile.university}
                </h1>
                <div className="text-2xl text-blue-600 font-semibold mb-2">
                  {studentProfile.initials}
                </div>
                <div className="text-lg text-gray-700 mb-1">
                  전공: {studentProfile.major}
                </div>
                <div className="text-gray-600">
                  입학 유형: {studentProfile.admissionType}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 p-6 bg-blue-50 rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {studentProfile.stats.honors}
                </div>
                <div className="text-gray-700">수상 및 영예</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {studentProfile.stats.extracurriculars}
                </div>
                <div className="text-gray-700">과외활동</div>
              </div>
            </div>
          </div>

          {/* Academics Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              학업 성과
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  {studentProfile.academics.sat.readingWriting}
                </div>
                <div className="text-sm text-gray-600">SAT 읽기/쓰기</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  {studentProfile.academics.sat.math}
                </div>
                <div className="text-sm text-gray-600">SAT 수학</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  {studentProfile.academics.sat.essay}
                </div>
                <div className="text-sm text-gray-600">SAT 에세이</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">GPA</h3>
                <p className="text-gray-700">{studentProfile.academics.gpa}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">교육과정</h3>
                <p className="text-gray-700">{studentProfile.academics.curriculum}</p>
              </div>
            </div>
          </div>

          {/* Honors & Awards Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-yellow-600" />
              수상 및 영예
            </h2>
            
            <div className="space-y-4">
              {studentProfile.honors.map((honor, index) => (
                <div key={index} className="border-l-4 border-yellow-500 pl-6 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {honor.title}
                    </h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                      {honor.level}
                    </span>
                  </div>
                  <p className="text-gray-700">{honor.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Extracurricular Activities Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-green-600" />
              과외활동
            </h2>
            
            <div className="space-y-6">
              {studentProfile.extracurriculars.map((activity, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {activity.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                          {activity.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {activity.timeCommitment}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              UC Berkeley에 가고 싶나요?
            </h2>
            <p className="text-lg mb-6">
              Flow Prep 전문가와 상담하고 합격 전략을 세워보세요
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              무료 상담 예약하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryDetail;
