let value = 200;

function momsBeregner(parm1, moms = 25) {
  const medMoms = (parm1 * moms) / 100 + value;
  console.log(medMoms);
}

momsBeregner(value);
