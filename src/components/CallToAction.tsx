import { Facebook, Instagram } from 'lucide-react';
import { useSubdomain } from '../context/SubdomainContext';

const CallToAction = () => {
  const { resellerData } = useSubdomain();

  const ownerInfo = {
    name: resellerData?.name,
    // role: "Senior Business Partner MLWay",
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
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{ownerInfo.name}</h2>
          <h2 className="text-l font-bold mb-4">{ownerInfo.whatsapp}</h2>
          {/* <p className="text-xl mb-4">{ownerInfo.role}</p> */}
          <p className="max-w-2xl mx-auto mb-8">{ownerInfo.description}</p>

          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg mb-8 transition-colors"
          >
            Daftar Sekarang
          </button>

          <div className="flex justify-center space-x-6">
            {ownerInfo.social.facebook && (
              <a href={ownerInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
                <Facebook className="w-6 h-6" />
              </a>
            )}
            {ownerInfo.social.instagram && (
              <a href={ownerInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
                <Instagram className="w-6 h-6" />
              </a>
            )}
          </div>

          {resellerData?.address && (
            <div className="mt-8 text-sm text-gray-200">
              <p>{resellerData.address}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
