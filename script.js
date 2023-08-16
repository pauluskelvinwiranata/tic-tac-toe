const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  cell.textContent = currentPlayer;
  cell.setAttribute("data-cell", currentPlayer);
  if (checkWin()) {
    alert(`Player ${currentPlayer} wins!`);
    resetBoard();
  } else if (isBoardFull()) {
    alert("It's a draw!");
    resetBoard();
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin() {
  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winningPattern.some((combination) => {
    return combination.every((index) => {
      return cells[index].getAttribute("data-cell") === currentPlayer;
    });
  });
}

function isBoardFull() {
  return [...cells].every((cell) => {
    return cell.getAttribute("data-cell") !== "";
  });
}

function resetBoard() {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.setAttribute("data-cell", "");
  });
  currentPlayer = "X";
  cells.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
}
