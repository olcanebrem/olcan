document.addEventListener('DOMContentLoaded', function() {
  const apiUrl = 'https://api.olcanebrem.com/api/data';

  // Başlık ve içerik yer tutucuları
  const postTitleElement = document.getElementById('post-title');
  const postBodyElement = document.getElementById('post-body');

  // API'den GET isteği gönderme
  fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          // API'den gelen veriyi sayfaya yerleştirme
          postTitleElement.textContent = data.message;
          postBodyElement.textContent = `Timestamp: ${data.timestamp}`;
      })
      .catch(error => {
          console.error('Fetch error:', error);
          postTitleElement.textContent = 'Hata!';
          postBodyElement.textContent = 'API isteği başarısız oldu.';
      });
});
