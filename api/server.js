const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000; // Ortam değişkeninden portu al, yoksa 3000 kullan

app.use(cors()); // CORS sorunlarını önlemek için
app.use(express.json()); // JSON formatında gelen istekleri işlemek için

// Basit bir GET endpoint
app.get('/api/data', (req, res) => {
    const data = {
        message: 'Hello, World!',
        timestamp: new Date()
    };
    res.status(200).send
    res.json(data);
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`API server running on port ${port}`);
});
