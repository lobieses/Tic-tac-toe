export const checkWinnerFunc = (field) => {
    const isDraw = !field.some((elem) => {
        if(elem) return false;
        return true;
    });

    const winCombinations = [
        {combination: [0, 1, 2], winCode: 'horizontal1'},
        {combination: [3, 4, 5], winCode: 'horizontal2'},
        {combination: [6, 7, 8], winCode: 'horizontal3'},

        {combination: [0, 3, 6], winCode: 'vertical1'},
        {combination: [1, 4, 7], winCode: 'vertical2'},
        {combination: [2, 5, 8], winCode: 'vertical3'},

        {combination: [0, 4, 8], winCode: 'diagonal1'},
        {combination: [2, 4, 6], winCode: 'diagonal2'}
    ];

    for (let combination of winCombinations) {
        if (field[combination.combination[0]] === field[combination.combination[1]] &&
            field[combination.combination[1]] === field[combination.combination[2]] &&
            field[combination.combination[0]] !== '') {
            return combination.winCode;
        }
    }

    if(isDraw) return 'isDraw';

    return false;
}

