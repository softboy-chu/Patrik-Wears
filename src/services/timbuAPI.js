export const fetchProducts = async (page = 1, limit = 10) => {
  const apiUrl = 'https://timbu-get-all-products.reavdev.workers.dev/?organization_id=e04a8064aa7d46e2b685459ca3e5efd9&reverse_sort=false&page=1&limit=10&Appid=AJBFU1UH9D23NL7&Apikey=dfc6c912aa734a47b8322906ce7bf4d520240712200931831369';
  const organizationId = 'e04a8064aa7d46e2b685459ca3e5efd9';
  const appId = 'AJBFU1UH9D23NL7'; 
  const apiKey = 'dfc6c912aa734a47b8322906ce7bf4d520240712200931831369';

  const response = await fetch(` ${apiUrl}?organization_id=${organizationId}&Appid=${appId}&Apikey=${apiKey}&page=${page}&limit=${limit}`);

  if (!response.ok) {
      throw new Error('Failed get chu/"s products');
  }

  const data = await response.json();
  return data;
};