const Generator = {
	length: number.value, 
	chars: [],
	_lowercaseLetters: [],
	_uppercaseLetters:[],
	_numbers:[],
	_specialSymbols: [],
	password:'',


	getChars (element, arr){
		if (element.checked === true){
			this.chars.push(arr);
		}
		return this.chars;
	}, 
	getChars(_lowercaseLetters),
	getChars(_uppercaseLetters),
	getChars(_numbers),
	getChars(_specialSymbols),

	
	getCharacters(arr, min, max){
		for (i = min, i <= max, i++){
			let newChar = String.fromCharCode(i);
			let newArr = arr.push(newChar);
		}
		if (arr.length !== 0){
		let longArray = arr.concat(newArr);
	return longArray;
	}
	else {
	return arr;
}
},
	getCharacters(_lowercaseLetters, 97, 122),
	getCharacters(_uppercaseLetters, 65, 90),
	getCharacters(_numbers, 48, 57),
	getCharacters(_specialSymbols, 33, 47),
	getCharacters(_specialSymbols, 58, 64),
	getCharacters(_specialSymbols, 91, 96),
	getCharacters(_specialSymbols, 123, 126),

	
	generatePassword(){
		for (let i = 0; i < length; i++){
			 	let randomNumber = Math.floor(Math.random() * chars.length);
			 	password += chars.substring(randomNumber, randomNumber+1)
			 }
			 document.getElementById("password").value = password;
	}
	};


const generator1 = new Generator();
generator1.length = number.value;
generator1.lowercaseLetters = document.getElementById('small_letters');
generator1.uppercaseLetters = document.getElementById('big_letters');
generator1.numbers = document.getElementById('numbers');
generator1.specialSymbols = document.getElementById('special_signs');