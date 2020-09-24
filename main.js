const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
let choice =prompt('Как думаете, в какой строчке больше букв а .\n В 1-ой: мама мыла раму или во 2-ой: собака друг человека ?',1);
alert(`Ваш выбор : ${choice}`);

function getRow(firstRow, secondRow) {
    let counter1 = 0;
    let counter2 = 0;
for (let i=0;i<firstRow.length;i++)
{
    
    if (firstRow.charAt(i)==="а" || firstRow.charAt(i)==="a")
    counter1 ++ ;

}
for (let i=0;i<secondRow.length;i++)
{
    
    if (secondRow.charAt(i)==="а" || secondRow.charAt(i)==="a")
    counter2 ++;
}

if (counter1 > counter2){
    alert(`Правильный ответ : в 1-ой : ${firstRow}`);
    return firstRow;

}
else {
    alert(`Правильный ответ : во 2-ой : ${secondRow}`);
    return secondRow;
   
}
}

console.log(getRow(firstRow, secondRow));

let yourLetter =prompt('Введите букву, которую хотите подсчитать в строках','я');

function getRow_withUserLetter(firstRow, secondRow,yourLetter) {
    let counter1 = 0;
    let counter2 = 0;
for (let i=0;i<firstRow.length;i++)
{
    if (firstRow.charAt(i)===yourLetter)
        counter1 ++ ;
}
for (let i=0;i<secondRow.length;i++)
{
   if (secondRow.charAt(i)===yourLetter)
       counter2 ++;   
}

if(counter1===0 && counter2===0 ){
     alert("Такой буквы нет ни в одной строчке");
     return"Такой буквы нет ни в одной строчке" ;
}
else if (counter1 > counter2){  
    alert (firstRow);
    return firstRow;
} 
else if (counter1 < counter2)
{
    alert (secondRow);
    return secondRow;
}
else if(counter1===counter2){
    alert("Количество заданной буквы одинаково в обоих строчках");
    return "Количество заданной буквы одинаково в обоих строчках" ;
}
}
console.log(getRow_withUserLetter(firstRow, secondRow,yourLetter));