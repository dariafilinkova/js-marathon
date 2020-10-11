import { random, generateLog } from './utils.js';
import game from './main.js';
class Selectors {
  constructor(name) {
    this.elHp = document.querySelector(`#health-${name}`);
    this.elProgressbar = document.querySelector(`#progressbar-${name}`);
    this.elName = document.querySelector(`#name-${name}`);
    this.elImg = document.querySelector(`.img-${name}`);
    this.lvl = document.querySelector(`.${name} .lvl`);
    // this.elHP = document.getElementById(`health-${name}`);
    // this.elProgressbar = document.getElementById(`progressbar-${name}`);
  };
}

class Pokemon extends Selectors {
  constructor({ name, hp, type, selectors, attacks = [], img }) {
    super(selectors);

    this.name = name;
    this.hp = {
      current: hp,
      total: hp,
    };
    this.type = type;
    this.attacks = attacks;
    this.selectors = selectors;
    this.elImg.src = img;
    this.elName.textContent = name;
    this.renderHP();
  }

  renderHP = () => {
    /* const { elHP, hp: { current, total }, } = this;
     elHP.innerText = current + " / " + total;
     this.renderProgressbarHP();*/
    const { elHp, elProgressbar, hp: { current, total } } = this;

    elHp.innerText = current + ' / ' + total;
    elProgressbar.style.width = current * 100 / total + '%';
  };

  /*renderProgressbarHP = () => {
    this.elProgressbar.style.width = this.hp.current * 100 / this.hp.total + '%';
  };*/

  /*changeHP = (count, cb) => {
    let isDisabled = false;
    this.hp.current -= count;
    if (this.hp.current <= count) {
      this.hp.current = 0;
      alert("Бедный " + this.name + " проиграл бой!");
      isDisabled = true;
      //$btn1.disabled = true;
      //$btn2.disabled = true;
      //$btn3.disabled = true;
    }
    this.renderHP();
    cb && cb(count, isDisabled);
  };*/

  bump = (adversary, btn) => {
    const { hp, renderHp } = adversary;
    const { maxDamage, minDamage } = btn;
    const count = random(maxDamage, minDamage);
    hp.current -= count;

    if (hp.current <= 0) {
      hp.current = 0;
      if (adversary.selectors === 'player2') {
        game.changeAdversary();
        let newLvl = Number(this.lvl.textContent.slice(-1));
        newLvl++;
        this.lvl.textContent = 'Lv. ' + newLvl;
        renderHp();
        generateLog(this, adversary, count);
        return true;
      }
      else {
        game.gameOver();
        renderHp();
        generateLog(this, adversary, count);
        return false;
      }
    }

    //renderHp();//тут что-то не так,фун-ция не вызвается
    generateLog(this, adversary, count);
  };
}

export default Pokemon;