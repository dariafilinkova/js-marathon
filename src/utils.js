/*function random(num) {
    return Math.ceil(Math.random() * num);
}*/
const random = (num) => Math.ceil(Math.random() * num); //вместо function random(num) Это arrow function(стрелочная функция)

/*function random(max,min=0){
    const num=max-min;
    return Math.ceil(Math.random() * num)+min;
}*/
export default random;