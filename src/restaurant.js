/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (objeto) => {
let consumption = [];
let conta = [];
return {
  fetchMenu: () => objeto,
  consumption,
  order: (string) => consumption.push(string),
  pay: () => {
    consumption.forEach((element) => {
    if (objeto.food[element]) { conta.push(objeto.food[element]); }
    if (objeto.drink[element]) { conta.push(objeto.drink[element]); }
  });
  return conta.reduce((valor1, valor2) => valor1 + valor2);
},
};
};

module.exports = createMenu;
