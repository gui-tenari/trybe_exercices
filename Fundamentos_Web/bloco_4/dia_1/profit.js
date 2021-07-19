let custo = 13;
let valorDeVenda = 17;

let custoTotal= custo + (custo/100 * 20);
let lucroUn = valorDeVenda - custoTotal;
let lucro1kUn = lucroUn * 1000;

if (custo>0) {
    console.log(lucro1kUn);
} else {
    console.log('valor inválido')
}


