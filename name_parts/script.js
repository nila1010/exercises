const person = "Peter Heronimous Lind";

const firstName = person.substring(0, person.indexOf(" "));
const middleName = person.substring(person.indexOf(" ") + 1, person.lastIndexOf(" "));
const lastName = person.substring(person.lastIndexOf(" ") + 1);

console.log(firstName, middleName, lastName);
