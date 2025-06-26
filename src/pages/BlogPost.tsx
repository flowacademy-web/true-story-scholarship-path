
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  
  const blogPosts = {
    'cc-transfer-complete-guide': {
      title: '미국 CC 편입 완벽 가이드: 학비 절감부터 UC 버클리 진학까지',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 26일',
      content: `
        <p>미국 유학을 꿈꾸시나요? 하지만 학비와 입시 경쟁이 걱정되시나요? 그렇다면 "커뮤니티 칼리지(CC) 편입"이 여러분의 미래를 열어줄 수 있는 전략적 루트가 될 수 있습니다.</p>
        
        <h2>🎓 CC 편입이란?</h2>
        <p>미국 CC 편입은 2년제 커뮤니티 칼리지에서 교양 및 전공 기초 과목을 이수한 후, 4년제 대학교 3학년으로 편입해 학사 학위를 취득하는 제도입니다.</p>
        
        <h2>💰 학비 절감 효과</h2>
        <p>미국 사립 대학의 연간 학비가 $40,000 이상인 반면, 대부분의 커뮤니티 칼리지 학비는 연 $10,000 내외입니다. 2년간 CC에서 공부 후 편입하면 수천만 원의 학비 절약이 가능합니다.</p>
        
        <h2>🏆 어떤 학생에게 적합할까?</h2>
        <ul>
          <li>내신이 낮지만 영어 실력(TOEFL)에는 자신 있는 학생</li>
          <li>학비 부담을 덜고 미국 유학을 하고 싶은 학생</li>
          <li>미국 명문대 편입을 노리는 전략적 유학생</li>
          <li>아직 전공을 확정하지 못했지만 유연한 진로 설계를 원하는 학생</li>
        </ul>
        
        <h2>📈 UC 편입 성공률과 전략</h2>
        <p>UC 편입 시스템은 "TAG(Transfer Admission Guarantee)" 제도를 통해 일정 GPA 이상이면 UC 계열 일부 캠퍼스에 편입 보장을 제공합니다.</p>
        
        <h2>🏫 인기 있는 CC 추천</h2>
        <h3>1. Santa Monica College (SMC)</h3>
        <ul>
          <li>학비: $9,264/year</li>
          <li>TOEFL: 45+, 조건부 입학 가능</li>
          <li>재정서류: $29,000 이상</li>
        </ul>
        
        <h3>2. Diablo Valley College (DVC)</h3>
        <ul>
          <li>학비: $9,840/year</li>
          <li>TOEFL: 61+</li>
          <li>UC 편입률 상위권 CC 중 하나</li>
        </ul>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">페이지를 찾을 수 없습니다</h1>
            <Link to="/blog" className="text-blue-400 hover:text-blue-300">
              블로그로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            블로그로 돌아가기
          </Link>
          
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </header>
            
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
