// const arr = [1,2,3,4];

const carrinho = [
  {
    id: 1,
    price: 10,
  },
  {
    id: 2,
    price: 15,
  },
  {
    id: 1,
    price: 10,
  },
];

const addItem = (array, item) => [...array, item];

const removeItem = (array, item) => [...array].filter((i) => i !== item);

console.log(addItem(carrinho, { id: 6, price: 23 }).length, carrinho.length);
