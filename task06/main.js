var x = 1;
let y = "Niska";
const z = true;
console.log(8 * "2", typeof (8 * "2"))
console.log("5" + 1, typeof ('5' + 1, 5 - 1, typeof ('5' - 1)));
console.log(8 * "two", typeof (8 * "two"));
console.log(8 * NaN, typeof NaN);
let recenica = "vladan cupric"
console.log(recenica.indexOf("nepostojeca"));
let niz_brojeva = [1,2,3,4,5];
console.log(typeof niz_brojeva);

// -------------------------------

const mesani_niz = [17.5, 'oop', false, 1000, -12.457, 'kiaa', true, true];

function negiraj_bulove_vrednosti(niz) {
  for (let i = 0; i < niz.length; ++i) {
    if (typeof niz[i] === 'boolean') {
      // Menjamo element prosledjenog niza
      niz[i] = !niz[i];
    }
  }
}


console.log('Mesani niz pre poziva funkcije:   ' + mesani_niz);
negiraj_bulove_vrednosti(mesani_niz);
console.log('Mesani niz nakon poziva funkcije: ' + mesani_niz);



let sekvenca = 'a-t-a-g-c-a-g-t-c-c-a';
let nukleotide = sekvenca.split('-');
console.log('Kreirali smo niz nukleotida: ' + nukleotide);

nukleotide = ['a', 't', 'a', 'g', 'c', 'a', 'g', 't', 'c', 'c', 'a'];
sekvenca = nukleotide.join('');
console.log('Kreirali smo DNK sekvencu: ' + sekvenca);

nukleotide = ['a', 't', 'a', 'g', 'c', 'a', 'g', 't', 'c', 'c', 'a'];
 sekvenca = 'atagcagtcca';

function napravi_2grame(niz) {
  const dvagrami = [];
  for (let i = 0; i < niz.length - 1; ++i) {
    // Izdvajanje podniza na osnovu datih indeksa a i b.
    // Podniz koji se dobija je iz intervala indeksa [a, b).
    const naredni_dvagram = niz.slice(i, i + 2);

    // Promenljiva naredni_dvagram je niz
    // Promenljiva dvagrami je niz
    // => Ubacujemo niz u niz
    // => Promenljiva dvagrami je visedimenzionalni niz
    dvagrami.push(naredni_dvagram);
  }
  return dvagrami;
}
const dvagrami = napravi_2grame(nukleotide);
console.log(
  'DNK sekvenca ' +
    sekvenca +
    ' ima ukupno ' +
    dvagrami.length +
    ' 2-grama i oni su:'
);
for (let i = 0; i < dvagrami.length; ++i) {
  console.log(i + 1 + '. 2-gram: ' + dvagrami[i]);
}