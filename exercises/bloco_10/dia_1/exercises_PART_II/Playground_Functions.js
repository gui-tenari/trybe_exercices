
function encode(string) {
    let encodedSentence = '';
    const array = string.toLowerCase().split('');
    array.forEach((letter) => {
        if (letter === 'a') {encodedSentence += 1}
        else if (letter === 'e') {encodedSentence += 2}
        else if (letter === 'i') {encodedSentence += 3}
        else if (letter === 'o') {encodedSentence += 4}
        else if (letter === 'u') {encodedSentence += 5}
        else (encodedSentence += letter)
    })
    return encodedSentence;
  }
  console.log(encode("HELLO"))

  function decode(string) {
    let encodedSentence = '';
    const array = string.split('');
    array.forEach((letter) => {
        if (letter === '1') {encodedSentence += 'a'}
        else if (letter === '2') {encodedSentence += 'e'}
        else if (letter === '3') {encodedSentence += 'i'}
        else if (letter === '4') {encodedSentence += 'o'}
        else if (letter === '5') {encodedSentence += 'u'}
        else (encodedSentence += letter);
    })
    return encodedSentence;
  }

  module.exports = {
    decode,
    encode
  }