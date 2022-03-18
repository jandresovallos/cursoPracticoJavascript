const notas = [
    {
        course: "Cálculo",
        note: 4.5,
        credit: 4
    },
    {
        course: "Programación",
        note: 3.5,
        credit: 5
    },
    {
        course: "Física",
        note: 4,
        credit: 3
    }
];

const noteWithCredit = notas.map(function (objeto){
    return objeto.note * objeto.credit;
});

const sumNoteWithCredit = noteWithCredit.reduce(function (a = 0, b){
    return a + b;
});

const credit = notas.map(function(objeto){
    return objeto.credit;
});

const sumOfCredit = credit.reduce(function(sum = 0, b ){
    return sum + b;
});

const promedioPonderado = parseFloat((sumNoteWithCredit / sumOfCredit).toFixed(2));