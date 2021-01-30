function shuffle(arr) {
  let j;
  let x;
  let index;
  for (index = arr.length - 1; index > 0; index -= 1) {
    j = Math.floor(Math.random() * (index + 1));
    x = arr[index];
    arr[index] = arr[j];
    arr[j] = x;
  }
  return arr;
}

function parsePrice(price) {
  const aux = `${price}.00`;
  const arr = aux.split('.').map((i) => i.padEnd(2, '0'));
  return `${arr[0]},${arr[1]}`;
}

module.exports = { shuffle, parsePrice };
