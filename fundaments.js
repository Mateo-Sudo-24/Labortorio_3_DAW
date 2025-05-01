// Variables de configuración inicial
let cantidadPcGamers = "30";
let tieneWishList = true;
const urlVendedor = "https://www.amazon.com/-/es/stores/CyberpowerPC/page/600E10CE-C8D2-4DF2-91B5-4D7EF7DDC7E0?lp_asin=B0DCMPRRFD&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto";

// Strings
let nombrePcGamer = "PC Gamer CyberPowerPC Gamer Xtreme VR Gaming PC, Intel Core i5-13400F 2.5GHz";
let precioPcGamer = 899.99;
let mensajePregunta = `¿Agregar al carrito? - ${nombrePcGamer}`;
console.log(mensajePregunta, "Agregar_A_La_Lista");
console.log(`El nombre del dispositivo es ${nombrePcGamer} y su costo es ${precioPcGamer}`);
console.log('La ' + nombrePcGamer + ' la oferta: ' + urlVendedor);
console.log("");

// Números
console.log(typeof(precioPcGamer));
console.log("Precio del PC Gamer con impuestos", (precioPcGamer + 121).toFixed(2));
console.log("Precio del PC Gamer con descuento del 10%", (precioPcGamer - (precioPcGamer*0.1)).toFixed(2));
console.log("Precio del PC Gamer si se envía a Ecuador", (precioPcGamer * 10).toFixed(2));
console.log("Precio del PC Gamer con descuento navideño y del Black Friday", (precioPcGamer % 20).toFixed(2));
console.log("");

// Números: Incremento y Decremento 
console.log(++precioPcGamer);
console.log(precioPcGamer++);
console.log("");

console.log(--precioPcGamer);
console.log(precioPcGamer--);
console.log("");

// Math
console.log("Existen más métodos pero se usarán estos para la página web")
console.log(Math.round(precioPcGamer));
console.log(Math.ceil(precioPcGamer));
console.log(Math.sqrt(precioPcGamer));
console.log("");

// Conversión de números
console.log("Conversión de números");
console.log(Number.parseInt(precioPcGamer));
console.log(Number.parseFloat(precioPcGamer));
console.log(Number.parseFloat(precioPcGamer));
console.log(`${precioPcGamer}`);
console.log("");

// Booleanos
console.log("Booleanos, operador de adición");
let precioPcGamerConDescuento = 39.99;
precioPcGamerConDescuento += 5;
console.log(precioPcGamerConDescuento);
console.log("");

console.log("Operador de comparación");
console.log(precioPcGamer == precioPcGamerConDescuento);

console.log("Evaluar tipo de dato y contenido");
console.log(precioPcGamer === precioPcGamerConDescuento);
console.log("");

// Condicionales
console.log("Condicional if");
const carritoCompras = ['PC Gamer', nombrePcGamer];

if (carritoCompras.length != 0) {
    console.log("Proceder al pago de los productos");
} else {
    console.log("Agregar productos");
}

// Bucles
console.log("Bucle if");
const contador = 10;

for (let i = contador; i >= 0; i--) {
    i <= 0 ? console.log("Compra realizada") : console.log(i);
}

console.log("Bucle while");
let contador2 = 10;
while (contador2 >= 0) {
    contador2 <= 0 ? console.log("Compra de PC Gamer en proceso") : console.log(contador2);
    contador2--;
}
console.log("");

// Uso del var
console.log("Uso del var");
var estadoGeneral = true;
if (estadoGeneral) {
    var estadoGeneral = false;
}
console.log(estadoGeneral);
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
console.log("");

// Uso del let
console.log("Uso del let");
let estadoParcial = true;
if (estadoParcial) {
    let estadoParcial = false;
    console.log(estadoParcial);
}
console.log(estadoParcial);

for (let j = 0; j < 10; j++) {
    console.log(j);
}
// console.log(j); // Esto causaría error, j no está definido fuera del bloque
console.log("");

// Uso del const
console.log("Uso del const");
const estadoFinal = true;
if (estadoFinal) {
    const estadoFinal = false;
    console.log(estadoFinal);
}
console.log(estadoFinal);
