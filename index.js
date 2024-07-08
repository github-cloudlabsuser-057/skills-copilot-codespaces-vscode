const sentence = "Hello, world!";
const reversedSentence = sentence.split("").reverse().join("");
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
console.log(capitalizedSentence);
