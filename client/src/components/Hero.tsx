
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, Target, DollarSign } from 'lucide-react';

const Hero = () => {
  const handleConsultationClick = () => {
    window.open('https://calendly.com/flowprep', '_blank');
  };

  const handleKakaoClick = () => {
    window.open('https://pf.kakao.com/_xexample', '_blank');
  };

  return (
    <section className="relative overflow-hidden">
      {/* Desktop/Tablet: Video Background */}
      <div className="hidden sm:block absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe 
            src="https://player.vimeo.com/video/1096172600?badge=0&autopause=0&autoplay=1&muted=1&loop=1&background=1&controls=0" 
            className="absolute inset-0 w-full h-full border-0"
            style={{ 
              width: '100%',
              height: '100%',
              minWidth: '100%',
              minHeight: '100%',
              objectFit: 'cover'
            }}
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture"
            title="Flow Prep Hero Video"
          />
        </div>
      </div>

      {/* Mobile: Text Content First */}
      <div className="sm:hidden bg-gray-900">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-white mb-6 leading-tight">
              2년 뒤, 똑같은 프로필이 아닌,<br />
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                진짜 나로 합격하자
              </span>
            </h1>
            
            <p className="text-lg text-white mb-4 font-medium">
              GPA만으론 부족한 시대.
            </p>
            <p className="text-lg text-white mb-8 font-semibold">
              우리는 당신의 이야기와 성장을 함께 설계합니다.
            </p>

            <div className="mb-8 text-center max-w-4xl mx-auto bg-gray-800/90 rounded-2xl p-6">
              <p className="text-base text-white mb-4 font-medium">
                플로우 프렙은 미국 CC편입 전문 대학 입시 컨설팅 에이전시입니다.
              </p>
              <p className="text-base text-white mb-0 leading-relaxed">
                디아블로 밸리, 산타모니카, 디안자 컬리지 등 CC에서 시작해 한국 학생들을 위한 맞춤형 지원으로 Top UC 및 Top 15 스쿨에 <span className="font-bold text-yellow-300">100% 편입 성공률</span>을 자랑합니다. GPA만으론 부족한 시대, 플로우 프렙은 학생의 이야기와 성장을 함께 설계합니다.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <Users className="w-6 h-6 text-blue-600 mb-2 mx-auto" />
                <p className="text-xs font-semibold text-gray-900">✅ 100+ 미국 대학</p>
                <p className="text-xs text-gray-600">합격 사례</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <Target className="w-6 h-6 text-green-600 mb-2 mx-auto" />
                <p className="text-xs font-semibold text-gray-900">✅ 전공 맞춤</p>
                <p className="text-xs text-gray-600">활동 & 에세이 전략</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <GraduationCap className="w-6 h-6 text-blue-600 mb-2 mx-auto" />
                <p className="text-xs font-semibold text-gray-900">✅ 현지 출신</p>
                <p className="text-xs text-gray-600">컨설턴트와 2년 동행</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <DollarSign className="w-6 h-6 text-green-600 mb-2 mx-auto" />
                <p className="text-xs font-semibold text-gray-900">✅ 기존 대비</p>
                <p className="text-xs text-gray-600">70% 비용</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 justify-center mb-6">
              <Button 
                size="lg" 
                onClick={handleConsultationClick}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 py-3 text-base font-semibold rounded-full shadow-lg"
              >
                👉 무료 상담받기
              </Button>
              <Button 
                size="lg" 
                onClick={handleKakaoClick}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3 text-base font-semibold rounded-full shadow-lg"
              >
                💬 카카오톡 채널
              </Button>
            </div>

            <div className="text-center">
              <p className="text-base text-white mb-2">
                "당신의 미국 대학 편입, 더 이상 혼자 고민하지 마세요."
              </p>
              <p className="text-base text-white font-medium">
                Flow Prep이 시작부터 편입까지 함께합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Video Section Below Text */}
      <div className="sm:hidden w-full h-64 overflow-hidden">
        <iframe 
          src="https://player.vimeo.com/video/1096172600?badge=0&autopause=0&autoplay=1&muted=1&loop=1&background=1&controls=0" 
          className="w-full h-full border-0"
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture"
          title="Flow Prep Hero Video"
        />
      </div>

      {/* Desktop/Tablet: Text Content Over Video */}
      <div className="hidden sm:block container mx-auto px-4 sm:px-6 relative z-20 w-full min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto text-center py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            2년 뒤, 똑같은 프로필이 아닌,<br />
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
              진짜 나로 합격하자
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white mb-4 drop-shadow-md font-medium">
            GPA만으론 부족한 시대.
          </p>
          <p className="text-lg sm:text-xl text-white mb-8 font-semibold drop-shadow-md">
            우리는 당신의 이야기와 성장을 함께 설계합니다.
          </p>

          <div className="mb-8 text-center sm:text-left max-w-4xl mx-auto bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
            <p className="text-base sm:text-lg text-white mb-4 font-medium drop-shadow-md">
              플로우 프렙은 미국 CC편입 전문 대학 입시 컨설팅 에이전시입니다.
            </p>
            <p className="text-base sm:text-lg text-white mb-0 leading-relaxed drop-shadow-md">
              디아블로 밸리, 산타모니카, 디안자 컬리지 등 CC에서 시작해 한국 학생들을 위한 맞춤형 지원으로 Top UC 및 Top 15 스쿨에 <span className="font-bold text-yellow-300">100% 편입 성공률</span>을 자랑합니다. GPA만으론 부족한 시대, 플로우 프렙은 학생의 이야기와 성장을 함께 설계합니다.
            </p>
          </div>

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

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              onClick={handleConsultationClick}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              👉 무료 상담받기
            </Button>
            <Button 
              size="lg" 
              onClick={handleKakaoClick}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              💬 카카오톡 채널
            </Button>
          </div>

          <div className="text-center">
            <p className="text-lg text-white/90 mb-2">
              "당신의 미국 대학 편입, 더 이상 혼자 고민하지 마세요."
            </p>
            <p className="text-lg text-white font-medium">
              Flow Prep이 시작부터 편입까지 함께합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
