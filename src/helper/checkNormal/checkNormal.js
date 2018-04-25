const checkNormal = val => {
  const bolds = ['thin', 'stuffed', 'extra', 'small', 'large'];
  if (bolds.includes(val)) return "font-bold";
};

export default checkNormal;