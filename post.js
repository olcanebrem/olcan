const express = require('express');
const multer = require('multer'); // Multer'ı dahil edin
const upload = multer({ dest: 'uploads/' });

const app = express();

app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    console.log('Uploaded file:', file);
    res.send('File uploaded successfully.');
});

app.listen(8001, () => {
    console.log('Server is running on http://localhost:8001');
});
