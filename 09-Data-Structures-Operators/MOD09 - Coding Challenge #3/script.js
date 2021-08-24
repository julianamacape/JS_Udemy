"use strict";

//Data Structures, Modern Operators and Strings
//Coding challenge #3 - Betting app

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [26, "🔁 Substitution"],
  [29, "⚽️ GOAL"],
  [31, "🔁 Substitution"],
  [44, "🔶 Yellow card"],
  [59, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
  [100, "🔴 Red card"],
  [102, "🔁 Substitution"],
  [114, "⚽️ GOAL"],
]);

//Step1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

//Step2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
console.log(gameEvents);
gameEvents.delete(64);
console.log(gameEvents);

//Step3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
//I've added 3 extra events in the end for my own learning purposes
const gameEventsTimes = [...gameEvents.keys()];
const totalEvents = gameEventsTimes.length;
const lastEventTime = gameEventsTimes[totalEvents - 1];
const average = (lastEventTime / totalEvents).toFixed(2);
console.log(`An event happened, on average, every ${average} minutes`);

//Step4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//        [FIRST HALF] 17: ⚽️ GOAL
for (const [time, event] of gameEvents) {
  let half;
  if (time <= 45) {
    half = `[FIRST HALF]`;
  } else if (time <= 92) {
    half = `[SECOND HALF]`;
  } else {
    half = `[OVER TIME]`;
  }
  console.log(`${half} ${time} minutes: ${event}`);
}
