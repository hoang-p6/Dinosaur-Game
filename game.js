let dino = document.querySelector('.dino')
//When space is pressed down, Dino jumps
document.addEventListener('keydown', (key) => {
  if (key.code === 'Space') {
    dino.style.bottom = '200px'
    // console.log(dino.offsetTop)
  }
})
//When space is released, Dino comes back down
document.addEventListener('keyup', (key) => {
  if (key.code === 'Space') {
    dino.style.bottom = '0px'
    // console.log(dino.offsetTop)
  }
})

let obstacle = document.querySelector('.obs')
let obstacleTwo = document.querySelector('.obs2')
let dinoPosition = dino.offsetLeft
let obstaclePosition = obstacle.offsetLeft
let obstacleTwoPosition = obstacleTwo.offsetLeft
//First Obstacle
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('')
    }, time)
  })
}
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
        if (obstacle.offsetLeft === 40 && dino.offsetTop >= 600) {
          alert('you lose')
        }
        obstacle.style.right = `${position}px`
      }, 1)
      await wait(0)
    }
  }
  runObstacle()
}
//Second Obstacle

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('')
    }, time)
  })
}
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
        if (obstacleTwo.offsetLeft === 40 && dino.offsetTop >= 600) {
          alert('you lose')
        }
        obstacleTwo.style.right = `${position}px`
      }, 16)
      await wait(1)
    }
  }
  runObstacleTwo()
}

function getRandomNum(min, max) {
  return Math.random() * (8000 - 6000) + 6000
}
gameRunning = true
if (gameRunning === true) {
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
  return gameRunning ? false : true
}

// console.log(dinoPosition)
// console.log(obstaclePosition)
// console.log(obstacleTwoPosition)

if (obstacle.offsetLeft === '-78') {
  console.log('obstacle hi')
}
let dinosaur = dino.offsetTop
console.log(dinosaur)
