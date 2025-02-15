import person1 from "@/assets/socialproof/person-1.jpg";
import person2 from "@/assets/socialproof/person-2.jpg";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Angger",
      role: "DusDukDuk Founder",
      content: "Saya sudah mencoba banyak produk perawatan wajah, tapi facial wash ini benar-benar berbeda. Setelah pemakaian beberapa hari, kulit saya terasa lebih bersih, segar, dan lembut. Yang paling saya suka adalah produk ini tidak membuat kulit kering atau iritasi, bahkan untuk kulit sensitif seperti saya. Wajah saya tampak lebih cerah dan bebas dari jerawat. Saya sangat merekomendasikan facial wash ini untuk siapa saja yang ingin merawat kulit wajah mereka dengan baik!",
      image: person1
    },
    {
      name: "Sosa",
      role: "Event Organizer",
      content: "Tidak pernah saya kira, hanya dengan mengganti facial wash, kulit wajah saya bisa mengalami perubahan yang begitu signifikan! Produk ini tidak hanya membersihkan kotoran dan minyak dengan sempurna, tetapi juga memberi efek menyegarkan yang tahan lama. Sejak menggunakan facial wash ini, pori-pori saya tampak lebih kecil dan kulit terasa lebih halus. Aroma yang lembut membuat rutinitas cuci muka jadi momen yang saya tunggu-tunggu setiap hari. Facial wash ini benar-benar pilihan terbaik untuk perawatan kulit harian!  ",
      image: person2
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-teal-500 to-cyan-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Apa Kata Mereka Yang Sudah Memakai Produk MLWay?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-teal-500"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-teal-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
