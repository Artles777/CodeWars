function palindrom(word) {
  const arrWord = word.toLowerCase().split("");
  return (
    JSON.stringify(arrWord.filter((w, i) => i < arrWord.length / 2)) ===
    JSON.stringify(arrWord.slice(arrWord.length / 2, arrWord.length).reverse())
  );
}

export default palindrom;
