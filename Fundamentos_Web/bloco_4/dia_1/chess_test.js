let chessPiece = 'QUEen'
let res = chessPiece.toLowerCase()
let message = "O movimento desta peça é: "

switch (res) {
    case 'pawn': case 'peão':
        console.log(message+ 'Uma casa para frente e somente captura outras peças na diagonal');
    break;

    case 'bishop':case 'bispo' :
        console.log(message + 'Diagonal');
    break;

    case 'knight' :case 'cavalo' :
        console.log(message + 'em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
    break;

    case 'rook' :case 'torre':
        console.log(message+'vertical ou horizontal');
    break;

    case 'queen':case 'rainha':
        console.log(message+ 'horizontal, vertical e diagonais');
    break;

    case 'king':case 'rei':
        console.log(message+ 'horizontal, vertical e diagonal, somente uma casa de cada vez.');
        break;

    default:
        console.log('esta não é uma peça válida');
}
