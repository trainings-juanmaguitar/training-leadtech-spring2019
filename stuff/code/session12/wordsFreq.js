var wordsFreq = text =>
	text.split(' ')
		.reduce( (oWordFreq, word) => {
			var cleanedWord = word
			cleanedWord = cleanedWord.replace(".", "")
			cleanedWord = cleanedWord.replace(",", "")
			cleanedWord = cleanedWord.trim()
			if (!oWordFreq[cleanedWord]) oWordFreq[cleanedWord] = 1
			else oWordFreq[cleanedWord]++
			return oWordFreq
		}, {}) 