const express = require('express');
const cors = require('cors');
const app = express();
const port = 80;

app.use(cors()); // CORS sorunlarını önlemek için
app.use(express.json()); // JSON formatında gelen istekleri işlemek için

// Basit bir GET endpoint
app.get('/api/data', (req, res) => {
    const data = {
        message: 'Hello, World!',
        timestamp: new Date()
    };
    res.json(data);
});

// Dinleme
app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});
