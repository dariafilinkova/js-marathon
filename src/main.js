/*import Pokemon from "./pokemon.js";
import random from "./utils.js";
import { pokemons } from './pokemons.js'
const pikachu = pokemons.find(item => item.name === 'Pickachu');
console.log(pikachu);
const player1 = new Pokemon({
    ...pikachu,
    selectors: "player1",
});

const player2 = new Pokemon({
    name: "Charmander",
    type: "fire",
    hp: 200,
    selectors: "player2",
});
function $getElById(id) {
    return document.getElementById(id);
}

const $control = document.querySelector('.control');

player1.attacks.forEach(item => {
    console.log(item);
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = item.name;
    const btnCount=countBtn(item.maxCount,$btn);
    $control.appendChild($btn);
    $btn.addEventListener('click', () => {
        console.log('Click button', $btn1, innerText);
        btnCount();
    })
})

/*const $btn1 = $getElById('btn-thunder-jolt');
const $btn2 = $getElById('btn-super-hit');
const $btn3 = $getElById('btn-elbow-blow');*/


/*function countButton(count = 6, el) {
    const innerText = el.innerText;
    el.innerText = `${innerText} (${count})`;
    return function () {
        count--;

        if (count === 0) {
            el.disabled = true;
        }
        el.innerText = `${innerText} (${count})`;
        return count;

    }
}
/*const btnCountJolt = countButton(25, $btn1);
$btn1.addEventListener('click', function () {
    console.log('Kick');
    btnCountJolt();
    player1.changeHP(random(20), function (count) {
        generateLog(player1, player2, count);
    });
    player2.changeHP(random(20), function (count) {
        generateLog(player2, player1, count);
    });
})

const btnCountSuperHit = countButton(1, $btn2);
$btn2.addEventListener('click', function () {
    console.log('Super hiiit');
    btnCountSuperHit();
    player2.changeHP(random(10) + 20);
    //enemy.changeHP(random(10) + 20);
})

const btnCountElbow = countButton(3, $btn3);
$btn3.addEventListener('click', function () {
    console.log('Elbow Blow Kick');
    btnCountElbow();
    //enemy.changeHP(random(12));
    player2.changeHP(random(12));
})*/


/*function changeHP(count) {
    this.hp.total -= count;
    const currentHp = this.hp.total;
    const initialHP = this.hp.current;
    const log = this === enemy ? generateLog(this, character, (count * (-1)), currentHp, initialHP) : generateLog(this, enemy, (count * (-1)), currentHp, initialHP);
    console.log(log);
    printLog(log);

    if (this.hp.total <= 0) {
        this.hp.total = 0;
        alert(' Бедный ' + this.name + ' проиграл бой ( ');
        $btn1.disabled = true;
        $btn2.disabled = true;
        $btn3.disabled = true;
    }

    this.renderHP();
}*/

/*function printLog(log) {
    const $paragraph = document.createElement('p');
    $paragraph.innerText = log;
    const $logs = document.querySelector('#logs');
    $logs.insertBefore($paragraph, $logs.children[0])
}*/


/*function generateLog(firstPerson, secondPerson, count) {
    count *= (-1);
    const { name, hp: { current, total } } = firstPerson;
    const { name: nameOfEnemy } = secondPerson;
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${nameOfEnemy}, не помня себя от испуга, ударил в предплечье врага. ${count},[${current} / ${total}] `,
        `${name} поперхнулся, и за это ${nameOfEnemy} с испугу приложил прямой удар коленом в лоб врага.${count},[${current} / ${total}]`,
        `${name} забылся, но в это время наглый ${nameOfEnemy}, приняв волевое решение, неслышно подойдя сзади, ударил. ${count},[${current} / ${total}]`,
        `${name} пришел в себя, но неожиданно ${nameOfEnemy} случайно нанес мощнейший удар. ${count},[${current} / ${total}]`,
        `${name} поперхнулся, но в это время ${nameOfEnemy} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${count} ,[${current} / ${total}]`,
        `${name} удивился, а ${nameOfEnemy} пошатнувшись влепил подлый удар. ${count},[${current} / ${total}]`,
        `${name} высморкался, но неожиданно ${nameOfEnemy} провел дробящий удар. ${count} , [${current} / ${total}]`,
        `${name} пошатнулся, и внезапно наглый ${nameOfEnemy} беспричинно ударил в ногу противника ${count},[${current} / ${total}]`,
        `${name} расстроился, как вдруг, неожиданно ${nameOfEnemy} случайно влепил стопой в живот соперника. ${count},[${current} / ${total}]`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${nameOfEnemy} со скуки, разбил бровь сопернику. ${count},[${current} / ${total}]`
    ];
    //const log = logs[random(logs.length) - 1];
    //const $p = document.createElement('p');
    //$p.innerHTML = log;
    //elLog.insertBefore($p, elLog.children[0]);
    const $paragraph = document.createElement('p');
    $paragraph.innerText = logs;
    const $logs = document.querySelector('#logs');
    $logs.insertBefore($paragraph, $logs.children[0])
    return logs[random(logs.length) - 1];
}

*/

import Game from './game.js';

const game = new Game;
game.begin();

export default game;

init();
function init() {
    console.log('Start Game!');
}