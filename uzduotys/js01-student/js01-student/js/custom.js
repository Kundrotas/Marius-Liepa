let num = 6 + 4
let vcs = "Labas"
let relationship = (vcs == num)
console.log(num + ", " + vcs + ", " + typeof(vcs) + ", " + relationship)

console.log(`${num}, ${vcs}, ${typeof(vcs)}, ${relationship}`)

console.log("Skaičius: " + num)
console.log(`Skaičius: ${num}`)

let vardas = "Jonas"
let pavarde = "Jonaitis"
let asmuo = `${vardas} ${pavarde}`
console.log(asmuo)

let tekstas = "Pirmas"
console.log(tekstas.length)
console.log(tekstas.toUpperCase())
console.log(tekstas.toLowerCase())
console.log(tekstas.charAt(4))
console.log(tekstas.indexOf("m"))
tekstas = "Čia gali būti Jūsų reklama"
console.log(tekstas.replace("gali būti", "yra"))
console.log(tekstas.substring(4, 14))
console.log(tekstas.substring(14))
console.log(tekstas.substr(4, 9))

let x = 6.34
console.log(Math.round(x))
console.log(Math.ceil(x))
console.log(Math.floor(x))

let y = 5.8
let z = 9

console.log(Math.max(x,y,z))
console.log(Math.min(x,y,z))

let i = Math.round(Math.random() * 30)
console.log(i)

// Math.random() * (max - min + 1) + min
// Sugeneruokite atsitiktinį skaičių nuo 10 iki 50
let a = Math.floor(Math.random() * (50 - 10 + 1) + 10)
console.log(a)

let num1 = 5
let num2 = "5"
if (num1 === num2){
    console.log("Lygu")
}
else {
    console.log("Nelygu")
}

let numeris = 1
while(numeris <= 10) {
    console.log(numeris)
    numeris++
}
for(let i = 1; i <= 10; i++) {
    console.log(i)
}

//1, 2, 3, 4, 5 - kokia jų suma?
let suma = 0
for(i = 0; i <= 5; i++) {suma = suma + i}
console.log(suma)

let skaiciai = [10, 20, 30, 40, 50, 60, 70, 80]
let sum = 0
for(let i = 0; i < skaiciai.length; i++){
    sum += skaiciai[i]
}
console.log(sum)

//alert("Dėmesio! Jūsų kompiuteryje virusas!");
//confirm("Ar tikrai norite uždaryti šį puslapį?");
//prompt("Koks Tavo vardas?");

/* let turimVarda = false;
while (turimVarda == false) {
    let userVardas = prompt ("Koks Tavo vardas?");
    if(userVardas) {
        if(confirm(`Ar tikrai Tavo vardas ${userVardas}?`)) {
            alert(`Labas, ${userVardas}!`);
            turimVarda = true;
        }else {
            alert("Bandyk darkart.");
        }
    }else {
        alert("Bandyk darkart.")
    }
}*/
let studentai = ["Lukas", "Kestutis", "Silvija", "Ursule", "Laurynas"]
console.log(studentai)
console.log(studentai[4])

let pirmasMasyvas = ["Sesi", 5, "Zuvis", "Trylika"]
let antrasMasyvas = ["Raudonas", "Melynas", "Geltonas", "Zalias"]
let masyvuMasyvas = [pirmasMasyvas, antrasMasyvas]
console.log(masyvuMasyvas)
console.log(masyvuMasyvas[0][0])