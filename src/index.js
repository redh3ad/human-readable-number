module.exports = function toReadable (number) {
	const numbs = {
		0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
	if (number < 21 || number % 10 === 0 && number < 100) return numbs[number];
	if (number % 100 === 0) return `${numbs[number / 100]} hundred`;
	if (number % 10 === 0) return `${numbs[Math.floor(number / 100)]} hundred ${numbs[number % 100]}`;
	if (number > 20 && number < 100) return `${numbs[number - (number % 10)]} ${numbs[number % 10]}`;
	if (number > 99) {
        return (`${numbs[Math.floor(number / 100)]} hundred ${number % 100 > 20 ? numbs[(number % 100) - (number % 10)] : numbs[number % 100]} ${number % 100 > 20 ? numbs[(number % 10)]: ''}`).trim()
    }
}
