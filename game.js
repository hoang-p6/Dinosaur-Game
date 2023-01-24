let dino = document.querySelector('.dino')
//When space is pressed down, Dino jumps
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
let playGame = false
let obstacle = document.querySelector('.obs')
// const moveObstacle = () => {
//   for (let position = 0; position < 1000; position++) {
//     console.log(position)
//     setInterval(() => {
//       obstacle.style.right = `${position}px`
//     }, 1000)
//   }
// }
// moveObstacle()

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('')
    }, time)
  })
}
// async function runObstacle() {
//   for (let position = 0; position < 1000; position ++) {
//     console.log(position)
//     setTimeout(() => {
//       obstacle.style.right = `${position}px`
//     }, 0)
//     await wait(1)
//     console.log(position)
//   }
// }
const gamePlay = () => {
  for (let i = 0; i < 1000; i++) {
    let newObstacle = document.createElement('container')
    document.querySelector('.obs').appendChild(newObstacle)
  }
  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('')
      }, time)
    })
  }
  async function runObstacle() {
    for (let position = 0; position < 1000; position++) {
      console.log(position)
      setTimeout(() => {
        obstacle.style.right = `${position}px`
      }, 0)
      await wait(0)
      console.log(position)
    }
  }
  runObstacle()
}
// gamePlay()
function getRandomNum(min, max) {
  return Math.random() * (8000 - 6000) + 6000
}

// setInterval(
//   (test = () => {
//     gamePlay()
//   }),
//   getRandomNum()
// )
