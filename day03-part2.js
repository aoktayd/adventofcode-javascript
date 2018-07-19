class Score {
    constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value;
    }
}

module.exports = s => {
    let grid = [
        new Score(0, 0, 1)
    ];

    let highest = grid[grid.length - 1];

    let square = 1;
    let nextSquare = square + 2;

    let direction = 'right';

    do {
        if (grid.length >= square ** 2) {
            square = nextSquare;
            nextSquare = square + 2;
        }
        const maxLength = Math.floor(square / 2);

        const prev = grid[grid.length - 1];
        let current = new Score(null, null, null);

        switch (direction) {
            case 'right':
                if (prev.x + 1 >= maxLength &&  grid.length + 1 !== square ** 2) {
                    direction = 'up';
                }
                current.y = prev.y;
                current.x = prev.x + 1;
                break;
            case 'up':
                if (prev.y + 1 >= maxLength) {
                    direction = 'left';
                }
                current.y = prev.y + 1;
                current.x = prev.x;
                break;
            case 'left':
                if (prev.x - 1 <= -maxLength) {
                    direction = 'down';
                }
                current.y = prev.y;
                current.x = prev.x - 1;
                break;
            case 'down':
                if (prev.y - 1 <= -maxLength) {
                    direction = 'right';
                }
                current.y = prev.y - 1;
                current.x = prev.x;
                break;
        }

        current.value = grid.filter(score =>
               score.x >= current.x - 1 && score.x <= current.x + 1
            && score.y >= current.y - 1 && score.y <= current.y + 1
        ).reduce((acc, score) => acc + score.value, 0);

        highest = grid[grid.push(current) - 1];
    } while (s >= highest.value)

    return grid[grid.length - 1].value;
}
