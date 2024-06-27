
const express = require('express');
const axios = require('axios');

const port = 3000;

// Cloudflare API'ye GET isteği atan rota
app.get('/cloudflare-ips', async (req, res) => {
  try {
    const response = await axios.get('https://api.cloudflare.com/client/v4/ips');
    res.json(response.data);
  } catch (error) {
    console.error('Cloudflare API isteğinde hata:', error);
    res.status(500).send('Cloudflare API isteğinde hata oluştu.');
  }
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
