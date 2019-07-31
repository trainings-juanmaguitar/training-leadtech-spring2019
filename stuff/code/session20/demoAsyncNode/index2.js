function fakeReadFile(fileName, whatToDOWithFileContent) {
    const fakeFileContent = `file ${fileName} is empty`
    const timeToReadTheFileInSecs = Math.round(Math.random()*10)
    setTimeout(() => {
        console.log(`It took ${timeToReadTheFileInSecs} seconds to process this...`)
        whatToDOWithFileContent(fakeFileContent)
    }, timeToReadTheFileInSecs*1000)
}

console.log("first")
fakeReadFile('whateverFileText.txt', console.log )
console.log("last")