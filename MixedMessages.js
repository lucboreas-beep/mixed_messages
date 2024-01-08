// Message Generator Program

const beginnings = ["Believe in yourself,", "Your potential is limitless,", "Every day is a new opportunity,"]
const middles = ["embrace the challenges,", "keep pushing your boundaries,", "seek new horizons"]
const ends = ["and make your dreams come true!", "and rise above your limits!", "and create your own destiny!"]

// Function to generate random number
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// Function to generate the message
function generateMessage() {
    const part1 = beginnings[getRandomIndex(beginnings)];
    const part2 = middles[getRandomIndex(middles)];
    const part3 = ends[getRandomIndex(ends)];
    return `${part1} ${part2} ${part3}`;
}

// Display the message
console.log(generateMessage());