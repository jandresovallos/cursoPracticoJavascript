// Código del Cuadrado
console.group("Cuadrados")

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

const ladoTriangulo01 = 6;
const ladoTriangulo02 = 6;
const BaseTriangulo = 4; 


console.log("Los lados del triángulo miden: "
 + ladoTriangulo01 + "cm, "
 + ladoTriangulo02 + "cm, "
 + BaseTriangulo + "cm");

 const alturaTriangulo = 5.5;
 console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

 const perimetroTriangulo = ladoTriangulo01 + ladoTriangulo02 + BaseTriangulo;
 console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (BaseTriangulo * alturaTriangulo)/2;
console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

 console.groupEnd();

 // Código del triángulo
console.group("Círculos");

// Radio
const radioCirculo = 4;
console.log("El radio de la circunferencia es: " + radioCirculo + "cm");
// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm");
// PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI + "cm");
// Cincunferencia
const perimetroCircunferencia = diametroCirculo * PI;
console.log("El perímetro de la circunferencia es: " + perimetroCircunferencia + "cm");
// Área
const areaCircunferencia = Math.pow(radioCirculo,2) * PI;
console.log("El área de la circunferencia es: " + areaCircunferencia + "cm^2");