function palindromes(word) { 
    return word.toLowerCase().replace(/[^a-z0-9]/g, '') === word.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('');
}
// Do not edit below this line
module.exports = palindromes;
