module.exports = s =>
    s.split(/\r?\n/)
        .map(passphrase => passphrase.split(' '))
        .filter(words => words.length - new Set(words).size === 0)
        .length;
