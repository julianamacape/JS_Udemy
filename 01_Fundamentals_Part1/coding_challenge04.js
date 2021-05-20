let bill = 430;
let tip;

bill >= 50 && bill <= 300 ? console.log(`The bill was $${bill} so you must tip $${tip = bill * 0.15} and pay a total amount of $${tip + bill}.`) : console.log(`The bill was $${bill} so you must tip $${tip = bill * 0.2} and pay a total amount of $${tip + bill}.`);

/*
if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
    let totalValue = bill + tip;
    console.log(`The bill was $${bill}.00 so you must tip $${tip} and pay a total amount of $${totalValue}.`);
} else {
    tip = bill * 0.2;
    let totalValue = bill + tip;
    console.log(`The bill was $${bill}.00 so you must tip $${tip}.00 and pay a total amount of $${totalValue}.`);
}
*/

//The teacher's solution

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}`);