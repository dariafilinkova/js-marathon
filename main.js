const $btn1 = $getElById('btn-kick1');
const $btn2 = $getElById('btn-kick2');
const $btn3 = $getElById('btn-kick3');

function $getElById(id) {
    return document.getElementById(id);
}

const character = {
    name: 'Pikachu',
    defaultHP: 200,
    damageHP: 200,
    elHP: $getElById('health-character'),
    elProgressbar: $getElById('progressbar-character'),
    changeHP,
    renderHP,
    renderHPLife,
    renderProgressbarHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 200,
    damageHP: 200,
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

/*$btn1.addEventListener('click', function () {
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
})*/

$btn1.addEventListener('click', generateFunctionOfDamage($btn1));


/*$btn2.addEventListener('click', function () {
    console.log('Super hiiit');
    enemy.changeHP(random(10) + 20);
    //console.log('Super Hiiiit');
})*/

$btn2.addEventListener('click', generateFunctionOfDamage($btn2));

/*$btn3.addEventListener('click', function () {
    console.log('Elbow Blow Kick');
    enemy.changeHP(random(12));
    //console.log('Super Hiiiit');
})*/

$btn3.addEventListener('click', generateFunctionOfDamage($btn3));

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
    this.elProgressbar.style.width = this.damageHP * 100 / this.defaultHP + '%';
}

function changeHP(count) {
    this.damageHP -= count;
    const currentHp = this.damageHP;
    const initialHP = this.defaultHP;
    const log = this === enemy ? generateLog(this, character, (count * (-1)), currentHp, initialHP) : generateLog(this, enemy, (count * (-1)), currentHp, initialHP);
    console.log(log);
    printLog(log);

    if (this.damageHP <= 0) {
        this.damageHP = 0;
        alert(' Бедный ' + this.name + ' проиграл бой ( ');
        $btn1.disabled = true;
        $btn2.disabled = true;
        $btn3.disabled = true;
    }

    this.renderHP();
}

function printLog(log) {
    const $paragraph = document.createElement('p');
    $paragraph.innerText = log;
    const $logs = document.querySelector('#logs');
    $logs.insertBefore($paragraph, $logs.children[0])
}

/*function random(num) {
    return Math.ceil(Math.random() * num);
}*/

const random = (num) => Math.ceil(Math.random() * num); //вместо function random(num) Это arrow function(стрелочная функция)

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

function generateFunctionOfDamage($btn) {
    let currentCount = 0;
    if ($btn === $btn1) {

        let maxCount = 10;
        let $counter = $btn.querySelector("small span");
        $counter.innerText = maxCount;
        return function () {
            character.changeHP(random(20));
            enemy.changeHP(random(20));
            currentCount++;
            if (currentCount == maxCount)
                this.disabled = true;
            console.log(`Ты использовал ${this.children[0].innerText} ${currentCount} раз из ${maxCount}`);
            $counter.innerText = maxCount - currentCount;
            console.log('Kick!');
        }
    }
    if ($btn === $btn2) {
        let maxCount = 1;
        let $counter = $btn.querySelector("small span");
        $counter.innerText = maxCount;
        return function () {
            enemy.changeHP(random(10) + 20);
            currentCount++;
            if (currentCount == maxCount)
                this.disabled = true;
            console.log(`Ты использовал ${this.children[0].innerText} ${currentCount} раз из ${maxCount}`);
            $counter.innerText = maxCount - currentCount;
            console.log('Super Hiiiit');
        }

    }
    if ($btn === $btn3) {
        let maxCount = 3;
        let $counter = $btn.querySelector("small span");
        $counter.innerText = maxCount;
        return function () {
            enemy.changeHP(random(12));
            currentCount++;
            if (currentCount == maxCount)
                this.disabled = true;
            console.log(`Ты использовал ${this.children[0].innerText} ${currentCount} раз из ${maxCount}`);
            $counter.innerText = maxCount - currentCount;
            console.log('Elbow Blow');
        }
    }
}

init();
