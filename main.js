const $btn1 = document.getElementById('btn-kick1');
const $btn2 = document.getElementById('btn-kick2');
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

$btn1.addEventListener('click', function () {
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
})


function compareTheNumbers(userNumber, randomNumber, attempt) {
    if ((attempt == 2 || attempt == 3) && userNumber > randomNumber) alert('Перебор.Повторите попытку\n');

    if ((attempt == 2 | attempt == 3) && userNumber < randomNumber) alert('Недобор.Повторите попытку\n');
    if (attempt == 4 && (userNumber > randomNumber || userNumber < randomNumber)) { alert('Вы не угадали число ('); }
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
        if (userNumber == randomNumber) { alert('Вы угадали число!\nВы нанесли супер удар!'); changeHP(random(20), enemy); break; }
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
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert(' Бедный ' + person.name + ' проиграл бой ( ');
        $btn1.disabled = true;
        $btn2.disabled = true;
    }
    else {
        person.damageHP -= count;
    }
    renderHP(person);

}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();
