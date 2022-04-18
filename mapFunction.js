console.log('Map function')

// create a function to calculate area from radius array and create area array
const area = (radius) => {
    return Math.PI * radius* radius;
}
const radiusArr = [2,3,4];
const areaArr = radiusArr.map(area);
console.log(areaArr);