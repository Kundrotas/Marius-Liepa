/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

let vardasM = "Marius"
let pavardeK = "Kundrotas"
let gimimometai = 1978
let metai = new Date().getFullYear() - 1978
console.log("Aš esu " + vardasM + " " + pavardeK + ". Man yra " + Math.round(metai) + " metai.")

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

let t = Math.round(Math.random() * 4)
let s = Math.round(Math.random() * 4)
console.log("Skaičiai: " + t, s)
if (t==0 || s==0){
    console.log("Dalyba iš nulio negalima")
} else if (t > s){
    console.log((t / s).toFixed(2))
}else{
    console.log((t / s).toFixed(2)) 
}
/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
let sk1 = Math.round(Math.random() * 25)
let sk2 = Math.round(Math.random() * 25)
let sk3 = Math.round(Math.random() * 25)
console.log(`Skaičiai: ${sk1}, ${sk2}, ${sk3}`)

let largest = Math.max(sk1, sk2, sk3)
let smallest = Math.min(sk1, sk2, sk3)
let middleNum
if(sk1 != largest && sk1 !=smallest) {
    middleNum = sk1
    } else if (sk2 != largest && sk2 != smallest) {
        middleNum = sk2
    } else if (sk3 != smallest) {
        middleNum = sk3
    } else {
        middleNum = "undetermined as 2 or more numbers were equal."
    }
console.log(`The middle number is ${middleNum}`)
/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let kr1 = Math.ceil(Math.random() * 10)
let kr2 = Math.ceil(Math.random() * 10)
let kr3 = Math.ceil(Math.random() * 10)
if ((kr1 <= kr2 + kr3) && (kr2 <= kr1 + kr3) && (kr3 <= kr1 + kr2))
{console.log("Trikampis galimas")}
else {console.log("Trikampis negalimas")}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

let pirmas = Math.random *2
let antras = Math.random *2
let trecias = Math.random *2
let ketvirtas = Math.random *2
let nulis = 0
let vienetas = 1
let dvejetas = 2
console.log(nulis, vienetas, dvejetas)

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/



/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/



/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/



/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/



/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

