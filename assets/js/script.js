let textArea = document.querySelector("#textarea");
let wordCount = document.querySelector("#wordCount");
let characterCount = document.querySelector("#characterCount");
let sentenceCount = document.querySelector("#sentenceCount");
let paragraphCount = document.querySelector("#paragraphCount");
let readingTime = document.querySelector("#readingTime");

let countWords = function() {
    // get number of characters
    let characters = textArea.value.length;
    characterCount.textContent = characters;
    // get word count 
    // look for word boundaries and valid word characters- more effective
    let words = textArea.value.match(/\b['-?(\w+)?]+\b/gi); 
    // console.log(words);
    if (words) {
        wordCount.textContent = words.length;
        // sentence count with .!? to seperate sentences
        let sentences = textArea.value.split(/[.|!|?]+/g);
        // console.log(sentences);
        sentenceCount.textContent = sentences.length - 1;
        // paragraph count
        let paragraphs = textArea.value.replace(/\n$/gm, '').split(/\n/);
        paragraphCount.textContent = paragraphs.length;
       // console.log(paragraphs);

       // calculate reading time based on the average of 250 words/minute
       let timeSeconds = Math.floor(words.length * 60 / 250);
       // convert seconds to minutes
       if (timeSeconds > 59) {
           let timeMinutes = Math.floor(timeSeconds / 60);
           timeSeconds = timeSeconds - timeMinutes * 60;
           // reading time for minutes and seconds
           readingTime.textContent = timeMinutes + "m " + timeSeconds + "s";
        } else {
            // less than a minute reading time displayed
            readingTime.textContent = timeSeconds + "s";
        }
    } else {
        wordCount.textContent = "0";
        sentenceCount.textContent = "0";
        paragraphCount.textContent = "0";
        readingTime.textContent = "0";
    }
};

textArea.addEventListener("keyup", countWords);
