// Bir API URL'si tanımlayalım
const apiUrl = 'https://api.cloudflare.com/client/v4/ips';

// GET isteği gönderen bir fonksiyon yazalım
function getPost() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Ağ yanıtı uygun değil');
      }
      return response.json(); // JSON formatında yanıtı al
    })
    .then(data => {
      console.log('Veri başarıyla alındı:', data); // Alınan veriyi işle
      // Veriyi HTML içinde görüntüleme
      const postTitle = document.getElementById('post-title');
      const postBody = document.getElementById('post-body');
      postTitle.textContent = data.title;
      postBody.textContent = data.body;
    })
    .catch(error => {
      console.error('Veri alınırken bir hata oluştu:', error); // Hataları yakala ve işle
    });
}

// Fonksiyonu sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', getPost);
