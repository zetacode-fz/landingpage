import axios from 'axios';
import { SubdomainResponse } from '../types';

const API_BASE_URL = 'https://login.mlway.id/api';

export const fetchSubdomainData = async (username: string): Promise<SubdomainResponse> => {
  try {
    const response = await axios.get<SubdomainResponse>(`${API_BASE_URL}/marketing/${username}`);
    return response.data;
  } catch (error) {
    return { success: false, data: {} as any };
  }
};
