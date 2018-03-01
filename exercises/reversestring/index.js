// Given a string, return a new string with the reversed
// order of characters


function reverse(str) {
    // return str.split('').reverse().join('');


    // this is a new empty string that we are going to assemble over time, as we iterate through the input string.
    // let revStr ='';
    // for (let letter of str) {
    //   revStr = letter + revStr;
    // }
    // return revStr;


    // return str.split('').reduce((revStr, letter)=>{
    //   return letter + revStr;
    // }, '');

    debugger; // flip over to console, navigate to this direcotry,  and write "node inspect index.js" ,
    // we get firt infor that debugger is ready, to continue write "cont" or "c" and hit enter, execution will stop on "debugger;"
    // to check on variable etc. write "repl" - which change console into javascript console like in Chrome.
    //  To continue debugging leave "repl" mode, and write again "c" and hit enter.

    return str.split('').reduce((revStr, letter) => letter + revStr, '');

}


reverse('apple') === 'leppa'
reverse('hello') === 'olleh'
reverse('Greetings!') === '!sgniteerG'


module.exports = reverse;
