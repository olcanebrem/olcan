const express = require('express');
const app = express();
const port = 8001;
const { textEntries } = require('./data.js'); // data.js dosyasından textEntries'i içe aktardık

// Middleware ile JSON parser ekleme
app.use(express.json());

app.get('/', (req, res) => {
   res.send('Merhaba, Express uygulaması çalışıyor!');
});
 
app.use(express.static('public'));

// GET isteği ile textEntries'i döndüren endpoint
app.get('/api/textEntries', (req, res) => {
   res.json(textEntries);
});

// POST isteği ile textEntries'e yeni giriş ekleyen endpoint
app.post('/api/textEntries', (req, res) => {
   const { text } = req.body;

   // Yeni veriyi textEntries dizisine ekleme
   textEntries.push({ text });

   // Başarılı bir şekilde eklendiğine dair mesaj döndürme
   res.send('Yeni metin girişi başarıyla eklendi.');
});

app.listen(port, () => {
   console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});

app.get('/', (req, res) => {
   res.send('Merhaba, Express uygulaması çalışıyor!');
 });
 

