(function(){
	let count = 0;
	let newWord;
	let ignoreKeyCodes = [16, 27, 91, 8, 17, 93, 18, 92, 35, 36, 20, 9]
	let word = '';
	let cursorPosition;

	function isInArray(value, array) {
		return array.indexOf(value) > -1;
	}

	const textToEmoji = {
		':)': '<img src="http://i.stack.imgur.com/nO2hl.png" />',
		';)': '<img src="http://i.stack.imgur.com/IjpTt.png" />',

	}

	const mainScreen = document.getElementById('main-screen');
	document.querySelector('button').addEventListener('click', function(event){
		let newText = document.createElement('div');
		newText.className = 'user-text';

		// get HTML content from the text box
		let userText = document.querySelector('[contenteditable').innerHTML; 
		newText.innerHTML = userText;
		mainScreen.appendChild(newText);
	});

	document.querySelector('[contenteditable]').addEventListener('keydown', function(event){
		if(event.code === 'Space') {
			for(let key in textToEmoji){
				indexOfWord = this.innerHTML.indexOf(key);
				if(indexOfWord > -1) {
					// sentence before replacement of the emoji
					previousSentence = this.innerHTML.substring(0, indexOfWord);
					finalSentence = [previousSentence, textToEmoji[key], this.innerHTML.substring(indexOfWord + key.length) ].join('')
					this.innerHTML = finalSentence;
				}
			}
		}
	})
})();