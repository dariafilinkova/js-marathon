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

init();
