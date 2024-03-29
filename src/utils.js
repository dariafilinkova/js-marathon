/*function random(num) {
    return Math.ceil(Math.random() * num);
}*/
//const random = (num) => Math.ceil(Math.random() * num); //вместо function random(num) Это arrow function(стрелочная функция)

function random(max,min=0){
    const num=max-min;
    return Math.ceil(Math.random() * num)+min;
}

const logsDiv = document.querySelector('#logs');

function countBtn(count = 6, el) {
    const text = el.textContent;
    el.textContent = `${text} (${count})`;
    return function () {
        count--;
        if (count === 0) {
            el.disabled = true;
        }
        el.textContent = `${text} (${count})`;
        return count;
    }
};

function generateLog(firstPerson, secondPerson, damage) {
    const { name: firstName, hp: { current, total } } = firstPerson;
    const { name: secondName } = secondPerson;

    const logs = [
        `${firstName} вспомнил что-то важное, но неожиданно ${secondName}, не помня себя от испуга, ударил в предплечье врага.`,
        `${firstName} поперхнулся, и за это ${secondName} с испугу приложил прямой удар коленом в лоб врага.`,
        `${firstName} забылся, но в это время наглый ${secondName}, приняв волевое решение, неслышно подойдя сзади, ударил.`,
        `${firstName} пришел в себя, но неожиданно ${secondName} случайно нанес мощнейший удар.`,
        `${firstName} поперхнулся, но в это время ${secondName} нехотя раздробил кулаком \<вырезанно цензурой\> противника.`,
        `${firstName} удивился, а ${secondName} пошатнувшись влепил подлый удар.`,
        `${firstName} высморкался, но неожиданно ${secondName} провел дробящий удар.`,
        `${firstName} пошатнулся, и внезапно наглый ${secondName} беспричинно ударил в ногу противника.`,
        `${firstName} расстроился, как вдруг, неожиданно ${secondName} случайно влепил стопой в живот соперника.`,
        `${firstName} пытался что-то сказать, но вдруг, неожиданно ${secondName} со скуки, разбил бровь сопернику.`
    ];

    const $paragraph = document.createElement('p');
    $paragraph.textContent = logs[random(logs.length) - 1] + ` -${damage}, [${current}/${total}]`;//перенесоа из const logs(урон и текущую и обычныю жизни)
    logsDiv.insertBefore($paragraph, logsDiv.children[0]);
};

export { random, countBtn, generateLog };

