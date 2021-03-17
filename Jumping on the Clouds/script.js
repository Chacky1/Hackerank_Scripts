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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let currentCloudNumber = 0
    let numberOfJumpsDone = 0
    while (currentCloudNumber != c.length - 1) {
        if (c[currentCloudNumber + 2] != 1 && currentCloudNumber + 2 < c.length) {
            currentCloudNumber += 2
            numberOfJumpsDone++
        }
        else {
            currentCloudNumber++
            numberOfJumpsDone++
        }
    }
    return numberOfJumpsDone
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}

