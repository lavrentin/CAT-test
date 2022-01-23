import { API_URL, DEFAULT_HEADERS } from './Api-url';



const apiURL = {fetchAll: ({ limit = 10, page = 1, categoryId = 1 }) => (
    fetch(`${API_URL}/v1/images/search?limit=${limit}&page=${page}&category_ids=${categoryId}`, {
      method: 'GET',
      headers: DEFAULT_HEADERS
    })
    .then(r => r.json())
  )
};

export default apiURL;
