const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const ch1 = document.getElementById("ch-1")
const ch2 = document.getElementById("ch-2")
const ch3 = document.getElementById("ch-3")
const ch4 = document.getElementById("ch-4")
const feedback = document.getElementById("feedback")

const quiz = {
  text: "日本で一番最初にラーメンを食べた人は誰でしょうか？",
  image: "138B0590500238372E3EC577D0AA6CF7FC84BEB8.jpg",
  choices: [
    {
      text: "徳川家康",
      feedback: "残念！麦飯と味噌で長生きした方だよね",
    },
    {
      text: "徳川吉宗",
      feedback: "残念！享保の改革を行った人だよね",
    },
    {
      text: "徳川光圀",
      feedback: "正解！水戸黄門で有名な人だよね",
    },
    {
      text: "徳川慶喜",
      feedback: "残念！最後の徳川家将軍だよね",
    },
  ],
}

const reloadQuiz = function () {
  quizText.textContent = "Q." + quiz.text

  quizImage.src = quiz.image

  ch1.textContent = quiz.choices[0].text
  ch2.textContent = quiz.choices[1].text
  ch3.textContent = quiz.choices[2].text
  ch4.textContent = quiz.choices[3].text
}

const choose = function (choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

ch1.onclick = function () {
  choose(0)
}

ch2.onclick = function () {
  choose(1)
}

ch3.onclick = function () {
  choose(2)
}

ch4.onclick = function () {
  choose(3)
}

reloadQuiz()
