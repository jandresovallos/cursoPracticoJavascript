// Código del Cuadrado
console.group("Cuadrados")

/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado){
    return lado * 4;
}

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

/* const ladoTriangulo01 = 6;
const ladoTriangulo02 = 6;
const BaseTriangulo = 4; 


console.log("Los lados del triángulo miden: "
 + ladoTriangulo01 + "cm, "
 + ladoTriangulo02 + "cm, "
 + BaseTriangulo + "cm");

 const alturaTriangulo = 5.5;
 console.log("La altura del triángulo es de: " + alturaTriangulo + "cm"); */

function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}

//  const perimetroTriangulo = ladoTriangulo01 + ladoTriangulo02 + BaseTriangulo;
//  console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

// const areaTriangulo = (BaseTriangulo * alturaTriangulo)/2;
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

 console.groupEnd();

 // Código del triángulo
console.group("Círculos");

// Radio
/* const radioCirculo = 4;
console.log("El radio de la circunferencia es: " + radioCirculo + "cm"); */
// Diámetro
// const diametroCirculo = radioCirculo * 2;

function diametroCirculo(radio){
    return radio * 2;
}
// PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI + "cm");
// Cincunferencia

function perimetroCircunferencia(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// console.log("El perímetro de la circunferencia es: " + perimetroCircunferencia() + "cm");
// Área

function areaCircunferencia(radio){
    return Math.pow(radio,2) * PI;
}

// console.log("El área de la circunferencia es: " + areaCircunferencia() + "cm^2");
console.groupEnd();

// AQUÍ INTERACTUAMOS CON EL HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perímetro es: " + perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área es: " + area);
}

// ---------------------------------------------------------

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("lado1");
    const input2 = document.getElementById("lado2");
    const input3 = document.getElementById("lado3");
    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const lado3 = parseInt(input3.value);

    const area = perimetroTriangulo(lado1,lado2,lado3);
    alert("El perímetro del triángulo es: " + area);
}

function calcularAreaTriangulo(){
    const inpBase = document.getElementById("base");
    const inpAltura = document.getElementById("altura");
    const base = inpBase.value;
    const altura = inpAltura.value;

    const area = areaTriangulo(base,altura);
    alert("El área del triángulo es: " + area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("radio");
    const radio = input.value;

    const perimetro = perimetroCircunferencia(radio);
    alert("El perímetro de la circunferencia es: " + perimetro);
}

// CALCULAR ALTURA DE UN TRIÁNGULO ISÓSELES
const inputl1 = document.getElementById("l1");
const inputl2 = document.getElementById("l2");
const inputl3 = document.getElementById("l3");
const lado1 = parseInt(inputl1.value);
const lado2 = parseInt(inputl2.value);
const lado3 = parseInt(inputl3.value);
console.log("lado1: "+lado1+" lado2: "+lado2+" lado3: "+lado3);
function calcularAlturaTriangulo(lado1,lado2,lado3){
    if(lado1 == lado2 && lado2 == lado3){
        const altura = Math.sqrt(Math.pow(lado1,2)  - (Math.pow(lado2,2)/4));
        console.log("lado1: "+lado1+" lado2: "+lado2+" lado3: "+lado3);
        alert("La altura del triangulo es: " + altura);
    }else{
        alert("Los lados del triángulo no son iguales");
    }
}