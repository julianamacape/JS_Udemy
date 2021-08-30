"use strict";

//Data Structures, Modern Operators and Strings
//Coding challenge #4

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const box = document.querySelector("textarea");
const button = document.querySelector("button");

button.textContent = "Click!";
button.style.cursor = "pointer";

button.addEventListener("click", function () {
  const boxText = box.value;
  const rows = boxText.split("\n"); // \n is the character that represents a line break. So the .split() divider will split the text every time the line breaks, so if you log "rows" to the console using the test data provided you'll see that the .split() method returns an array with 5 elements.
  //Now for each element of this array ("rows"), we need the first name and the second name separated, all set to lower case and with white spaces trimmed.
  for (const [index, row] of rows.entries()) {
    //"row" will be each element of the array "rows"
    //it was necessary to use destructuring here because we need the "index" value in order to print as many emojis as the index counts
    const [first, second] = row.toLowerCase().trim().split("_");
    //using destructuring, we manage to create 2 variables. The .split() method will help us separate the first name from the second one
    const camelVar = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    //Here he glued together both names and set the 1st letter of the second name to upper case
    console.log(`${camelVar.padEnd(20)}${"💻".repeat(index + 1)}`);
    //To add the emoji we use padEnd(). The second argument is omitted because we want the padding to be an empty space, so it's unecessary
  }
});
