import { API_CONFIG, USE_MOCK_DATA } from './config';

interface FetchOptions extends RequestInit {
  timeout?: number;
}

export class APIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public statusText?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export async function fetchWithTimeout(
  url: string,
  options: FetchOptions = {}
): Promise<Response> {
  const { timeout = API_CONFIG.TIMEOUT, ...fetchOptions } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

export async function fetchFromAPI<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  if (USE_MOCK_DATA) {
    throw new APIError('Using mock data');
  }

  try {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;
    const response = await fetchWithTimeout(url, options);

    if (!response.ok) {
      throw new APIError(
        'API request failed',
        response.status,
        response.statusText
      );
    }

    return response.json();
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError(
      error instanceof Error ? error.message : 'Unknown error occurred'
    );
  }
}