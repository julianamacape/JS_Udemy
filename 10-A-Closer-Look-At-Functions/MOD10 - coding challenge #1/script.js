"use strict";

//A Closer Look at Functions
//Coding challenge #1 - Poll app

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //The first thing it does is to display a prompt window for the user to input the number of the selected option
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);
    //The second thing it does is to update the 'answers' array property, based on the input number.
    typeof answer === "number" &&
      answer < this.options.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are: ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

//TEST DATA #1 [5, 2, 3]
poll.displayResults.call({ answers: [5, 2, 3] }, "string");

//TEST DATA #2 [1,5,3,9,6,1]
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
