// Coding Challenge #1

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//       ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
//       ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//     },
//   };
  
//   const [players1, players2] = game.players;
  
//   const [gk, ...fieldPlayers] = players1;
  
//   const allPlayers = [...players1, ...players2];
  
//   const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  
//   const { team1, x: draw, team2: team2Odds } = game.odds;
  
//   function printGoals(...playerNames) {
//     console.log(`${playerNames.length} goals were scored by ${playerNames.join(', ')}`);
//   } //join: seperating array values with a comma 
  
//   team1 < team2Odds && console.log('Team 1 is more likely to win');
//   team1 > team2Odds && console.log('Team 2 is more likely to win');
//   draw < team1 && draw < team2Odds && console.log('A draw is more likely');
  
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// printGoals(...game.scored);

// Coding Challenge #2

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//       ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
//       ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//     },
//   };
  
//   game.scored.forEach((player, index) => {
//     console.log(`Goal ${index + 1}: ${player}`);
//   });
//   //jo pehle likhte hai foreach bracket mei wo hai element being processed (player) aur jo baad mei likhte hai element ka index 
//   const odds = Object.values(game.odds);// object.values jo game.odds mei values hai wo odds mei as an array store kr raha hai i.e. only 1.33 etc. 
//   const averageOdd = odds.reduce((sum, odd) => sum + odd, 0) / odds.length;//reduce it reduces an array using given formula and returns the value
//   console.log(`Average odd: ${averageOdd.toFixed(2)}`);// tofixed decimal places fix kr raha hai for float values
  
//   for (const [team, odd] of Object.entries(game.odds)) {//object.entries for loop ko game.odds ki value ko key value pair ki tarah pass kr raha hai 
//     const teamName = game[team];
//     const message = team === 'x' ? 'draw' : `victory ${teamName}`;
//     console.log(`Odd of ${message}: ${odd}`);
//   }
  
//   const scorers = {};
//   game.scored.forEach((player) => {
//     scorers[player] = (scorers[player] || 0) + 1;
//   });
//   console.log(scorers);

// Coding Challenge #3

// const gameEvents = new Map([
//     [17, 'GOAL'],
//     [36, 'Substitution'],
//     [47, 'GOAL'],
//     [61, 'Substitution'],
//     [64, 'Yellow card'],
//     [69, 'Red card'],
//     [70, 'Substitution'],
//     [72, 'Substitution'],
//     [76, 'GOAL'],
//     [80, 'GOAL'],
//     [92, 'Yellow card'],
//   ]);
//   // js mei jab naya data structure declare krte hai to new lagate hai 
//   const events = [...new Set(gameEvents.values())];//set: does not allow to store duplicate values
  
//   gameEvents.delete(64);
  
//   const totalMinutes = 90;
//   const numEvents = gameEvents.size;
//   const averageEventFrequency = totalMinutes / numEvents;
//   console.log(`An event happened, on average, every ${averageEventFrequency.toFixed(1)} minutes`);
  
//   for (const [minute, event] of gameEvents) {
//     const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
//     console.log(`[${half}] ${minute}: ${event}`);
//   }  

// Coding Challenge #4

// // document.body.append(document.createElement('textarea'));
// // document.body.append(document.createElement('button'));

// //queryselector - parses from the top and store the first text area into the variable
// //queryselectorall -  saare text area ki ek array bana deta aur variable mei store kara deta

// const textarea = document.querySelector('textarea');
// const button = document.querySelector('button');

// //eventlistener - detects the event 
// button.addEventListener('click', function () {
//   const text = textarea.value;
//   const lines = text.split('\n');

//   const camelCaseLines = lines.map((line) => {
//     const words = line.trim().split('_');
//     const camelCaseWords = words.map((word, index) =>
//       index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()
//     );
//     return camelCaseWords.join('');
//   });

//   camelCaseLines.forEach((line) => {
//     console.log(line);
//   });
// });


// OBJECT ORIENTED PROGRAMMING (OOP)

// // Coding Challenge #1

// function Car(m, s) {
//     this.make = m; //this.make uss car ke liye key value pair bana raha hai
//     this.speed = s;
//   }
//   //prototype cretaes common methods that can be used by every object of that constructor
//   Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is now going at ${this.speed} km/h.`);
//   };
  
//   Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is now going at ${this.speed} km/h.`);
//   };
  
//   const car1 = new Car('BMW', 120);
//   const car2 = new Car('Mercedes', 95);
  
//   console.log(`Data car 1: ${car1.make} going at ${car1.speed} km/h`);
//   console.log(`Data car 2: ${car2.make} going at ${car2.speed} km/h`);
  
//   car1.accelerate();
//   car1.accelerate();
//   car1.brake();
  
