var Enzo = {
    fabricante: "Ferrari",
    modelo: "A31",
    color: "Rojo",
    velocidad_maxima: 351,
    numeroDePuertas: 2,
    precio: 2640000
};
var LaFerrari = {
    fabricante: "Ferrari",
    modelo: "A31",
    color: "Amarillo",
    velocidad_maxima: 349,
    numeroDePuertas: 2,
    precio: 1416362
};
var Lusso = {
    fabricante: "Ferrari",
    modelo: "GTC4",
    color: "Gris",
    velocidad_maxima: 320,
    numeroDePuertas: 2,
    precio: 300000
};
var Portofino = {
    fabricante: "Ferrari",
    modelo: "C35",
    color: "Rojo",
    velocidad_maxima: 320,
    numeroDePuertas: 2,
    precio: 218750
};
console.log("El precio del Ferrari Ezon es: " + Enzo.precio);
console.log("El auto con mayor velocidad es Enzo " + Math.max(Enzo.velocidad_maxima, LaFerrari.velocidad_maxima, Lusso.velocidad_maxima, Portofino.velocidad_maxima) + "km/h");
