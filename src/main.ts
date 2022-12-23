import { winConditions } from './utils/win-conditions';

const X_CLASS = 'x';
const O_CLASS = 'o';

const plains = document.querySelectorAll('.plain');

let isXTurn = true;

function startGame() {
  initGame();
  plains?.forEach((plain) => {
    plain.removeEventListener('click', handleClick);
    plain.addEventListener('click', handleClick);
  });
}

function initGame() {
  plains.forEach((el) => {
    const plain = el as HTMLDivElement;
    plain.classList.remove(X_CLASS);
    plain.classList.remove(O_CLASS);

    const cells: Element[] = Array.from(plain.children);
    cells.forEach((el) => {
      const cell = el as HTMLDivElement;
      cell.classList.remove(X_CLASS);
      cell.classList.remove(O_CLASS);
      cell.dataset.cell = '';
    });
  });
}

function handleClick(e: Event) {
  const currentClass = isXTurn ? X_CLASS : O_CLASS;

  const target = e.target ? e.target : null;
  const cell = target as HTMLDivElement;
  if (cell.classList.contains(currentClass)) return;

  cell.classList.add(currentClass);
  cell.dataset.cell = currentClass;

  if (checkWin(currentClass)) handleGameOver(currentClass);
  if (checkDraw()) handleGameOver('draw');

  isXTurn = !isXTurn;
  updatePlains();
}

function checkWin(currentClass: string) {
  return winConditions.some((combo) => {
    return combo.every((coordinate) => {
      const plain = plains[coordinate.plainIndex];
      const cell = plain.children[coordinate.cellIndex] as HTMLDivElement;
      return cell.dataset.cell === currentClass;
    });
  });
}

function checkDraw() {
  let filledPlains = 0;

  plains.forEach((plain) => {
    const cells: Element[] = Array.from(plain.children);

    if (
      cells.every((cellEl) => {
        const cell = cellEl as HTMLDivElement;
        return cell.dataset.cell === X_CLASS || cell.dataset.cell === O_CLASS;
      })
    )
      filledPlains++;
  });
  if (filledPlains === 3) return true;
  return false;
}

function updatePlains() {
  plains.forEach((el) => {
    const plain = el as HTMLDivElement;
    plain.classList.remove(X_CLASS);
    plain.classList.remove(O_CLASS);
    plain.classList.add(isXTurn ? X_CLASS : O_CLASS);
  });
}

function handleGameOver(result: string) {
  if (result === 'draw') alert('The game is tied... Cat wins.');
  const winner = result.toUpperCase();
  alert(`${winner} wins the game!`);
}

startGame();