//   car2.accelerate();
//   car2.brake();  

// Coding Challenge #2

// class CarCl {
//     constructor(make, speed) {
//       this.make = make;
//       this.speed = speed;
//     }
  
//     // Getter to get speed in mi/h
//     get speedUS() {
//       return this.speed / 1.6;
//     }
  
//     // Setter to set speed in mi/h (converts to km/h)
//     set speedUS(speedUS) {
//       this.speed = speedUS * 1.6;
//     }
  
//     accelerate() {//method
//       this.speed += 10;
//       console.log(`${this.make} is now going at ${this.speed} km/h.`);
//     }
  
//     brake() {//method
//       this.speed -= 5;
//       console.log(`${this.make} is now going at ${this.speed} km/h.`);
//     }
//   }

//   const car1 = new CarCl('Ford', 120);
  
//   car1.accelerate();
//   car1.accelerate();
//   car1.brake();
  
//   console.log(`${car1.make} is going at ${car1.speedUS} mi/h.`);
  
//   car1.speedUS = 75;
//   console.log(`${car1.make}'s speed set to ${car1.speed} km/h.`);  

// Coding Challenge #3

// //Parent class
// class CarCl {
//     constructor(make, speed) {
//       this.make = make;
//       this.speed = speed;
//     }
  
//     accelerate() {
//       this.speed += 10;
//       console.log(`${this.make} is now going at ${this.speed} km/h.`);
//       return this;
//     }
  
//     brake() {
//       this.speed -= 5;
//       console.log(`${this.make} is now going at ${this.speed} km/h.`);
//       return this;
//     }
//   }
  
//   // Child class
//   class EVCl extends CarCl {
//     #charge; // Private property
  
//     constructor(make, speed, charge) {
//       super(make, speed);//inherited
//       this.#charge = charge;
//     }
  
//     chargeBattery(chargeTo) {
//       this.#charge = chargeTo;
//       console.log(`${this.make} has been charged to ${chargeTo}%.`);
//       return this;
//     }
  
//     // Overriding the accelerate method to chain with chargeBattery
//     accelerate() {
//       super.accelerate();
//       console.log(`${this.make} is accelerating and charging...`);
//       return this;
//     }
//   }
  
//   const ev1 = new EVCl('Rivian', 120, 23);
  
//   // Chain the accelerate and chargeBattery methods
//   ev1.accelerate().chargeBattery(50).brake();
  
//   // Get the charge percentage (private property)
//   // Uncommenting the following line will result in an error because #charge is private:
//   // console.log(ev1.#charge); // Error: Cannot access private field '#charge' on object of class 'EVCl'

// Asynchronous JavaScript

// Coding Challenge #1

// PART 1: Reverse Geocoding

// function whereAmI(lat, lng) {
//     return new Promise((resolve, reject) => {
//         fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//         .then(response => {
//             if (!response.ok) {
//             throw new Error(`Unable to fetch location data (${response.status})`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(`You are in ${data.city}, ${data.country}`);
//             resolve(data.country); // Resolve the promise with the country for Part 2
//         })
//         .catch(error => {
//             console.error(`Error: ${error.message}`);
//             reject(error); // Reject the promise with the error
//         });
//     });
//   }
//   //1. whereami funtion is returning a promise which will be returning resolve aur reject based on response
//   //2. fetch function is calling the api which is returning the response
//   //3. then we are checking the response if it is ok or not
//   //4. in the second then function we are recieving reponse as an json object from the previous then function.
//   //5. now the response is recieved as data which is a json object that means the promise is successful
//   //6. resolve(data.country) means that the promise is successful and data.country must be returned 
//   //7. if there is an error reject(error) this means that the promise is returned with an error
//   // PART 2: Render the Country
  
//   function renderCountry(country) {
//     return fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Unable to fetch country data (${response.status})`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         const countryData = data[0];
//         console.log(`Country: ${countryData.name.common}`);
//         console.log(`Population: ${countryData.population}`);
//         console.log(`Region: ${countryData.region}`);
//       })
//       .catch(error => {
//         console.error(`Error: ${error.message}`);
//       });
//   }
  
//   // Test with coordinates
//   whereAmI(52.508, 13.381) // Example 1
//   .then(country => renderCountry(country))
//   .catch(error => console.error(`Error: ${error.message}`));

//   whereAmI(19.037, 72.873) // Example 2
//   .then(country => renderCountry(country))
//   .catch(error => console.error(`Error: ${error.message}`)); 

//   whereAmI(-33.933, 18.474) // Example 3
//   .then(country => renderCountry(country))
//   .catch(error => console.error(`Error: ${error.message}`)); 

  