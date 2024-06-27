const express = require('express');
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000; // Ortam değişkeninden portu al, yoksa 3000 kullan
const server = http.createServer(app);

// Sunucuyu başlat
server.listen(port);