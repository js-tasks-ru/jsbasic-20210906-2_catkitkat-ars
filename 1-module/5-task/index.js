function truncate(str, maxlength) {
  maxlength = str.length;
    if (maxlength > 20) {
        return str.slice(0, 19) + '...';
    } else {
        return str;
    }
}
