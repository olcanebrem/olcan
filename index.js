const axios = require('axios');

// Cloudflare API endpoint'i
const apiUrl = 'https://api.cloudflare.com/client/v4/ips';

// Cloudflare API isteği
axios.get(apiUrl, {
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',  // Cloudflare API anahtarınız buraya gelecek
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log('Cloudflare IPs:', response.data);
})
.catch(error => {
  console.error('Error fetching Cloudflare IPs:', error);
});
