//VARIABLES//
let dino = document.querySelector('.dino')
let obstacle = document.querySelector('.obs')
let obstacleTwo = document.querySelector('.obs2')
let body = document.querySelector('body')
let score = 0
let scoreDisplay = document.querySelector('.score')
let gameRunning = true
//FUNCTIONS//
//When space is pressed down, Dino jumps
const updateScore = () => {
  score++
  scoreDisplay.innerText = score
}

const addJump = () => {
  dino.classList.add('hop')
}
const removeJump = () => {
  dino.classList.remove('hop')
}
const jump = () => {
  document.addEventListener('keydown', (key) => {
    if (key.code === 'Space') {
      dino.classList.add('hop')
      let dinoTop = dino.offsetTop
    }
  })
  //When space is released, Dino comes back down
  document.addEventListener('keyup', (key) => {
    if (key.code === 'Space') {
      dino.classList.remove('hop')
    }
  })
}
jump()
//First Obstacle
const gamePlay = () => {
  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('')
      }, time)
    })
  }
  async function runObstacle() {
    for (let position = 70; position > -10; position--) {
      setTimeout(() => {
        obstacle.style.left = `${position}vw`
        let obstacleLeft = obstacle.getBoundingClientRect().left
        let dinoBottom = dino.getBoundingClientRect().bottom
        if (obstacleLeft < 229 && dinoBottom === 560.890625) {
          window.location.href = 'dead.html'
        }
        if (
          obstacleLeft < 230 &&
          obstacleLeft > 225 &&
          dinoBottom !== 560.890625
        ) {
          updateScore()
        }
      }, 1)
      await wait(30)
    }
  }
  runObstacle()
}
//Second Obstacle
const gamePlayTwo = () => {
  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('')
      }, time)
    })
  }
  async function runObstacleTwo() {
    for (let position = 70; position > -10; position--) {
      setTimeout(() => {
        obstacle.style.left = `${position}vw`
        let obstacleLeft = obstacle.getBoundingClientRect().left
        let dinoBottom = dino.getBoundingClientRect().bottom
        if (obstacleLeft < 229 && dinoBottom === 560.890625) {
          window.location.href = 'dead.html'
        }
        if (
          obstacleLeft < 230 &&
          obstacleLeft > 225 &&
          dinoBottom !== 560.890625
        ) {
          updateScore()
        }
      }, 1)
      await wait(30)
    }
  }
  runObstacleTwo()
}

//BACKGROUND//
const background = () => {
  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('')
      }, time)
    })
  }
  async function moveBackground() {
    for (let position = 70; position > -10; position--) {
      setTimeout(() => {
        let terry = document.querySelector('.terry')
        terry.style.left = `${position}vw`
      }, 1)
      await wait(30)
    }
  }
  moveBackground()
}
const backgroundTwo = () => {
  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('')
      }, time)
    })
  }
  async function moveBackgroundTwo() {
    for (let position = 70; position > -10; position--) {
      setTimeout(() => {
        let doug = document.querySelector('.doug')
        doug.style.left = `${position}vw`
      }, 1)
      await wait(30)
    }
  }
  moveBackgroundTwo()
}
// GAME//
if (gameRunning === true) {
  jump()
  setInterval(
    (test = () => {
      gamePlay()
    }),
    5000
  )
  setInterval(
    (test = () => {
      gamePlayTwo()
    }),
    7000
  )
  setInterval(
    (test = () => {
      background()
    }),
    4000
  )
  setInterval(
    (test = () => {
      backgroundTwo()
    }),
    7000
  )
}
