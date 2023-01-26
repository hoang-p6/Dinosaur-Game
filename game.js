let dino = document.querySelector('.dino')
let obstacle = document.querySelector('.obs')
let obstacleTwo = document.querySelector('.obs2')
let dinoPosition = dino.offsetTop
let obstaclePosition = obstacle.offsetLeft
let obstacleTwoPosition = obstacleTwo.offsetLeft
let scoreDisplay = document.querySelector('.score')
let gameRunning = true

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

let score = 0
const updateScore = () => {
  score += 1
  scoreDisplay.innerText = score
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
          alert('you lose')
        }
        if (obstacleTwo.offsetLeft === 40 && dino.offsetTop < 600) {
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
          alert('you lose')
        }
        if (obstacleTwo.offsetLeft === 40 && dino.offsetTop < 600) {
          updateScore()
        }
        obstacleTwo.style.right = `${position}px`
      }, 16)
      await wait(1)
    }
  }
  runObstacleTwo()
}

if (gameRunning === true) {
  jump()
  setInterval(
    (test = () => {
      gamePlay()
    }),
    8000
  )
  setInterval(
    (test = () => {
      gamePlayTwo()
    }),
    6000
  )
}

const togglePlay = () => {
  return gameRunning === false
}
