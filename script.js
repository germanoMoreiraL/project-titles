// const interTitles = require('./data');

// // const adicionarTexto = () => {
// //   let yearTitle = document.getElementById('year-title').value; // Obtém o valor digitado no campo de data
// //   let paragraph = document.getElementById('paragraph'); // Obtém o elemento do parágrafo vazio
  
// //   // Verifica se foi digitada uma data
// //   if (yearTitle) {
// //     paragraph.textContent = 'No ano' + yearTitle; // Define o texto do parágrafo com a data
// //   } else {
// //     paragraph.textContent = 'Por favor, digite uma data.'; // Define uma mensagem de erro se nenhum valor for digitado
// //   }
// // }

// // // Adiciona o evento ao botão
// // const button = document.getElementById('btn-year');
// // button.addEventListener('click', adicionarTexto);

// const getInterTitle = (year) => {
//   if (isNaN(parseInt(year))) {
//     throw new Error('Valor inesperado. Insira um número.');
//   }

//   if (verifyTitleByYear(year) === undefined) {
//     throw new Error(`No ano ${year} o Internacional não ganhou nenhum título`);
//   } else {
//     return verifyTitleByYear(year);
//   }
// }

// const verifyTitleByYear = (year) => {
//   for (let index = 0; index < interTitles.titles.length; index += 1) {
//     if (interTitles.titles[index].years === parseInt(year)) {
//       return interTitles.titles[index][title];
//     }
//   }
// }

// const addInterTitle = (year) => {
//   try {
//     return `No ano ${year} o Internacional ganhou os(o) títulos(o) ${getInterTitle(year)}`;
//   } catch (error) {
//     return error.message;
//   }
// }

// addInterTitle();