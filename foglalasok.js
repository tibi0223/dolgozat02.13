document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/foglalasok')
      .then(response => response.json())
      .then(foglalasok => {
        foglalasok.sort((a, b) => new Date(b.datum) - new Date(a.datum));
  
        const tableBody = document.querySelector('#foglalasokTable tbody');
        foglalasok.forEach(foglalas => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${foglalas.datum}</td>
            <td>${foglalas.nev}</td>
            <td>${foglalas.fo}</td>
            <td>${foglalas.cim}</td>
            <td>${foglalas.iranyitoszam}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        alert('Hiba a lekérés során');
        console.error('Hiba:', error);
      });
  });
  