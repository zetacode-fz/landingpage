import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import wchat0 from '@/assets/socialproof/whatsapp_chat.png';
import wchat1 from '@/assets/socialproof/whatsapp_chat-1.png';
import wchat2 from '@/assets/socialproof/whatsapp_chat-2.png';
import wchat3 from '@/assets/socialproof/whatsapp_chat-3.png';
import wchat4 from '@/assets/socialproof/whatsapp_chat-4.png';
import wchat5 from '@/assets/socialproof/whatsapp_chat-5.png';
import wchat6 from '@/assets/socialproof/whatsapp_chat-6.png';

const ChatTestimonialsSection = () => {
  const chatTestimonials = [
    wchat0,
    wchat1,
    wchat2,
    wchat3,
    wchat4,
    wchat5,
    wchat6
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-white mb-4">
              Sebelum Bergabung, Sebaiknya Dengarkan Apa Kata Mereka.
            </h2>
            <p className="text-yellow-100">
              Testimoni langsung dari para member yang telah merasakan manfaat bergabung dengan MLWay.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                centerMode={true}
                autoPlay={true}
                centerSlidePercentage={33.33}
                renderArrowPrev={(clickHandler, hasPrev) => {
                  return hasPrev && (
                    <button
                      onClick={clickHandler}
                      className="absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                    >
                      ❮
                    </button>
                  );
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                  return hasNext && (
                    <button
                      onClick={clickHandler}
                      className="absolute right-0 z-10 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                    >
                      ❯
                    </button>
                  );
                }}
              >
                {chatTestimonials.map((url, index) => (
                  <div key={index} className="px-2">
                    <img src={url} alt={`Chat Testimonial ${index + 1}`} className="rounded-lg shadow-xl" />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatTestimonialsSection;
