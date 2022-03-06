// const precioOriginal = 120;
// const descuento = 18;

/* console.log({
    precioOriginal,
    descuento,
    procentajePrecioConDescuento,
    precioConDescuento
}) */

function calcularPrecioConDescuento(precio, descuento){
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de: " + precioConDescuento;
}

// FUNCIONES INTELIGENTES

// Array de cupones

const cupones = ["upss","holaMundo","soyBatman"];
const cupon = document.getElementById("digiteCupon");
const inputPrecio = document.getElementById("ingresePrecio");

function onClickDescuentoCupon(){
    const valorCupon = cupon.value;
    const precio = inputPrecio.value;
    const resultado = document.getElementById("resultado");
    let descuento = 0;
    if (!cupones.includes(valorCupon)){
        alert("Cupón no válido");
    }
    switch(valorCupon){
        case cupones[0]:
            descuento = 10;
            resultado.innerText = calcularPrecioConDescuento(precio,descuento);
            break;
        case cupones[1]:
            descuento = 20;
            resultado.innerText = calcularPrecioConDescuento(precio,descuento);
            break;
        case cupones[2]:
            descuento = 30;
            resultado.innerText = calcularPrecioConDescuento(precio,descuento);
            break;
        default:
            resultado.innerText = "No es un cupon válido";
            break;        
    }
}

function onClickCleanLabel(){
    cupon.value = "";
    inputPrecio.value = "";
}