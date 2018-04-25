const cap = (str) => {
  let sp = str.split('');
  return [sp[0].toUpperCase(), ...sp.slice(1, sp.length)].join('');
};

export default cap;