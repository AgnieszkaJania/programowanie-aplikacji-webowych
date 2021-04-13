import {Game}  from "../src/game.model";
import Board from './Board';


export class TicTacToe implements Game {
    name: string;
    inputSize: HTMLElement;
    sendButton: HTMLElement;
    infoSize: HTMLElement;
    infoWinLength: HTMLElement;
    inputWinLength:HTMLElement;
    gameContainer: HTMLDivElement;

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
        this.gameContainer.appendChild(this.inputWinLength);
        this.gameContainer.appendChild(this.sendButton);

        this.sendButton.addEventListener('click', this.SendData)
        
    }
    SendData(){
        let inputDataSize  = <HTMLInputElement>document.getElementById("BoardSize");
        let size = parseInt(inputDataSize.value);
        let inputDataWinLength = <HTMLInputElement>document.getElementById('WinLength');
        let winLength = parseInt(inputDataWinLength.value);
        new Board(size,winLength, true);
    }
    getGameElement(): HTMLElement {
        console.log('aaaaaa');
        return this.gameContainer;
    }
}