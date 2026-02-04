// vanilla js typewriter effect

const useTypewriter = (word, speed) => {
  if (!word || !speed) {
    return;
  }

  let index = 0;
  const intervalId = setInterval(() => {
    if (index >= word.length) {
      clearInterval(intervalId);
      return;
    }
    console.log(word[index]);
    index++;
  }, speed);
};
