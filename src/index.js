const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

var hack = (pair) =>{
    let out=''
    switch(pair){
        case '10':
            out +='.';
            break;
        case '11':
            out +='-';
            break;
        case '*':
            out +=' '
            break;
    }
    return out;
}

function decode(expr) {
    var word = [];

    for (let i=0 , j=0; i<(expr.length/10); i++){
        word.push(expr.substring(j, j+10));
        j +=10;
    }

    return word.map((el)=>{
        if(el.includes('*')==true){
            return ' ';
        }else{
             let wrd=''
            for(let i=0, j=0; i<=(el.length/2)-1; i++){
                wrd += hack(el.substring(j, j+2));
                j+=2;
            }
            return MORSE_TABLE[wrd];
        }
    }).join('');
}

module.exports = {
    decode
}