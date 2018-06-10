var fruits = ['banana','apple','mango','kiwi']
fruits.push('grapres')
console.log(fruits)
fruits.pop('banana')
console.log(fruits)
console.log(Array.isArray(fruits))

fruits[0]='orange'
console.log(fruits)
fruits.splice(2,0,'chicken');
console.log(fruits)

var s = fruits.toString();
console.log(s);


