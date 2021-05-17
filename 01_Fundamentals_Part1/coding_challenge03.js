const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;
console.log(avgKoalas)

if (avgDolphins > avgKoalas) {
    console.log("The Dolphins are the winners!");
} else if (avgDolphins < avgKoalas) {
    console.log("The Koalas are the winners!")
} else if (avgDolphins === avgKoalas) { //apesar de não ser necessário declara isso pq ou se nenhum time ganhou/perdeu então foi empate, mas td bem
    console.log("There was a draw! Both teams are winners!")
}

//Falta Bonus 1 and Bonus 2