/*
const genkifunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!!!")
    } else {
      console.log(n)
    }
  }
}
genkifunction(100)


const genkifunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log("Fizz")
    } else if (n % 5 === 0) {
      console.log("Buzz")
    } else if (n % 15 === 0) {
      console.log("FizzBuzz")
    } else {
      console.log(n)
    }
  }
}
genkifunction(100)



const genkifunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0 || (n - 3) % 10 === 0 || (30 <= n && n <= 39)) {
      console.log(n + "!!!!!!!!")
    } else {
      console.log(n)
    }
  }
}
genkifunction(100)
*/
//let count = 0

const genkifunction = function (number) {
  for (let i = 1; i <= number; i++) {
    //const countUp = () => {
    setTimeout(displaynumber, 1000 * i, i)
  }
  const displaynumber = function (i) {
    if (i % 3 === 0) {
      console.log(i + "!!!!!!!!")
    } else {
      console.log(i)
    }
    //return (count += 1)
  }
  //setInterval(countUp, 1000)
}
//}
genkifunction(100)

/*
let count=1
let interval=1000
let number=24
const id=setInterval(
functuion(){
    
        if (count % 3 === 0) {
          console.log(count + "!!!!!!!!")
        } else {
          console.log(count)
        }
      }
      count+=1
      if(count===number){
        clearInterval(id)
      }

,interval

)
*/
