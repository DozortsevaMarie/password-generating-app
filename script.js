const number = document.querySelector('input[type="number"]');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
prevButton.addEventListener('click',() => {
number.stepDown();
if (Number(number.value) === 5){
	prevButton.style.display = 'none';
	nextButton.style.display = 'block';
}
else if(Number(number.value) > 5){
	prevButton.style.display = 'block';
	nextButton.style.display = 'block';
}
});

nextButton.addEventListener('click',() => {
number.stepUp();
if (Number(number.value) === 30) {
	nextButton.style.display = 'none';
	prevButton.style.display = 'block'
}
else if(Number(number.value) < 30){
	prevButton.style.display = 'block';
	nextButton.style.display = 'block';
}});



function syncCharacterAmount(e){
	const value = e.target.value;
	number.value = value;
}

const length = +number.value;
let chars = [];
const lowercaseLetters = document.getElementById('small_letters');
const uppercaseLetters = document.getElementById('big_letters');
const numbers = document.getElementById('numbers');
const specialSymbols = document.getElementById('special_signs');
let password = '';

const lowercaseLettersArray = [];
const uppercaseLettersArray = [];
const numbersArray = [];
const specialSymbolsArray = [];

function getCharacters(arr, min, max){
	let newArr;
		for (i = min; i <= max; i++){
			let newChar = String.fromCharCode(i);
			newArr = arr.push(newChar);
		}
		if (arr.length !== 0){
		let longArray = arr.concat(newArr);
	return longArray;
	}
	else {
	return arr;
}
};

function getChars (element, arr){
		let codes = [];
		if (element.checked === true && chars.length === 0){
			chars = codes.concat(arr);
			return chars;
		}
		else if (element.checked === true && chars.length !== 0){
			return chars = chars.concat(arr);
		}
	};


const generator = document.getElementById('generator');
generator.addEventListener('click', generatePassword);

function generatePassword(){  
	getCharacters(lowercaseLettersArray, 97, 122);
	getCharacters(uppercaseLettersArray, 65, 90);
	getCharacters(numbersArray, 48, 57);
	getCharacters(specialSymbolsArray, 33, 47);
	getCharacters(specialSymbolsArray, 58, 64);
	getCharacters(specialSymbolsArray, 91, 96);
	getCharacters(specialSymbolsArray, 123, 126);

	getChars(lowercaseLetters, lowercaseLettersArray);
	getChars(uppercaseLetters, uppercaseLettersArray);
	getChars(numbers, numbersArray);
	getChars(specialSymbols,specialSymbolsArray);
	
	// let pass;
	let range = chars.join('');
		for (let i = 0; i < +number.value; i++){
			 	let randomNumber = Math.floor(Math.random() * range.length);
			 	password += range.substring(randomNumber, randomNumber+1);
			 }
			 document.getElementById("password").value = password;
			 return password = '';
		 		range = '';
	};
