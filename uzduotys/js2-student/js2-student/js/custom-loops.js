/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
let sveikas = "labas"
while(sveikas <= 10) {
    console.log(sveikas)};
    sveikas++;
/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
let numeris = 0
while(numeris <= 9) {
    console.log(numeris)
    numeris++
}
/* 03.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
let botanika = ["ąžuolas", "topinambas", "pomidoras", "sanpaulija", "liepa", "skroblas", "kopūstas", "apynys", "tabakas", "dumblis"]
console.log(botanika)
/* 04.
Atspausdinkite kiekvieną 3-čio uždavinio augalą atskiroje eilutėje.
*/
let botanika2 = ["ąžuolas", "topinambas", "pomidoras", "sanpaulija", "liepa", "skroblas", "kopūstas", "apynys", "tabakas", "dumblis"]
console.log(botanika2.join('\r\n'))
/* 05.
Atspausdinkite 3-čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
/*let botanika3 = ["ąžuolas", "topinambas", "pomidoras", "sanpaulija", "liepa", "skroblas", "kopūstas", "apynys", "tabakas", "dumblis"]
let reversed = botanika.reverse();
console.log(reversed)
*/
for(let i=9; i <= botanika.length; i++) {
    console.log(botanika[i])
}
/* 06.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/

/* 07.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/

/* 08.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

/* 09.
Suskaičiuokite kiek 3-čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/