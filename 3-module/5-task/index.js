function getMinMax(str) {
  const splitStr = str.split(' ');
  const filteredStr = splitStr.filter(item => item > 0 || item < 0)
  filteredStr.sort((a, b) => b - a) 
  const max = filteredStr[0]
  filteredStr.sort((a, b) => a - b)
  const min = filteredStr[0]
  const getMinMax = {min, max} 
  return getMinMax;
}
