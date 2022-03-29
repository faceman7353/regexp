// const str = `
// 010-1234-5678.
// thesecon@gmail.com
// https://www.google.com
// The quick brown fox jumps over the lazy dog.
// aabbcccccccdddd
// htxp
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록`


// const regexp = new RegExp('the','gi')
// const regexp = /the/gi

// console.log(str.match(regexp))


// const regexp = /fox/gi
// // console.log(regexp.test(str))

// console.log(str.match(regexp))


// const regexp = /the/gi
// console.log(str.match(regexp))

//위 내용을  아래와 같이 써도 무방하다.변수없이.
//
// console.log(str.match(/\.$/gim))   
//(\.) 마침표가 일반 문자로 해석되라

//$ 는 꼭 마침표 . 뒤에 붙여야함.
//\.$ = $사인 을 붙이게되면 마침표로 끝나는 부분을 일치시켜라 라는의미.
//. 로 마치는 부분이있으면 그부분을 나타내는 것.

//============================================================
//표현

// console.log(
//     str.match(/^T/gm)
//     )   


// console.log(
//     str.match(/fox|dog/)
//     )   //위치를 바꾸어도 둘중 먼저 찾아진는것이 표현됨 / g가 있으면 다 나옴..


// console.log(
//     str.match(/https?/g)
//     )


// console.log(
//     str.match(/\b\w{2,3}\b/g)
//     )
//w 는 숫자를 포함한 영어 알파벳을의미.
// \b 는 숫자나 알파벳이 아닌경우를 경계를 하는것을 의미.

// console.log(
//     str.match(/\w/g)    
// )


// console.log(
//         str.match(/\bf\w{1,}\b/g)    
//     ) //소문자 f로 시작하는 영단어를찾는 패턴이됨.
    


// console.log(
//         str.match(/\d{1,}/g)    
//     ) //숫자가 한개이상.
    

// console.log(
//     str.match(/\s/g)    
// ) //공백부분


// const h = `  the hello    world    !`

// console.log(
//     h.replace(/\s/g,'')
// ) //공백 사라짐

// ==============================================================

const str = `
010-1234-5678.
thesecon@gmail.com
https://www.google.com
The quick brown fox jumps over the lazy dog.
aabbcccccccdddd
htxp
http://localhost:1234
동해물과_백두산이 마르고 닳도록`


// console.log(
//     str.match(/.{1,}(?=@)/g)
// )

console.log(
        str.match(/(?<=@).{1,}/g)
    )