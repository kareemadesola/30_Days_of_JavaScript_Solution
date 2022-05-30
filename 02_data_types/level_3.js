console.log('Number 1')
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentence.match(/love/gi).length)


console.log('Number 2')
sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.match(/because/gi).length)


console.log('Number 3')
sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
match = sentence.replace(/[%$@&#;!?,.]/g, '');
let counter = {}
// find and fill the counter
match.split(' ').forEach((value) => counter[value] = (counter[value] || 0) + 1)
console.log(Math.max(...Object.values(counter)))

console.log('Number 4')
sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let data = sentence.match(/\d+/g);
total = data[0] * 12 + 10000 + 15000 * 3
console.log(`total annual income is ${total}`)
