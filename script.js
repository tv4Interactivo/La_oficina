const toggle = document.getElementById("dropdown-content");

//Show/Hide dropdown menu
function toggleDisplay() {
  if (toggle.style.display === "none") {
    toggle.style.display = "block";
  } else {
    toggle.style.display = "none";
  }
}

//copy url to clipboard
function copyURL() {
  const btnHome = document.getElementsByClassName("share");
  navigator.clipboard.writeText(window.location.href);

  Swal.fire({
    text: '¡Enlace copiado al portapapeles!',
    confirmButtonText: 'Ok',
    confirmButtonColor: '#5899b2',
    background: '#95daf5',
    color: '#fff'
  })
  
  toggle.style.display = "none";
}

//change language
function changeLang() {
  const esp = document.getElementById("text-esp");
  const eng = document.getElementById("text-eng");
  const esp2 = document.getElementById("text-esp2");
  const eng2 = document.getElementById("text-eng2");
  const esp3 = document.getElementById("text-esp3");
  const eng3 = document.getElementById("text-eng3");

  if (esp.style.display === "flex") {
    esp.style.display = "none";
    eng.style.display = "flex";
  } else {
    esp.style.display = "flex";
    eng.style.display = "none";
  }

 

  toggle.style.display = "none";
}