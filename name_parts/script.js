const person = "Peter Heronimous Lind";

const firstName = person.substring(0, person.indexOf(" "));
const middleName = person.substring(person.indexOf(" ") + 1, person.lastIndexOf(" "));
const lastName = person.substring(person.lastIndexOf(" ") + 1);

console.log(firstName, middleName, lastName);

const personSplit = person.split(" ");
const personSplitFirstName = personSplit[0];
const personSplitMiddleName = personSplit[1];
const personSplitLastName = personSplit[2];

console.log(personSplitFirstName, personSplitMiddleName, personSplitLastName);
