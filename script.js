
function zaloguj() {
   
    const login = document.getElementById('login').value;
    const haslo = document.getElementById('haslo').value;
  
    if (login === 'admin' && haslo === 'admin') {
      window.location.href = 'next_page.html'; 
    } else {
      alert('Błędny login lub hasło');
    }
  }
  

function wyloguj() {
  console.log("Wylogowano!");
  window.location.href = 'index.html'; 
  }

function wysylkaformularza() {

  const pesel = document.getElementById('pesel').value;
  const Imie = document.getElementById('Imie').value;
  const Nazwisko = document.getElementById('Nazwisko').value;

  if (!pesel){
    alert("Pole PESEL jest puste!")
    return false;
  }

  if (!Imie){
    alert("Pole Imie jest puste!")
    return false;
  }
  if (!Nazwisko){
    alert("Pole Nazwisko jest puste!")
    return false;
  }
    console.log("Przesłano formularz");
    window.location.href = 'koniec.html';
    return false;

  }

  function powrot() {
    console.log("Powrócono do formularza");
    window.location.href = 'next_page.html';
  }

  