import disabled from "../src/disabled";
import turnedOff from "../src/turnOFF";
import {Game}  from "../src/game.model";
import Board from './Board';
import LogGame from "../src/logGame";
import disableOneField from '../src/disableOneField';
import GameSaver from '../src/localStorage';

//@disabled
export class TicTacToe implements Game {
    name: string = "Kółko i krzyżyk";
    // inputSize: HTMLInputElement;
    //sendButton: HTMLElement;
    //infoSize: HTMLElement;
    //infoWinLength: HTMLElement;
    // inputWinLength:HTMLInputElement;
    gameContainer: HTMLDivElement = document.createElement('div');
    //playingWithComputer: HTMLElement;
    //label: HTMLElement;
    //form: HTMLElement;
    disable: boolean;

    createP(text: string):HTMLParagraphElement{
        const p = document.createElement('p');
        p.innerHTML = text;

        return p;
    }

    constructor() {
        const infoSize = this.createP("Enter a size of your board:");
        this.gameContainer.appendChild(infoSize);
        this.gameContainer.id = 'TicTacToeContainer';
        
        const inputSize = document.createElement('input');
        inputSize.setAttribute('type','text');
        inputSize.id = 'BoardSize';
        this.gameContainer.appendChild(inputSize);

        const sendButton = document.createElement('button');
        sendButton.style.display = "block";
        sendButton.innerText = 'Send';

        const infoWinLength = this.createP("Enter the length of winning sequence: ");
        this.gameContainer.appendChild(infoWinLength);

        const inputWinLength = document.createElement('input');
        inputWinLength.setAttribute('type','text');
        inputWinLength.id = 'WinLength';

        const form = document.createElement('form');
        const playingWithComputer = document.createElement('input');
        playingWithComputer.setAttribute('type', 'radio');
        playingWithComputer.id = 'withComputer';

        const label = document.createElement('label');
        label.setAttribute('for','withComputer');
        label.innerText = 'I am playing with computer';
        form.appendChild(playingWithComputer);
        form.appendChild(label);

        this.gameContainer.appendChild(inputWinLength);
        this.gameContainer.appendChild(form);
        this.gameContainer.appendChild(sendButton);

        let restoreBtn = document.createElement('button');
        restoreBtn.innerText='Restore Game';
        restoreBtn.id='restoreBtn';
        this.gameContainer.appendChild(restoreBtn);
        restoreBtn.addEventListener('click', ()=>{
            let sg = new GameSaver();
            sg.RestoreGame();
        })

        sendButton.addEventListener('click',()=>{ 
         
            this.SendData(
                parseInt(inputSize.value),
                parseInt(inputWinLength.value),
                playingWithComputer.checked);
        })
    }

    @disableOneField
    SendData(size:number, winLength:number, withComp:boolean){
        // let inputDataSize  = <HTMLInputElement>document.getElementById("BoardSize");
        // let size = parseInt(inputDataSize.value);
        // let inputDataWinLength = <HTMLInputElement>document.getElementById('WinLength');
        // let winLength = parseInt(inputDataWinLength.value);
        // let inputWithComp = <HTMLInputElement>document.getElementById('withComputer');
        // let withComp = inputWithComp.checked;

        new Board(size,winLength, withComp);
    }

    @turnedOff
    @LogGame
    getGameElement(): HTMLElement {
           return this.gameContainer;
    }
}