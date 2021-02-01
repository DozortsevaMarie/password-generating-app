const number = document.querySelector('input[type="number"]');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const lowercaseLetters = document.getElementById('small_letters');
const uppercaseLetters = document.getElementById('big_letters');
const numbers = document.getElementById('numbers');
const specialSymbols = document.getElementById('special_signs');
const generator = document.getElementById('generator');
const result = document.getElementById('password');
const copyPassword = document.getElementById('copy');



prevButton.addEventListener('click',() => {
number.stepDown();
if (Number(number.value) === 5){
	prevButton.style.display = 'none';
	nextButton.style.display = 'block';
}
else if(Number(number.value) > 5 && Number(number.value) < 30){
	prevButton.style.display = 'block';
	nextButton.style.display = 'block';
}
});

nextButton.addEventListener('click',() => {
number.stepUp();
if (Number(number.value) === 30) {
	nextButton.style.display = 'none';
	prevButton.style.display = 'block'
}});

// generate functions
function getRandomLower(){
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol(){
	const symbols = '!@#$%^&*()_+<>?,./`[]{};~';
	return symbols[Math.floor(Math.random() * 25)];
}



const passwordChars = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
};

generator.addEventListener('click', () => {
	const length = +number.value;
	const hasLower = lowercaseLetters.checked;
	const hasUpper = uppercaseLetters.checked;
	const hasNumber = numbers.checked;
	const hasSymbols = specialSymbols.checked;

	result.value = generatePassword(
		hasLower,
		hasUpper,
		hasNumber,
		hasSymbols,
		length
		);
});

function generatePassword (lower, upper, number, symbol, length){
	let generatePassword = '';

	const typesCount = lower + upper + number + symbol;

	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
		item => Object.values(item)[0]
		);


	if(typesCount === 0) {
		return '';
	}

	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];


			generatePassword += passwordChars[funcName]();
		})
	}
	const finalPassword = generatePassword.slice(0, length);

	return finalPassword;
}

copyPassword.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = result.value;

	if (!password){
		return;
	}
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password is copied!')
})