import { CheckCircle } from 'lucide-react';

const BenefitSection = () => {
  const benefits = [
    "Apakah Anda ingin Jalani Bisnis Hanya Dari Rumah ?",
    "Mahasiswa yang ingin mendapatkan penghasilan",
    "Apakah Anda ingin kebebasan financial?",
    "Mahasiswa yang suka mencari tantangan baru dan menjadi leader?",
    "Susah mencari barang yang laku dipasaran ?",
    "Apakah Anda mencari kebebasan waktu?"
  ];

  return (
    <section className="py-16 bg-gradient-to-bl from-orange-400 to-rose-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Sebelum Anda Bergabung MLWay, Coba Anda Ingat Kembali.
        </h2>
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center mb-6 hover:transform hover:translate-x-2 transition-transform">
              <CheckCircle className="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" />
              <p className="text-lg text-white">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
