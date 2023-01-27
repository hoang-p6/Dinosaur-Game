let start = document.querySelector('a')

const startGame = () => {
  start.addEventListener('click', () => {
    window.location.href = 'game.html'
  })
}
startGame()
