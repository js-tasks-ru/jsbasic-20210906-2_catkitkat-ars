function checkSpam(str) {
  let spam = str.toUpperCase()
    if (spam.includes('1XBET')){
        return false;
    } else if (spam.includes('XXX')) {
        return false;
    } else {
        return true;
    }
}
