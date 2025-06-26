
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const TransferCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const transfers = [
    {
      from: 'Diablo Valley College',
      to: 'UC Berkeley',
      successCount: 87,
      fromImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop',
      toImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=300&h=200&fit=crop'
    },
    {
      from: 'Santa Monica College',
      to: 'UCLA',
      successCount: 112,
      fromImage: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=300&h=200&fit=crop',
      toImage: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=300&h=200&fit=crop'
    },
    {
      from: 'De Anza College',
      to: 'UC Irvine',
      successCount: 95,
      fromImage: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=300&h=200&fit=crop',
      toImage: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=300&h=200&fit=crop'
    },
    {
      from: 'Foothill College',
      to: 'UC San Diego',
      successCount: 63,
      fromImage: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=300&h=200&fit=crop',
      toImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop'
    },
    {
      from: 'Diablo Valley College',
      to: 'Columbia University',
      successCount: 21,
      fromImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=300&h=200&fit=crop',
      toImage: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=300&h=200&fit=crop'
    },
    {
      from: 'Santa Monica College',
      to: 'USC',
      successCount: 49,
      fromImage: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=300&h=200&fit=crop',
      toImage: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=300&h=200&fit=crop'
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % transfers.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, transfers.length]);

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            커뮤니티 칼리지에서 명문대 편입까지
          </h2>
          <p className="text-lg text-gray-300">
            검증된 편입 성공 경로를 따라 여러분의 꿈을 현실로 만들어보세요
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {transfers.map((transfer, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8">
                  <div className="flex items-center justify-center gap-8">
                    {/* From College */}
                    <div className="text-center flex-1">
                      <div className="w-32 h-20 mx-auto mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={transfer.fromImage} 
                          alt={transfer.from}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {transfer.from}
                      </h3>
                      <p className="text-sm text-gray-300">출발점</p>
                    </div>

                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <ArrowRight className="w-8 h-8 text-blue-400 animate-pulse" />
                      <p className="text-xs text-gray-300 mt-2">편입</p>
                    </div>

                    {/* To University */}
                    <div className="text-center flex-1">
                      <div className="w-32 h-20 mx-auto mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={transfer.toImage} 
                          alt={transfer.to}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {transfer.to}
                      </h3>
                      <p className="text-sm text-gray-300">목표 대학</p>
                    </div>
                  </div>

                  {/* Success Count */}
                  <div className="text-center mt-8">
                    <p className="text-2xl font-bold text-blue-400">
                      편입 성공자 <span className="text-green-400">{transfer.successCount}명</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {transfers.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-400 scale-125' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 shadow-md transition-all duration-300"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + transfers.length) % transfers.length)}
          >
            <ArrowRight className="w-5 h-5 text-white rotate-180" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 shadow-md transition-all duration-300"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % transfers.length)}
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransferCarousel;
