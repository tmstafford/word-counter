let textareaEl = document.querySelector("#textarea");
let wordCountEl = document.querySelector("#wordCount");
let characterCountEl = document.querySelector("#characterCount");

let countWords = function() {
    // get number of characters
    let characters = textareaEl.value.length;
    characterCountEl.textContent = characters;
    // get word count 
    let text = textareaEl.value.split(' ');
    let wordCount = 0;
    // loop through array checking for empty space
    for (i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
            wordCount++;
        }
    }
    // display word count 
    wordCountEl.textContent = wordCount;
};

textareaEl.addEventListener("keyup", countWords);
