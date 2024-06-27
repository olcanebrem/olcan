const express = require('express');
const app = express();



module.exports = app;

// app.js
const express = require('express');
const port = 3000;

// cloudflare.js dosyasını dahil et
const cloudflareRoutes = require('./cloudflare');

// Cloudflare rotalarını kullan
app.use('/', cloudflareRoutes);

// Ana rota (/) için GET isteği
app.get('/', (req, res) => {
  res.send('Merhaba, Dünya!');
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
