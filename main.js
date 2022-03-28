const str = `
010-1234-5678
thesecon@gmail.com
https://www.google.com
The quick brown fox jumps over the lazy dog
aabbccccccc`


// const regexp = new RegExp('the','gi')
// const regexp = /the/gi

// console.log(str.match(regexp))


const regexp = /fox/gi
// console.log(regexp.test(str))

console.log(str.match(regexp))
