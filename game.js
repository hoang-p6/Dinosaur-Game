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
      dino.style.top = '4rem'
      Animation
    }
  })
  //When space is released, Dino comes back down
  document.addEventListener('keyup', (key) => {
    if (key.code === 'Space') {
      dino.style.top = '15rem'
    }
  })
}
// const dinoPlay = () => {
//   function wait(time) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('')
//       }, time)
//     })
//   }

//   async function dinoUp() {
//     for (let position = 240; position > 65; position--) {
//       setTimeout(() => {
//         dino.style.top = `${position}px`
//       }, 0)
//       clearTimeout(() => {
//         dino.style.top = `${position}`
//       })
//       await wait(0)
//     }
//   }
//   dinoUp()
// }
// const dinoPlayTwo = () => {
//   function wait(time) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('')
//       }, time)
//     })
//   }

//   //   async function dinoDown() {
//   //     for (let position = 65; position > 240; position++) {
//   //       setTimeout(() => {
//   //         dino.style.top = `${position}px`
//   //       }, 1)
//   //       await wait(1)
//   //     }
//   //   }
//   //   dinoDown()
// }
// document.addEventListener('keydown', (key) => {
//   if (key.code === 'Space') {
//     setInterval(
//       (test = () => {
//         dinoPlay()
//       }),
//       1
//     )
//   }
// })
//   setInterval(
//     (test = () => {
//       dinoPlayTwo()
//     }),
//     1000
//   )
//   clearInterval(dinoPlayTwo)

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
    for (let position = 960; position > -10; position--) {
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
    for (let position = 960; position > -10; position--) {
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
// jump()
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
} else {
  clearInterval(gamePlay)
  clearInterval(gamePlayTwo)
}
