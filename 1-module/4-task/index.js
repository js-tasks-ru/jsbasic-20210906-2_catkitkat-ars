function checkSpam(str) {
    if (!str) return str;
    let spam = str.toUpperCase()
    return spam.includes('1XBET') || spam.includes('XXX');
}

