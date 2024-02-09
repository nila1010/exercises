/*-------------3LetterCAP-----------*/

const person = "petEEr";

const upperCase = person[2].toUpperCase();
const first2 = person.substring(0, 2);
const last = person.substring(3).toLowerCase();

const thirdLetter = first2.concat(upperCase, last);

/*--------------FirstLetterCAP------*/

const fullName = "christian";

const firstLetterUpperCase = `${fullName[0].toUpperCase()}${fullName.slice(1).toLowerCase()}`;

console.log(firstLetterUpperCase);
