// file-upload-example/server.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Multer konfigürasyonu: Dosyaların yükleneceği dizin
const upload = multer({ dest: 'uploads/' });

// Statik dosyalar için middleware
app.use(express.static(path.join(__dirname, 'public')));

// Dosya yükleme için POST endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    console.log('Uploaded file:', file);
    res.send('File uploaded successfully.');
});

// Sunucuyu başlat
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
