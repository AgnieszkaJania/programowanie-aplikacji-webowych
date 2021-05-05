import {Game}  from "../src/game.model";
import disabled from '../src/disabled';
import turnedOff from "../src/turnOFF";
import LogGame from "../src/logGame";

//@disabled
export class BattleShips implements Game {
    name: string;
    disable:boolean;

    constructor() {
        this.name = "Statki"
    }

    @turnedOff
    @LogGame
    getGameElement(): HTMLElement {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello BattleShips"));
        return div;
    }

}