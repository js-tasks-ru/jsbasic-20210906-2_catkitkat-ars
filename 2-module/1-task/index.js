function sumSalary(salaries) {
  let sum = 0;
  metka:
  for (let key in salaries){
    if (typeof salaries[key] == 'number') {
      if (isFinite(salaries[key])) {
        sum += salaries[key];
      } else {
        continue metka;
      } 
    } 
  } return sum;
}
