const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getGames = async (search = '', filters = {}, page = 1) => {
  try {

    let url = `${BASE_URL}/games?key=${API_KEY}&page_size=12&page=${page}`;

    if (search) url += `&search=${encodeURIComponent(search)}`;
    if (filters.genre) url += `&genres=${filters.genre}`;
    if (filters.order) url += `&ordering=${filters.order}`;

    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Erro na requisição:", error);
    return [];
  }
};