# 정규표현식

***
정규식, Regular Expression

## 역할
---
-문자 검색
-문자 대체
-문자 추출

## 테스트 사이트

https://regexp.com/


## 정규식 생성

```js
//생성자 방식
new RegExp('표현', '옵션')
new RegExp('[a-z]','gi')

const regexp = new RegExp('the','gi')
==gi  ==> g 는 전체를 의미.
i => 대소문자 가리지 않겠다.


//리터럴 방식
/표현/옵션
/[a-z]/gi
```



## 예제문자

```js 
const str = `
010-1234-5678
thesecon@gmail.com
https://www.google.com
The quick brown fox jumps over the lazy dog
aabbccccccc`
```


## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치여부(boolean)반환
match | `문자열.match(정규식)` | 일차하는 문자의 배열(Array)반환
replace | `문자열.replace(정규식,대체문자)` | 일치하는 문자를 대체

## 플래그(옵션)

플래그 | 설명
--|--
g | 모든 문자일치(global)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러줄일치 (multi line) , 각각의 줄을 시작과 끝으로 보겠다라고 생각해야함.

```plaintext
dot. 은 예를 들어
console.log(str.match(/./gi)) 이렇게 썼을때 그냥 . 은 특정한 문자를 찾는 패턴이므로
.이 들어간 문자를 찾고자할때는
(\.) 이렇게 사용해야한다. 
```


## 패턴(표현)

표현 | 설명
--|--
^ab | 줄 시작에있는 ab와 일치
ab$ | 줄 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a &verbar; b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하(3~5개) 연속 일치
[abc] | a또는 b또는c
[a-z] | a부터  z사이의 문자 구간에 일치(영어 소문자)
[A-Z] | a부터  z사이의 문자 구간에 일치(영어 대문자)
[0-9] | 0부터  9사이의 문자 구간에 일치(숫자)
[가-힣] | 가부터 힣 사이의 문자 구간에 일치(한글)
\w | 63개문자(Word, 대소영문52개 + 숫자10개 + _)에 일치
\b | 63개문자에 일치하지 않는 문자 경계(Boundary) 
\d | 숫자(Digital)에 일치
\s | 공백(Space, Tab 등) 에 일치
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒷쪽 일치(Lookbehind)