import Board from '../tictactoe/Board';
import Field from '../tictactoe/Field';
import MoveType from '../tictactoe/MoveType';

export default class GameSaver{

    
    public SaveGame(board : Board):void{
        localStorage.setItem('board', JSON.stringify(board));
        alert('Game saved !');

    }

    public RestoreGame=(): void=>{
        let boardObject = <string>localStorage.getItem('board');
        let boardObj : Board = <Board>JSON.parse(boardObject);

        if(boardObj?.size != null){
            console.log(boardObj);
            let restoredBoard = new Board(boardObj.size,boardObj.winLength,boardObj.withComputer);

            boardObj.fields.forEach(a=>{
                restoredBoard.fields.find(b=>b.column===a.column && b.row===a.row)?.MakeMove(a.move);
            })
            restoredBoard.move = boardObj.move;
        }else{
            alert('Nie można wczytać gry');
        }
    }
        
}   
   