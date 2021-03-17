'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    const typeOfSock = []
    const numberOfSocksByType = []
    for (let sock of ar) {
        const indexOfSock = typeOfSock.indexOf(sock)
        if (indexOfSock === -1) {
            typeOfSock.push(sock)
            numberOfSocksByType.push(1)
        }
        else {
            numberOfSocksByType[indexOfSock]++
        }        
    }
    let numberOfPairs = 0
    for (let pair of numberOfSocksByType) {
        numberOfPairs += Math.trunc(pair / 2)
    }
    return numberOfPairs
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}

