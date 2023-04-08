var telefon = document.getElementById('telefon');
var telefon_meni = document.querySelector('.navigacioni_meni_telefon');


function otvoriMeni() {
    telefon_meni.classList.toggle('hide');
}


telefon.addEventListener('click', otvoriMeni);