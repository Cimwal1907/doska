const board = document.querySelector('#board')
const colors = ['#FF69B4', '#00BFFF', '#8B0000', '#FF8C00', '#556B2F','#708090','#800000','#BDB76B','#800080','#708090']
const SQUARES_NUMBER = 800

for(let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', setColor)
	square.addEventListener('mouseleave', removeColor)
	board.append(square)
	}

function setColor(event) {
	const element = event.target
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
	const element = event.target
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)]
}
