import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import femmeway from '@/assets/products/femmeway.jpg';
import beeway from '@/assets/products/beway.jpeg';
import facialwash from '@/assets/products/facialwash.jpeg';
import sunscreen from '@/assets/products/sunscreen.jpeg';
import logo from '@/assets/mlway.png';

const HeroSection = () => {
  const products = [
    facialwash,
    femmeway,
    sunscreen,
    beeway

  ];

  return (
    <section className="pt-20 px-4 pb-10 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-pink-300 to-red-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 py-6">
          <img
            className="w-50 mx-auto py-3"
            src={logo}
            alt="MLWay Logo"
          />
          <p className="text-yellow-300 font-semibold text-xl mb-4 animate-pulse">
            Perhatian!! Untuk SIAPAPUN yang ingin mulai berbinis dari rumah, Info Terbaik Ini Perlu Anda Ketahui:
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Dapatkan Potensi Penghasilan Hingga Puluhan Juta Rupiah per bulan Bisa Dikerjakan dari Rumah/ Full/ Part Time
          </h1>
        </div>
        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            renderArrowPrev={(clickHandler, hasPrev) => {
              return hasPrev && (
                <button
                  onClick={clickHandler}
                  className="absolute left-4 z-10 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
                  aria-label="Previous"
                >
                  <span className="text-primary-500">❮</span>
                </button>
              );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              return hasNext && (
                <button
                  onClick={clickHandler}
                  className="absolute right-4 z-10 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
                  aria-label="Next"
                >
                  <span className="text-primary-500">❯</span>
                </button>
              );
            }}
          >
            {products.map((url, index) => (
              <div key={index} className="p-2">
                <img src={url} alt={`Product ${index + 1}`} className="rounded-lg shadow-2xl" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
