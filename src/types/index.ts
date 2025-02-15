export interface SubdomainResponse {
    success: boolean;
    data: ResellerData;
}

export interface ResellerData {
    id: number;
    member_id: number;
    subdomain: string | null;
    url: string | null;
    name: string | null;
    phone_number: string;
    address: string;
    facebook: string | null;
    instagram: string | null;
    tiktok: string | null;
    link: string | null;
    landing_page_active: number;
    created_at: string;
    updated_at: string;
    hit: number;
}
