const sortFreqStats = oStats => Object.keys(oStats)
	.sort((a,b) => {
		if (oStats[a] > oStats[b]) return -1
		if (oStats[a] < oStats[b]) return 1
		return 0
	})
	.map(word => [word, oStats[word]])

sortFreqStats(wFrq).slice(0,10)

