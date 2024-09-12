import chalk from "chalk";
import data from "./productList.js";
import table from "./table.js";

const productos = data;


function chequearStock(stock) {
  return stock > 20 ? chalk.bgBlue.white(stock) : chalk.bgRed(stock);
}
const info = productos.map((producto) => {
  return [
    producto.id,
    producto.nombre,
    producto.precio,
    producto.categoria,
    producto.descripcion,
    chequearStock(producto.stock),
  ];
});
table.push(...info);
console.log(table.toString());
// metodo filter
const stockBajo = productos.filter(
(bajo)=> bajo.stock < 20
);
console.log (stockBajo);
// metodo reduce
 // aca con el metodo reduce sacamos el stock total de todos los productos que tenemos en lista
const stockTotal = productos.reduce((stock, item)=>{
 return stock + item.stock
}, 0)
console.log (stockTotal)

//metodo reduce
// sacamos el precio total de la mercaderia
const precioTotal = productos.reduce((price, item)=>{
  return   price +  item.precio * item.stock
}, 0);
console.log(precioTotal)