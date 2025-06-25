
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, Target, DollarSign } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
      {/* Video Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/progressive_redirect/playback/1096172600/rendition/1080p/file.mp4?loc=external&signature=c8b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-lg text-white/90 mb-4 font-medium">
              플로우 프렙은 미국 CC편입 전문 대학 입시 컨설팅 에이전시입니다.
            </p>
            <p className="text-lg text-white/90 mb-6">
              디아블로 밸리, 산타모니카, 디안자 컬리지등 CC에서 시작해 Top UC 및 Top 15 스쿨에 한국 학생들을 위한 맞춤형 지원으로 <span className="font-bold text-yellow-300">100% 편입 성공률</span>을 자랑합니다.
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            2년 뒤, 똑같은 프로필이 아닌,<br />
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              진짜 나로 합격하자
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-4">
            GPA만으론 부족한 시대.
          </p>
          <p className="text-xl text-white mb-12 font-medium">
            우리는 당신의 이야기와 성장을 함께 설계합니다.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
              <p className="text-sm font-semibold text-gray-900">✅ 100+ 미국 대학</p>
              <p className="text-sm text-gray-600">합격 사례</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Target className="w-8 h-8 text-green-600 mb-3 mx-auto" />
              <p className="text-sm font-semibold text-gray-900">✅ 전공 맞춤</p>
              <p className="text-sm text-gray-600">활동 & 에세이 전략</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <GraduationCap className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
              <p className="text-sm font-semibold text-gray-900">✅ 현지 출신</p>
              <p className="text-sm text-gray-600">컨설턴트와 2년 동행</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <DollarSign className="w-8 h-8 text-green-600 mb-3 mx-auto" />
              <p className="text-sm font-semibold text-gray-900">✅ 기존 대비</p>
              <p className="text-sm text-gray-600">70% 비용</p>
            </div>
          </div>

          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-8">
            👉 무료 상담받기
          </Button>

          <div className="text-center">
            <p className="text-lg text-white/90 mb-2">
              "당신의 미국 대학 편입, 더 이상 혼자 고민하지 마세요."
            </p>
            <p className="text-lg text-white font-medium">
              Flow Academy가 시작부터 편입까지 함께합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
