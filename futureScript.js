// const oScoreDisplay = document.getElementById('o-score')
// const xScoreDisplay = document.getElementById('x-score')



// let boardArray = ["", "", "", "", "", "", "", "", ""]
// const winningSequences = [
//     [0, 1, 2], // Top row
//     [3, 4, 5], // Middle row
//     [6, 7, 8], // Bottom row
//     [0, 3, 6], // Left column
//     [1, 4, 7], // Middle column
//     [2, 5, 8], // Right column
//     [0, 4, 8], // Left-to-right diagonal
//     [2, 4, 6]  // Right-to-left diagonal
// ]

// let currentPlayer = 'x'
// let playerX_array = []
// let playerO_array = []
// let oScore = 0
// let xScore = 0

// // const subArrayMaintainer = (array, currentCellData) => {
// //     togglePlayer()
// //     array.push(currentCellData)

// //     let firstAdded = array[0]

// //     if (array.length > 3) {
        
// //         let valueOfArgument = Number(array[0])
// //         let cellToTarget = document.querySelector(`[data-cell = "${valueOfArgument}"]`)
// //         let childToRemove = cellToTarget.childNodes[0]
// //         setTimeout(() => {
// //             childToRemove.classList.add('dim')
// //             cellToTarget.classList.remove('selected-x', 'selected-o')
// //             cellToTarget.removeChild(childToRemove)
// //             array.shift()
// //             boardArray[firstAdded] = ''
// //         }, 300);
// //     }
    
// //     checkForWin(oScore,playerO_array,oScoreDisplay)
// //     checkForWin(xScore,playerX_array,xScoreDisplay)
// // }


// const subArrayMaintainer = (array, currentCellData) => {
//     array.push(currentCellData)
//     let firstAdded = array[0]

//     if (array.length > 3) {
        
//         let valueOfArgument = Number(array[0])
//         let cellToTarget = document.querySelector(`[data-cell = "${valueOfArgument}"]`)
//         let childToRemove = cellToTarget.childNodes[0]
//         setTimeout(() => {
//             childToRemove.classList.add('dim')
//             cellToTarget.classList.remove('selected-x', 'selected-o')
//             cellToTarget.removeChild(childToRemove)
//             array.shift()
//             boardArray[firstAdded] = ''
//         }, 300);
//     }
    
//     checkForWin(oScore,playerO_array,oScoreDisplay)
//     checkForWin(xScore,playerX_array,xScoreDisplay) 
// }




// const togglePlayer = () => {
//     currentPlayer = currentPlayer === 'x' ? 'o' : 'x'
// }

// const showSymbol = (currentCell) => {
//     const currentCellData = currentCell.getAttribute('data-cell')
//     let boardArrayItem = boardArray[currentCellData]

//     if (boardArrayItem === '') {

//         if (currentPlayer === 'o') {
//             let circle_div = document.createElement('div')
//             circle_div.classList.add('circle')
//             currentCell.classList.add('selected-o')
//             currentCell.appendChild(circle_div)

//             subArrayMaintainer(playerO_array, currentCellData)
//         }
//         else {
//             let cross_div = document.createElement('img')
//             cross_div.setAttribute('src', './assets/x.svg')
//             cross_div.setAttribute('alt', 'X')
//             currentCell.classList.add('selected-x')
//             currentCell.appendChild(cross_div)

//             subArrayMaintainer(playerX_array, currentCellData)
//         }
//         boardArray[currentCellData] = currentPlayer
//         togglePlayer()

//     }
// }

// // When clicked on any of the places then the current symbol must be appear
// const cells = document.querySelectorAll('.cell')
// cells.forEach(cell => {
//     cell.addEventListener('click', () => {             // <<< functions well :)
//         showSymbol(cell)
//     })
// })


// document.querySelector('.reset-button').addEventListener('click', () => {
//     boardArray = ["", "", "", "", "", "", "", "", ""]
//     playerO_array = []
//     playerX_array = []
//     currentPlayer = 'x'
//     oScore = 0
//     xScore = 0
//     oScoreDisplay.textContent = '0'
//     xScoreDisplay.textContent = '0'
//     cells.forEach(cell => {

//         let childToRemove = cell.childNodes[0]
//         if (childToRemove != undefined) {
//             cell.classList.remove('selected-x', 'selected-o')
//             cell.removeChild(childToRemove)
//         }

//     })
// })


// const findMatchingArray = (bigArray, smallArray) => {
//     smallArray.sort()
//     for (let i = 0; i < bigArray.length; i++) {
//         if (arraysEqual(bigArray[i], smallArray)) {
//             return true
//         }
//     }
//     return false
// }

// const arraysEqual = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) return false
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] != arr2[i]) return false
//     }
//     return true
// }

// function checkForWin(score, array,display){
//     let arrayCopy = array.slice().sort()
//         // console.log(arrayCopy);
//         if(arrayCopy.length === 3 && findMatchingArray(winningSequences, arrayCopy)){
//             score++
//             display.textContent = score
//             removeWinningLine(array)
//         }
// }

// const removeWinningLine = (array) => {
// for(let i = 0; i < array.length; i++){
//     cells.forEach(cell => {
//         if(cell.getAttribute('data-cell') == array[i]){
//             let childToRemove = cell.childNodes[0]
//         setTimeout(() => {
//             childToRemove.classList.add('dim')
//             cell.classList.remove('selected-x', 'selected-o')
//             cell.removeChild(childToRemove)
//             array.shift()
//             boardArray[array[i]] = ''
//         }, 300);
//         togglePlayer()
//         }
//     })
// }
// }
// // function checkForWin() {
// //     const xArrayCopy = playerX_array.map(Number).sort();
// //     const oArrayCopy = playerO_array.map(Number).sort();

// //     for (let seq of winningSequences) {
// //         if (seq.every((val) => xArrayCopy.includes(val))) {
// //             console.log('Player X wins');
// //             return;
// //         }
// //         if (seq.every((val) => oArrayCopy.includes(val))) {
// //             console.log('Player O wins');
// //             return;
// //         }
// //     }
// // }
