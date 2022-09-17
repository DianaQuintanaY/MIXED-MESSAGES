class Message {
  constructor(phrase, author) {
    this.phrase = phrase;
    this.author = author;
    }
}; 
const insertElementIntoBox = (phrase, author,array) => {
  let pushElement = new Message(phrase, author);
  array.push(pushElement);
};  
const getElementRandom = (array) => {
  let x = Math.floor(Math.random()*array.length);
  return array[x]
};
module.exports = {insertElementIntoBox, getElementRandom };
