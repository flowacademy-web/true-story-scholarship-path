
import React from 'react';
import { Heart, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "정말 같이 뛰어준다는 느낌이었어요. GPA, 활동, 에세이 — 하나도 혼자 준비하지 않았어요.",
      author: "김도현 (UCSD 합격)"
    },
    {
      quote: "유학원이 아니라 '전공 코치'에 가까웠어요. 에세이 쓰는 시점에 이미 쓸 게 넘쳐났죠.",
      author: "장윤아 (UCB 합격)"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              ❤️ 진심 어린 피드백
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-600 mb-4">
                  <Quote className="w-8 h-8" />
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-gray-800 font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
