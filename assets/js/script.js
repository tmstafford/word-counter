let textArea = document.querySelector("#textarea");
let wordCount = document.querySelector("#wordCount");
let characterCount = document.querySelector("#characterCount");

let countWords = function() {
    // get number of characters
    let characters = textArea.value.length;
    characterCount.textContent = characters;
    // get word count 
    // look for word boundaries and valid word characters- more effective
    let words = textArea.value.match(/\b[-?(\w+)?]+\b/gi); 
    console.log(words);
    if (words) {
        wordCount.textContent = words.length;
    } else {
        wordCount.textContent = "0";
    }
};

textArea.addEventListener("keyup", countWords);
