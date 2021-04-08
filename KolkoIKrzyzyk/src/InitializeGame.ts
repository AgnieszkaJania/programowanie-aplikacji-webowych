import Board from './Board';

class InitializeGame{
    input: HTMLElement;
    sendButton: HTMLElement;
    info: HTMLElement;
    constructor(){
        this.info = document.createElement('p');
        this.info.innerHTML = 'Enter a size of your board';
        document.body.appendChild(this.info);
        this.input = document.createElement('input');
        this.input.setAttribute('type','text');
        this.input.id = 'BoardSize';
        document.body.appendChild(this.input);
        this.sendButton = document.createElement('button');
        this.sendButton.innerText = 'Send';
        document.body.appendChild(this.sendButton);
        this.sendButton.addEventListener('click', this.SendData)
    }
    SendData(){
        let inputData  = <HTMLInputElement>document.getElementById("BoardSize");
        let size = parseInt(inputData.value);

        new Board(size,3);
    }

}
export default InitializeGame;