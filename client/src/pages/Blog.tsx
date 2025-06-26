
import React from 'react';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: '미국 CC 편입 완벽 가이드: 학비 절감부터 UC 버클리 진학까지',
    excerpt: '미국 유학을 꿈꾸시나요? 하지만 학비와 입시 경쟁이 걱정되시나요? 그렇다면 "커뮤니티 칼리지(CC) 편입"이 여러분의 미래를 열어줄 수 있는 전략적 루트가 될 수 있습니다.',
    author: 'Flow Prep 편집팀',
    date: '2024년 12월 26일',
    slug: 'cc-transfer-complete-guide',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=400&fit=crop'
  };

  const blogSeries = [
    {
      title: '수능 끝, CC 유학을 선택한 이유',
      excerpt: '김민준 씨는 중경외시 경영학과에 입학했던 1학기만에 휴학계를 냈습니다...',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 25일',
      slug: 'why-choose-cc-after-csat'
    },
    {
      title: '연고대 경영학과에서 CC 편입을 고민하는 이유',
      excerpt: '연세대 경영학과 1학년 최지우 씨의 글로벌 진로 고민...',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 24일',
      slug: 'yonsei-to-cc-transfer-consideration'
    },
    {
      title: '내신 낮고 토플은 높은 우리 아이, CC가 답일까?',
      excerpt: '고3 학부모 이지은 씨의 자녀 유학 고민과 해결책...',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 23일',
      slug: 'low-gpa-high-toefl-cc-option'
    },
    {
      title: 'UC Berkeley 편입 성공자 인터뷰',
      excerpt: 'Diablo Valley College에서 UC Berkeley Economics 편입 성공한 이정현 씨...',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 22일',
      slug: 'uc-berkeley-transfer-success-interview'
    },
    {
      title: 'CC 후 사립대 편입 + 장학금 성공 사례',
      excerpt: 'Santa Monica College에서 NYU Gallatin School로 장학금과 함께 편입...',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 21일',
      slug: 'private-university-transfer-scholarship-success'
    },
    {
      title: 'CC 유학 실패하지 않기 위한 5가지 전략',
      excerpt: '성공적인 CC 유학을 위한 필수 전략들...',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 20일',
      slug: '5-strategies-cc-study-abroad-success'
    },
    {
      title: '미국 CC vs 리버럴 아츠 칼리지: 내게 맞는 선택은?',
      excerpt: '두 교육 시스템의 장단점 비교 분석...',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 19일',
      slug: 'cc-vs-liberal-arts-college-comparison'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">📝 Flow Prep 블로그</h1>
            <p className="text-xl text-gray-300">
              미국 대학 편입 성공을 위한 전략과 실제 사례들
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="text-sm text-blue-400 font-medium mb-2">FEATURED POST</div>
                  <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center gap-6 text-gray-400 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    자세히 읽기
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Series */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">📚 블로그 시리즈</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogSeries.map((post, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm"
                  >
                    읽어보기
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              더 자세한 상담이 필요하신가요?
            </h2>
            <p className="text-xl mb-6">
              Flow Prep 전문 컨설턴트와 1:1 무료 상담을 받아보세요
            </p>
            <button 
              onClick={() => window.open('https://calendly.com/flowprep', '_blank')}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              무료 상담 신청하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
