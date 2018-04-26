function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let greeting = "Welcome to scramble!";
let chars = greeting.split("");
let greeting2 = chars.join('');

let index1 = getRandomInt(0, chars.length);
let index2 = getRandomInt(0, chars.length);

let temp = chars[index1];
chars[index1] = chars[index2];
chars[index2] = temp;


let candy = new Map([
	["purple", "grape"],
	["blue", "blue raspberry"],
	["green", "guava"],
	["pink", "watermelon"],
	["red", "cherry"]
]);

for (let flavor of candy){
	console.log(`The ${flavor[1]} flavor is colored ${flavor[0]}`);
}

candy.get('red');
candy.get('yellow');

function candyFlavors(color, candies) {
	if (candies.has(color)) {
		return candies.get(color);
	}

	console.log("Sorry, that color doesn't have a flavor.");
}
// Create a function that reverses a word

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

// Create a function that returns a random word from an array

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
