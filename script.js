// script.js

// Veri tablosunu referans alıyoruz
const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

// Verileri saklamak için bir array oluşturuyoruz (örnek olarak)
let dataEntries = [];

// Upload butonuna tıklandığında çalışacak fonksiyon
function uploadData() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    if (files.length === 0) {
        alert('Lütfen bir dosya seçin.');
        return;
    }

    const file = files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const content = event.target.result;
        const lines = content.split('\n');
        lines.forEach(line => {
            // Her satır için veriyi tabloya ekleyip, dataEntries array'ine de ekliyoruz
            const trimmedLine = line.trim();
            addDataToTable(trimmedLine);
            dataEntries.push({ data: trimmedLine });
        });
    };

    reader.readAsText(file);
}

// Export Data butonuna tıklandığında çalışacak fonksiyon
function exportData() {
    const csvContent = dataEntries.map(entry => entry.data).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Send Latest Data butonuna tıklandığında çalışacak fonksiyon
function sendLatestData() {
    const latestEntry = dataEntries[dataEntries.length - 1];
    if (!latestEntry) {
        alert('Hiç veri bulunamadı.');
        return;
    }

    fetch('http://localhost:8000/api/sendLatestData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: latestEntry.data })
    })
    .then(response => response.json())
    .then(data => {
        alert('Veri başarıyla gönderildi.');
    })
    .catch(error => {
        console.error('Hata:', error);
        alert('Veri gönderme işlemi sırasında bir hata oluştu.');
    });
}

// Tabloya yeni veri ekleyen fonksiyon
function addDataToTable(data) {
    const newRow = dataTable.insertRow();
    const cell = newRow.insertCell();
    cell.textContent = data;
}
