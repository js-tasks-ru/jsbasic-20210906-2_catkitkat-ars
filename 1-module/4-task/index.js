function checkSpam(str) {
    if (!str) return str;
    let spam = str.toUpperCase()
    if (spam.includes('1XBET')){
        return true;
    } else if (spam.includes('XXX')) {
        return true;
    } else {
        return false;
    }
}
