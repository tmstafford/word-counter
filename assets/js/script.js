let textArea = document.querySelector("#textarea");
let wordCount = document.querySelector("#wordCount");
let characterCount = document.querySelector("#characterCount");
let sentenceCount = document.querySelector("#sentenceCount");
let paragraphCount = document.querySelector("#paragraphCount");

let countWords = function() {
    // get number of characters
    let characters = textArea.value.length;
    characterCount.textContent = characters;
    // get word count 
    // look for word boundaries and valid word characters- more effective
    let words = textArea.value.match(/\b[-?(\w+)?]+\b/gi); 
    // console.log(words);
    if (words) {
        wordCount.textContent = words.length;
    } else {
        wordCount.textContent = "0";
    }
    // sentence count with .!? to seperate sentences
    // paragraph count 
    if (words) {
        let sentences = textArea.value.split(/[.|!|?]+/g);
        // console.log(sentences);
        sentenceCount.textContent = sentences.length - 1;
        
        let paragraphs = textArea.value.replace(/\n$/gm, '').split(/\n/);
        paragraphCount.textContent = paragraphs.length;
       // console.log(paragraphs);
    } else {
        sentenceCount.textContent = "0";
        paragraphCount.textContent = "0";
    }
};

textArea.addEventListener("keyup", countWords);
