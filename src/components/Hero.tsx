
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, Target, DollarSign } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            2년 뒤, 똑같은 프로필이 아닌,<br />
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              진짜 나로 합격하자
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-4">
            GPA만으론 부족한 시대.
          </p>
          <p className="text-xl text-gray-700 mb-12 font-medium">
            우리는 당신의 이야기와 성장을 함께 설계합니다.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
              <p className="text-sm font-semibold text-gray-900">100+ 미국 대학</p>
              <p className="text-sm text-gray-600">합격 사례</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Target className="w-8 h-8 text-green-600 mb-3 mx-auto" />
              <p className="text-sm font-semibold text-gray-900">전공 맞춤</p>
              <p className="text-sm text-gray-600">활동 & 에세이 전략</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <GraduationCap className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
              <p className="text-sm font-semibold text-gray-900">현지 출신</p>
              <p className="text-sm text-gray-600">컨설턴트와 2년 동행</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <DollarSign className="w-8 h-8 text-green-600 mb-3 mx-auto" />
              <p className="text-sm font-semibold text-gray-900">기존 대비</p>
              <p className="text-sm text-gray-600">70% 비용</p>
            </div>
          </div>

          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            무료 상담받기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
