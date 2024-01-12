// TRY: 練習問題１
let x
x = 57052 + 57054

console.log(x)
// TRY: 練習問題２
let y = 5
y += 2
y *= 5
y = 100 % y
y /= 6
console.log(y)
// TRY: 練習問題３
let happiness = 0 // 0 から 100 までの数値を代入してください
let sleepiness = 0 // 0 から 100 までの数値を代入してください

const isHappy = happiness > 90
const isSleepy = sleepiness > 90

const isNotHappyAndSleepy = !isHappy && isSleepy
const isHappyAndNotSleepy = isHappy && !isSleepy
const isHappyAndNotSleepy2 = !isNotHappyAndSleepy
console.log(isNotHappyAndSleepy)
console.log(isHappyAndNotSleepy)
console.log(isHappyAndNotSleepy2)
// 以下のコメントアウトを外して確認してみましょう
// console.log("isNotHappyAndSleepy" + "は" + true + "ですか？", isNotHappyAndSleepy)
// console.log("isHappy", isHappy)
// console.log("isSleepy", isSleepy)
