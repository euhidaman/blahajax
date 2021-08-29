var ENGLISH_WORDS = [
    "sharks",
    "blahaj",
    "whale",
    "dolphin",
    "megalodon",
];

function randomWord() {
    return ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)];
}

export { randomWord };