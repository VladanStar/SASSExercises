const galerija = document.getElementById('galerija_slika');
const elementi_galerije = galerija.children;

for (const elem of elementi_galerije) {
  // Zamenjujemo sve `span` elemente `img` elementima
  if (elem.tagName.toLowerCase() === 'span') {
    const slika = document.createElement('img');
    slika.src = 'https://static.mondo.rs/Pictures/950/1689/1137888/jpeg/josip-broz.jpg?ts=2022-04-24T22:22:41';
    slika.width = 100;

    galerija.replaceChild(/* šta ubacujemo */ slika, /* šta izbacujemo */ elem);
  }
}