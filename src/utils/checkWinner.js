export const checkWinnerFunc = (field) => {
    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let combination of winCombinations) {
        if (field[combination[0]] === field[combination[1]] &&
            field[combination[1]] === field[combination[2]] &&
            field[combination[0]] !== '') {
            return true;
        }
    }

    return false;
}

//             if(cells[wins[0]].innerHTML == cells[wins[1]].innerHTML &&
//                cells[wins[1]].innerHTML == cells[wins[2]].innerHTML &&
//                cells[wins[0]].innerHTML != '') {
//                 return  cells[wins[0]];
//             }