const express = require('express');
const axios = require('axios');
const port = process.env.PORT || 3000;

// Cloudflare API'ye GET isteği atan rota
app.get('/cloudflare-ips', async (req, res) => {
  try {
    const response = await axios.get('https://api.cloudflare.com/client/v4/ips');
    res.json(response.data);
    res.status(200).json({
      message: "it works!"
    });
  } catch (error) {
    console.error('Cloudflare API isteğinde hata:', error);
    res.status(500).send('Cloudflare API isteğinde hata oluştu.');
  }
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});

module.exports = app;

/* const express = require('express');
const https = require('https');
const { URL } = require('url');
const port = process.env.PORT || 3000;

const app = express();

// Cloudflare API'ye GET isteği atan rota
app.get('/cloudflare-ips', (req, res) => {
  const url = new URL('https://api.cloudflare.com/client/v4/ips');

  https.get(url, (response) => {
    let data = '';

    // Veri geldikçe parça parça al
    response.on('data', (chunk) => {
      data += chunk;
    });

    // Tüm veri alındığında işle
    response.on('end', () => {
      try {
        const jsonData = JSON.parse(data);
        res.status(200).json(jsonData);
      } catch (error) {
        console.error('JSON parse hatası:', error);
        res.status(500).send('Cloudflare API isteğinde hata oluştu.');
      }
    });
  }).on('error', (error) => {
    console.error('Cloudflare API isteğinde hata:', error);
    res.status(500).send('Cloudflare API isteğinde hata oluştu.');
  });
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});

module.exports = app;
*/