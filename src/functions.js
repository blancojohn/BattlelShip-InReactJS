export let firstBoardMachine = [
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

export const secondBoardMachine = () => {
  let board = [
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
  return board
}

export let thirdBoardMachine = () => {
  let board = [
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
  ]
  return board
}

export const buildBoard = () => {
  let board = [
    ["BS", 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, null, null, null, null, null, null, null, null, null],
    [2, null, null, null, null, null, null, null, null, null],
    [3, null, null, null, null, null, null, null, null, null],
    [4, null, null, null, null, null, null, null, null, null],
    [5, null, null, null, null, null, null, null, null, null],
    [6, null, null, null, null, null, null, null, null, null],
    [7, null, null, null, null, null, null, null, null, null],
    [8, null, null, null, null, null, null, null, null, null],
    [9, null, null, null, null, null, null, null, null, null]
  ]
  return board
}

