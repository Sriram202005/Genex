import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import img1 from '../assets/io.avif';
import img2 from '../assets/i1.jpeg';

const Hero = () => {
  const slides = [
    {
      image: img1,
      title: 'How we conduct training',
      subtitle:
        'Onsite at a stretch of 5 Days for Designer & Developer Technical, Fundamental and Business Oriented case study based training schedule',
    },
    {
      image: img2,
      title: 'BI & Analytics Dashboard',
      subtitle:
        'We help you understand how analytics drives business value through visual tools and practical experience.',
    },
  ];

  return (
    <div className="w-full h-[300px] md:h-[350px] overflow-hidden relative  rounded-xl shadow-lg mt-2">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex">
              {/* Image Container (left side) */}
              <div className="w-1/2 h-full relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute top-0 left-0 w-full h-full opacity-30"></div>
              </div>

              {/* Content Container (right side) */}
              <div className="w-1/2 h-full flex flex-col justify-center p-4 md:p-8 text-left z-10 bg-gradient-to-r from-transparent to-black/60">
                <h2 className="text-xl md:text-3xl font-bold text-red-400 mb-2 md:mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-base text-black mb-4 max-w-md">
                  {slide.subtitle}
                </p>
                <a
                  href="#"
                  className="text-s px-3 py-5 border border-red-400 text-red-400 rounded hover:bg-red-400 hover:text-white transition inline-block w-fit"
                >
                  Read more »
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
