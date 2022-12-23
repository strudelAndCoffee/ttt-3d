type Coordinate = {
  plainIndex: number;
  cellIndex: number;
};
type Combo = Coordinate[];

export const winConditions: Combo[] = [
  // plain 1
  [
    { plainIndex: 0, cellIndex: 0 },
    { plainIndex: 0, cellIndex: 1 },
    { plainIndex: 0, cellIndex: 2 },
  ],
  [
    { plainIndex: 0, cellIndex: 3 },
    { plainIndex: 0, cellIndex: 4 },
    { plainIndex: 0, cellIndex: 5 },
  ],
  [
    { plainIndex: 0, cellIndex: 6 },
    { plainIndex: 0, cellIndex: 7 },
    { plainIndex: 0, cellIndex: 8 },
  ],
  [
    { plainIndex: 0, cellIndex: 0 },
    { plainIndex: 0, cellIndex: 3 },
    { plainIndex: 0, cellIndex: 6 },
  ],
  [
    { plainIndex: 0, cellIndex: 1 },
    { plainIndex: 0, cellIndex: 4 },
    { plainIndex: 0, cellIndex: 7 },
  ],
  [
    { plainIndex: 0, cellIndex: 2 },
    { plainIndex: 0, cellIndex: 5 },
    { plainIndex: 0, cellIndex: 8 },
  ],
  [
    { plainIndex: 0, cellIndex: 0 },
    { plainIndex: 0, cellIndex: 4 },
    { plainIndex: 0, cellIndex: 8 },
  ],
  [
    { plainIndex: 0, cellIndex: 2 },
    { plainIndex: 0, cellIndex: 4 },
    { plainIndex: 0, cellIndex: 6 },
  ],
  // plain 2
  [
    { plainIndex: 1, cellIndex: 0 },
    { plainIndex: 1, cellIndex: 1 },
    { plainIndex: 1, cellIndex: 2 },
  ],
  [
    { plainIndex: 1, cellIndex: 3 },
    { plainIndex: 1, cellIndex: 4 },
    { plainIndex: 1, cellIndex: 5 },
  ],
  [
    { plainIndex: 1, cellIndex: 6 },
    { plainIndex: 1, cellIndex: 7 },
    { plainIndex: 1, cellIndex: 8 },
  ],
  [
    { plainIndex: 1, cellIndex: 0 },
    { plainIndex: 1, cellIndex: 3 },
    { plainIndex: 1, cellIndex: 6 },
  ],
  [
    { plainIndex: 1, cellIndex: 1 },
    { plainIndex: 1, cellIndex: 4 },
    { plainIndex: 1, cellIndex: 7 },
  ],
  [
    { plainIndex: 1, cellIndex: 2 },
    { plainIndex: 1, cellIndex: 5 },
    { plainIndex: 1, cellIndex: 8 },
  ],
  [
    { plainIndex: 1, cellIndex: 0 },
    { plainIndex: 1, cellIndex: 4 },
    { plainIndex: 1, cellIndex: 8 },
  ],
  [
    { plainIndex: 1, cellIndex: 2 },
    { plainIndex: 1, cellIndex: 4 },
    { plainIndex: 1, cellIndex: 6 },
  ],
  // plain 3
  [
    { plainIndex: 2, cellIndex: 0 },
    { plainIndex: 2, cellIndex: 1 },
    { plainIndex: 2, cellIndex: 2 },
  ],
  [
    { plainIndex: 2, cellIndex: 3 },
    { plainIndex: 2, cellIndex: 4 },
    { plainIndex: 2, cellIndex: 5 },
  ],
  [
    { plainIndex: 2, cellIndex: 6 },
    { plainIndex: 2, cellIndex: 7 },
    { plainIndex: 2, cellIndex: 8 },
  ],
  [
    { plainIndex: 2, cellIndex: 0 },
    { plainIndex: 2, cellIndex: 3 },
    { plainIndex: 2, cellIndex: 6 },
  ],
  [
    { plainIndex: 2, cellIndex: 1 },
    { plainIndex: 2, cellIndex: 4 },
    { plainIndex: 2, cellIndex: 7 },
  ],
  [
    { plainIndex: 2, cellIndex: 2 },
    { plainIndex: 2, cellIndex: 5 },
    { plainIndex: 2, cellIndex: 8 },
  ],
  [
    { plainIndex: 2, cellIndex: 0 },
    { plainIndex: 2, cellIndex: 4 },
    { plainIndex: 2, cellIndex: 8 },
  ],
  [
    { plainIndex: 2, cellIndex: 2 },
    { plainIndex: 2, cellIndex: 4 },
    { plainIndex: 2, cellIndex: 6 },
  ],
  // multi-plain column
  [
    { plainIndex: 0, cellIndex: 0 },
    { plainIndex: 1, cellIndex: 0 },
    { plainIndex: 2, cellIndex: 0 },
  ],
  [
    { plainIndex: 0, cellIndex: 1 },
    { plainIndex: 1, cellIndex: 1 },
    { plainIndex: 2, cellIndex: 1 },
  ],
  [
    { plainIndex: 0, cellIndex: 2 },
    { plainIndex: 1, cellIndex: 2 },
    { plainIndex: 2, cellIndex: 2 },
  ],
  [
    { plainIndex: 0, cellIndex: 3 },
    { plainIndex: 1, cellIndex: 3 },
    { plainIndex: 2, cellIndex: 3 },
  ],
  [
    { plainIndex: 0, cellIndex: 4 },
    { plainIndex: 1, cellIndex: 4 },
    { plainIndex: 2, cellIndex: 4 },
  ],
  [
    { plainIndex: 0, cellIndex: 5 },
    { plainIndex: 1, cellIndex: 5 },
    { plainIndex: 2, cellIndex: 5 },
  ],
  [
    { plainIndex: 0, cellIndex: 6 },
    { plainIndex: 1, cellIndex: 6 },
    { plainIndex: 2, cellIndex: 6 },
  ],
  [
    { plainIndex: 0, cellIndex: 7 },
    { plainIndex: 1, cellIndex: 7 },
    { plainIndex: 2, cellIndex: 7 },
  ],
  [
    { plainIndex: 0, cellIndex: 8 },
    { plainIndex: 1, cellIndex: 8 },
    { plainIndex: 2, cellIndex: 8 },
  ],
  // multi-plain slant-y
  [
    { plainIndex: 0, cellIndex: 0 },
    { plainIndex: 1, cellIndex: 3 },
    { plainIndex: 2, cellIndex: 6 },
  ],
  [
    { plainIndex: 0, cellIndex: 1 },
    { plainIndex: 1, cellIndex: 4 },
    { plainIndex: 2, cellIndex: 7 },
  ],
  [
    { plainIndex: 0, cellIndex: 2 },
    { plainIndex: 1, cellIndex: 5 },
    { plainIndex: 2, cellIndex: 8 },
  ],
  [
    { plainIndex: 0, cellIndex: 6 },
    { plainIndex: 1, cellIndex: 3 },
    { plainIndex: 2, cellIndex: 0 },
  ],
  [
    { plainIndex: 0, cellIndex: 7 },
    { plainIndex: 1, cellIndex: 4 },
    { plainIndex: 2, cellIndex: 1 },
  ],
  [
    { plainIndex: 0, cellIndex: 8 },
    { plainIndex: 1, cellIndex: 5 },
    { plainIndex: 2, cellIndex: 2 },
  ],
  // multi-plain slant-x
  [
    { plainIndex: 0, cellIndex: 0 },
    { plainIndex: 1, cellIndex: 1 },
    { plainIndex: 2, cellIndex: 2 },
  ],
  [
    { plainIndex: 0, cellIndex: 3 },
    { plainIndex: 1, cellIndex: 4 },
    { plainIndex: 2, cellIndex: 5 },
  ],
  [
    { plainIndex: 0, cellIndex: 6 },
    { plainIndex: 1, cellIndex: 7 },
    { plainIndex: 2, cellIndex: 8 },
  ],
  [
    { plainIndex: 0, cellIndex: 2 },
    { plainIndex: 1, cellIndex: 1 },
    { plainIndex: 2, cellIndex: 0 },
  ],
  [
    { plainIndex: 0, cellIndex: 5 },
    { plainIndex: 1, cellIndex: 4 },
    { plainIndex: 2, cellIndex: 3 },
  ],
  [
    { plainIndex: 0, cellIndex: 8 },
    { plainIndex: 1, cellIndex: 7 },
    { plainIndex: 2, cellIndex: 6 },
  ],
  // multi-plain angle-xy
  [
    { plainIndex: 0, cellIndex: 0 },
    { plainIndex: 1, cellIndex: 4 },
    { plainIndex: 2, cellIndex: 8 },
  ],
  [
    { plainIndex: 0, cellIndex: 2 },
    { plainIndex: 1, cellIndex: 4 },
    { plainIndex: 2, cellIndex: 6 },
  ],
  [
    { plainIndex: 0, cellIndex: 6 },
    { plainIndex: 1, cellIndex: 4 },
    { plainIndex: 2, cellIndex: 2 },
  ],
  [
    { plainIndex: 0, cellIndex: 8 },
    { plainIndex: 1, cellIndex: 4 },
    { plainIndex: 2, cellIndex: 0 },
  ],
];
