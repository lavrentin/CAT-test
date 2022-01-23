import { API_URL, DEFAULT_HEADERS } from './Api-url';




const apiCategoryes = {fetchAll: () => ( fetch(`${API_URL}/v1/categories`,
 {method: 'GET', headers: DEFAULT_HEADERS})
 .then(r => r.json())
  )
};

export default apiCategoryes;
