
// const fs = require('fs');
/* --- SYNCHRONOUS VERSION --- */

// const contentFile = fs.readFileSync('notes.txt', 'utf8')

// const numWords = contentFile.split(' ').length
// const numLines = contentFile.split('\n').length

// fs.writeFileSync('notesAnalysis.txt', JSON.stringify({ numWords, numLines }))

// console.log(`Results written succesfully`)

/* --- ASYNCHRONOUS VERSION --- */

// fs.readFile('notes.txt', 'utf8', (err, contentFile) => {
//     if (err) throw err;
//     console.log(`File read succesfully`)
//     const numWords = contentFile.split(' ').length
//     const numLines = contentFile.split('\n').length
//     fs.writeFile('results.txt', JSON.stringify({ numWords, numLines }), () => {
//       console.log(`Results written succesfully`)
//     })
// });

// console.log(`this will be displayed first!`)

/* --- PROMISES VERSION --- */

const psReadFile = fileToRead => 
  new Promise( resolve => {
    fs.readFile('notes.txt', (_, contentFile) => {
      resolve(contentFile)
    })
  })

const psWriteFile = contentToWrite => 
  new Promise(resolve => {
    fs.writeFile('results.txt', contentToWrite, err => {
      resolve(`Results written succesfully`)
    })
  })

psReadFile('notes.txt')
    .then(contentFile => {
        const numWords = contentFile.split(' ')
        const numLines = contentFile.split('\n')
        return JSON.stringify({ numWords, numLines })
    })
    .then(psWriteFile)
    .then(console.log)

(async () => {
    const contentFile = await psReadFile('notes.txt')
    const numWords = contentFile.split(' ').length
    const numLines = contentFile.split('\n').length
    const writeFileResult = await psWriteFile(JSON.stringify({ numWords, numLines }))
    console.log(writeFileResult)
})()
