
import React from 'react';
import Header from '@/components/Header';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "미국 대학 합격을 위한 완벽한 에세이 작성법",
      excerpt: "입학사정관의 마음을 사로잡는 에세이를 작성하는 5가지 핵심 전략을 알아보세요.",
      author: "Flow Prep Team",
      date: "2024-01-15",
      readTime: "5분 읽기",
      category: "에세이"
    },
    {
      id: 2,
      title: "UC 계열 대학 합격 전략: 완벽 가이드",
      excerpt: "캘리포니아 대학교 시스템 합격을 위한 필수 준비사항과 전략을 상세히 설명합니다.",
      author: "김상담사",
      date: "2024-01-10",
      readTime: "8분 읽기",
      category: "대학정보"
    },
    {
      id: 3,
      title: "SAT vs ACT: 어떤 시험이 나에게 맞을까?",
      excerpt: "두 시험의 차이점을 비교하고 자신에게 맞는 시험을 선택하는 방법을 알아보세요.",
      author: "이상담사",
      date: "2024-01-05",
      readTime: "6분 읽기",
      category: "시험준비"
    },
    {
      id: 4,
      title: "미국 대학 장학금 받는 방법",
      excerpt: "다양한 장학금 종류와 신청 방법, 합격 확률을 높이는 팁을 공유합니다.",
      author: "Flow Prep Team",
      date: "2023-12-28",
      readTime: "7분 읽기",
      category: "장학금"
    },
    {
      id: 5,
      title: "Extracurricular Activities 기획하는 법",
      excerpt: "대학 입시에 도움이 되는 의미있는 과외활동을 기획하고 실행하는 방법을 알려드립니다.",
      author: "박상담사",
      date: "2023-12-20",
      readTime: "9분 읽기",
      category: "활동기획"
    },
    {
      id: 6,
      title: "미국 대학 면접 준비 완벽 가이드",
      excerpt: "대학 면접에서 자주 나오는 질문과 답변 요령, 준비 방법을 상세히 설명합니다.",
      author: "최상담사",
      date: "2023-12-15",
      readTime: "10분 읽기",
      category: "면접준비"
    }
  ];

  const categories = ["전체", "에세이", "대학정보", "시험준비", "장학금", "활동기획", "면접준비"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              📚 Flow Prep 블로그
            </h1>
            <p className="text-xl text-gray-600">
              미국 대학 입시에 도움이 되는 유용한 정보와 팁을 공유합니다
            </p>
          </div>

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
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  자세히 보기
                  <ArrowRight className="w-4 h-4" />
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
