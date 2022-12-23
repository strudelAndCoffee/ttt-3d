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
  const cell = target as HTMLDivElement;
  xTurn ? cell.classList.add(X_CLASS) : cell.classList.add(O_CLASS);
  checkWin();
}

function checkWin() {
  winConditions.forEach((combo) => {
    combo.forEach((coordinate) => {
      console.log(coordinate);
    });
  });
}
