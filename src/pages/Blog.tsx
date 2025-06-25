
import React from 'react';
import Header from '@/components/Header';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "미국 CC 편입 완벽 가이드: 학비 절감부터 UC 버클리 진학까지",
      excerpt: "미국 유학을 꿈꾸시나요? CC 편입을 통한 명문대 진학의 모든 것을 알려드립니다.",
      author: "Flow Prep Team",
      date: "2024-01-15",
      readTime: "15분 읽기",
      category: "가이드",
      featured: true
    },
    {
      id: 2,
      title: "수능 끝, CC 유학을 선택한 이유",
      excerpt: "중경외시 경영학과에서 UC Berkeley 통계학과 편입을 목표로 한 김민준 씨의 이야기",
      author: "Flow Prep Team",
      date: "2024-01-10",
      readTime: "8분 읽기",
      category: "학생 스토리"
    },
    {
      id: 3,
      title: "연고대 경영학과에서 CC 편입을 고민하는 이유",
      excerpt: "연세대 재학 중인 최지우 씨가 미국 유학을 선택한 배경과 고민들",
      author: "Flow Prep Team",
      date: "2024-01-08",
      readTime: "7분 읽기",
      category: "학생 스토리"
    },
    {
      id: 4,
      title: "내신 낮고 토플은 높은 우리 아이, CC가 답일까?",
      excerpt: "토플 110점, 내신 5등급 학생의 학부모가 고민하는 최적의 유학 전략",
      author: "Flow Prep Team",
      date: "2024-01-05",
      readTime: "10분 읽기",
      category: "학부모 가이드"
    },
    {
      id: 5,
      title: "UC Berkeley 편입 성공자 인터뷰: Diablo Valley College에서 시작하다",
      excerpt: "내신 4등급에서 UC Berkeley Economics 편입에 성공한 이정현 씨의 전략",
      author: "Flow Prep Team",
      date: "2024-01-03",
      readTime: "12분 읽기",
      category: "성공 사례"
    },
    {
      id: 6,
      title: "CC 후 사립대 편입 + 장학금 성공 사례: NYU Gallatin School",
      excerpt: "Santa Monica College에서 NYU로 편입하며 연간 $20,000 장학금을 받은 김서윤 씨",
      author: "Flow Prep Team",
      date: "2024-01-01",
      readTime: "9분 읽기",
      category: "성공 사례"
    },
    {
      id: 7,
      title: "CC 유학 실패하지 않기 위한 5가지 전략",
      excerpt: "절대평가 시스템부터 PIQ 준비까지, CC 유학 성공을 위한 필수 전략들",
      author: "Flow Prep Team",
      date: "2023-12-28",
      readTime: "11분 읽기",
      category: "전략 가이드"
    },
    {
      id: 8,
      title: "미국 CC vs 리버럴 아츠 칼리지: 내게 맞는 선택은?",
      excerpt: "학비, 수업 환경, 졸업 후 진로까지 꼼꼼히 비교 분석한 완벽 가이드",
      author: "Flow Prep Team",
      date: "2023-12-25",
      readTime: "13분 읽기",
      category: "비교 분석"
    }
  ];

  const categories = ["전체", "가이드", "학생 스토리", "학부모 가이드", "성공 사례", "전략 가이드", "비교 분석"];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              📚 Flow Prep 블로그
            </h1>
            <p className="text-xl text-gray-600">
              미국 CC 편입과 유학에 도움이 되는 실전 정보와 성공 스토리를 공유합니다
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                <div className="max-w-4xl">
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                    🔥 추천 글
                  </span>
                  <h2 className="text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-xl text-white/90 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-white/80 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    자세히 보기
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-gray-200"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  자세히 보기
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300">
              더 많은 글 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
