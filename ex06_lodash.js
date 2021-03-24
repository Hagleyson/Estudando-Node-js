const _ = require("lodash");
console.log("lodash,  ", _);
const alunos = [
  {
    nome: "hagleyson",
    nota: 10,
  },
  {
    nome: "teste",
    nota: 6,
  },
  {
    nome: "teste1",
    nota: 8,
  },
];

const media = _.sumBy(alunos, "nota") / alunos.length;
console.log(media);
//instalar lodash npm i lodash
