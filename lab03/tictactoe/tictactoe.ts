import disabled from "../src/disabled";
import turnedOff from "../src/turnOFF";
import {Game}  from "../src/game.model";
import Board from './Board';
import LogGame from "../src/logGame";
//import disableOneField from '../src/disableOneField';

//@disabled
export class TicTacToe implements Game {
    name: string;
    inputSize: HTMLElement;
    sendButton: HTMLElement;
    infoSize: HTMLElement;
    infoWinLength: HTMLElement;
    inputWinLength:HTMLElement;
    gameContainer: HTMLDivElement;
    playingWithComputer: HTMLElement;
    label: HTMLElement;
    form: HTMLElement;
    disable: boolean;

    constructor() {
        this.name = "Kółko i krzyżyk";
        this.gameContainer = document.createElement('div');
        this.gameContainer.id = 'TicTacToeContainer';
        this.infoSize = document.createElement('p');
        this.infoSize.innerHTML = 'Enter a size of your board: ';
        this.gameContainer.appendChild(this.infoSize);
        this.inputSize = document.createElement('input');
        this.inputSize.setAttribute('type','text');
        this.inputSize.id = 'BoardSize';
        this.gameContainer.appendChild(this.inputSize);
        this.sendButton = document.createElement('button');
        this.sendButton.style.display = "block";
        this.sendButton.innerText = 'Send';
        this.infoWinLength = document.createElement('p');
        this.infoWinLength.innerHTML = 'Enter the length of winning sequence: ';
        this.gameContainer.appendChild(this.infoWinLength);
        this.inputWinLength = document.createElement('input');
        this.inputWinLength.setAttribute('type','text');
        this.inputWinLength.id = 'WinLength';
        this.form = document.createElement('form');
        this.playingWithComputer = document.createElement('input');
        this.playingWithComputer.setAttribute('type', 'radio');
        this.playingWithComputer.id = 'withComputer';
        this.label = document.createElement('label');
        this.label.setAttribute('for','withComputer');
        this.label.innerText = 'I am playing with computer';
        this.form.appendChild(this.playingWithComputer);
        this.form.appendChild(this.label);
        this.gameContainer.appendChild(this.inputWinLength);
        this.gameContainer.appendChild(this.form);
        this.gameContainer.appendChild(this.sendButton);

        this.sendButton.addEventListener('click', this.SendData)
        
    }
   
    SendData(){
        let inputDataSize  = <HTMLInputElement>document.getElementById("BoardSize");
        let size = parseInt(inputDataSize.value);
        let inputDataWinLength = <HTMLInputElement>document.getElementById('WinLength');
        let winLength = parseInt(inputDataWinLength.value);
        let inputWithComp = <HTMLInputElement>document.getElementById('withComputer');
        let withComp = inputWithComp.checked;
        new Board(size,winLength, withComp);
    }

    @turnedOff
    @LogGame
    getGameElement(): HTMLElement {
           return this.gameContainer;
    }
}