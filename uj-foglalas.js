function submitFoglalas() {
    const cim = document.getElementById('cim').value;
    const datum = document.getElementById('datum').value;
    const fo = document.getElementById('fo').value;
    const iranyitoszam = document.getElementById('iranyitoszam').value;
    const nev = document.getElementById('nev').value;
  
    const foglalasData = {
      cim: cim,
      datum: datum,
      fo: fo,
      iranyitoszam: iranyitoszam,
      nev: nev
    };
  
    fetch('http://localhost:3000/foglalasok', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(foglalasData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Hiba! ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      window.location.href = 'foglalasok.html';
    })
    .catch(error => {
      alert('Hiba történt!');
      console.error('Hiba:', error);
    });
  }
  