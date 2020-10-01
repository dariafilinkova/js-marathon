const $btn1 = $getElById('btn-kick1');
const $btn2 = $getElById('btn-kick2');
function $getElById(id) {
    return document.getElementById(id);
}
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElById('health-character'),
    elProgressbar: $getElById('progressbar-character'),
    changeHP,
    renderHP,
    renderHPLife,
    renderProgressbarHP,
}



const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElById('health-enemy'),
    elProgressbar: $getElById('progressbar-enemy'),
    changeHP,
    renderHP,
    renderHPLife,
    renderProgressbarHP,
}


//Деструктуризация 
const { name: nameCharacter } = character;
const { name: nameEnemy } = enemy;

$btn1.addEventListener('click', function () {
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
})


function compareTheNumbers(userNumber, randomNumber, attempt) {
    if ((attempt == 2 || attempt == 3) && userNumber > randomNumber) {
        alert('Перебор.Повторите попытку\n');
    }

    if ((attempt == 2 | attempt == 3) && userNumber < randomNumber) {
        alert('Недобор.Повторите попытку\n');
    }
    if (attempt == 4 && (userNumber > randomNumber || userNumber < randomNumber)) {
        alert('Вы не угадали число (');
    }
}

function guessTheNumber() {
    let randomNumber = (random(10));
    console.log(randomNumber);
    let count = 0;
    let attempt = 1;
    while (count < 3) {

        let userNumber = prompt(`Введите число от 1 до 10.\n Попытка № ${attempt} `, 1);
        attempt++;
        console.log(userNumber);
        if (userNumber == randomNumber) {
            alert('Вы угадали число!\nВы нанесли супер удар!');
            enemy.changeHP(random(20));
            break;
        }
        else
            compareTheNumbers(userNumber, randomNumber, attempt);
        count++;
    }



}

$btn2.addEventListener('click', function () {
    console.log('Super hiiit');
    alert('Чтобы воспользоваться супер ударом, угадайте число от 1 до 10');
    guessTheNumber();
    console.log('Super Hiiiit');
})

function init() {
    console.log('Start Game');
}

function renderHP() {

    this.renderHPLife();
    this.renderProgressbarHP();
}


function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count) {
    this.damageHP -= count;
    const currentHp = this.damageHP;
    const initialHP = this.defaultHP;
    const log = this === enemy ? generateLog(this, character, (count * (-1)), currentHp, initialHP) : generateLog(this, enemy, (count * (-1)), currentHp, initialHP);

    console.log(log);
    const $logs=document.querySelector('#logs');
    const $p = document.createElement('p');
    $p.innerText=log;
   
    $logs.insertBefore($p,logs.children[0]);
    if (this.damageHP <= 0) {
        this.damageHP = 0;
        alert(' Бедный ' + this.name + ' проиграл бой ( ');
        $btn1.disabled = true;
        $btn2.disabled = true;
    }

    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function generateLog(firstPerson, secondPerson, count, currentHp, initialHP) {
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${count},[${currentHp} / ${initialHP}] `,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага.${count},[${currentHp} / ${initialHP}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. ${count},[${currentHp} / ${initialHP}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. ${count},[${currentHp} / ${initialHP}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${count} ,[${currentHp} / ${initialHP}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. ${count},[${currentHp} / ${initialHP}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. ${count} , [${currentHp} / ${initialHP}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника ${count},[${currentHp} / ${initialHP}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. ${count},[${currentHp} / ${initialHP}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. ${count},[${currentHp} / ${initialHP}]`
    ];
    return logs[random(logs.length) - 1];
}



function showActions(){
    const logs=document.querySelector('#logs');
    const $p = document.createElement('p');
    $p.innerText=log;
   
    $logs.insertBefore($p,logs.children[0]);
}
init();
