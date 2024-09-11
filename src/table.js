import Table from "cli-table3";
import chalk from "chalk";

const table = new Table({
    //aca cambiamos el color de los siguientes datos
  head: [
    chalk.red("id"),
    chalk.red("nombre"),
    chalk.red("precio"),
    chalk.red("categoria"),
    chalk.red("descripcion"),
    chalk.red("stock"),
  ],
  //aquie damos 
  colWidths: [10, 10, 10, 20, 30, 10],
})

export default table;
