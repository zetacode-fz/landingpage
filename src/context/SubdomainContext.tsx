import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ResellerData } from '../types';
import { fetchSubdomainData } from '../services/api';


export const DEFAULT_DATA: ResellerData = {
  id: 0,
  member_id: 0,
  subdomain: null,
  url: null,
  name: null,
  phone_number: '6282333014880',
  address: 'Indonesia',
  facebook: null,
  instagram: 'https://www.instagram.com/mlway_id/',
  tiktok: null,
  link: null,
  landing_page_active: 1,
  created_at: '',
  updated_at: '',
  hit: 0,
};

interface SubdomainContextType {
  isLoading: boolean;
  error: boolean;
  resellerData: ResellerData;
}

const SubdomainContext = createContext<SubdomainContextType>({
  resellerData: DEFAULT_DATA,
  isLoading: true,
  error: false,
});

export const useSubdomain = () => useContext(SubdomainContext);


export const SubdomainProvider = ({ children }: { children: ReactNode }) => {
  const [resellerData, setResellerData] = useState<ResellerData>(DEFAULT_DATA);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState(false);

  useEffect(() => {
    const loadSubdomainData = async () => {
      if (import.meta.env.VITE_ENV === "development") {
        console.log("Running in development mode, skipping subdomain fetch.");
        setResellerData(DEFAULT_DATA);
        setIsLoading(false);
        return;
      }

      try {
        const hostname = window.location.hostname; // Misalnya: "sub.example.com"
        const parts = hostname.split(".");

        let isRootDomain = false;
        let subdomain = null;

        // Menangani domain dengan TLD "localhost"
        if (hostname.endsWith(".localhost")) {
          if (parts.length === 2) {
            subdomain = parts[0]; // Ambil subdomain pertama
          } else {
            isRootDomain = true; // "localhost" saja dianggap root domain
          }
        } else {
          // Penanganan domain normal
          isRootDomain = parts.length <= 2 || parts[0] === "www";
          subdomain = isRootDomain ? null : parts[0];
        }

        // Skip API call if we're on the main domain
        if (isRootDomain || !subdomain) {
          // setIsRootDomain(true);
          setResellerData(DEFAULT_DATA);
          setIsLoading(false);
          return;
        }

        const response = await fetchSubdomainData(subdomain);

        if (response.success) {
          setResellerData(response.data);
        } else {
          redirectToMainDomain();
        }
      } catch (err) {
        // setError(true);
        redirectToMainDomain();
      } finally {
        setIsLoading(false);
      }
    };

    loadSubdomainData();
  }, []);
  const redirectToMainDomain = () => {
    const hostname = window.location.hostname; // Contoh: "millionaire.mlway.online"
    const port = window.location.port ? `:${window.location.port}` : ""; // Tambahkan port jika ada
    const parts = hostname.split(".");

    let mainDomain;

    if (hostname.endsWith(".localhost")) {
      // Jika domain lokal, root domain tetap "localhost"
      mainDomain = "localhost";
    } else {
      // Jika hostname memiliki lebih dari 2 bagian, ambil 2 bagian terakhir sebagai root domain
      mainDomain = parts.length > 2 ? parts.slice(-2).join(".") : hostname;
    }

    window.location.href = `${window.location.protocol}//${mainDomain}${port}`;
  };


  return (
    <SubdomainContext.Provider value={{ resellerData, isLoading, error }}>
      {children}
    </SubdomainContext.Provider>
  );
};
