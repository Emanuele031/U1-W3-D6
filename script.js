const gridContainer = document.querySelector("grid-container")
const drawButton = document.querySelector("draw-button")
const totalNumbers = 76
const numbers = []

function createGrid() {
    for (let i = 1; i <= totalNumbers; i++){
        const cell = document.createElement("div")
        cell.classList.add("grid-item")
        cell.textContent = i
        gridContainer.appendChild(cell)
    }
        
    }

    function drawNumber(){
        if(numbers.length === totalNumbers){
            console.log("Tutti i numeri sono stati estratti!")
            alert("Tutti i numeri sono stati estratti!")
            return
        }

        let drawnNumber
        
        while(true){
            drawnNumber = Math.floor(Math.random() * totalNumbers) + 1

            if(!numbers.includes(drawnNumber)){
                break
            }
        }

        numbers.push(drawnNumber)
        console.log("Numero estratto:", drawnNumber)

        const cell = document.querySelector("grid-item:nth-child(" + drawnNumber + ")")
        if(cell){
            cell.classList.add("highlight")
        }

    }

    createGrid()

    drawButton.addEventListener("click", drawNumber)















