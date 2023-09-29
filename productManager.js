class ProductManager {
    constructor(){
        this.products = [];
    }

    //metodo que genera un ID automatico
    autoId = () => (this.products.length === 0) ? 1 : this.products[this.products.length -1].id + 1

    // metodo que agrega un producto con estas propiedades
    addProduct(title, description, price, thumbnail, code, stock){

        // compruega si productCode es igual a code
        const codeValidation = productCode => productCode.code === code
        //some: retuena true si code ya existe
        if(this.products.some(codeValidation)) {
            console.log("El producto ya existe")
        } else {
            this.products.push({id: this.autoId(), title, description, price, thumbnail, code, stock})
        }
    }
    // funcion que regresa el array de productos
    getProducts = () => this.products

    // funcion que recibe un parametro y devuelve un producto especifico
    getProductById = (id) => {
        const findById = this.products.find(element => element.id === id)
        return findById ? findById : "Not Found"
    }
}

const productManager = new ProductManager()

productManager.addProduct(
  "Electronico-1",
  "Aparato electronico",
  1500,
  "path-image",
  "01",
  50
);

productManager.addProduct(
  "Electronico-2",
  "Aparato electronico Linea Blanca",
  5000,
  "path-image",
  "02",
  100
);

productManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin Imagen",
  "abc123",
  25
);

console.log(productManager.getProductById(1))
console.log(productManager.getProductById(2));
console.log(productManager.getProductById(3));
console.log(productManager.getProductById(4));

