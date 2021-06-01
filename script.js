function palindrome(str) {
    var alphaNum = /[a-z0-9]/ig;
    str = str.match(alphaNum);
    str = str.join("");
    var check = true;
    str = str.toLowerCase();
    let i = 0;
    for (let j = (str.length - 1); j >= 0; j--) {
        if (str[i] === str[j]) {
            check = true;
            i++;
        } else {
            return false;
        }
    }
    return check;
}


palindrome("eye");