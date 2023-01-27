//VARIABLES//
let dino = document.querySelector('.dino')
let obstacle = document.querySelector('.obs')
let obstacleTwo = document.querySelector('.obs2')
let dinoTop = dino.offsetTop
let dinoLeft = dino.offsetLeft
let obstaclePosition = obstacle.offsetLeft
let obstacleTwoPosition = obstacleTwo.offsetLeft
let body = document.querySelector('body')
let score = 0
let scoreDisplay = document.querySelector('.score')
let lose = document.querySelector('.lose-screen')
let gameRunning = true
//FUNCTIONS//
//When space is pressed down, Dino jumps
const updateScore = () => {
  score++
  scoreDisplay.innerText = score
}

const jump = () => {
  document.addEventListener('keydown', (key) => {
    if (key.code === 'Space') {
      dino.style.top = '18rem'
    }
  })
  //When space is released, Dino comes back down
  document.addEventListener('keyup', (key) => {
    if (key.code === 'Space') {
      dino.style.top = '27.5rem'
    }
  })
}

//First Obstacle
const gamePlay = () => {
  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('')
      }, time)
    })
  }
  async function runObstacleTwo() {
    for (let position = 960; position > -20; position--) {
      setTimeout(() => {
        obstacle.style.left = `${position}px`
        if (
          (obstacle.offsetLeft === 120 && dino.offsetTop >= 400) ||
          (obstacle.offsetLeft === 48 && dino.offsetTop >= 400)
        ) {
          window.location.href = 'dead.html'
        }
        if (obstacle.offsetLeft === 120 && dino.offsetTop < 400) {
          updateScore()
        }
      }, 1)
      await wait(0)
    }
  }
  runObstacleTwo()
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
    for (let position = 960; position > -20; position--) {
      setTimeout(() => {
        obstacleTwo.style.left = `${position}px`
        if (
          (obstacleTwo.offsetLeft === 120 && dino.offsetTop >= 400) ||
          (obstacleTwo.offsetLeft === 48 && dino.offsetTop >= 400)
        ) {
          window.location.href = 'dead.html'
        }
        if (obstacleTwo.offsetLeft === 120 && dino.offsetTop < 400) {
          updateScore()
        }
      }, 3)
      await wait(2)
    }
  }
  runObstacleTwo()
}
if (
  (obstacleTwo.offsetLeft === 120 && dino.offsetTop === 257) ||
  (obstacle.offsetLeft === 120 && dino.offsetTop < 400)
) {
  updateScore()
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
    for (let position = 960; position > -20; position--) {
      setTimeout(() => {
        let terry = document.querySelector('.terry')
        terry.style.left = `${position}px`
      }, 1)
      await wait(0)
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
    for (let position = 960; position > -20; position--) {
      setTimeout(() => {
        let doug = document.querySelector('.doug')
        doug.style.left = `${position}px`
      }, 1)
      await wait(0)
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
    6000
  )
  setInterval(
    (test = () => {
      background()
    }),
    8000
  )
  setInterval(
    (test = () => {
      backgroundTwo()
    }),
    7000
  )
}
