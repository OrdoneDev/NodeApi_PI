import bigInt from "big-integer"

const privateKey = {
    d: 16894591825091,
    n: 18584059629871
}

export default function descriptografar(msgEncriptada) {
    let caracterCifrado = msgEncriptada.split(' ') 
    
    let caracterDecifrado = caracterCifrado.map(caracter => bigInt(caracter).modPow(privateKey.d, privateKey.n)) 
    
    return String.fromCharCode(...caracterDecifrado) 
}