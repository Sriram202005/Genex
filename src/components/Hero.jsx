// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Autoplay } from 'swiper/modules';

// import img1 from '../assets/img1.jpeg';
// import img2 from '../assets/img2.jpeg';

// const Hero = () => {
//   const slides = [
//     {
//       image: img1,
//       title: 'How we conduct training',
//       subtitle:
//         'Onsite at a stretch of 5 Days for Designer & Developer Technical, Fundamental and Business Oriented case study based training schedule',
//     },
//     {
//       image: img2,
//       title: 'BI & Analytics Dashboard',
//       subtitle:
//         'We help you understand how analytics drives business value through visual tools and practical experience.',
//     },
//   ];

//   return (
//     <div className="w-full h-screen">
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 5000 }}
//         loop={true}
//         className="w-full h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             {/* Force SwiperSlide child to fill height */}
//             <div className="w-full h-screen relative">
//               {/* Make sure image fills the slide and is visible */}
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover border-4 border-green-500"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
//                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                   {slide.title}
//                 </h2>
//                 <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-6">
//                   {slide.subtitle}
//                 </p>
//                 <a
//                   href="#"
//                   className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
//                 >
//                   Read more »
//                 </a>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Hero;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';

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
    <div className="w-full h-[85vh] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[85vh]">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center z-10 px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-base md:text-xl text-gray-200 max-w-2xl mb-6 drop-shadow">
                  {slide.subtitle}
                </p>
                <a
                  href="#"
                  className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
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

