import bigInt from "big-integer" 

// Função para verificar se um número é primo
function isPrime(num) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false 
    return num > 1 
}

// Função para gerar um número primo aleatório entre min e max
function generatePrime(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min 
    while(!isPrime(num)) {
        num = Math.floor(Math.random() * (max - min + 1)) + min 
    }
    return num 
}

// Função para calcular o máximo divisor comum (mdc) de dois números
function mdc(a, b) {
    if (!b) return a 
    return mdc(b, a % b) 
}

// Função para calcular o inverso multiplicativo modular de a mod m
function modInverse(a, m) {
    let m0 = m 
    let y = 0, x = 1 

    if (m == 1)
        return 0 

    while (a > 1) {
        let q = Math.floor(a / m) 
        let t = m 

        m = a % m 
        a = t 
        t = y 

        y = x - q * y 
        x = t 
    }

    if (x < 0)
        x += m0 

    return x 
}

// Função para gerar as chaves pública e privada
export function generateKeys() {
    // Dois números primos aleatórios
    let p = generatePrime(50000, 9999999) 
    let q = generatePrime(50000, 9999999) 

    // Produto dos primos
    let n = p * q 

    // totiente de n
    let phi = (p-1)*(q-1) 

    // Escolhe um número inteiro e tal que e seja coprimo com phi(n)
    let e = 10
    while (mdc(e, phi) != 1) {
        e++ 
    }

    // d deve satisfazer a condição (d*e) Mod phi(n) = 1
    let d = modInverse(e, phi) 

    // Retorna as chaves
    return {
        publicKey: {e: e, n: n},
        privateKey: {d: d, n: n}
    } 
}

// Função para criptografar uma mensagem
export function encrypt(publicKey, msg) {
    let chars = msg.split('').map(char => char.charCodeAt()) 
    let encryptedChars = chars.map(char => bigInt(char).modPow(publicKey.e, publicKey.n)) 
    
    return encryptedChars.join(' ') 
}

// Função para descriptografar uma mensagem
export function decrypt(privateKey, encryptedMsg) {
    let encryptedChars = encryptedMsg.split(' ') 
    
    let decryptedChars = encryptedChars.map(char => bigInt(char).modPow(privateKey.d, privateKey.n)) 
    
    return String.fromCharCode(...decryptedChars) 
}

let message = "Hoje é segunda feira, dia de trabalhar graças a Deus!"
let decryptedMessage = ""

// Exemplo de uso
do{
    let keys = generateKeys() 
    let encryptedMessage = encrypt(keys.publicKey, message) 
    decryptedMessage = decrypt(keys.privateKey, encryptedMessage) 

    console.log(keys.privateKey)
    console.log(keys.publicKey)

    console.log("Mensagem original:", message) 
    console.log("Mensagem criptografada:", encryptedMessage) 
    console.log("Mensagem descriptografada:", decryptedMessage) 
}while(message == decryptedMessage)