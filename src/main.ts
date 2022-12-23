import { winConditions } from './utils/win-conditions';

const X_CLASS = 'x';
const O_CLASS = 'o';

const plains = document.querySelectorAll('.plain');

let xTurn = true;

plains?.forEach((plain) => {
  plain.addEventListener('click', (e) =>
    handleClick(e.target ? e.target : null)
  );
});

function handleClick(target: EventTarget | null) {
  const currentClass = xTurn ? X_CLASS : O_CLASS;
  const cell = target as HTMLDivElement;
  cell.classList.add(currentClass);
  cell.dataset.cell = currentClass;
  if (checkWin(currentClass)) handleGameOver(currentClass);
  if (checkDraw()) handleGameOver('draw');
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

function handleGameOver(result: string) {
  if (result === 'draw') alert('The game is tied... Cat wins.');
  const winner = result.toUpperCase();
  alert(`${winner} wins the game!`);
}
