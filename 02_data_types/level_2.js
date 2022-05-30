console.log("Number 1")
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
`)

console.log('Number 2')
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log('Number 3')
ten = '10'
console.log(typeof ten === typeof 10)
console.log(typeof parseInt(ten) === typeof  10)

console.log('Number 4')
console.log( Math.ceil(parseFloat('9.8')))

console.log('Number 5')
console.log(Boolean('python'.includes('on') & 'jargon'.includes('on')))

console.log('Number 6')
console.log('I hope this course is not full of jargon'.includes('jargon'))

console.log('Number 7')
console.log(Math.floor(Math.random() * 101))

console.log('Number 8')
console.log(Math.floor(Math.random() * 51) + 50)

console.log('Number 9')
console.log(Math.floor(Math.random() * 256))

console.log('Number 10')
word = 'JavaScript'
console.log(word.charAt(Math.floor(Math.random() * word.length)))

console.log('Number 11')
pattern = `1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`
console.log(pattern)

console.log('Number 12')
sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.substring(sentence.indexOf('because'), sentence.indexOf('is')-1))
