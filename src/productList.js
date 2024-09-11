import fs from "fs";

const data = JSON.parse(fs.readFileSync("./src/files/products.json", "utf8"));

export default data.productos;
