import { Award, Target, DollarSign, Clock, Users } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <Award className="w-12 h-12 text-yellow-400" />,
      title: "Produk Berkualitas",
      description: "Dapatkan akses ke produk-produk premium dengan kualitas terbaik"
    },
    {
      icon: <Target className="w-12 h-12 text-yellow-400" />,
      title: "Target Pasar Luas",
      description: "Jangkau pelanggan potensial dari berbagai kalangan"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-yellow-400" />,
      title: "Penghasilan Tinggi",
      description: "Potensi pendapatan yang menjanjikan dengan sistem bonus yang menarik"
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-400" />,
      title: "Fleksibilitas Waktu",
      description: "Atur jadwal kerja sesuai keinginan Anda"
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-400" />,
      title: "Komunitas Supportif",
      description: "Bergabung dengan komunitas yang saling mendukung"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Keuntungan Yang Akan Kamu Dapatkan Bergabung MLWay
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{advantage.title}</h3>
              <p className="text-gray-200">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
