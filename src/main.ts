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
  if (checkWin(currentClass)) handleGameOver();
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

function handleGameOver() {}
