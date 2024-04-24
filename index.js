let son1 = Number(prompt("Birinchi soni kiriting: "));
let son2 = Number(prompt("Ikkinchi soni kiriting kiriting: "));
let amal = String(prompt("Amalni  kiriting (+,-,*,/): "));

if (amal === "+")  {
    let yigindi = son1 + son2;
    alert(son1 + " + " + son2 + " = " + yigindi)
}

if (amal === '-') {
    let ayirma = son1 - son2;
    alert(son1 + " - " + son2 + " = " + ayirma)
}

if (amal === '*') {
    let  kopaytma = son1 * son2;
    alert(son1 + " * " + son2 + " = " + kopaytma)
}

if (amal === '/') {
    let bolinma = son1 / son2;
    alert(son1 + " / " + son2 + " = " + bolinma)
}