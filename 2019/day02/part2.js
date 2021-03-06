const { exec } = require('../shared/intcode')

module.exports = (input, want = 19690720) => {
    const intcode = input.split(',').map(Number)

    for (let n = 0; n <= 99; n++) {
        for (let v = 0; v <= 99; v++) {
            intcode[1] = n
            intcode[2] = v

            if (exec({ intcode }).intcode[0] === want) {
                return 100 * n + v
            }
        }
    }
}
