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
  },
};
