const modules = require("./method")
let boxOfMessages = [];
let boxOfAdvices = [];
let boxOfCautions = [];
const pushElementintoBoxOfMessages = (phrase,author) => { modules.insertElementIntoBox(phrase, author, boxOfMessages)
}
// Use "pushElementintoBoxOfMessages()" to insert elements into boxOfMessages
pushElementintoBoxOfMessages("Nothing is particularly hard if you divide it into small jobs.","Henry Ford");
module.exports = {boxOfMessages, boxOfAdvices, boxOfCautions};