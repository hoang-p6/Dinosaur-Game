//VARIABLES//
let dino = document.querySelector('.dino')
let obstacle = document.querySelector('.obs')
let obstacleTwo = document.querySelector('.obs2')
let dinoPosition = dino.offsetTop
let obstaclePosition = obstacle.offsetLeft
let obstacleTwoPosition = obstacleTwo.offsetLeft
let body = document.querySelector('body')
let score = 0
let scoreDisplay = document.querySelector('.score')
let lose = document.querySelector('.lose-screen')
let gameRunning = true
const updateScore = () => {
  score += 1
  scoreDisplay.innerText = score
}

//FUNCTIONS//
//When space is pressed down, Dino jumps

const jump = () => {
  document.addEventListener('keydown', (key) => {
    if (key.code === 'Space') {
      dino.style.bottom = '200px'
    }
  })
  //When space is released, Dino comes back down
  document.addEventListener('keyup', (key) => {
    if (key.code === 'Space') {
      dino.style.bottom = '0px'
    }
  })
}

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('')
    }, time)
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
  async function runObstacle() {
    for (let position = 0; position < 1000; position++) {
      setTimeout(() => {
        if (
          (obstacle.offsetLeft === 40 && dino.offsetTop >= 600) ||
          (obstacle.offsetLeft === -10 && dino.offsetTop >= 600)
        ) {
          window.location.href = 'dead.html'
        }
        if (obstacle.offsetLeft === 40 && dino.offsetTop < 600) {
          updateScore()
        }
        obstacle.style.right = `${position}px`
      }, 1)
      await wait(0)
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
    for (let position = 0; position < 1000; position++) {
      setTimeout(() => {
        if (
          (obstacleTwo.offsetLeft === 40 && dino.offsetTop >= 600) ||
          (obstacleTwo.offsetLeft === -10 && dino.offsetTop >= 600)
        ) {
          return gameRunning === false
        }
        if (obstacleTwo.offsetLeft === 40 && dino.offsetTop < 600) {
          updateScore()
        }
        obstacleTwo.style.right = `${position}px`
      }, 3)
      await wait(0)
    }
  }
  runObstacleTwo()
}

//GAME//
if (gameRunning === true) {
  jump()
  setInterval(
    (test = () => {
      gamePlay()
    }),
    4500
  )
  setInterval(
    (test = () => {
      gamePlayTwo()
    }),
    5000
  )
} else {
  clearInterval(gamePlay)
  clearInterval(gamePlayTwo)
}
// let pause = document.querySelector('.pause')
// let menu = document.querySelector('.pause-menu')
// const pauseGame = () => {
//   pause.addEventListener('click', () => {
//     menu.body.innerHTML = document.appendChild(canvas)
//   })
// }
// pauseGame()
