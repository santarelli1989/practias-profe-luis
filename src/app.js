import chalk from "chalk";
import data from "./productList.js";
import table from "./table.js";

/*function chequearStock(stock) {
  return stock > 20 ? chalk.bgBlue.white(stock) : chalk.bgRed(stock);


const info = data.map((producto) => {
  return [
    producto.id,
    producto.nombre,
    producto.precio,
    producto.categoria,
    producto.descripcion,
    chequearStock (producto.stock)

  ];
});
table.push(...info);

console.log(table.toString());

*/

const stockBajo = data.filter(
(bajo)=> bajo.stock < 20
);

console.log (stockBajo);




