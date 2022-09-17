const modules = require("./method");
let boxOfMessages = [];
let boxOfAdvices = [
  "La vida no es justa. Acostúmbrate a ello. Bill Gates",
  "Cuando pensamos que el día de mañana nunca llegará, ya se ha convertido en el ayer. Henry Ford",
  "“Aprende a decir que no”, Warren Buffett."
];
let boxOfCautions = [
  "Ninguna mar en calma hizo experto a un marinero",
  "Si no cambias todo se repite"
];

const pushElementintoBoxOfMessages = (phrase, author) => {
  modules.insertElementIntoBox(phrase, author, boxOfMessages);
};
// Use "pushElementintoBoxOfMessages()" to insert elements into boxOfMessages
pushElementintoBoxOfMessages(
  "Nothing is particularly hard if you divide it into small jobs.",
  "Henry Ford"
);
pushElementintoBoxOfMessages(
  "La clave para el éxito consiste en enfocarse conscientemente en las cosas que se desean en lugar de enfocarse en las cosas que no se desean",
  "Brian Tracy"
);

pushElementintoBoxOfMessages(
  "Si quieres llegar a algún lugar tienes que saber a dónde quieres ir y cómo llegar ahí. Después nunca, nunca, nunca rendirse.",
  "Norman Vincent"
);

module.exports = {
  boxOfMessages,
  boxOfAdvices,
  boxOfCautions,
};
