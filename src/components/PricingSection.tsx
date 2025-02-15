import { Check } from 'lucide-react';
import logobank from '@/assets/icon/bank.png';
import { useSubdomain } from '../context/SubdomainContext';

const PricingSection = () => {
  const { resellerData } = useSubdomain();
  const ownerInfo = {
    name: resellerData?.name,
    role: "Senior Business Partner MLWay",
    description: "Bergabunglah dengan tim kami dan mulai perjalanan Anda menuju kesuksesan finansial. Saya siap membantu Anda mencapai impian Anda bersama MLWay.",
    whatsapp: resellerData?.phone_number,
    social: {
      facebook: resellerData?.facebook,
      //   instagram: resellerData?.instagram ? `https://instagram.com/${resellerData.instagram.replace('@', '')}` : "https://instagram.com/mlway",
      //   tiktok: resellerData?.tiktok ? `https://tiktok.com/@${resellerData.tiktok}` : "https://tiktok.com/mlway"

      instagram: resellerData?.instagram,
      tiktok: resellerData?.tiktok
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Hai, saya tertarik dengan MLWay dan ingin tahu lebih banyak.";
    const whatsappUrl = `https://wa.me/${ownerInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-400 to-cyan-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          <div className=''>
            <h3 className="text-3xl font-bold text-white mb-12">
              Biaya Pendaftaran MLWay
            </h3>
            <div className='text-white'>
              Nikmati berbagai keuntungan dengan menjadi member MLWay. Anda akan mendapat 1 Paket Produk Regular, Lisensi Membership, Starterpack, Website Promo, dan Berbagai Bonus & Reward berjenjang.
            </div>
            <div className='grid grid-cols-2 py-5'>
              <img
                className="w-auto mx-auto py-3"
                src={logobank}
              />
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur rounded-lg shadow-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-center mb-4 text-cyan-800">Membership</h3>
            <div className="text-center mb-8">
              <span className="text-4xl font-bold text-green-600">Rp 360.000</span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Paket Produk Regular</span>
              </li>

              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Membership</span>
              </li>

              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Starterpack</span>
              </li>

              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Web Promosi</span>
              </li>

              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Bonus Sponsor</span>
              </li>

              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Bonus Pairing</span>
              </li>

              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Reward Regular</span>
              </li>

            </ul>
            <button
              onClick={handleWhatsAppClick} className="w-full mt-8 bg-gradient-to-r from-green-500 to-cyan-500 text-white py-3 px-6 rounded-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 shadow-lg">
              Daftar Sekarang
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
