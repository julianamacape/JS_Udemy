"use strict";

//Data Structures, Modern Operators and Strings
//Coding challenge #3 - Betting app

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//Step1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);