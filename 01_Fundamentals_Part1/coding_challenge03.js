/* Test data
const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;

if (avgDolphins > avgKoalas) {
    console.log("The Dolphins are the winners!");
} else if (avgDolphins < avgKoalas) {
    console.log("The Koalas are the winners!")
} else if (avgDolphins === avgKoalas) { //apesar de não ser necessário declara isso pq ou se nenhum time ganhou/perdeu então foi empate, mas td bem
    console.log("There was a draw! Both teams are winners!")
}
*/

/* Bonus 1
const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 123) / 3;

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log("The Dolphins are the ultimate winners!");
} else if (avgDolphins > avgKoalas && avgDolphins < 100) {
    console.log("The Dolphins beat the Koalas, but didn't score the mark of 100 points.")
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
    console.log("The Koalas are the ultimate winners!");
} else if (avgKoalas > avgDolphins && avgKoalas < 100) {
    console.log("The Koalas beat the Dolphins, but didn't score the mark of 100 points.")
} else {
    console.log("There was a draw! Both teams are winners!")
}
*/

/* Bonus 2
const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 106) / 3;

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log("The Dolphins are the ultimate winners!");
} else if (avgDolphins > avgKoalas && avgDolphins < 100) {
    console.log("The Dolphins beat the Koalas, but didn't score the mark of 100 points.")
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
    console.log("The Koalas are the ultimate winners!");
} else if (avgKoalas > avgDolphins && avgKoalas < 100) {
    console.log("The Koalas beat the Dolphins, but didn't score the mark of 100 points.")
} else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log("There was a draw! Both teams are winners!")
}
*/