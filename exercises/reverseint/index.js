// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // My first solution
    // var newN = n.toString().split('').reverse();
    // if(newN[newN.length-1] === "-"){
    //     newN.unshift('-');
    //     newN.pop();
    // }
    // return Number(newN.join(''));

    let reversed = n.toString().split('').reverse().join('')
    return Math.sign(n) * parseInt(reversed);
    
}

module.exports = reverseInt;
