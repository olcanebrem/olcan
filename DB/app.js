const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// MySQL bağlantısı
const connection = mysql.createConnection({
  host: '188.132.198.82',
  user: 'olcanebr_olcan',
  password: 'XG}n=P}gpq#T',
  database: 'olcanebr_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

// Body parser kullanımı
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API endpoint (veri çekme)
app.get('/api/get', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// API endpoint (veri ekleme)
app.post('/api/post', (req, res) => {
  const { supplier_code, supplier_name, invoice_number, invoice_date, due_date, net_amount } = req.body;
  const query = 'INSERT INTO users (supplier_code, supplier_name, invoice_number, invoice_date, due_date, net_amount) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(query, [supplier_code, supplier_name, invoice_number, invoice_date, due_date, net_amount], (error, results) => {
    if (error) throw error;
    res.json({ message: 'Data added successfully!' });
  });
});

// Statik dosyaları servis edin
app.use(express.static('public'));

// My Express App sayfasına yönlendirme
app.get('/my-express-app', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'express.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
