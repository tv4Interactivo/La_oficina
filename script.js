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

  if (esp.style.display === "block") {
    esp.style.display = "none";
    eng.style.display = "block";
  } else {
    esp.style.display = "block";
    eng.style.display = "none";
  }

  toggle.style.display = "none";
}

//walk
function walkFwd(){
  var step = 0.0;
  const walkForward = document.getElementById("rig");
  const fwd = walkForward.setAttribute(step);
  
}