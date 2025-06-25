
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            🚀 지금, 진짜 유학 준비를 시작하세요.
          </h2>
          
          <p className="text-xl mb-4">당신의 GPA, 활동, 에세이 —</p>
          <p className="text-xl mb-12">
            이제 단순히 남들 따라 하는 게 아닌<br />
            <span className="font-bold text-green-400">'당신만의 이야기'</span>로 입학할 시간입니다.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl font-bold">📞 무료 컨설팅 신청하기</h3>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              👉 30분 온라인 상담으로 방향을 잡아보세요
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
            >
              무료 상담 신청하기
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          <p className="text-gray-400 text-sm">
            * 상담은 완전 무료이며, 부담 없이 진행됩니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
