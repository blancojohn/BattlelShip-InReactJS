/* export const firstBoardMachine = [
  ["BS", 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, null, null, null, null, "", "", "", "", ""],
  [2, null, null, null, null, null, null, null, null, null],
  [3, null, null, "", null, null, null, null, null, null],
  [4, null, null, "", null, null, null, null, null, null],
  [5, "", "", "", null, null, "", "", "", null],
  [6, null, null, "", null, null, null, null, null, null],
  [7, null, null, null, null, null, null, null, null, null],
  [8, null, null, null, "", "", "", null, null, null],
  [9, null, null, null, null, null, null, null, null, null]
]

export const secondBoardMachine = [
  ["BS", 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, null, null, null, null, null, null, null, null, null],
  [2, "", null, null, null, null, null, null, null, null],
  [3, "", null, null, "", null, null, null, null, ""],
  [4, "", null, null, "", null, null, null, null, ""],
  [5, "", null, null, "", null, null, null, null, null],
  [6, "", null, null, null, null, null, null, null, null],
  [7, null, null, null, null, null, null, null, null, null],
  [8, null, "", "", "", "", null, null, null, null],
  [9, null, null, null, null, "", "", "", null, null]
]

export const thirdBoardMachine = [
  ["BS", 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, null, null, null, "", "", "", null, null, null],
  [2, null, null, null, null, null, null, null, null, null],
  [3, null, "", null, null, null, null, "", null, null],
  [4, null, "", null, null, null, null, "", null, null],
  [5, null, "", null, null, null, null, "", null, null],
  [6, null, null, null, null, null, null, "", null, null],
  [7, null, "", "", "", "", null, "", null, null],
  [8, null, null, null, null, null, null, null, null, null],
  [9, "", "", null, null, null, null, null, null, null]
] */

export const buildBoard = () => {
  let board = [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null]
  ]
  return board
}

