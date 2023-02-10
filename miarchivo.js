
function saludar() {
        alert("Bienvenidos a Victoria's Drinks")
}

saludar();
        let edad = parseInt (prompt("ingrese su edad:"));
        if (edad > 18){
                alert("Podes seguir navegando")
                
        }else {
                let nombreEmpresa = prompt("Para comprobar que no es un robot, ingrese el nombre de la empresa (Victoria):");
        let contrasena = prompt ("ingrese clave de usuario (drinks):")

        if  ((nombreEmpresa.toLowerCase() === "victoria") && (contrasena.toLowerCase() === "drinks")){
                alert("Sos una persona de carne y hueso, podes seguir");
        } else {
                nombreEmpresa = alert("Incorrecto, anda pallaaa")
        }
        }

        //Stock de bebidas:
        
        const fernet ={
                cantidad : "700ml",
                precio : 1200,
                marca : "branca"
        }
        console.log (fernet);

        const cerveza ={
                cantidad : "1litro",
                precio : 600,
                marca : "Andes"
        }
        console.log (cerveza);

        const vino = {
                cantidad : "1litro",
                precio : 1500,
                marca : "Dadá"
        }
        console.log (vino);
        vino.precio = 1000;
        console.log(vino);

        const wisky ={
                cantidad : "2litros",
                precio : 4400,
                marca : "J&B"
        }
        console.log (wisky);

        const sidra ={
                cantidad : "1litro",
                precio : 1100,
                marca : "Constanza"
        }
        console.log (sidra);

console.log("cantidad" in cerveza);


// Precios de las bebidas:

const  stock = [1200, 600, 1500, 4400];
let resultado = stock [3] + stock [1];
console.log (resultado)
console.log (stock.includes(1200));



function bebida(cantidad, precio, producto, disponibilidad){
        this.cantidad = cantidad;
        this.precio = precio;
        this.producto = producto;
        this.disponibilidad = disponibilidad;
        

        this.consultar = function(){
                console.log("La bebida" + this.producto + "Se encuenta disponible en Victoria's Drink");
        }

}

const disponible1 = new bebida("700ml", 1200, "Fernet", "Esta disponible");
const disponible2 = new bebida("1litro", 1500, "Vino", "Esta disponible");
const disponible3 = new bebida("400ml", 600, "Cerveza", "Esta disponible");
const disponible4 = new bebida("1litro", 1200, "Sidra", "Esta disponible");

console.log(disponible1);
console.log(disponible2);
console.log(disponible3);
console.log(disponible4);

disponible3.consultar();