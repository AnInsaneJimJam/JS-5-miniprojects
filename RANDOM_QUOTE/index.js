const quotes = [
    "The only way to do great work is to love what you do.",
    "Strive not to be a success, but rather to be of value.",
    "Two roads diverged in a wood, and I—I took the one less traveled by, and that has made all the difference.",
    "Life is what happens when you're busy making other plans.",
    "The mind is everything. What you think you become.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."
];

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")



function generateQuote() {
    if (usedIndexes.size >= quotes.length) usedIndexes.clear()
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue
        quoteElement.innerHTML = quotes[randomIdx]
        usedIndexes.add(randomIdx);
        break
    }
}