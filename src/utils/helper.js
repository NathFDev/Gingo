export function getRanNum(num = 20) {
  return Math.floor(Math.random() * num)
}

export function fetchQuestions(arr, count = 10) {
  const copyArr = arr.slice()
  const newArr = []

  for (let i = 0; i < count; i++) {
    const ranNum = getRanNum(copyArr.length)
    newArr.push(copyArr[ranNum])
    copyArr.splice(ranNum, 1)
  }

  return newArr
}

export function pickQuestion(arr) {
  const ranNum = getRanNum(arr.length)
  const pickedQuestion = arr[ranNum]
  arr.splice(ranNum, 1)
  return pickedQuestion
}

export function handleAnswer(e, question) {
  const el = e.target
  const correctButtonId = question.id + question.correctAnswer
  const targetId = question.id + el.innerText

  if (targetId !== correctButtonId) {
    el.classList.remove('to-[#2d0d6c]')
    el.classList.remove('btn')
    el.classList.add('to-[#ff0000]')
  }

  const buttons = el.parentElement.querySelectorAll('.btn')

  buttons.forEach((button) => {
    if (question.id + button.innerText === correctButtonId) {
      // If the button is the correct answer, turn it green
      button.classList.remove('to-[#2d0d6c]')
      button.classList.add('to-[#00ff22]')
    } else {
      // If the button is incorrect, hide it
      button.style.visibility = 'hidden'
    }
  })
}
