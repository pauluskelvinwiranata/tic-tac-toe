const cells=document.querySelectorAll(".cell");let currentPlayer="X";function handleClick(e){let t=e.target;t.textContent=currentPlayer,t.setAttribute("data-cell",currentPlayer),checkWin()?(alert(`Player ${currentPlayer} wins!`),resetBoard()):isBoardFull()?(alert("It's a draw!"),resetBoard()):currentPlayer="X"===currentPlayer?"O":"X"}function checkWin(){return[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],].some(e=>e.every(e=>cells[e].getAttribute("data-cell")===currentPlayer))}function isBoardFull(){return[...cells].every(e=>""!==e.getAttribute("data-cell"))}function resetBoard(){cells.forEach(e=>{e.textContent="",e.setAttribute("data-cell","")}),currentPlayer="X",cells.forEach(e=>{e.addEventListener("click",handleClick,{once:!0})})}cells.forEach(e=>{e.addEventListener("click",handleClick,{once:!0})});