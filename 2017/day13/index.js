/**
 * @typedef {number} Picosecond
 * @typedef {number} Depth
 * @typedef {number} Range
 * @typedef {string} AOCInput
 */

/**
 * @param {AOCInput} input
 * @returns {Object<Depth, Range>}
 */
exports.parseInput = input => {
    const firewall = {}

    for (let i = 0, lines = input.split('\n'); i < lines.length; i++) {
        const line = lines[i]

        const seperatorIndex = line.indexOf(':')
        const depth = parseInt(line.slice(0, seperatorIndex))
        const range = parseInt(line.slice(seperatorIndex + 1, line.length))

        firewall[depth] = range
    }

    return firewall
}

/**
 * Computes every possbile range-position of a layer after a delay of x picoseconds
 *
 * @param {Range} range
 * @param {Picosecond} delay Picoseconds
 * @returns {number[]}
 */
exports.computeLayerRangePositions = (range, delay) => {
    const everyPicosecondRangePosition = [1]

    for (
        let picosecond = 1, scannerDelta = 1;
        picosecond < delay;
        picosecond++
    ) {
        const rangePosition =
            everyPicosecondRangePosition[picosecond - 1] + scannerDelta

        if (rangePosition >= range) {
            scannerDelta = -1
        } else if (rangePosition <= 1) {
            scannerDelta = 1
        }

        everyPicosecondRangePosition[picosecond] = rangePosition
    }

    return everyPicosecondRangePosition
}