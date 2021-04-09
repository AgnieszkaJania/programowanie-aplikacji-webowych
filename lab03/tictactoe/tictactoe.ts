import {Game}  from "../src/game.model";
import Board from './Board';


export class TicTacToe implements Game {
    name: string;
    input: HTMLElement;
    sendButton: HTMLElement;
    info: HTMLElement;
    gameContainer: HTMLDivElement;

    constructor() {
        this.name = "Kółko i krzyżyk";
        this.gameContainer = document.createElement('div');
        this.gameContainer.id = 'TicTacToeContainer';
        this.info = document.createElement('p');
        this.info.innerHTML = 'Enter a size of your board';
        this.gameContainer.appendChild(this.info);
        this.input = document.createElement('input');
        this.input.setAttribute('type','text');
        this.input.id = 'BoardSize';
        this.gameContainer.appendChild(this.input);
        this.sendButton = document.createElement('button');
        this.sendButton.innerText = 'Send';
        this.gameContainer.appendChild(this.sendButton);
        this.sendButton.addEventListener('click', this.SendData)
        
    }
    SendData(){
        let inputData  = <HTMLInputElement>document.getElementById("BoardSize");
        let size = parseInt(inputData.value);
        new Board(size,3,);
    }
    getGameElement(): HTMLElement {
        console.log('aaaaaa');
        return this.gameContainer;
    }
}