import Pokemon from './pokemon.js';
import { pokemons } from './pokemons.js';
import { random, countBtn } from './utils.js';

class Selectors {
    constructor() {
        this.playground = document.querySelector('.playground');
        this.logDiv = document.querySelector('#logs');
    };
}

class Game extends Selectors {
    constructor() {
        super();

    };

    begin = () => {
        this.playground.textContent = '';
        this.logDiv.textContent = '';
        pokemons.forEach(item => {
            const { name, img } = item;
            const card = document.createElement('div');
            card.style.cursor = 'pointer';
            card.className = 'pokemon';
            card.innerHTML = `<img src="${img}" class="sprite" /> 
                                  <div class="details">
                                     <h2 class="name">${name}</h2>
                                  </div>`;
            card.addEventListener('click', () => {
                this.start(name);
            });
            this.playground.appendChild(card);
        });

    };

    start = (name) => {
        this.playground.textContent = '';
        let player__1 = pokemons.find(item => item.name === name);
        let player__2 = pokemons[random(pokemons.length - 1)];

        this.playground.appendChild(this.card('player1'));
        this.playground.appendChild(this.card('control'));
        this.playground.appendChild(this.card('player2'));
        this.control = document.querySelector('.control');

        this.player1 = this.createPlayer(player__1, 'player1');
        this.player2 = this.createPlayer(player__2, 'player2');

        this.attacks();
    };

    gameOver = () => {
        const allButtons = document.querySelectorAll('.control .button');
        allButtons.forEach(item => item.remove());
        const newBtn = document.createElement('div');
        newBtn.className = 'button';
        newBtn.innerHTML = `Игра оконченна<br>Нажмите,чтобы сыграть заново`;
        this.control.appendChild(newBtn);
        newBtn.addEventListener('click', this.begin);
    };

    card = (player) => {
        const card = document.createElement('div');

        if (player === 'control') {
            card.className = 'control';
            return card;
        };

        card.className = `pokemon ${player}`;
        card.innerHTML = `
            <span class="lvl">Lv. 1</span>
            <img src="http://sify4321.000webhostapp.com/charmander.png" class="sprite img-${player}" />
            <div class="details">
                <h2 class="name" id="name-${player}">Charmander</h2>
                <div class="hp">
                    <div class="bar">
                        <div class="health" id="progressbar-${player}" style="width: 100%"></div>
                    </div>
                    <span class="text" id="health-${player}">274 / 274</span>
                </div>
            </div>
        `;
        return card;
    };

    attacks = () => {
        this.player1.attacks.forEach(item => {
            const btn = document.createElement('button');
            btn.classList.add('button');
            btn.textContent = item.name;
            const btnCount = countBtn(item.maxCount, btn);
            btn.addEventListener('click', () => {
                btnCount();
                const cb = () => { this.player2.bump(this.player1, this.player2.attacks[0]) };
                !this.player1.bump(this.player2, item) && cb();
                this.player2.renderHp();
            });
            this.control.appendChild(btn);
        });
    };

    changeAdversary = () => {
        let player__2 = pokemons[random(pokemons.length - 1)];
        this.player2 = this.createPlayer(player__2, 'player2');
    };

    createPlayer = (who, select) => {
        return new Pokemon({
            ...who,
            selectors: select,
        })
    };


};

export default Game;