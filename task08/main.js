var x = 1;
let y = 'Niska';
console.log('x =', x, 'y =', y);

console.log('Tip od x:', typeof x);
console.log('Tip od y:', typeof y);

console.log('Operator ==');

console.log('0 == false <=>', 0 == false); //true
console.log("42 == '42' <=>", 42 == '42'); //true
console.log('1 == "jedan" <=>', 1 == 'jedan'); //false

console.log('Operator ===');

console.log('0 === false <=>', 0 === false); //false
console.log("42 === '42' <=>", 42 === '42'); //false
console.log("1 === 'jedan' <=>", 1 === 'jedan'); //false 
console.log('0 === 0 <=>', 0 === 0); //true
console.log('false === false <=>', false === false); //true
console.log('\'jedan\' === "jedan" <=>', 'jedan' === 'jedan'); //true

const duza_stranica = 15;
const kraca_stranica = 2.5;

const obim = 2 * duza_stranica + 2 * kraca_stranica;
console.log('Obim pravougaonika je:', obim);

const povrsina = duza_stranica * kraca_stranica;
console.log('Povrsina pravougaonika je:', povrsina);

let generisani_broj = Math.random();
console.log('Generisani broj iz intervala [0, 1) je:', generisani_broj);
generisani_broj = Math.floor(Math.random() * 100 + 50);
console.log(
  'Generisani broj iz celobrojnog intervala [50, 150) je:',
  generisani_broj
);

const prva_rec = 'Ovo';
const druga_rec = 'je';
const treca_rec = 'recenica';

// a
const cela_recenica = prva_rec + ' ' + druga_rec + ' ' + treca_rec + '.';
console.log(cela_recenica);

// b
const broj_karaktera = cela_recenica.length;
console.log('Broj karaktera u recenici je', broj_karaktera);

// c
let pozicija = cela_recenica.indexOf('recenica');
console.log('Pozicija niske "recenica" u recenici je:', pozicija);
pozicija = cela_recenica.indexOf('nepostojeca niska');
console.log('Pozicija niske "nepostojeca niska" u recenici je:', pozicija);

// d
const podniska = cela_recenica.slice(7, cela_recenica.length);
console.log('Podniska recenice od indeksa 7 do kraja niske:', podniska);
// Pogledati razlike izmedju slice, substr i substring za domaci

// e
const izmenjena_recenica = cela_recenica.replace(
  'recenica',
  'nesto duza recenica'
);
console.log(izmenjena_recenica);

// f
const sva_velika_slova = cela_recenica.toUpperCase();
console.log(sva_velika_slova);
const sva_mala_slova = cela_recenica.toLowerCase();
console.log(sva_mala_slova);

const recenica_sa_vodecim_belinama =
  '  \n  \t    \n  \t\t\t   ' + cela_recenica + '   \n\n';
console.log('Recenica sa vodecim belinama:', recenica_sa_vodecim_belinama);
const osisana_recenica = recenica_sa_vodecim_belinama.trim();
console.log('Osisana recenica:', osisana_recenica);

// h
const prvi_karakter = cela_recenica.charAt(0);
const poslednji_karakter = cela_recenica.charAt(cela_recenica.length - 1);
console.log(
  'Prvi karakter je "' +
    prvi_karakter +
    '", a poslednji karakter je "' +
    poslednji_karakter +
    '"'
);

let celi_broj = 42;
let celi_broj_kao_niska = celi_broj.toString();
console.log(
  'Vrednost ' +
    celi_broj +
    ' koja je tipa ' +
    typeof celi_broj +
    ' zapisana u tipu ' +
    typeof celi_broj_kao_niska +
    ' je ' +
    celi_broj_kao_niska
);
console.log(typeof(42+""))

console.log(typeof("42"*1));


celi_broj_kao_niska = '7';
celi_broj = Number.parseInt(celi_broj_kao_niska);
console.log(
  'Vrednost ' +
    celi_broj_kao_niska +
    ' koja je tipa ' +
    typeof celi_broj_kao_niska +
    ' zapisana u tipu ' +
    typeof celi_broj +
    ' je ' +
    celi_broj
);

const broj_u_pokretnom_zarezu_kao_niska = '3.14';
const broj_u_pokretnom_zarezu = Number.parseFloat(
  broj_u_pokretnom_zarezu_kao_niska
);
console.log(
  'Vrednost ' +
    broj_u_pokretnom_zarezu_kao_niska +
    ' koja je tipa ' +
    typeof broj_u_pokretnom_zarezu_kao_niska +
    ' zapisana u tipu ' +
    typeof broj_u_pokretnom_zarezu +
    ' je ' +
    broj_u_pokretnom_zarezu
);

const neuspesna_konverzija_1 = Number.parseInt('jedan');
const neuspesna_konverzija_2 = Number.parseInt('dva');
console.log('Vrednost neuspesne konverzije 1 je ' + neuspesna_konverzija_1);
console.log('Vrednost neuspesne konverzije 2 je ' + neuspesna_konverzija_2);
console.log(
  'Da li dve NaN vrednosti mogu biti jednake?',
  neuspesna_konverzija_1 == neuspesna_konverzija_2
);
console.log(
  'Provera da li je vrednost NaN:',
  Number.isNaN(neuspesna_konverzija_1)
);

// Sablon literali
// Naredne 3 linije koda se efektivno mogu posmatrati kao jedna linija koda,
// pri čemu će dati tekst u konzoli biti zaista ispisan u više linija.
console.log(`Korišćenjem šablon-literala
                tekst se može prelamati u više linija
što nije moguće uraditi korišćenjem jednostrukih ili dvostrukih navodnika`);

console.log(`Vrednost izraza 2 + 2 je ${2 + 2}`); // 'Vrednost izraza 2 + 2 je 4'