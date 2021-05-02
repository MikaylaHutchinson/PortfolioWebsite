import {onSnake, expandSnake} from './snake.js'
import {randomGridPosition} from './grid.js'

let scoreCount=0
let highscoreCount=0
let food=getRandomFoodPosition()
const expansionRate=1


export function update() {
    if (onSnake(food)) {
        expandSnake(expansionRate)
        food=getRandomFoodPosition()
        scoreCount+=1
        if (scoreCount>highscoreCount) {
            highscoreCount+=1
        }
    }
    document.getElementById('scoreboard-score').innerText='Score:  '+scoreCount.toString()
    document.getElementById('scoreboard-highscore').innerText='High Score:  '+highscoreCount.toString()
}
  
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('snake-food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition==null || onSnake(newFoodPosition)) {
        newFoodPosition=randomGridPosition()
    }
    return newFoodPosition
}

export function restart() {
    scoreCount=0
}