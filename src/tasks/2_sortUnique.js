function sortArr(array) {
  const obj = array.reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
}

export default sortArr;
